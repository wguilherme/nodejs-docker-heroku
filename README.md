## Testing

```
docker build . -t <user/image-name>

// list image created
docker images

// run image as a container

// option a
docker container run <image-id>

// option b
docker container run --name <set-container-name> <user/image-name>

// option c
docker container run  <image-name-created-before>

// run container passing ENV args and exposing the PORT
docker container run --name <set-name> --env PORT=3000 -p 3000:3000 <image-name>

docker container run --name docker-node-01 --env PORT=3033 -p 3033:3033 wguilherme/nodejs18-docker-heroku



```

## Heroku commands

```
heroku container:login

// navigate to the app directory and create heroku app
heroku create

// build the image and push to Container Registry:
heroku container:push -a APP_NAME

// release the image to your app:
heroku container:release -a APP_NAME

// open the app in your browser
heroku open

```