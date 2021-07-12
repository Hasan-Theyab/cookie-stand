/* eslint-disable no-redeclare */
'use strict';
console.log('Hasan');
let cities = [];
let hours = ['6am: ', '7am: ', '8am: ', '9am: ',
  '10am: ', '11am: '
  , '12pm: ', '1pm: ', '2pm: ',
  '3pm: ', '4pm: ', '5pm: ',
  '6pm: ', '7pm: '];
function City(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.randomCustomers = [];
  this.avgCookiesperHour = [];
  this.randomCustomersArray = [];
  this.sum = 0;
  console.log(this);
  this.randomCustomers = function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  this.randomCust = function (random) {
    for (let i = 0; i < hours.length; i++) {
      this.randomCustomersArray.push(this.randomCustomers(this.min, this.max));
    }
  };
  this.avgCookies = function (avg) {
    for (let i = 0; i < this.randomCustomersArray.length; i++) {
      this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i] * this.avg));
    }
  };
  this.sumCookies = function () {
    for (let j = 0; j < this.avgCookiesperHour.length; j++) {
      this.sum = this.sum + this.avgCookiesperHour[j];
    }
  };



  cities.push(this);
  return [this.avgCookiesperHour,this.randomCustomers,this.randomCustomersArray,name,max,min,avg];
}

let Seattle = new City('Seattle', 23, 65, 6.3);
Seattle.randomCust();
Seattle.avgCookies();
Seattle.sumCookies();

let Tokyo = new City('Tokyo', 3, 24, 1.2);
Tokyo.randomCust();
Tokyo.avgCookies();
Tokyo.sumCookies();


let Dubai = new City('Dubai', 11, 38, 3.7);
Dubai.randomCust();
Dubai.avgCookies();
Dubai.sumCookies();


let Paris = new City('Paris', 20, 38, 2.3);
Paris.randomCust();
Paris.avgCookies();
Paris.sumCookies();


let Lima = new City('Lima', 2, 16, 4.6);
Lima.randomCust();
Lima.avgCookies();
Lima.sumCookies();

City.prototype.randomCustomers = function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
Seattle.randomCustomers();
Tokyo.randomCustomers();
Dubai.randomCustomers();
Paris.randomCustomers();
Lima.randomCustomers();

City.prototype.randomCust = function (random) {
  for (let i = 0; i < hours.length; i++) {
    this.randomCustomersArray.push(this.randomCustomers(this.min, this.max));
  }
};
Seattle.randomCust();
Tokyo.randomCust();
Dubai.randomCust();
Paris.randomCust();
Lima.randomCust();

City.prototype.avgCookies = function (avg) {
  for (let i = 0; i < hours.length; i++) {
    this.avgCookiesperHour.push(this.randomCustomers(this.min, this.max));
  }
};
Seattle.avgCookies();
Tokyo.avgCookies();
Dubai.avgCookies();
Paris.avgCookies();
Lima.avgCookies();

City.prototype.sumCookies = function () {
  for (let j = 0; j < this.avgCookiesperHour.length; j++) {
    this.sum = this.sum + this.avgCookiesperHour[j];
  }
};
Seattle.sumCookies();
Tokyo.sumCookies();
Dubai.sumCookies();
Paris.sumCookies();
Lima.sumCookies();

//Table Code
//====================================================================
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
// let headingRow = document.createElement('tr');
// table.appendChild(headingRow);
// let student = ['name', 'age'];
// for (let i = 0; i < headings.length; i++) {
//   // make th element
//   let thElement = document.createElement('th');

//   // append
//   headingRow.appendChild(thElement);

//   // text conent
//   thElement.textContent = headings[i];

// }

// let students = [ahmad, mohamad, abdulraheem];
// for (let i = 0; i < students.length; i++) {
//   // console.log(students[i].userName);
//   let studentRow = document.createElement('tr');

//   // append
//   table.appendChild(studentRow);


//   // creating the td for name
function heading() {

  for (let i = 0; i < hours.length; i++) {
    let row_1 = document.createElement('tr');
    let headingRow = document.createElement('th');
    headingRow.innerHTML = hours[i];
    row_1.appendChild(headingRow);
    thead.appendChild(row_1);

  } return thead;
}
heading();
//===============================================================

function body() {

  for (let j = 0; j < 6; j++) {
    let row = document.createElement('tr');
    let row_data = document.createElement('td');
    row_data.innerHTML = City.name;
    row.appendChild(row_data);
    tbody.appendChild(row);
    for (let i = 0; i <= hours.length; i++) {
      let row_data2 = document.createElement('td');
      row_data2.innerHTML = City.avgCookiesperHour[i].prototype;
      row.appendChild(row_data2);
      tbody.appendChild(row);
    }

  } return tbody;
}
body();


function footer() {
  for (let i = 0 ;i<City.sum.length;i++) {
    let row3 = document.createElement('tr');
    let row3_data = document.createElement('td');
    row3_data.innerHTML = 'Totals'+ City.sumCookies[i];
    row3.appendChild(row3_data);
    tbody.appendChild(row3);

  } return tbody;

}
footer();


//   let nameData = document.createElement('td');

//   // append name td for tr
//   studentRow.appendChild(nameData);
//   nameData.textContent = students[i].userName;


//   let ageData = document.createElement('td');

//   studentRow.appendChild(ageData);

//   ageData.textContent = students[i].age

// }
