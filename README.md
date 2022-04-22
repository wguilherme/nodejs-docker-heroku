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


```

## Heroku commands

```
heroku container:login

// navigate to the app directory and create heroku app
heroku create

// build the image and push to Container Registry:
heroku container:push web

// release the image to your app:
heroku container:release -web

// open the app in your browser
heroku open

```


## Update and deploy
```
// how to deploy changes?
- don't need to build again

just do it:
// modify and commit your files

// push and release your app with the same commands used before


```