## Node.js APP [https://polar-depths-29461.herokuapp.com](https://radiant-beach-46005.herokuapp.com/api/v1)

________________________


#### config

```shell
Put your all config varibale related to db etc here
./config/appConfig.js
```

#### steps to run program

```shell
npm install
npm start
http://localhost:3000
```

### End Points

```
POST http://localhost:3000/api/v1/register
POST http://localhost:3000/api/v1/login
POST http://localhost:3000/api/v1/planets
GET http://localhost:3000/api/v1/planets/
GET http://localhost:3000/api/v1/planets/?limit=2&offset=1
GET http://localhost:3000/api/v1/planets/1
PUT http://localhost:3000/api/v1/planets/1
DEL http://localhost:3000/api/v1/planets/1
POST http://localhost:3000/api/v1/comments
GET http://localhost:3000/api/v1/comments
GET http://localhost:3000/api/v1/comments?planet=1
GET http://localhost:3000/api/v1/comments?limit=2&offset=1

```

## Schema 

### LOGIN
```
{
	"username": "testtask",
	"secret": "2222"
}
```


### PLANET
```
{
	"id": 2,
	"name": "Alderaan",
	"rotation_period": "24",
	"orbital_period": "364",
	"diameter": "12500",
	"climate": "temperate",
	"gravity": "1 standard",
	"terrain": "grasslands, mountains",
	"surface_water": "40",
	"population": "2000000000",
	"residents": [
		"https://swapi.co/api/people/5/",
		"https://swapi.co/api/people/68/"
	],
	"films": [
		"https://swapi.co/api/films/6/",
		"https://swapi.co/api/films/1/"
	],
	"url": "https://swapi.co/api/planets/2/",
	"updatedAt": "2018-03-14T22:38:56.779Z",
	"createdAt": "2018-03-14T22:38:56.779Z",
	"comment": null
}
```

### Comment
```
{
	"id": "1",
	"comment": "This is my comment added in 1"
}
```

### About Project

This project is built using node.js with express.js framework.

It is simple rest api app that use json web token and SWAPI (The Star Wars API). Once register then login and get token.
and later all requests use jwt token http header(`x-access-token`) for sending authenticated requested 

#### Backend

Backend use node.js with express.js framework.
Routing has functionality for changing route quickly with with quick option to change api version
 
	|-- ./
		├── app.js
		├── bin
		|  └── www
		├── config
		|  └── appConfig.js
		├── controller
		|  ├── authenticationController.js
		|  ├── commentController.js
		|  └── planetController.js
		├── models
		|  ├── index.js
		|  ├── planet.js
		|  └── user.js
		├── out.txt
		├── package.json
		├── pm2.json
		├── Readme.md
		├── routes
		|  ├── index.js
		|  └── v1
		|     ├── authentication.js
		|     ├── comment.js
		|     └── planet.js
		└── service
		├── authenticationService.js
		├── commentService.js
		├── planetService.js
		└── tokenService.js


### Async/Await
 This application uses Async/Await. In order to use it as intended, you need atleast Node v7.6.


### Running application via docker

```shell
$ docker-compose up --build
```

### Testing

Postman collection is added for testing in local system and heroku

 ### External References and Resources 

* [Node.js API](https://nodejs.org/api/index.html)
* [Node.js ES2015/ES6, ES2016 and ES2017 support](http://node.green/)
* [SWAPI - The Star Wars API](https://swapi.co/documentation#planets)
* [Docker Documentation](https://docs.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/overview/)