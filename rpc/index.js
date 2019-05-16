const Service = require("qgrail-broker").Service;
const AddressBookService = new Service(process.env.SERVICE_HOST, {
    log: (type, data) => {
        console.log(type, ": ", data);
    }
});

const AddressBook = __shared("address_book");
AddressBookService.func("address_book/detail", AddressBook.detail);

AddressBookService.listen();


