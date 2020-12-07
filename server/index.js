let app = require('./server.js');
let port = 3005;

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});