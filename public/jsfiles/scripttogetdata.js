const submitbtn = document.getElementById('submitbtn');
const cityName = document.getElementById('cityName');
const putcityval = document.getElementById('cityname');
const temp = document.getElementById('temp_real');
const weathernow = document.getElementById('tempstatus');
const day = document.getElementById('day');
const date= document.getElementById('date');
const datahide = document.querySelector('.tempshow');





const getInfo = async(event)=>{
    event.preventDefault();
    var cityval = cityName.value;

    if(cityval == ""){
        putcityval.innerHTML =  `Please Enter City Name Before Searching`;
        putcityval.style.color = `red`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=fb7c27e33f4fadc8d68b08a92e98a443`;
            let data = await fetch(url);
            var response = await data.json();
            const arrdata = [response];
            temp.innerText = arrdata[0].main.temp;
            const tempstatus = arrdata[0].weather[0].main;
            putcityval.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;

            if(tempstatus=="clear-sky")
            {
               weathernow.innerHTML = "<i class='fas fa-sun' style='color: yellow;'></i>" ;
               
            }
            else if(tempstatus=="Clouds")
            {
              weathernow.innerHTML = "<i class='fas fa-cloud id='fas'' style='color: darkblue;'></i>" ;
            }
          
            else if(tempstatus=="Rainy")
            {
               weathernow.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
            }
            else 
            {
               weathernow.innerHTML= "<i class='fas fa-cloud' style='color: lightblue;'></i>" ;
            }

            datahide.classList.remove('data_hide');


        }catch{
            putcityval.innerHTML =  `Please Enter City Name Properly`;
            putcityval.style.color = `green`;
        datahide.classList.add('data_hide');

        }
      
    }

   
}

submitbtn.addEventListener('click',getInfo);