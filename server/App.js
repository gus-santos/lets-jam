// Libraries
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Main routes
const visitorRoute = require('./routes/visitor');
const userRoute = require('./routes/user');
const messagingRoute = require('./routes/messaging');

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`GET root is working`);
});

app.use('/', visitorRoute);
app.use('/:screenName', userRoute);
app.use('/messaging', messagingRoute);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});