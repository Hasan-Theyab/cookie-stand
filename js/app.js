'use strict';
let value=document.getElementById("seattle")
let value1=document.getElementById("tokyo")
let value2=document.getElementById("dubai")
let value3=document.getElementById("paris")
let value4=document.getElementById("lima")

let seattle={
  name: "Seattle",
  min : 23,
  max: 65,
  avg: 6.3,
  randomCustomersArray:[],
  avgCookiesperHour:[],
  sumarr:[], 
  hours :['6am: ','7am: ','8am: ','9am: ',
    '10am: ','11am: '
    ,'12pm: ','1pm: ','2pm: ',
    '3pm: ','4pm: ','5pm: ',
    '6pm: ','7pm: '], 
  randomCustomers:function random(min, max) 
  {        return Math.floor(Math.random() * (max - min + 1) ) + min; 
  }
  ,
  randomCust: function (random) 
  {          
    for(let i=0;i<this.hours.length;i++)  
    {             
      this.randomCustomersArray.push(this.randomCustomers(this.min,this.max))       
    }              }           
  ,avgCookies: function (avg)    
  {         
    for(let i=0;i<this.randomCustomersArray.length;i++)  
    {            
      this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg))   
    }        
  },     
                                             
  sumCookies: function ()     
  {       
    let sum=0       
    for(let j=0;j<this.avgCookiesperHour.length;j++)    
    {             
      sum=sum+this.avgCookiesperHour[j]           
      this.sumarr.push(sum)       
    }              return sum;    
  } 
  , render: function () 
  {
    let p_element=document.createElement('p')
    value.appendChild(p_element)
    p_element.textContent="Seattle"
    let ulElement=document.createElement('ul')
    value.appendChild(ulElement)
    for(let i=0;i<this.hours.length;i++)
    {  
      let liElement=document.createElement('li')  
      ulElement.appendChild(liElement)  
      liElement.textContent=this.hours[i]+this.avgCookiesperHour[i]  + ' cookies' 
    }    
    let lastElement=document.createElement('li')
    ulElement.appendChild(lastElement)
    lastElement.textContent=`Total: ${this.sumCookies()} cookies`
  }
}
seattle.randomCust()
seattle.avgCookies()
seattle.render()
seattle.sumCookies()



