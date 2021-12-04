class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            'picture': 200,
            'photo': 50,
            'item': 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        let article = {
            articleModel,
            articleName,
            quantity
        };

       if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
       }

        let currentArticleAndModel = this.listOfArticles.find(x => x.articleModel === articleModel && x.articleName === articleName);

        if (currentArticleAndModel !== undefined) {
            currentArticleAndModel.quantity += quantity;
        } else {
            this.listOfArticles.push(article);
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }

        return `Successfully added article ${articleName} with a new quantity- ${currentArticleAndModel.quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let points = 0;

        switch (personality){
            case 'Vip':
                points = 500;
                break;
            case 'Middle':
                points = 250;
                break;
            default:
                points = 50;
                break;
        }

        let currentGuest = {
            guestName,
            points,
            purchaseArticle: 0
        };

        let guest = this.guests.find(x => x.guestName === guestName);

        if (guest !== undefined) {
            throw new Error(`${guestName} has already been invited.`);
        }

        this.guests.push(currentGuest);

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);

        if (article === undefined) {
            throw new Error('This article is not found.');
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let guest = this.guests.find(x => x.guestName === guestName);

        if (guest === undefined) {
            return 'This guest is not invited.';
        };

        if (guest.points < this.possibleArticles[articleModel]) {
            return 'You need more points to purchase the article.';
        }

        guest.points -= this.possibleArticles[articleModel];
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        let result = [];

        if (criteria === 'article') {
            result.push('Articles information:');

            for (const article of this.listOfArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            }

            
        } else if (criteria === 'guest') {
            result.push('Guests information:');

            for (const guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`);
            }
        }

        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

