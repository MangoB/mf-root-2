# mf-root
This is an example root of a micro-frontends repository demonstrating how to use [Single-SPA](https://single-spa.js.org/) in this [article](https://medium.com/@a.sinlapakorn/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-micro-frontends-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-single-spa-part-1-beginner-level-6644bf407d93).

## Setup
To run this project, install it locally:

```
$ git clone https://github.com/MangoB/mf-root
$ cd mf-root
$ yarn
$ yarn start
```

Finally, you only have to open http://localhost:9000 in a browser to see the app running

## Single-SPA applications
This application is a root application that inits a Single-SPA application that integrates several registered applications:

#### [mf-vue2](https://github.com/MangoB/mf-vue2)
This application is the Vue2 project that will display on path `/vue2`.
After running the root application and mf-vue2 application have to open http://localhost:9000/vue2 in a browser to see the app running

#### [mf-vue3](https://github.com/MangoB/mf-vue3)
This application is the Vue3 project that will display on path `/vue3`.
After running the root application and mf-vue3 application have to open http://localhost:9000/vue3 in a browser to see the app running
