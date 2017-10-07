const express = require('express');
const appie = express();

appie.get('/', (req, res) => {
  res.send({Chau: 'Hasta la vista webón'});
});

const PORT = process.env.PORT || 5000;
appie.listen(PORT);
