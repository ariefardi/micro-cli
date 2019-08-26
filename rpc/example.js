const shared = __shared("example");
const validate = __lib("validator").validate("example");

const _ = require("ramda");
const pickby = _.pick(["id", "example"]);

module.exports.detail = function({phone_number}) {
    return validate("detail", {phone_number})
        .then(() => shared.detail({phone_number}))
        .then((sales) => pickby(sales.get()));
};

