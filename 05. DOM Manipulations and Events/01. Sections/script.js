function create(words) {
   let display = document.getElementById('content');

   for (const word of words) {
      createEl(word);
   }

   display.addEventListener('click', function(el){
      el.target.firstChild.style.display = 'block';
   })

   function createEl(text) {
      let p = document.createElement('p');
      let div = document.createElement('div');
      p.textContent = text;
      p.style.display = 'none';
      div.appendChild(p);
      display.appendChild(div);
   }
}