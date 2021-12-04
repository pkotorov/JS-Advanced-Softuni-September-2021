function solve(){
   const createBtn = document.getElementsByClassName('btn create')[0];

   const mainSection = document.querySelector('main > section')

   const olEl = document.getElementsByTagName('ol')[0];

   createBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const author = document.getElementById('creator').value;
      const title = document.getElementById('title').value;
      const category = document.getElementById('category').value;
      const content = document.getElementById('content').value;

      const articleEl = document.createElement('article');
      const h1El = document.createElement('h1');
      h1El.textContent = title;
      articleEl.appendChild(h1El);

      const firstPEl = document.createElement('p');
      firstPEl.textContent = 'Category: ';
      const firstStrongEl = document.createElement('strong');
      firstStrongEl.textContent = category;
      firstPEl.appendChild(firstStrongEl);
      articleEl.appendChild(firstPEl);

      const secondPEl = document.createElement('p');
      secondPEl.textContent = 'Creator: ';
      const secondStrongEl = document.createElement('strong');
      secondStrongEl.textContent = author;
      secondPEl.appendChild(secondStrongEl);
      articleEl.appendChild(secondPEl);

      const thirdPEl = document.createElement('p');
      thirdPEl.textContent = content;
      articleEl.appendChild(thirdPEl);

      const divEl = document.createElement('div');
      divEl.classList.add('buttons');

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.classList.add('btn');
      delBtn.classList.add('delete');
      divEl.appendChild(delBtn);

      const archiveBtn = document.createElement('button');
      archiveBtn.textContent = 'Archive';
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      divEl.appendChild(archiveBtn);

      articleEl.appendChild(divEl);

      mainSection.appendChild(articleEl);

      document.getElementById('creator').value = '';
      document.getElementById('title').value = '';
      document.getElementById('category').value = '';
      document.getElementById('content').value = '';

      archiveBtn.addEventListener('click', () => {
         const liEl = document.createElement('li');
         liEl.textContent = title;
         olEl.appendChild(liEl);

         mainSection.removeChild(articleEl);

         let arr = Array.from(document.querySelectorAll('li'));

         arr.sort((a, b) => a.textContent.localeCompare(b.textContent));

         for (const element of arr) {
            olEl.appendChild(element);
         }
      })

      delBtn.addEventListener('click', () => {
         mainSection.removeChild(articleEl);
      })
   })
  }
