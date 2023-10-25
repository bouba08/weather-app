async function search(){
    const search = document.querySelector(".card-input").value
    
    try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e7379634c4453e11eea8065725ba733e&units=metric`); 
    
    const data = await res.json();

    document.querySelector('.weather-temp').innerHTML = `${data.main.temp}°C`;
    document.querySelector('.weather-city').innerHTML = data.name

    document.querySelector('.weather-detail-reading-humidity').innerHTML = `${data.main.humidity}%`
    document.querySelector('.weather-detail-reading-wind').innerHTML = `${data.wind.speed}km/h`

    } catch{
        alert("Please try again")
    }
   
}



