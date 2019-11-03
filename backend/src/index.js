const fastify = require('fastify')()
const setUpServer = require("./set-up-server") 
const {db} = require("./postgres");

fastify.post("/consulta", async (req) => {
  return db.query(req.body.query);
});

fastify.register(setUpServer);

fastify.listen(3001, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})