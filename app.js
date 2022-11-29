const darkMode = document.getElementById('dMode');
const lightMode = document.getElementById('lMode');
const site = document.getElementById('main');
// * Graph Data
const chartType = document.getElementById('chartType');
const data = document.getElementById('data');
const btn = document.getElementById('submit');
const graph = document.getElementsByClassName('graph');
// * data output
const min = document.getElementById('min');
const max = document.getElementById('max');
const median = document.getElementById('median');
const mode = document.getElementById('mode');
const variance = document.getElementById('variance');
const stDev = document.getElementById('stDev');
// * data Arrays
let dataArray = [];
let chartChoice = "";

// * set Theme
const theme = localStorage.getItem('theme');
if(theme === 'dark'){
    site.classList.add('darkMode');
}
else if(theme === 'light'){
    site.classList.remove('darkMode');
}
darkMode.addEventListener('click', () =>{
    site.classList.add('darkMode');
    localStorage.setItem('theme','dark');
});
lightMode.addEventListener('click', () =>{
    site.classList.remove('darkMode');
    localStorage.setItem('theme','light');
});

// * chart generator form
chartType.addEventListener('change',() =>{
    chartChoice = chartType.value;
    return chartChoice;
});
data.addEventListener('change',() =>{
    dataArray.push(data.value.split(" "));
    return dataArray;
});
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    const drawChart = new Chart(graph, {
        type: 'bar',
        data: {
            labels: ["mon", "tues", "weds","thur","fri"],
            datasets: [{
                backgroundColor: 'hsl(30 30% 60%)',
                hoverBackgroundColor: 'hsl(10 50% 60%)',
                data: ['43','12','34','87','98']
            }]
        },
        options: {
            legend: {display: false},
            scales: {
                yAxes:[{gridLines:{display:false}}],
                xAxes:[{gridLines:{display:false}}],
            }
        }
    });
    min.innerHTML = '12';
    max.innerHTML = '98';
    median.innerHTML = '43';
    mode.innerHTML = 'none';
    variance.innerHTML = 'idk';
    stDev.innerHTML = 'idk';
});