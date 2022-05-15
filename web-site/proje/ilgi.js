fetch('https://www.breakingbadapi.com/api/characters?limit=10&offset=10')
.then(response => response.text())
.then(data => console.log(data));