const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

wss.on('connection', function connection(ws) {
  const currencies = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH'];
  
  setInterval(() => {
    const currency = currencies[Math.floor(Math.random() * currencies.length)];
    const rate = getRandomNumber(1000, 10000).toFixed(2);
    const message = `${currency}: $${rate}`;
    ws.send(message);
  }, getRandomNumber(1000, 20000));

  ws.on('message', function incoming(data) {
    console.log(`Received message from client: ${data}`);
  });
});
