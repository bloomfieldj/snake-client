const net = require("net");
const { connect } = require('./client');

let connection = connect();
console.log(connection.write('Move: up'));

const setupInput = function() { 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = function (data) {
  
  if (data === '\u0003') {
    process.exit();
  }

  if (data === 'q') {
    connection.write("Say: up");

  if (data === 'w') {
    console.log("Move: up");
    connection.write("Move: up");
  }

  if (data === 'a') {
     connection.write("Move: left");
   }

  if (data === 's') {
    connection.write("Move: down");
  }
    
  if (data === 'd') {
    connection.write("Move: right");
  }

}

}

module.exports = { setupInput };