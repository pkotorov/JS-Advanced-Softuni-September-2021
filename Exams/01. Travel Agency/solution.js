window.addEventListener('load', solution);

function solution() {
  let submitBtn = document.getElementById('submitBTN');

  let previewInfo = document.getElementById('infoPreview');

  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  let blockDiv = document.getElementById('block');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let fullName = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let code = document.getElementById('code').value;

    if (fullName !== '' && email !== '') {
      el('Full Name: ', fullName);

      el('Email: ', email);

      el('Phone Number: ', phone);

      el('Address: ', address);

      el('Postal Code: ', code);

      submitBtn.disabled = true;

      document.getElementById('fname').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('address').value = '';
      document.getElementById('code').value = '';

      editBtn.disabled = false;
      continueBtn.disabled = false;
    }

    editBtn.addEventListener('click', () => {
      document.getElementById('fname').value = fullName;
      document.getElementById('email').value = email;
      document.getElementById('phone').value = phone;
      document.getElementById('address').value = address;
      document.getElementById('code').value = code;

      while (previewInfo.firstChild) {
        previewInfo.removeChild(previewInfo.lastChild);
      };

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
    })

    continueBtn.addEventListener('click', () => {
      let h3Element = document.createElement('h3');
      h3Element.textContent = 'Thank You For Your Reservation!';

      while(blockDiv.firstChild) {
        blockDiv.removeChild(blockDiv.lastChild)
      };

      blockDiv.appendChild(h3Element);
    })
  })

  function el(text, item) {
    let childEl = document.createElement('li');
    childEl.textContent = text + item;
    previewInfo.appendChild(childEl);
  }
}


