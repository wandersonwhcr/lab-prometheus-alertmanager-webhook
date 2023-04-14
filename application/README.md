# application

```
docker-compose run --rm application npm install

docker-compose up --detach

docker-compose exec redis redis-cli set my_project:application:magic_number 10
```
