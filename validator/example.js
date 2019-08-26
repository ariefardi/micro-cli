const {integer} = __lib("validator")

module.exports.list = {
    page: [
        {validator: integer({min: 1, message:"page harus integer >= 1"})},
    ],
    rows: [
        {validator: integer({min: 1, message:"rows harus integer >= 1"})},
    ],
    keyword: [
        {type: "string", min: 3, message: "panjang keyword minimal 3 karakter"}
    ]
}

module.exports.detail = {
    id: [
        {validator: integer({min: 1, message: "id tidak valid"})}
    ]
}


