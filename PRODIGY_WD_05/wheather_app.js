let container= document.querySelector('.container')
let search=document.querySelector('.search-btn')
let weatherBox= document.querySelector('.decription')

search.addEventListener('click',()=>{

    const APIkey ='6d5bb7279116e3b7404a2af8c4eab53c'
    const city= document.querySelector('.search-city').value;

    if(city=='')
     return;

     let url=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`).then(response=>response.json()).then(json => {



     const image = document.querySelector('img');
     const temperature = document.querySelector('.temp');
     
     const description = document.querySelector('.des');
     
     switch(json.weather[0].main){
         case 'Clear':
            image.src='images/clear.png';
            break;

         case 'Rain':
            image.src='images/rain.png';
            break;

         case 'Clouds':
            image.src='images/cloud.png';
            break;

         case 'Haze':
            image.src='images/mist.png';
            break;

        
            

        
     }



let ftemp=parseInt(json.main.temp);
let ttemp=  parseInt(ftemp-273.15)  ;


     temperature.innerHTML =`${ttemp}<span>°C</span>`;
     //  console.log((json.main.temp));
     //  description.innerHTML =`${json.weather[0].description}`;



    //  temperature.innerHTML =`${parseInt(json.main.temp)}<span>°C</span>`;
    //  console.log((json.main.temp));
    //  description.innerHTML =`${json.weather[0].description}`;

     });
console.log(url);










});
