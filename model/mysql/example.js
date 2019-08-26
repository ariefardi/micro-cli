const moment = require("moment");

const generateSearch = function({name, phone_number}) {
    return name.trim() + " " + phone_number.trim();
}

module.exports = function($, DataTypes) {
    const AddressBook = $.define('example', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        example: {
            type: DataTypes.STRING(30),
            notNull: false
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
        tableName: "example",
        hooks: {
            beforeCreate(example, options) {
                example.created_at = moment().unix()
                example.updated_at = moment().unix()
            },
            beforeUpdate(example, options) {
                example.updated_at = moment().unix()
            }
        }
    });

    return AddressBook
}
