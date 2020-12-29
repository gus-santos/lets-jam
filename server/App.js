// Libraries
const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Main routes
const userRoute = require('./routes/user');
const postsRoute = require('./routes/post');
// const messagingRoute = require('./routes/messaging');
// const instrumentsRoute = require('./routes/instruments');


// app.use('/');
app.use('/user', userRoute);
app.use('/posts', postsRoute);
// app.use('/messaging', messagingRoute);
// app.use('/instruments', instrumentsRoute);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});