let request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();

request.onload = function() {
    let data = JSON.parse(this.response);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        console.log(`
Name: ${data[i].name.common}
Region: ${data[i].region}
Subregion: ${data[i].subregion}
Population: ${data[i].population}
`);
    }
}