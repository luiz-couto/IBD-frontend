const fastify = require('fastify')()
const setUpServer = require("./set-up-server") 
const { db } = require("./db");

fastify.register(require('fastify-cors'), { 
  origin: true,
  methods: ["POST", "GET", "DELETE"],
  allowedHeaders: ["Origin","X-Requested-With","Content-Type", "Accept, Authorization"],
});

fastify.post("/consulta", async (req) => {
  return db.query(req.body.query);
});

fastify.register(setUpServer);

fastify.listen(3001, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
});