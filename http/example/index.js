const example = require("express").Router();
const ExampleBook = require(`${__dirname}/detail`);

example.get("/", ExampleBook.list);

module.exports = example;
