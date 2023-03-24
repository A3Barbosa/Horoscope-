// when they press submit, take their  month and date 
    // wait for them to click submit
    //add event listener 
    //store the date
      //create variable day
      // create variable month 

  //depending on what month and day they have tell them something 
      
    //given range give out a specific condition 
      //if...
         //else.. 

         // display horscope 
         // printed  h2 inner text 


const monthInput = document.querySelector('#month')
const dayInput= document.querySelector('#day')
const button= document.querySelector('button')
const result= document.querySelector ('#result')


function submit(){
  const month = Number(monthInput.value)
  const day = Number(dayInput.value)
  if (month === 01 && day >= 20 || month === 02 && day <= 18){
          result.innerText = 'You Are A Aquarius!'
        
  }
  else if (month === 02 && day >= 19 || month === 03 && day <= 20){
          result.innerText = 'Tou Are A Pisces'
  }

  else if (month === 03 && day >= 21 || month === 04 && day <= 19){
          result.innerText = 'You Are A Aries!'
  }
  else if (month === 04 && day >= 20 || month === 05 && day <=20){
         result.innerText = 'You Are A Taurus!'
  }

  else if (month === 05 && day >= 21 || month === 06 && day <=20){
         result.innerText = "You Are A Gemini!"
  }

  else if (month === 06 && day >=21 || month === 07 && day <=22){
          result.innerText= "You Are A Cancer!"
  }
  else if (month === 07 && day >= 23 || month === 08 && day <=22){
           result.innerText="You Are A Leo!"
  }        
  else if (month === 08 && day >= 23 || month === 09 && day <= 22){
          result.innerText= "you Are A Virgo!"
  }
  
  else if (month === 09 && day >=23 || month === 10 && day <=22){
          result.innerText="You Are a Libra!"
  }

  else if (month === 10 && day >= 23 || month === 11 && day <=21){
          result.innerText= "You Are A Scorpio!"
  }

  else if (month === 11 && day >= 22 || month === 12 && day <= 21){
          result.innerText= "You Are A Sagittarius!"
  }

  else if (month === 12 && day >= 22 || month === 01 && day <= 19){
          result.innerText= "You Are A Capricon!"
  }
  
}
submit()

button.addEventListener('click', submit)