window.addEventListener('load', solve);

function solve() {
    let totalProfit = 0;

    const totalProfitElement = document.getElementsByClassName('total-price')[0];
    
    const addButton = document.getElementById('add');

    const furnitureList = document.getElementById('furniture-list');

    addButton.addEventListener('click', (el) => {
        el.preventDefault();

        const model = document.getElementById('model').value;
        const year = document.getElementById('year').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;

        if (model === '' || description === '') {
            return;
        }

        if (year < 0 || price < 0) {
            return;
        }

        const infoRowElement = document.createElement('tr');
        infoRowElement.classList.add('info');

        const modelElement = document.createElement('td');
        modelElement.textContent = model;

        const priceElement = document.createElement('td');
        priceElement.textContent = Number(price).toFixed(2);

        const moreElementRow = document.createElement('td');

        const moreElementBtn = document.createElement('button');
        moreElementBtn.classList.add('moreBtn');
        moreElementBtn.textContent = 'More Info';

        const buyBtnElement = document.createElement('button');
        buyBtnElement.classList.add('buyBtn');
        buyBtnElement.textContent = 'Buy it';

        const hideRowElement = document.createElement('tr');
        hideRowElement.classList.add('hide');

        const yearElement = document.createElement('td');
        yearElement.textContent = `Year: ${year}`;

        const descrElement = document.createElement('td');
        descrElement.setAttribute('colspan', '3');
        descrElement.textContent = `Description: ${description}`;

        furnitureList.appendChild(infoRowElement);
        furnitureList.appendChild(hideRowElement);

        infoRowElement.appendChild(modelElement);
        infoRowElement.appendChild(priceElement);
        infoRowElement.appendChild(moreElementRow);

        moreElementRow.appendChild(moreElementBtn);
        moreElementRow.appendChild(buyBtnElement);

        hideRowElement.appendChild(yearElement);
        hideRowElement.appendChild(descrElement);

        document.getElementById('model').value = '';
        document.getElementById('year').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';

        moreElementBtn.addEventListener('click', () => {
            hideRowElement.style.display = 'contents';
            moreElementBtn.textContent = 'Less Info';

            moreElementBtn.addEventListener('click', () => {
                hideRowElement.style.display = 'none';
                moreElementBtn.textContent = 'More Info';
            });
        });

        buyBtnElement.addEventListener('click', () => {
            totalProfit += Number(price);
            totalProfitElement.textContent = Number(totalProfit).toFixed(2);

            furnitureList.removeChild(infoRowElement);
            furnitureList.removeChild(hideRowElement);
        });
    })
}
