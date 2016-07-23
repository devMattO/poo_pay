//

var hourlyWage = 10;
var centsPerMin = hourlyWage / 60;
var minutesInBathroom = 70;// += adds until you reset
var poopay = minutesInBathroom * centsPerMin;

var container = document.getElementById('container');

var contentDiv = document.createElement('div');
contentDiv.id = 'contentDiv';
var startButtonDiv = document.createElement('div');
startButtonDiv.id = 'startButtonDiv';
var startButton = document.createElement('button');
startButton.id = 'startButton';
startButton.innerHTML = 'START';

startButtonDiv.appendChild(startButton);
contentDiv.appendChild(startButtonDiv);

var timer_div = document.createElement('div');
timer_div.id = timer_div;
timer_div.innerHTML = '';//some dynamic shit here
contentDiv.appendChild(timer_div);

container.appendChild(contentDiv);






console.log(poopay,'<----poopay');