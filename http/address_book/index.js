const address_book = require("express").Router();
const AddressBook = require(`${__dirname}/detail`);

address_book.get("/", AddressBook.list);
address_book.get("/:id", AddressBook.detail);
address_book.post("/:id", AddressBook.update);
address_book.put("/", AddressBook.create);
address_book.delete("/:id", AddressBook.remove);

module.exports = address_book;