const net = require("net");
const { IP, PORT} = require("./constants") 

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: '50542' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");


  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Welcome! to the den of snakes!");
    conn.write('Name: Kha');
  });

  return conn;  
};

module.exports = { connect };