// require('dotenv').config();

// add server
const server = require('./api/server');

// add port and console log it
const port = process.env.PORT || 7000;
server.listen(port, () => console.log(`Server is listening on port ${port}`));
