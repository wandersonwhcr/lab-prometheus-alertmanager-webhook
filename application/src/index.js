const Prometheus = require("prom-client");

const register = new Prometheus.Registry();

const magicNumberGauge = new Prometheus.Gauge({
  name: "my_project_application_magic_number",
  help: "My Project Application Magic Number",
});

register.registerMetric(magicNumberGauge);

magicNumberGauge.set(10);

register.metrics().then(data => console.log(data));
