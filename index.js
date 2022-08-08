// https://weatherdbi.herokuapp.com/data/weather/tbilisi




const getWeather = async () => {
    try {
        const weather = await fetch('https://weatherdbi.herokuapp.com/data/weather/tbilisi').then(response => response.json())
        

        const logo = document.getElementById('logo')
        const temp = document.getElementById('temp')
        const location = document.getElementById('location')
        const precip = document.getElementById('precip')
        const humidity = document.getElementById('humidity')
        const wind = document.getElementById('wind')
        const second_day_name = document.getElementById('second_day_name')
        const second_day_logo = document.getElementById('second_day_logo')
        const second_day_temp = document.getElementById('second_day_temp')
        const third_day_name = document.getElementById('third_day_name')
        const third_day_logo = document.getElementById('third_day_logo')
        const third_day_temp = document.getElementById('third_day_temp')
        const fourth_day_name = document.getElementById('fourth_day_name')
        const fourth_day_logo = document.getElementById('fourth_day_logo')
        const fourth_day_temp = document.getElementById('fourth_day_temp')
        const fifth_day_name = document.getElementById('fifth_day_name')
        const fifth_day_logo = document.getElementById('fifth_day_logo')
        const fifth_day_temp = document.getElementById('fifth_day_temp')
        

        logo.style.backgroundImage = `url(${weather.currentConditions.iconURL})`
        temp.innerText = weather.currentConditions.temp.c +'c'
        location.innerText = weather.region
        precip.innerText ='Prec '+ weather.currentConditions.precip
        humidity.innerText = 'Hum '+ weather.currentConditions.humidity
        wind.innerText = 'Wind ' + weather.currentConditions.wind.km +'/km'
        
        second_day_name.innerText = weather.next_days[1].day
        second_day_logo.style.backgroundImage = `url(${weather.next_days[1].iconURL})`
        second_day_temp.innerText = weather.next_days[1].max_temp.c + '/' + weather.next_days[1].min_temp.c

        third_day_name.innerText = weather.next_days[2].day
        third_day_logo.style.backgroundImage = `url(${weather.next_days[2].iconURL})`
        third_day_temp.innerText = weather.next_days[2].max_temp.c + '/' + weather.next_days[2].min_temp.c

        fourth_day_name.innerText = weather.next_days[3].day
        fourth_day_logo.style.backgroundImage = `url(${weather.next_days[3].iconURL})`
        fourth_day_temp.innerText = weather.next_days[3].max_temp.c + '/' + weather.next_days[3].min_temp.c

        fifth_day_name.innerText = weather.next_days[4].day
        fifth_day_logo.style.backgroundImage = `url(${weather.next_days[4].iconURL})`
        fifth_day_temp.innerText = weather.next_days[4].max_temp.c + '/' + weather.next_days[4].min_temp.c



    } catch (error) {
        console.log(error);
    }
}



getWeather()