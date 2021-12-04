function addItem() {
    let selectItem = document.getElementById('menu');
    let textItem = document.getElementById('newItemText');
    let valueItem = document.getElementById('newItemValue');
    let option = document.createElement('option');
    option.textContent = textItem.value;
    option.value = valueItem.value;
    selectItem.appendChild(option);
    textItem.value = '';
    valueItem.value = '';
}