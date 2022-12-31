var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send()

request.onload = function () {
    var data = JSON.parse(request.response)

    //Get all the countries from the Asia continent /region using the Filter function

    const asiacountries = data.filter(e => { return e.region == "Asia" })
    console.log(asiacountries)

    //Get all the countries with a population of less than 2 lakhs using Filter function  

    const populationless = data.filter(e => { return e.population < 200000 })
    console.log(populationless)

    //Print the following details name, capital, flag using forEach function

    data.forEach(element => {
        console.log(`Name: ${element.name.common} Capital: ${element.capital} Flag:${element.flag}`)
    });

    //Print the total population of countries using reduce function

    const totalpopulation = data.reduce((accumulator, currentValue) => accumulator + currentValue.population, 0);
    console.log(totalpopulation)

    //Print the country which uses US Dollars as currency.

    const uscountries = data.filter(e => typeof e.currencies !== 'undefined' ? 'USD' in e.currencies : false);
    console.log(uscountries);
    const usa = data.filter(e => { return e.region == "Americas" })
    console.log(usa)
}
