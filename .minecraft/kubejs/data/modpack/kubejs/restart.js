events.listen('server.load', event => {
  event.server.schedule(25 * MINUTE, event.server, callback => {
    callback.data.tell('Server restarting in 5 minutes!')
  })
  
  event.server.schedule(30 * MINUTE, event.server, callback => {
    callback.data.runCommand('/stop')
  })
});