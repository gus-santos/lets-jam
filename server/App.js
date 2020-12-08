// Libraries
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Main routes
const visitorRoute = require('./routes/visitor');
const mentalHealthRoute = require('./routes/mental-health');
const postsRoute = require('./routes/posts');
const messagingRoute = require('./routes/messaging');

// Middleware
app.use(express.json());

app.use('/', visitorRoute);
app.use('/mental-health', mentalHealthRoute);
app.use('/:id', postsRoute); // Let's hope this works without the need for a userRoute (OPTIONAL if id === loggedUserId show own profile with edit options)
app.use('/messaging', messagingRoute);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});