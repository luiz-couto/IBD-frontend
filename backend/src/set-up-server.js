const fastifyPlugin = require('fastify-plugin')
const {
    db,
    setUpDatabase,
} = require("./postgres");

async function dbConnector (fastify, options) {
  await setUpDatabase(db);
  fastify.decorate('sql', db)
}

module.exports = fastifyPlugin(dbConnector)