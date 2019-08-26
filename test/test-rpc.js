require("dotenv").config();
const Client = require("qgrail-broker").Client;
const ExampleClient = new Client(process.env.BROKER_HOST, "example");

ExampleClient.invoke("example/detail", {id: 1})
    .then((result) => {
        console.log("RESULT: ", result);
        process.exit(0);
    });


