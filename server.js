// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// custom routes
server.use(jsonServer.rewriter({
  "/route/:id": "/route?customId=:id"
}))

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
