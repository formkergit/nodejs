```
docker run -it --rm  -v ${PWD}:/app -p 8080:7000  --entrypoint sh node:24-alpine

docker run -it --rm  -v ${PWD}:/app -p 8080:7000  node:24-alpine node app/server.js

docker run -it --rm  -v ${PWD}:/app -w /app -p 8080:7000 node:24-alpine node server.js

docker run -it --name notreapp  -v ${PWD}:/app -w /app -p 8080:7000 --entrypoint sh node:24-alpine

docker start notreapp

docker exec -it notreapp sh

npm init -y
```

[https://www.npmjs.com](https://www.npmjs.com)

[https://api-pour-apprendre.fr/http/verbes](https://api-pour-apprendre.fr/http/verbes)

[https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Status](https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Status)