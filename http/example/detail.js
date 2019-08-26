const shared = __shared("example");
const validate = __lib("validator").validate("example");

const _ = require("ramda");
const pickby = _.pick(["id", "name", "phone_number", "created_at", "updated_at"]);

module.exports.list = function(req, res) {
    return validate("list", req.query)
        .then(() => shared.list(req.query))
        .then((payload) => res.success({payload}))
        .catch(res.error);
};

module.exports.detail = function(req, res) {
    const params = {
        id: req.params.id
    };
    return validate("detail", params)
        .then(() => shared.detail(params))
        .then((payload) => res.success({payload: pickby(payload)}))
        .catch(res.error);
};



