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



if(currentWork.length == 0 || document.getElementById('daily-link').onclick()){
    fetch('../data.json')
    .then(res => {
    return res.json();
    })
    .then(function(data) {
        currentWork = data[0].timeframes.daily.current + 'hrs';
        lastWork = ' Last Week - ' +data[0].timeframes.daily.previous + 'hrs';
        currentPlay = data[1].timeframes.daily.current + 'hrs';
        lastPlay = ' Last Week - ' +data[1].timeframes.daily.previous + 'hrs';
        currentStudy = data[2].timeframes.daily.current + 'hrs';
        lastStudy = ' Last Week - ' +data[2].timeframes.daily.previous + 'hrs';
        currentExercise = data[3].timeframes.daily.current + 'hrs';
        lastExercise = ' Last Week - ' +data[3].timeframes.daily.previous + 'hrs';
        currentSocial = data[4].timeframes.daily.current + 'hrs';
        lastSocial = ' Last Week - ' +data[4].timeframes.daily.previous + 'hrs';
        currentSelfCare = data[5].timeframes.daily.current + 'hrs';
        lastSelfCare = ' Last Week - ' +data[5].timeframes.daily.previous + 'hrs';
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
    })
    
};

function showWeeklyValues() {
    fetch('../data.json')
    .then(res1 => {
       // console.log(res1)
    return res1.json()
    })
    .then(function(data1) {
        console.log();
        currentWork = data1[0].timeframes.weekly.current + 'hrs';
        lastWork = ' Last Week - ' +data1[0].timeframes.weekly.previous + 'hrs';
        currentPlay = data1[1].timeframes.weekly.current + 'hrs';
        lastPlay = ' Last Week - ' +data1[1].timeframes.weekly.previous + 'hrs';
        currentStudy = data1[2].timeframes.weekly.current + 'hrs';
        lastStudy = ' Last Week - ' +data1[2].timeframes.weekly.previous + 'hrs';
        currentExercise = data1[3].timeframes.weekly.current + 'hrs';
        lastExercise = ' Last Week - ' +data1[3].timeframes.weekly.previous + 'hrs';
        currentSocial = data1[4].timeframes.weekly.current + 'hrs';
        lastSocial = ' Last Week - ' +data1[4].timeframes.weekly.previous + 'hrs';
        currentSelfCare = data1[5].timeframes.weekly.current + 'hrs';
        lastSelfCare = ' Last Week - ' +data1[5].timeframes.weekly.previous + 'hrs';
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
    })
};

function showMonthlyValues() {
    fetch('../data.json')
    .then(res1 => {
        //console.log(res1)
    return res1.json()
    })
    .then(function(data1) {
        console.log();
        currentWork = data1[0].timeframes.monthly.current + 'hrs';
        lastWork = ' Last Week - ' +data1[0].timeframes.monthly.previous + 'hrs';
        currentPlay = data1[1].timeframes.monthly.current + 'hrs';
        lastPlay = ' Last Week - ' +data1[1].timeframes.monthly.previous + 'hrs';
        currentStudy = data1[2].timeframes.monthly.current + 'hrs';
        lastStudy = ' Last Week - ' +data1[2].timeframes.monthly.previous + 'hrs';
        currentExercise = data1[3].timeframes.monthly.current + 'hrs';
        lastExercise = ' Last Week - ' +data1[3].timeframes.monthly.previous + 'hrs';
        currentSocial = data1[4].timeframes.monthly.current + 'hrs';
        lastSocial = ' Last Week - ' +data1[4].timeframes.monthly.previous + 'hrs';
        currentSelfCare = data1[5].timeframes.monthly.current + 'hrs';
        lastSelfCare = ' Last Week - ' +data1[5].timeframes.monthly.previous + 'hrs';
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
    })
};
