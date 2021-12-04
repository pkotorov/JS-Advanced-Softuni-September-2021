function notify(message) {
  let notificationElement = document.getElementById('notification');
  notificationElement.textContent = message;
  notificationElement.style.display = 'block';

  notificationElement.addEventListener('click', el => {
    notificationElement.style.display = 'none';
  })
}