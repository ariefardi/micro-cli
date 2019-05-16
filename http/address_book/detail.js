const shared = __shared("address_book");
const validate = __lib("validator").validate("address_book");

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

module.exports.create = function(req, res) {
    const params = req.body;
    return validate("create", params)
        .then(() => shared.create(params))
        .then((payload) => res.success({payload: pickby(payload)}))
        .catch(res.error);
};

module.exports.update = function(req, res) {
    const params = {
        id: req.params.id,
        name: req.body.name,
        phone_number: req.body.phone_number
    };
    return validate("update", params)
        .then(() => shared.update(params))
        .then((payload) => res.success({payload: pickby(payload)}))
        .catch(res.error);
};

module.exports.remove = function(req, res) {
    const params = {
        id: req.params.id
    };
    return validate("remove", params)
        .then(() => shared.remove(params))
        .then((payload) => res.success({payload: pickby(payload)}))
        .catch(res.error);
};

