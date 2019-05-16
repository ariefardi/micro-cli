const moment = require("moment");

const generateSearch = function({name, phone_number}) {
    return name.trim() + " " + phone_number.trim();
}

module.exports = function($, DataTypes) {
    const AddressBook = $.define('address_book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(30),
            notNull: false
        },
        phone_number: {
            type: DataTypes.STRING(16),
            notNull: false
        },
        search: {
            type: DataTypes.STRING(255)
        },
        created_at: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        updated_at: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: "address_book",
        indexes: [
            {
                fields: ["name"]
            },
            {
                unique: true,
                fields: ["phone_number"]
            },
            {
                fields: ["search"]
            }
        ],
        hooks: {
            beforeCreate(address_book, options) {
                address_book.created_at = moment().unix()
                address_book.updated_at = moment().unix()
                address_book.search = generateSearch(address_book)
            },
            beforeUpdate(address_book, options) {
                address_book.updated_at = moment().unix()
                address_book.search = generateSearch(address_book)
            }
        }
    });

    return AddressBook
}
