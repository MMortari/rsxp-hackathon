import app from './app';

const listenPort = process.env.PORT || 3333;

app.listen(listenPort, () =>
  console.log(`Server started on port -> ${listenPort}`)
);
