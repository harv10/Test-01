const connect = require('connect');
const url = require('url');

function calculate(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const method = parsedUrl.query.method;
    const x = parseFloat(parsedUrl.query.x);
    const y = parseFloat(parsedUrl.query.y);

    let result;

    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            res.end('Invalid method. Supported methods are: add, subtract, multiply, divide.');
            return;
    }

    res.end(`${x} ${method} ${y} = ${result}`);
}
const app = connect();
app.use('/lab2', calculate);
app.listen(3000);