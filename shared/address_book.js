const {Op} = require("sequelize");

const AddressBookModel = __model.mysql("address_book")
const CodeError = __lib("code_error")

const list = module.exports.list = function(pages) {
    let {page, rows, keyword} = pages;
    const searchCriteria = {
        attributes: ["id", "name", "phone_number", "created_at", "updated_at"]
    };

    if(keyword) {
        searchCriteria.where = {search: {[Op.like]: "%" + keyword + "%"}};
    }
    if(page !== undefined) {
        page = parseInt(page)
        if (rows === undefined) {
            rows = 100;
        }
        else {
            rows = parseInt(rows);
        }
        searchCriteria.offset = (page - 1) * rows;
        searchCriteria.limit = rows;
    }

    searchCriteria.order = [
        ["id", "asc"]
    ];

    return AddressBookModel.findAndCountAll(searchCriteria);
};

const detail = module.exports.detail = function({id}) {
    let searchCriteria = {id};

    return AddressBookModel.findOne({where: searchCriteria})
        .then((result) => {
            if(result === null) {
                throw new CodeError("Address Book tidak ditemukan", 404, "err_not_found");
            }

            return result;
        });
};

const create = module.exports.create = function({name, phone_number}) {
    return AddressBookModel.create({
        name, phone_number
    })
};

const update = module.exports.update = function({id, name, phone_number}) {
    return detail({id})
        .then((result) => {
            result.name = name
            result.phone_number = phone_number

            return result.save()
        })
};

const remove = module.exports.remove = function({id}) {
    return detail({id})
        .then((result) => {
            return result.destroy()
        })
};

