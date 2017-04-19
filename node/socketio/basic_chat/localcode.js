// ¿Probar con una closure?
(function () {
  const messageForm = $('#messageForm')
  const message = $('#message')
  const messages = $('#messages')

  const users = $('#users')
  const userForm = $('#userForm')
  const userName = $('#userName')
  const socket = io.connect()

  console.log('Client connected.')

  userForm.submit((e) => {
    e.preventDefault()
    const value = userName.val()
    socket.emit('new user', {userName: userName.val()})
  })

  socket.on('user change', data => {
    let html = '<ul id="userList">'
    data.users.forEach(user => {
      html += `<li>${user}</li>`
    })
    users.html(html + '</ul>')
  })

  messageForm.submit((e) => {
    e.preventDefault()
    socket.emit('chat message', {userName: userName.val(), message: message.val()})
  })

  socket.on('chat message', data => {
    chatWindow.append(`<p><strong>${data.user}</strong> ${data.message}</p>`)
  })
})()
