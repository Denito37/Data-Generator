// * Theme Variables
const darkMode = document.getElementById('dMode');
const lightMode = document.getElementById('lMode');
const site = document.getElementById('main');
// * Graph Form Variables
const chartType = document.getElementById('chartType');
const data = document.getElementById('data');
const btn = document.getElementById('submit');
const graphContainer = document.getElementsByClassName("graphSection");
const graph = document.getElementsByClassName('graph');
// * Data Output Variables
const min = document.getElementById('min');
const max = document.getElementById('max');
const mean = document.getElementById('mean');
const mode = document.getElementById('mode');
const variance = document.getElementById('variance');
const stDev = document.getElementById('stDev');
// * data Arrays
let drawChart;
let dataArray = [];
let yAx = [];
let chartChoice = chartType.value;

// * Set & Save Theme
site.classList.add('darkMode');
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

// * Chart Generator Form Events
chartType.addEventListener('change',() =>{
    chartChoice = chartType.value;
});
data.addEventListener('change',() =>{
    dataArray.push(data.value.split(" "));
    btn.addEventListener('click', () => {
        dataArray = []; 
        yAx = [];
        data.value = "";
        chartType.value = '';
    })
});
// * Generate Chart
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    dataArray = dataArray;
    let dataN = dataArray[0];
    for(let i = 0; i < dataArray[0].length; i++){
        yAx.push('');
    }

    let drawChart = new Chart (graph, {
        type: chartChoice,
        data: {
            labels: yAx,
            datasets: [{
                backgroundColor: 'hsl(0 50% 60%)',
                hoverBackgroundColor: 'hsl(60 30% 60%)',
                data: dataN,
                borderColor:'hsl(290 50% 80%)',
                fill: false
            }],
        },
        options: chartOption
    });

    setOutput();
});

const chartOption ={
    legend: {display: false},
    scales: {
        yAxes:[{
            gridLines:{
                display:false,
                color:'black'
            },
            ticks:{
                fontColor:'#000'
            }
        }],
        xAxes:[{
            gridLines:{
                display:false,
                color:'black'
            },
            ticks:{
                fontColor:'#000'
            }
        }],
    }
};
function setOutput(){
    min.innerHTML = Math.min(...dataArray[0]);
    max.innerHTML = Math.max(...dataArray[0]);
    mean.innerHTML = '';
    mode.innerHTML = '';
    variance.innerHTML = '';
    stDev.innerHTML = '';
}