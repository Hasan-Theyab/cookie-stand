'use strict';
let hours=['6am ', '7am ', '8am ', '9am ','10am ', '11am ', '12pm ', '1pm ', '2pm ','3pm ', '4pm ', '5pm ','6pm ', '7pm '];

//from w3 schools
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let shops=[];

function Shop(location,minCustomers,maxCustomers,avgCookies) {
  this.locationName=location;
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.avgCookies=avgCookies;
  this.totalCookiesPerDay=0;
  this.customersEachHour=[];
  this.cookiesEachHour=[];

  shops.push(this);

}


Shop.prototype.calcCustomersEachHour=function(){
  for(let i=0;i<hours.length;i++){
    this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
  }
  console.log('customersnumber',this.customersEachHour);
}


Shop.prototype.calcCookiesEachHour=function(){
  for(let i =0;i<hours.length;i++){
    this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
    this.totalCookiesPerDay += this.cookiesEachHour[i];
  }
}



let seattle=new Shop('Seattle',23,65,6.3);
let tokyo=new Shop('Tokyo',3,24,1.2);
let dubai=new Shop('Dubai',11,38,3.7);
let paris= new Shop('Paris',20,38,2.3);
let lima=new Shop('Lima',2,16,4.6);


let parent=document.getElementById('parent');
let table=document.createElement('table');
parent.appendChild(table);

//header function
function makeHeader(){
  let headerRow=document.createElement('tr');
  table.appendChild(headerRow);
  let firstTh=document.createElement('th');
  headerRow.appendChild(firstTh);
  firstTh.textContent='Name';
  for(let i=0;i<hours.length;i++){
    let hoursTh=document.createElement('th');
    headerRow.appendChild(hoursTh);
    hoursTh.textContent=hours[i];
  }
let lastTh=document.createElement('th');
headerRow.appendChild(lastTh);
lastTh.textContent='Daily Location Total';
}

// render method
Shop.prototype.render=function(){
  let dataRow=document.createElement('tr');
  table.appendChild(dataRow);
  let nameTd=document.createElement('td');
  dataRow.appendChild(nameTd);
  nameTd.textContent=this.locationName;
  for(let i= 0;i<hours.length;i++){
    let cookiesTd=document.createElement('td');
    dataRow.appendChild(cookiesTd);
    cookiesTd.textContent=this.cookiesEachHour[i];
  }
  let totalTd=document.createElement('td');
  dataRow.appendChild(totalTd);
  totalTd.textContent=this.totalCookiesPerDay;
}


// footer function

function makeFooter(){
  let footerRow=document.createElement('tr');
  table.appendChild(footerRow);
  let firstTh=document.createElement('th');
  footerRow.appendChild(firstTh);
  firstTh.textContent='Totals';
  let totalOfTotals=0;
  for(let i=0;i<hours.length;i++){
    let totalForEachHour=0;
    for(let j=0; j<shops.length;j++){
      totalForEachHour+=shops[j].cookiesEachHour[i];
      totalOfTotals+=shops[j].cookiesEachHour[i];

    }
    let footerTh= document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent=totalForEachHour;
  }
  let lastTh=document.createElement('th');
  footerRow.appendChild(lastTh);
  lastTh.textContent=totalOfTotals;
}

makeHeader();

for(let i =0;i<shops.length;i++){
  shops[i].calcCustomersEachHour();
  shops[i].calcCookiesEachHour();
  shops[i].render();
}

makeFooter();


//form code
//--------------------------------------------------------------------


let form=document.getElementById('form');
form.addEventListener('submit',formSubmitter);
function formSubmitter(event) {
  event.preventDefault();
  let name=event.target.locationName.value;
  let minCustomers=parseInt(event.target.minCustomersField.value);
  let maxCustomers=parseInt(event.target.maxCustomersField.value);
  let avgCookies=parseFloat(event.target.avgCookies.value);
  let addedShop=new Shop(name,minCustomers,maxCustomers,avgCookies);
  table.textContent='';
  makeHeader();
  for(let i =0;i<shops.length;i++){
    shops[i].cookiesEachHour=[];
    shops[i].customersEachHour=[];
    shops[i].totalCookiesPerDay=0;
    shops[i].calcCustomersEachHour();
    shops[i].calcCookiesEachHour();
    shops[i].render();
  }

  makeFooter();
}






