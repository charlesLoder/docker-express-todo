# ToDo-app-node-js-express-js-mongodb

## prereqs

- have [Docker installed](https://docs.docker.com/engine/install/)

## quick start

Create an `.env` file

```
touch .env
```

Add the following:

```env
PORT=3000
MONGODB_URI=mongodb://db:27017
MONGODB_USER=<USERNAME> # can be arbitrary value
MONGODB_PASSWORD=<PASSWORD> # can be arbitrary value
MONGODB_DATABASE=<NAME> # can be arbitrary value
```

Run

```bash
git clone git@github.com:classicalacademicpress/docker-todo-app.git
cd docker-todo-app
npm install
docker compose up
```

Navigate to http://localhost:3000

## about

Frontend from here https://github.com/vinita2000/ToDo-app-node-js-express-js-mongodb
