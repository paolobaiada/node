import { createServer } from "node:http";
const server = createServer((request,response) => {
    response.statusCode= 200;
    response.setHeader('Content-Type','text/html');
    response.end("<h1>Hi how are you</h1>")

})
server.listen(3000,() => {
    console.log('Server running at http://localhost:3000')
})