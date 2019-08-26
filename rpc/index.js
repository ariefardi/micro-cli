const Service = require("qgrail-broker").Service;
const Example = __shared("example");

const ExampleService = new Service(process.env.SERVICE_HOST, {
    log: (type, data) => {
        console.log(type, ": ", data);
    }
});

ExampleService.func("example/detail", Example.detail);

ExampleService.listen();


