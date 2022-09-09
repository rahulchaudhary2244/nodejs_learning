# nodejs_learning

This is a small project to getting familiar with node.js and express.js environment

## Demo

POST call
![post-call-sample.png](https://github.com/rahulchaudhary2244/media-repository/blob/main/blog_post_nodejs.PNG)

GET call
![get-call-sample.png](https://github.com/rahulchaudhary2244/media-repository/blob/main/blog_get_nodejs.PNG)

## Run Locally

Clone the project

```bash
  git https://github.com/rahulchaudhary2244/nodejs_learning.git
```

Go to the project directory

```bash
  cd nodejs_learning
```

Install dependencies

```bash
  npm install
```

Start the server | NOTE: Server will start at default port 8082 as mentioned in index.js, [http://localhost:8082](http://localhost:8082). This will start nodemon which will detect changes in backend files, so we don't need to start backend everytime

```bash
  npm run dev
```

Start Mongo DB at default configurations [mongodb://127.0.0.1:27017](mongodb://127.0.0.1:27017), I've used v5.0.9 version of Mongo DB

```bash
  mongo
```

For every request pass (Authorization : LetMeIn) from Header
