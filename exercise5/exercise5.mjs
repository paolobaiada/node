import { createServer } from "node:http";
const server = createServer((request,response) => {
    response.statusCode= 200;
    response.setHeader('Content-Type','application/json');
    const json = JSON.stringify({location:'Mars'})
    response.end(json)

})
server.listen(3000,() => {
    console.log('Server running at http://localhost:3000')
})