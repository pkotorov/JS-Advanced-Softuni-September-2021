window.addEventListener('load', solve);

function solve() {
    let addBtn = document.getElementById('add-btn');

    let collOfSongsEl = document.getElementsByClassName('all-hits-container')[0];

    let likesEl = document.querySelector('.likes > p');
    let likes = 0;

    let savedSongsEl = document.getElementsByClassName('saved-container')[0];

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let genre = document.getElementById('genre');
        let name = document.getElementById('name');
        let author = document.getElementById('author');
        let date = document.getElementById('date');

        if (genre.value !== ''
            && name.value !== ''
            && author.value !== ''
            && date.value !== '') {
                let newDivEl = document.createElement('div');
                newDivEl.classList.add('hits-info');
                collOfSongsEl.appendChild(newDivEl);

                let newImgEl = document.createElement('img');
                newImgEl.setAttribute('src', './static/img/img.png');
                newDivEl.appendChild(newImgEl);

                let newGenreEl = document.createElement('h2');
                newGenreEl.textContent = `Genre: ${genre.value}`;
                newDivEl.appendChild(newGenreEl);

                let newNameEl = document.createElement('h2');
                newNameEl.textContent = `Name: ${name.value}`;
                newDivEl.appendChild(newNameEl);

                let newAuthorEl = document.createElement('h2');
                newAuthorEl.textContent = `Author: ${author.value}`;
                newDivEl.appendChild(newAuthorEl);

                let newDateEle = document.createElement('h3');
                newDateEle.textContent = `Date: ${date.value}`;
                newDivEl.appendChild(newDateEle);

                let newSaveBtn = document.createElement('button');
                newSaveBtn.classList.add('save-btn');
                newSaveBtn.textContent = 'Save song';
                newDivEl.appendChild(newSaveBtn);

                let newLikeBtn = document.createElement('button');
                newLikeBtn.classList.add('like-btn');
                newLikeBtn.textContent = 'Like song';
                newDivEl.appendChild(newLikeBtn);

                let newDelBtn = document.createElement('button');
                newDelBtn.classList.add('delete-btn');
                newDelBtn.textContent = 'Delete';
                newDivEl.appendChild(newDelBtn);

                genre.value = '';
                name.value = '';
                author.value = '';
                date.value = '';

                newLikeBtn.addEventListener('click', () => {
                    likesEl.textContent = `Total Likes: ${++likes}`;
                    
                    newLikeBtn.disabled = true;
                });

                newDelBtn.addEventListener('click', () => {
                    collOfSongsEl.removeChild(newDivEl);
                });

                newSaveBtn.addEventListener('click', () => {
                    collOfSongsEl.removeChild(newDivEl);

                    savedSongsEl.appendChild(newDivEl);
                    newDivEl.removeChild(newSaveBtn);
                    newDivEl.removeChild(newLikeBtn);

                    newDelBtn.addEventListener('click', () => {
                        savedSongsEl.removeChild(newDivEl);
                    });
                });
            }
    })
}