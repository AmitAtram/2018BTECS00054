const http = require('http')
const date = require('./datetimeModule')

const hostname = '127.0.0.1'
const port='1140'

const server= http.createServer((req,res) => {
	res.writeHead(200,{'Content-Type' : 'text/html'})
	res.write("<h1> Current Running Time is :</h1>" + date.myDateTime())
	
	res.end('Succed\n')
})

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`)
});