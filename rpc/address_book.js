const shared = __shared("address_book");
const validate = __lib("validator").validate("address_book");

const _ = require("ramda");
const pickby = _.pick(["id", "name", "phone_number", "created_at", "updated_at"]);

module.exports.detail = function({phone_number}) {
    return validate("detail", {phone_number})
        .then(() => shared.detail({phone_number}))
        .then((sales) => pickby(sales.get()));
};

