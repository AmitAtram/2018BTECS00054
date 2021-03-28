const https = require ('https')
const port = 1129

const server = https.createServer(function(req,res)
{
	res.write('hello Node')
	res.end()
})

server.listen(port,function(error)
{
	if(error){
		console.log('Something went wrong', error)
	}else{
		console.log('Server is listening on port:' + port)
	}
})