const fastify = require('fastify')()
const setUpServer = require("./set-up-server") 

fastify.post("/consulta", async (req) => {});

fastify.register(setUpServer);

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})