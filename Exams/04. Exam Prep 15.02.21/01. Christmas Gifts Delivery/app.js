function solution() {
    let addGiftBtn = document.querySelector('button');

    let listOfGitsEl = document.querySelectorAll('.card > ul');

    addGiftBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let inputGiftName = document.getElementsByTagName('input')[0];

        let newLiElFromGift = document.createElement('li');
        newLiElFromGift.classList.add('gift');
        newLiElFromGift.textContent = inputGiftName.value;

        let newSendBtn = document.createElement('button');
        newSendBtn.setAttribute('id', 'sendButton');
        newSendBtn.textContent = 'Send';
        newLiElFromGift.appendChild(newSendBtn);

        let newDiscardBtn = document.createElement('button');
        newDiscardBtn.setAttribute('id', 'discardButton');
        newDiscardBtn.textContent = 'Discard';
        newLiElFromGift.appendChild(newDiscardBtn);

        listOfGitsEl[0].appendChild(newLiElFromGift);

        let sorted = Array.from(listOfGitsEl[0].children).sort((a, b) => a.textContent.localeCompare(b.textContent));

        sorted.forEach(el => {
            listOfGitsEl[0].appendChild(el)
        });

        inputGiftName.value = '';

        newSendBtn.addEventListener('click', () => {
            newLiElFromGift.removeChild(newDiscardBtn);
            newLiElFromGift.removeChild(newSendBtn);
            listOfGitsEl[0].removeChild(newLiElFromGift);

            listOfGitsEl[1].appendChild(newLiElFromGift);
        });

        newDiscardBtn.addEventListener('click', () => {
            newLiElFromGift.removeChild(newDiscardBtn);
            newLiElFromGift.removeChild(newSendBtn);
            listOfGitsEl[0].removeChild(newLiElFromGift);

            listOfGitsEl[2].appendChild(newLiElFromGift);
        })
    })
}