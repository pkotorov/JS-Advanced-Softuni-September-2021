class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];        
    }

    loadProducts(products) {
        products.forEach(el => {
            let [product, quantity, price] = el.split(' ');

            quantity = Number(quantity);
            price = Number(price);

            if (price > this.budgetMoney) {
                this.history.push(`There was not enough money to load ${quantity} ${product}`);
            } else {
                if (!this.stockProducts[product]) {
                    this.stockProducts[product] = 0;
                }

                this.stockProducts[product] += quantity;
                this.budgetMoney -= price;

                this.history.push(`Successfully loaded ${quantity} ${product}`);
            }
        });

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: {},
                price
            }

            neededProducts.forEach(el => {
                let [productName, productQuantity] = el.split(' ');
    
                productQuantity = Number(productQuantity);
                this.menu[meal].products[productName] = productQuantity;
            });

            let size = Object.keys(this.menu).length;

            if (size === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${size} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        let result = [];

        for (const meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}`);
        }

        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let neededProducts = {};

        for (const product in this.menu[meal].products) {
            if (!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].products[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                neededProducts[product] = this.menu[meal].products[product];
            }
        }

        for (const product in neededProducts) {
            this.stockProducts[product] -= neededProducts[product];
        }

        this.budgetMoney += this.menu[meal].price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}    
        
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));
