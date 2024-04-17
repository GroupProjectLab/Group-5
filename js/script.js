let currentWork = '';
let lastWork = '';
let currentPlay = '';
let lastPlay = '';
let currentStudy = '';
let lastStudy = '';
let currentExercise = '';
let lastExercise = '';
let currentSocial = '';
let lastSocial = '';
let currentSelfCare = '';
let lastSelfCare = '';
let weeklyP = document.getElementById('weekly-p');
let dailyP = document.getElementById('daily-p');
let monthlyP = document.getElementById('monthly-p');
let onClickFontColor = 'white';
let defaultFontColor = 'hsla(236, 100%, 87%, 0.5)'

//loading the page -- default values are weekly
if(currentWork.length == 0 &&  currentPlay.length == 0 && currentStudy.length == 0 && currentExercise.length == 0 && currentSocial.length == 0 && currentSelfCare.length == 0) {
    showWeeklyValues();
};

//to show weekly values
function showWeeklyValues() {
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
        lastWork = `Last Week - ${data1[0].timeframes.daily.previous}hrs`;
        currentPlay = `${data1[1].timeframes.daily.current}hrs`;
        lastPlay = `Last Week - ${data1[1].timeframes.daily.previous}hrs`;
        currentStudy = `${data1[2].timeframes.daily.current}hrs`;
        lastStudy = `Last Week - ${data1[2].timeframes.daily.previous}hrs`;
        currentExercise = `${data1[3].timeframes.daily.current}hrs`;
        lastExercise = `Last Week - ${data1[3].timeframes.daily.previous}hrs`;
        currentSocial = `${data1[4].timeframes.daily.current}hrs`;
        lastSocial = `Last Week - ${data1[4].timeframes.daily.previous}hrs`;
        currentSelfCare = `${data1[5].timeframes.daily.current}hrs`;
        lastSelfCare = `Last Week - ${data1[5].timeframes.daily.previous}hrs`;
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
        lastWork = `Last Week - ${data1[0].timeframes.monthly.previous}hrs`;
        currentPlay = `${data1[1].timeframes.monthly.current}hrs`;
        lastPlay = `Last Week - ${data1[1].timeframes.monthly.previous}hrs`;
        currentStudy = `${data1[2].timeframes.monthly.current}hrs`;
        lastStudy = `Last Week - ${data1[2].timeframes.monthly.previous}hrs`;
        currentExercise = `${data1[3].timeframes.monthly.current}hrs`;
        lastExercise = `Last Week - ${data1[3].timeframes.monthly.previous}hrs`;
        currentSocial = `${data1[4].timeframes.monthly.current}hrs`;
        lastSocial = `Last Week - ${data1[4].timeframes.monthly.previous}hrs`;
        currentSelfCare = `${data1[5].timeframes.monthly.current}hrs`;
        lastSelfCare = `Last Week - ${data1[5].timeframes.monthly.previous}hrs`;
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
