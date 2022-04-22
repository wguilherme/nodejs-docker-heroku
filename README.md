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

```