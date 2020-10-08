# Simple Todo App

Simple Todo App based on [Quasar framework](https://quasar.dev/), based on Vue.js.

This is the front-end part of the project. [Backend here](https://github.com/romka69/todo-backend)

![](https://i.imgur.com/8VCwDJl.png)

## Usage
1. Run [Backend](https://github.com/romka69/todo-backend)

2. Run the compiled project with [serve](https://www.npmjs.com/package/serve) package from the folder `dist/spa/`

   ```
   $ cd todo-frontend/dist/spa/
   $ serve . -p 8080
   ```
   Or you can re-compile project

   ```
   $ cd todo-frontend/
   $ yarn
   $ quasar build
   ```

   Or you can use it in developer mode

   ```
   $ cd todo-frontend/
   $ yarn
   $ quasar dev
   ```

## Main commands

### Instal dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
