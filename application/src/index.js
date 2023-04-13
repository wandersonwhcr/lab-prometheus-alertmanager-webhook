// Prometheus --------------------------------------------------------------------------------------
const Prometheus = require("prom-client");

const register = new Prometheus.Registry();

const magicNumberGauge = new Prometheus.Gauge({
  name: "my_project_application_magic_number",
  help: "My Project Application Magic Number",
});

register.registerMetric(magicNumberGauge);

// Fastify -----------------------------------------------------------------------------------------

const fastify = require("fastify")({
  logger: true,
});

fastify.get('/', async function(request, reply) {
  reply.status(200)
    .send({
      name: "application",
    });
});

fastify.get('/metrics', async function(request, reply) {
  const data = await register.metrics();

  reply.status(200)
    .type(register.contentType)
    .send(data);
});

fastify.listen({
  host: "0.0.0.0",
  port: process.env.APP_PORT,
});

process.on("SIGINT", () => fastify.close());
process.on("SIGTERM", () => fastify.close());
