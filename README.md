# Instruction

## Install all depedency

```npm install```

## Setting .env

```javascript
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_PORT=3306
DB_NAME=my_address_book

DB_CON_MAX=10
DB_CON_MIN=0
DB_CON_TIMEOUT=30000
DB_CON_ALIVE=10000

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
# REDIS_PASS=

SERVICE_HOST=tcp://127.0.0.1:12001

BROKER_HOST=tcp://127.0.0.1:12000

HTTP_PORT=12100
```

run ```test/test-broker.js``` to be broker.

run sample

```node index.js```

run ```test/test-rpc.js``` to test rpc


