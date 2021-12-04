function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField').value;
      let data = Array.from(document.getElementsByTagName('tr'));

      data.map(x => (x.className = ''));
      data.map(x => {
         if (x.innerHTML.includes(input)) {
            x.className = 'select';
         }

         return x;
      })
   }
}