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

module.exports.create = {
    name: [
        {type: "string", min: 3, required: true, max: 30, message: "panjang name minimal 3 dan maksimal 30 karakter"},
        {pattern: /^[a-z .]$/i, message: "name hanya boleh terdiri dari huruf, spasi dan titik"}
    ],
    phone_number: [
        {type: "string", min: 10, max: 15, required: true, message: "nomor hp harus terdiri dari 10-15 karakter"},
        {pattern: /^[+](62)\d{9,12}$/i, message: "nomor hp tidak valid"}
    ]
}

module.exports.update = {
    id: [
        {validator: integer({min: 1, message: "id tidak valid"})}
    ],
    name: [
        {type: "string", min: 3, required: true, max: 30, message: "panjang name minimal 3 dan maksimal 30 karakter"},
        {pattern: /^[a-z .]$/i, message: "name hanya boleh terdiri dari huruf, spasi dan titik"}
    ],
    phone_number: [
        {type: "string", min: 10, max: 15, required: true, message: "nomor hp harus terdiri dari 10-15 karakter"},
        {pattern: /^[+](62)\d{9,12}$/i, message: "nomor hp tidak valid"}
    ]
}

module.exports.remove = {
    id: [
        {validator: integer({min: 1, message: "id tidak valid"})}
    ]
}


