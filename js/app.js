'use strict';
const seattle = {
  minCust:23,
  maxCust:65,
  avgCookie:6.3,
  cpHour:[],
  sumCookies:0,
  time:['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM'],
  custPerHour:function (minCust, maxCust) { // min and max included
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  cpHourSold:function(){
    for(let i = 0 ; i < 14 ; i++){
      let num = Math.floor(this.custPerHour(this.minCust,this.maxCust)*this.avgCookie);
      this.cpHour.push(num);
      this.sumCookies=this.sumCookies+num;
    }
  },
  saleList:function(){
    seattle.cpHourSold();
    console.log(seattle.cpHour);
    console.log(seattle.sumCookies);
    let container = document.getElementById('seattle');
    let article = document.createElement('article');
    container.appendChild(article);
    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = 'Seattle';
    let unorderlist = document.createElement('ul');
    article.appendChild(unorderlist);
    let li = null;
    for(let i = 0 ; i < this.cpHour.length ; i++){
      li = document.createElement('li');
      unorderlist.appendChild(li);
      li.textContent = `${this.time[i]} ${this.cpHour[i]} cookies `;
    }
    li = document.createElement('li');
    unorderlist.appendChild(li);
    li.textContent = `Total: ${this.sumCookies} cookies`;
  }
};
seattle.saleList();

const tokyo = {
  minCust:3,
  maxCust:24,
  avgCookie:1.2,
  cpHour:[],
  sumCookies:0,
  time:['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM'],
  custPerHour:function (minCust, maxCust) { // min and max included
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  cpHourSold:function(){
    for(let i = 0 ; i < 14 ; i++){
      let num = Math.floor(this.custPerHour(this.minCust,this.maxCust)*this.avgCookie);
      this.cpHour.push(num);
      this.sumCookies=this.sumCookies+num;
    }
  },
  saleList:function(){
    tokyo.cpHourSold();
    console.log(tokyo.cpHour);
    console.log(tokyo.sumCookies);
    let container = document.getElementById('seattle');
    let article = document.createElement('article');
    container.appendChild(article);
    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = 'Tokyo';
    let unorderlist = document.createElement('ul');
    article.appendChild(unorderlist);
    let li = null;
    for(let i = 0 ; i < this.cpHour.length ; i++){
      li = document.createElement('li');
      unorderlist.appendChild(li);
      li.textContent = `${this.time[i]} ${this.cpHour[i]} cookies `;
    }
    li = document.createElement('li');
    unorderlist.appendChild(li);
    li.textContent = `Total: ${this.sumCookies} cookies`;
  }
};
tokyo.saleList();

const dubai = {
  minCust:11,
  maxCust:38,
  avgCookie:3.7,
  cpHour:[],
  sumCookies:0,
  time:['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM'],
  custPerHour:function (minCust, maxCust) { // min and max included
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  cpHourSold:function(){
    for(let i = 0 ; i < 14 ; i++){
      let num = Math.floor(this.custPerHour(this.minCust,this.maxCust)*this.avgCookie);
      this.cpHour.push(num);
      this.sumCookies=this.sumCookies+num;
    }
  },
  saleList:function(){
    dubai.cpHourSold();
    console.log(dubai.cpHour);
    console.log(dubai.sumCookies);
    let container = document.getElementById('seattle');
    let article = document.createElement('article');
    container.appendChild(article);
    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = 'Dubai';
    let unorderlist = document.createElement('ul');
    article.appendChild(unorderlist);
    let li = null;
    for(let i = 0 ; i < this.cpHour.length ; i++){
      li = document.createElement('li');
      unorderlist.appendChild(li);
      li.textContent = `${this.time[i]} ${this.cpHour[i]} cookies `;
    }
    li = document.createElement('li');
    unorderlist.appendChild(li);
    li.textContent = `Total: ${this.sumCookies} cookies`;
  }
};
dubai.saleList();

const paris = {
  minCust:20,
  maxCust:38,
  avgCookie:2.3,
  cpHour:[],
  sumCookies:0,
  time:['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM'],
  custPerHour:function (minCust, maxCust) { // min and max included
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  cpHourSold:function(){
    for(let i = 0 ; i < 14 ; i++){
      let num = Math.floor(this.custPerHour(this.minCust,this.maxCust)*this.avgCookie);
      this.cpHour.push(num);
      this.sumCookies=this.sumCookies+num;
    }
  },
  saleList:function(){
    paris.cpHourSold();
    console.log(paris.cpHour);
    console.log(paris.sumCookies);
    let container = document.getElementById('seattle');
    let article = document.createElement('article');
    container.appendChild(article);
    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = 'Paris';
    let unorderlist = document.createElement('ul');
    article.appendChild(unorderlist);
    let li = null;
    for(let i = 0 ; i < this.cpHour.length ; i++){
      li = document.createElement('li');
      unorderlist.appendChild(li);
      li.textContent = `${this.time[i]} ${this.cpHour[i]} cookies `;
    }
    li = document.createElement('li');
    unorderlist.appendChild(li);
    li.textContent = `Total: ${this.sumCookies} cookies`;
  }
};
paris.saleList();

const lima = {
  minCust:2,
  maxCust:16,
  avgCookie:4.6,
  cpHour:[],
  sumCookies:0,
  time:['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM'],
  custPerHour:function (minCust, maxCust) { // min and max included
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },
  cpHourSold:function(){
    for(let i = 0 ; i < 14 ; i++){
      let num = Math.floor(this.custPerHour(this.minCust,this.maxCust)*this.avgCookie);
      this.cpHour.push(num);
      this.sumCookies=this.sumCookies+num;
    }
  },
  saleList:function(){
    lima.cpHourSold();
    console.log(lima.cpHour);
    console.log(lima.sumCookies);
    let container = document.getElementById('seattle');
    let article = document.createElement('article');
    container.appendChild(article);
    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = 'Lima';
    let unorderlist = document.createElement('ul');
    article.appendChild(unorderlist);
    let li = null;
    for(let i = 0 ; i < this.cpHour.length ; i++){
      li = document.createElement('li');
      unorderlist.appendChild(li);
      li.textContent = `${this.time[i]} ${this.cpHour[i]} cookies `;
    }
    li = document.createElement('li');
    unorderlist.appendChild(li);
    li.textContent = `Total: ${this.sumCookies} cookies`;
  }
};
lima.saleList();

