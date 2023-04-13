# application

```
docker-compose run --rm application npm install

docker-compose up --detach

docker-compose exec redis redis-cli set application-magic-number 10
```
