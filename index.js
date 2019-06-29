const server = require('./api/server.js');

const PORT = process.env.PORT || 5090;

server.listen(PORT, () => {
   console.log(`Server running on port http://localhost:${PORT}`)
})