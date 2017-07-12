import express from 'express';
import ees from './ees';
const app = express();

app.get('/', function(req, res) {
  res.send(`Hello World, Michael Jackson is back!get ${ees.go()}`);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});