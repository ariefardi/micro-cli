const {Op} = require("sequelize");

const ExampleModel = __model.mysql("example")
const CodeError = __lib("code_error")

const list = module.exports.list = function(pages) {
    let {page, rows, keyword} = pages;
    const searchCriteria = {
        attributes: ["id", "example"]
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

    return ExampleModel.findAndCountAll(searchCriteria);
};

const detail = module.exports.detail = function({id}) {
    let searchCriteria = {id};

    return ExampleModel.findOne({where: searchCriteria})
        .then((result) => {
            if(result === null) {
                throw new CodeError("Address Book tidak ditemukan", 404, "err_not_found");
            }

            return result;
        });
};

