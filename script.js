var request = new XMLHttpRequest; // creating an instance of XMLHttpRequest

// does not open a connection instead prepares data to be sent
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//send a request

request.send();

//load the response

request.onload = function(){
    try {
        var data = JSON.parse(this.response);
        if(data.length>=300){
            throw new SyntaxError('data length not valid')   
        }
    } 
    catch (error) {
        alert(error.message);
    }
    //Get all the countries from Asia continent using Filter function
    let regionFilter = data.filter(e=>e.region === 'Asia');
    console.log(regionFilter);

    //Get all the countries with population of less than 2 lacs using Filter function
    let populationOfCountries = data.filter(e=>e.population<200000);
    console.log(populationOfCountries);

    //Print the following details name, capital, flag using forEach function
    data.forEach(element => {
        console.log(element.name, element.capital, element.flag);
    });

    //Print the total population of countries using reduce function
    let result = data.reduce((total,e)=>{
        return e.population + total
    },0);
    console.log(result);

    //Print the total population of countries in Asia continent using reduce and filter function
    let asianPopulation = regionFilter.reduce((total,e)=>{
        return e.population + total
    },0);
    console.log(asianPopulation);

    //Print the country which use US Dollars as currency. 
    let usdCountries = data.filter(e=> e.currencies[0].code === 'USD');
    console.log(usdCountries)
}