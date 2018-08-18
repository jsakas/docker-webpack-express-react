# Docker, Webpack, Express, React

A web application boilerplate.

## Features

- Docker Compose based development workflow
- React Server-Side Rendering with Express
- Hot Module Replacement

### Additional Tools

- Sass as a CSS preprocessor
- Eslint for code linting
- Jest for unit testing

## Development

```
# run the development server
docker-compose up

# run unit tests
docker-compose run app yarn test

# run the linter
docker-compose run app yarn lint
```

## Build

```
# with docker-compose
docker-compose build

# with docker (for testing the final image)
docker build app -t test-app
docker run -p 5280:5280 test-app
```
