# lab-prometheus-alertmanager-webhook

A Laboratory for Prometheus and Alertmanager with Webhooks

## Proxy

```
docker-compose up --detach
```

* [Traefik Dashboard](http://my-project.localhost)

## Application

```
cd ./application

docker-compose run --rm application npm install

docker-compose up --detach
```

* [Application](http://application.my-project.localhost)

## Prometheus

```
cd ./prometheus

docker-compose up --detach
```

* [Prometheus](http://prometheus.my-project.localhost)
* [Alertmanager](http://alertmanager.my-project.localhost)

## Configure the Magic Number

```
cd ./application

docker-compose exec redis redis-cli set my_project:application:magic_number 0
docker-compose exec redis redis-cli set my_project:application:magic_number 10
docker-compose exec redis redis-cli set my_project:application:magic_number 100
docker-compose exec redis redis-cli set my_project:application:magic_number 1000
```
