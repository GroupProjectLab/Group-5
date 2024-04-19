var current = '';
var last = '';
/*
let currentWork = '';
let lastWork = '';
var currentPlay = '';
var lastPlay = '';
var currentStudy = '';
var lastStudy = '';
var currentExercise = '';
var lastExercise = '';
var currentSocial = '';
var lastSocial = '';
var currentSelfCare = '';
let lastSelfCare = '';
*/
let weeklyP = document.getElementById('weekly-p');
let dailyP = document.getElementById('daily-p');
let monthlyP = document.getElementById('monthly-p');
let onClickFontColor = 'white';
let defaultFontColor = 'hsla(236, 100%, 87%, 0.5)';
var status_1 =  '';
var status_2 ='';

window.onload = function() {
    showData();
}

function showData(elm){
    if(elm == 'weekly-p'|| (!elm)){
        status_1 = 'Week';
        status_2 = 'weekly';
    }else if(elm == 'daily-p'){
        status_1 = 'Day';
        status_2 = 'daily';
    } else if(elm == 'monthly-p'){
        status_1 = 'Month';
        status_2 = 'monthly';
    }
    fetch('../data.json')
    .then(res => {
    return res.json();
    }).then(function(data){
        changeValues(data)
    });
}


function changeValues(data){
    for(let i = 0; i < data.length; i++ ){
        let e = data[i].timeframes;
        current = data[i].timeframes[status_2].current + "hrs";
        last = "Last " + status_1 + " - " + data[i].timeframes[status_2].previous + "hrs";
        if(i == 0) {
            document.getElementById('current-work').innerHTML = current;
            document.getElementById('last-work').innerHTML = last;
        } else if(i == 1){
            document.getElementById('current-play').innerHTML = current;
            document.getElementById('last-play').innerHTML = last;
        } else if(i == 2){
            document.getElementById('current-study').innerHTML = current;
            document.getElementById('last-study').innerHTML = last;
        }  else if(i == 3){
            document.getElementById('current-exercise').innerHTML = current;
            document.getElementById('last-exercise').innerHTML = last;
        } else if(i == 4){
            document.getElementById('current-social').innerHTML = current;
            document.getElementById('last-social').innerHTML = last;
        } else if(i == 5){
            document.getElementById('current-self-care').innerHTML = current;
            document.getElementById('last-self-care').innerHTML = last;
        } else {
            console.log(`${i}: check json data`);
        }
    };
    if(status_1 == 'Week'){
        dailyP.style.setProperty("color", defaultFontColor);
        monthlyP.style.setProperty("color", defaultFontColor);
        weeklyP.style.setProperty("color", onClickFontColor);
    } else if(status_1 == 'Day'){
        monthlyP.style.setProperty("color", defaultFontColor);
        weeklyP.style.setProperty("color", defaultFontColor);
        dailyP.style.setProperty("color", onClickFontColor);
    } else if(status_1 == 'Month'){
        dailyP.style.setProperty("color", defaultFontColor);
        weeklyP.style.setProperty("color", defaultFontColor);
        monthlyP.style.setProperty("color", onClickFontColor);
    } else {
        console.log('check param')
    }
}



//Commented out due to function commonality
/*
//loading the page -- default values are weekly
if(currentWork.length == 0 &&  currentPlay.length == 0 && currentStudy.length == 0 && currentExercise.length == 0 && currentSocial.length == 0 && currentSelfCare.length == 0) {
    
};
*/

/*
//to show weekly values
function showWeeklyValues(param) {
    let status = param;
    fetch('../data.json')
    .then(res => {
    return res.json();
    })
    .then(function(data1) {
        currentWork = `${data1[0].timeframes.weekly.current}hrs` //concatenation with template literals;
        lastWork = `Last Week - ${data1[0].timeframes.weekly.previous}hrs`;
        currentPlay = `${data1[1].timeframes.weekly.current}hrs`;
        lastPlay = `Last Week - ${data1[1].timeframes.weekly.previous}hrs`;
        currentStudy = `${data1[2].timeframes.weekly.current}hrs`;
        lastStudy = `Last Week - ${data1[2].timeframes.weekly.previous}hrs`;
        currentExercise = `${data1[3].timeframes.weekly.current}hrs`;
        lastExercise = `Last Week - ${data1[3].timeframes.weekly.previous}hrs`;
        currentSocial = `${data1[4].timeframes.weekly.current}hrs`;
        lastSocial = `Last Week - ${data1[4].timeframes.weekly.previous}hrs`;
        currentSelfCare = `${data1[5].timeframes.weekly.current}hrs`;
        lastSelfCare = `Last Week - ${data1[5].timeframes.weekly.previous}hrs`;
        document.getElementById('current-work').innerHTML = currentWork;
        document.getElementById('last-work').innerHTML = lastWork;
        document.getElementById('current-play').innerHTML = currentPlay;
        document.getElementById('last-play').innerHTML = lastPlay;
        document.getElementById('current-study').innerHTML = currentStudy;
        document.getElementById('last-study').innerHTML = lastStudy;
        document.getElementById('current-exercise').innerHTML = currentExercise;
        document.getElementById('last-exercise').innerHTML = lastExercise;
        document.getElementById('current-social').innerHTML = currentSocial;
        document.getElementById('last-social').innerHTML = lastSocial;
        document.getElementById('current-self-care').innerHTML = currentSelfCare;
        document.getElementById('last-self-care').innerHTML = lastSelfCare;
        dailyP.style.setProperty("color", defaultFontColor);
        monthlyP.style.setProperty("color", defaultFontColor);
        weeklyP.style.setProperty("color", onClickFontColor);
    })
};

//to show daily values
function showDailyValues() {
    fetch('../data.json')
    .then(res => {
    return res.json();
    })
    .then(function(data1) {
        currentWork = `${data1[0].timeframes.daily.current}hrs` //concatenation with template literals;
        lastWork = `Last Day - ${data1[0].timeframes.daily.previous}hrs`;
        currentPlay = `${data1[1].timeframes.daily.current}hrs`;
        lastPlay = `Last Day - ${data1[1].timeframes.daily.previous}hrs`;
        currentStudy = `${data1[2].timeframes.daily.current}hrs`;
        lastStudy = `Last Day - ${data1[2].timeframes.daily.previous}hrs`;
        currentExercise = `${data1[3].timeframes.daily.current}hrs`;
        lastExercise = `Last Day - ${data1[3].timeframes.daily.previous}hrs`;
        currentSocial = `${data1[4].timeframes.daily.current}hrs`;
        lastSocial = `Last Day - ${data1[4].timeframes.daily.previous}hrs`;
        currentSelfCare = `${data1[5].timeframes.daily.current}hrs`;
        lastSelfCare = `Last Day - ${data1[5].timeframes.daily.previous}hrs`;
        document.getElementById('current-work').innerHTML = currentWork;
        document.getElementById('last-work').innerHTML = lastWork;
        document.getElementById('current-play').innerHTML = currentPlay;
        document.getElementById('last-play').innerHTML = lastPlay;
        document.getElementById('current-study').innerHTML = currentStudy;
        document.getElementById('last-study').innerHTML = lastStudy;
        document.getElementById('current-exercise').innerHTML = currentExercise;
        document.getElementById('last-exercise').innerHTML = lastExercise;
        document.getElementById('current-social').innerHTML = currentSocial;
        document.getElementById('last-social').innerHTML = lastSocial;
        document.getElementById('current-self-care').innerHTML = currentSelfCare;
        document.getElementById('last-self-care').innerHTML = lastSelfCare;
        monthlyP.style.setProperty("color", defaultFontColor);
        weeklyP.style.setProperty("color", defaultFontColor);
        dailyP.style.setProperty("color", onClickFontColor);
    })
};

//to show monthly values
function showMonthlyValues() {
    fetch('../data.json')
    .then(res1 => {
    return res1.json()
    })
    .then(function(data1) {
        currentWork = `${data1[0].timeframes.monthly.current}hrs` //concatenation with template literals;
        lastWork = `Last Month - ${data1[0].timeframes.monthly.previous}hrs`;
        currentPlay = `${data1[1].timeframes.monthly.current}hrs`;
        lastPlay = `Last Month - ${data1[1].timeframes.monthly.previous}hrs`;
        currentStudy = `${data1[2].timeframes.monthly.current}hrs`;
        lastStudy = `Last Month - ${data1[2].timeframes.monthly.previous}hrs`;
        currentExercise = `${data1[3].timeframes.monthly.current}hrs`;
        lastExercise = `Last Month - ${data1[3].timeframes.monthly.previous}hrs`;
        currentSocial = `${data1[4].timeframes.monthly.current}hrs`;
        lastSocial = `Last Month - ${data1[4].timeframes.monthly.previous}hrs`;
        currentSelfCare = `${data1[5].timeframes.monthly.current}hrs`;
        lastSelfCare = `Last Month - ${data1[5].timeframes.monthly.previous}hrs`;
        document.getElementById('current-work').innerHTML = currentWork;
        document.getElementById('last-work').innerHTML = lastWork;
        document.getElementById('current-play').innerHTML = currentPlay;
        document.getElementById('last-play').innerHTML = lastPlay;
        document.getElementById('current-study').innerHTML = currentStudy;
        document.getElementById('last-study').innerHTML = lastStudy;
        document.getElementById('current-exercise').innerHTML = currentExercise;
        document.getElementById('last-exercise').innerHTML = lastExercise;
        document.getElementById('current-social').innerHTML = currentSocial;
        document.getElementById('last-social').innerHTML = lastSocial;
        document.getElementById('current-self-care').innerHTML = currentSelfCare;
        document.getElementById('last-self-care').innerHTML = lastSelfCare;
        dailyP.style.setProperty("color", defaultFontColor);
        weeklyP.style.setProperty("color", defaultFontColor);
        monthlyP.style.setProperty("color", onClickFontColor);
    })
};
*/