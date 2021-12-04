function search() {
   let towns = Array.from(document.getElementsByTagName('li'));
   let input = document.getElementById('searchText').value;
   let resultArea = document.getElementById('result');
   let counter = 0;

   for (const town of towns) {
      if (town.innerText.includes(input)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      }
   }

   resultArea.textContent = `${counter} matches found.`
}
