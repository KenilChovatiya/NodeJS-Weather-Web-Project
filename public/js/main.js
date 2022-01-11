const searchIn = document.getElementById('searchIn');
const searchBtn = document.getElementById('searchBtn');
const city_name = document.getElementById('city_name');
const temprature = document.getElementById('temprature');
const temp_status = document.getElementById('temp_status');
const Day = document.getElementById('Day');
const DateMonth = document.getElementById('DateMonth');

const weatherDiv2 = document.querySelector('.weatherDiv2');
const weatherDiv3 = document.querySelector('.weatherDiv3');

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const searchVal = searchIn.value;
    if(searchVal === ''){
        city_name.innerText = 'Plz write the name before search';
    }
    else{
        try{

            CurrentDay();
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=e8d6a54ea3e8884f7f52a3c5dbc19fbf`);
            const resData = await response.json();
            const arrData = [resData];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temprature.innerHTML = `${Math.floor((arrData[0].main.temp)/10)}&#176 C`;
            tempStatus = arrData[0].weather[0].main;

            if (tempStatus == 'Sunny') {
                temp_status.innerHTML = `<i class='fas fa-sun' style='color:rgb(194, 167, 18);'></i>`;
            }
            else if (tempStatus == 'Clouds') {
                temp_status.innerHTML = `<i class='fas fa-cloud' style='color: #fff;'>  </i>`;
            }
            else if (tempStatus == 'Rainy') {
                temp_status.innerHTML = `<i class="fas fa-cloud-sun-rain" style='color:rgb(201, 233, 245); font-size: 50px;'></i>`;
            }
            else{
                temp_status.innerHTML = `<i class='fas fa-sun' style='color:rgb(194, 167, 18); font-size: 50px;'></i>`;
            }

            weatherDiv2.classList.remove('hide');
            weatherDiv3.classList.remove('hide');
        }
        catch{
            city_name.innerText = 'Plz write the appropriate name before search';
            weatherDiv3.classList.add('hide');
            weatherDiv2.classList.remove('hide');
        }
    }
});

let days = [
    'Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'
];
let months = [
    'Jan','Feb','March','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'
];

let CurrentDay = () => {
    let currentDay = new Date();
    let day = currentDay.getDay();
    let month = currentDay.getMonth();
    let todayDate = currentDay.getDate();
    Day.innerText = days[day]+'day';
    DateMonth.innerHTML = `${todayDate}<sup>th</sup> ${months[month]}`;
}; 


