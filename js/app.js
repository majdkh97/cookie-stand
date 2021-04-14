'use strict';
let time = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];
let arrayOfObjects = [];
function City(name,minCust,maxCust,avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cpHour = [];
  this.sumCookies = 0;
  arrayOfObjects.push(this);
}

City.prototype.cpHourSold = function(){
  for(let i = 0 ; i < 14 ; i++){
    let num = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)*this.avgCookie);
    this.cpHour.push(num);
    this.sumCookies=this.sumCookies+num;
  }
};

City.prototype.render = function(){
  let headingRow = document.createElement('tr');
  tableE1.appendChild(headingRow);
  let thEl = document.createElement('td');
  headingRow.appendChild(thEl);
  thEl.textContent = this.name;
  for(let i=0 ; i <= 14 ; i++){
    thEl = document.createElement('td');
    headingRow.appendChild(thEl);
    thEl.textContent = this.cpHour[i];
  }
  headingRow.appendChild(thEl);
  thEl.textContent = this.sumCookies;
};

let container = document.getElementById('sales');
let tableE1 = document.createElement('table');
container.appendChild(tableE1);
let headingRow = document.createElement('tr');
tableE1.appendChild(headingRow);
let th=document.createElement('th');
headingRow.appendChild(th);
th.textContent=' ';
for(let i = 0 ; i <= 14 ; i++){
  th=document.createElement('th');
  headingRow.appendChild(th);
  th.textContent=time[i];
}
headingRow.appendChild(th);
th.textContent='Total/Day';

let seattle = new City ('Seattle',23,65,6.3);
seattle.cpHourSold();
seattle.render();
console.log(seattle);

let tokyo = new City ('Tokyo',3,24,1.2);
tokyo.cpHourSold();
tokyo.render();
console.log(tokyo);

let dubai = new City ('Dubai',11,38,3.7);
dubai.cpHourSold();
dubai.render();
console.log(dubai);

let paris = new City ('Paris',20,38,2.3);
paris.cpHourSold();
paris.render();
console.log(paris);

let lima = new City ('Lima',2,16,4.6);
lima.cpHourSold();
lima.render();
console.log(lima);

let footerRow=document.createElement('tr');
tableE1.appendChild(footerRow);
footerRow.textContent='Totals';
for(let i = 0 ; i < 14 ; i++ ){
  let tf=document.createElement('td');
  footerRow.appendChild(tf);
  let sum = 0;
  for(let x = 0 ; x<arrayOfObjects.length ; x++)
    sum=sum + arrayOfObjects[x].cpHour[i];
  tf.textContent = sum;
}

let grandTotal = 0;
for(let x = 0 ; x<arrayOfObjects.length ; x++)
  grandTotal=grandTotal+arrayOfObjects[x].sumCookies;
console.log(grandTotal);

let tf=document.createElement('td');
footerRow.appendChild(tf);
tf.textContent = grandTotal;

const form = document.getElementById('form');

form.addEventListener('submit',handleSubmitting);

function handleSubmitting(event){
  event.preventDefault();
  console.log(event);
  let newName = event.target.nameField.value;
  console.log(newName);
  let min = event.target.minField.value;
  min=parseInt(min);
  console.log(min);
  let max = event.target.maxField.value;
  min=parseInt(max);
  console.log(max);
  let avg = event.target.avgField.value;
  min=parseFloat(avg);
  console.log(avg);
  tableE1.deleteRow(tableE1.rows.length-1);
  let newCity= new City(newName,min,max,avg);
  newCity.cpHourSold();
  newCity.render();
  let footerRow=document.createElement('tr');
  tableE1.appendChild(footerRow);
  footerRow.textContent='Totals';
  for(let i = 0 ; i < 14 ; i++ ){
    let tf=document.createElement('td');
    footerRow.appendChild(tf);
    let sum = 0;
    for(let x = 0 ; x<arrayOfObjects.length ; x++)
      sum=sum + arrayOfObjects[x].cpHour[i];
    tf.textContent = sum;
  }

  let grandTotal = 0;
  for(let x = 0 ; x<arrayOfObjects.length ; x++)
    grandTotal=grandTotal+arrayOfObjects[x].sumCookies;
  console.log(grandTotal);

  let tf=document.createElement('td');
  footerRow.appendChild(tf);
  tf.textContent = grandTotal;
}



// const seattle = {
//   minCust:23,
//   maxCust:65,
//   avgCookie:6.3,
//   cpHour:[],
//   sumCookies:0,
//   time:['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM'],
// custPerHour:function (minCust, maxCust) { // min and max included
//   return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//   },
//   cpHourSold:function(){
//     for(let i = 0 ; i < 14 ; i++){
//       let num = Math.floor(this.custPerHour(this.minCust,this.maxCust)*this.avgCookie);
//       this.cpHour.push(num);
//       this.sumCookies=this.sumCookies+num;
//     }
//   },
//   saleList:function(){
//     seattle.cpHourSold();
//     console.log(seattle.cpHour);
//     console.log(seattle.sumCookies);
//     let container = document.getElementById('seattle');
//     let article = document.createElement('article');
//     container.appendChild(article);
//     let h2 = document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent = 'Seattle';
//     let unorderlist = document.createElement('ul');
//     article.appendChild(unorderlist);
//     let li = null;
//     for(let i = 0 ; i < this.cpHour.length ; i++){
//       li = document.createElement('li');
//       unorderlist.appendChild(li);
//       li.textContent = `${this.time[i]} ${this.cpHour[i]} cookies `;
//     }
//     li = document.createElement('li');
//     unorderlist.appendChild(li);
//     li.textContent = `Total: ${this.sumCookies} cookies`;
//   }
// };
// seattle.saleList();

// const tokyo = {
//   minCust:3,
//   maxCust:24,
//   avgCookie:1.2,
//   cpHour:[],
//   sumCookies:0,
//   time:['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM'],
//   custPerHour:function (minCust, maxCust) { // min and max included
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//   },
//   cpHourSold:function(){
//     for(let i = 0 ; i < 14 ; i++){
//       let num = Math.floor(this.custPerHour(this.minCust,this.maxCust)*this.avgCookie);
//       this.cpHour.push(num);
//       this.sumCookies=this.sumCookies+num;
//     }
//   },
//   saleList:function(){
//     tokyo.cpHourSold();
//     console.log(tokyo.cpHour);
//     console.log(tokyo.sumCookies);
//     let container = document.getElementById('seattle');
//     let article = document.createElement('article');
//     container.appendChild(article);
//     let h2 = document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent = 'Tokyo';
//     let unorderlist = document.createElement('ul');
//     article.appendChild(unorderlist);
//     let li = null;
//     for(let i = 0 ; i < this.cpHour.length ; i++){
//       li = document.createElement('li');
//       unorderlist.appendChild(li);
//       li.textContent = `${this.time[i]} ${this.cpHour[i]} cookies `;
//     }
//     li = document.createElement('li');
//     unorderlist.appendChild(li);
//     li.textContent = `Total: ${this.sumCookies} cookies`;
//   }
// };
// tokyo.saleList();

// const dubai = {
//   minCust:11,
//   maxCust:38,
//   avgCookie:3.7,
//   cpHour:[],
//   sumCookies:0,
//   time:['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM'],
//   custPerHour:function (minCust, maxCust) { // min and max included
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//   },
//   cpHourSold:function(){
//     for(let i = 0 ; i < 14 ; i++){
//       let num = Math.floor(this.custPerHour(this.minCust,this.maxCust)*this.avgCookie);
//       this.cpHour.push(num);
//       this.sumCookies=this.sumCookies+num;
//     }
//   },
//   saleList:function(){
//     dubai.cpHourSold();
//     console.log(dubai.cpHour);
//     console.log(dubai.sumCookies);
//     let container = document.getElementById('seattle');
//     let article = document.createElement('article');
//     container.appendChild(article);
//     let h2 = document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent = 'Dubai';
//     let unorderlist = document.createElement('ul');
//     article.appendChild(unorderlist);
//     let li = null;
//     for(let i = 0 ; i < this.cpHour.length ; i++){
//       li = document.createElement('li');
//       unorderlist.appendChild(li);
//       li.textContent = `${this.time[i]} ${this.cpHour[i]} cookies `;
//     }
//     li = document.createElement('li');
//     unorderlist.appendChild(li);
//     li.textContent = `Total: ${this.sumCookies} cookies`;
//   }
// };
// dubai.saleList();

// const paris = {
//   minCust:20,
//   maxCust:38,
//   avgCookie:2.3,
//   cpHour:[],
//   sumCookies:0,
//   time:['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM'],
//   custPerHour:function (minCust, maxCust) { // min and max included
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//   },
//   cpHourSold:function(){
//     for(let i = 0 ; i < 14 ; i++){
//       let num = Math.floor(this.custPerHour(this.minCust,this.maxCust)*this.avgCookie);
//       this.cpHour.push(num);
//       this.sumCookies=this.sumCookies+num;
//     }
//   },
//   saleList:function(){
//     paris.cpHourSold();
//     console.log(paris.cpHour);
//     console.log(paris.sumCookies);
//     let container = document.getElementById('seattle');
//     let article = document.createElement('article');
//     container.appendChild(article);
//     let h2 = document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent = 'Paris';
//     let unorderlist = document.createElement('ul');
//     article.appendChild(unorderlist);
//     let li = null;
//     for(let i = 0 ; i < this.cpHour.length ; i++){
//       li = document.createElement('li');
//       unorderlist.appendChild(li);
//       li.textContent = `${this.time[i]} ${this.cpHour[i]} cookies `;
//     }
//     li = document.createElement('li');
//     unorderlist.appendChild(li);
//     li.textContent = `Total: ${this.sumCookies} cookies`;
//   }
// };
// paris.saleList();

// const lima = {
//   minCust:2,
//   maxCust:16,
//   avgCookie:4.6,
//   cpHour:[],
//   sumCookies:0,
//   time:['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM'],
//   custPerHour:function (minCust, maxCust) { // min and max included
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//   },
//   cpHourSold:function(){
//     for(let i = 0 ; i < 14 ; i++){
//       let num = Math.floor(this.custPerHour(this.minCust,this.maxCust)*this.avgCookie);
//       this.cpHour.push(num);
//       this.sumCookies=this.sumCookies+num;
//     }
//   },
//   saleList:function(){
//     lima.cpHourSold();
//     console.log(lima.cpHour);
//     console.log(lima.sumCookies);
//     let container = document.getElementById('seattle');
//     let article = document.createElement('article');
//     container.appendChild(article);
//     let h2 = document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent = 'Lima';
//     let unorderlist = document.createElement('ul');
//     article.appendChild(unorderlist);
//     let li = null;
//     for(let i = 0 ; i < this.cpHour.length ; i++){
//       li = document.createElement('li');
//       unorderlist.appendChild(li);
//       li.textContent = `${this.time[i]} ${this.cpHour[i]} cookies `;
//     }
//     li = document.createElement('li');
//     unorderlist.appendChild(li);
//     li.textContent = `Total: ${this.sumCookies} cookies`;
//   }
// };
// lima.saleList();

