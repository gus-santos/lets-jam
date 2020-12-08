const express = require('express');
const router = express.Router();

// [Q] What to do here? Theoretically I don't need anything. Or do I?
router.route('/').get((req, res) => {
  res.send('Welcome to the visitor web page')
}); // [Q] Can I have a .catch((err) => console.error(err)); ?

module.exports = router;