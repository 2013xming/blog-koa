/**
 * Module dependencies.
 */
var app = require('../server/app');
var http = require('http');

var cluster = require('cluster');
var numCPUs = require('os').cpus().length; // 获取CPU的个数
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '2046');
app.set('port', port);

/**
 * Create HTTP server.
 */
if (cluster.isMaster) {
  for (var i = 0; i <numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function (worker, code, signal) {
    console.error(new Date().toUTCString() + ' - worker ' + worker.process.pid + ' died');
  });
} else {
  var server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */

  server.listen(port);
  server.on('error', onError);
}


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
  case 'EADDRINUSE':
    console.error(bind + ' is already in use');
    process.exit(1);
    break;
  default:
    throw error;
  }
}
