// * Theme Variables
const darkMode = document.getElementById('dMode');
const lightMode = document.getElementById('lMode');
const site = document.getElementById('main');
// * Graph Form Variables
const chartType = document.getElementById('chartType');
const data = document.getElementById('data');
const btn = document.getElementById('submit');
const graph = document.getElementsByClassName('graph');
// * Data Output Variables
const min = document.getElementById('min');
const max = document.getElementById('max');
const mean = document.getElementById('mean');
const mode = document.getElementById('mode');
const variance = document.getElementById('variance');
const stDev = document.getElementById('stDev');
// * data Arrays
let dataArray = [];
let yAx = [];
let chartChoice = "";

// * Set & Save Theme
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
// * Chart Generator Form
chartType.addEventListener('change',() =>{
    chartChoice = chartType.value;
    return chartChoice;
});
data.addEventListener('change',() =>{
    dataArray.push(data.value.split(" "));
    return dataArray;
});
// * Generate Chart
btn.addEventListener('click', (e) =>{
    chartChoice = chartChoice;
    dataArray = dataArray;
    e.preventDefault();

    for(let i = 0; i < dataArray[0].length; i++){
        yAx.push('');
    }

    const drawChart = new Chart(graph, {
        type: chartChoice,
        data: {
            labels: yAx,
            datasets: [{
                backgroundColor: 'hsl(0 50% 60%)',
                hoverBackgroundColor: 'hsl(30 30% 60%)',
                data: dataArray[0]
            }]
        },
        options: {
            legend: {display: false},
            scales: {
                yAxes:[{
                    gridLines:{
                        display:false,
                        color:'black'
                    }
                }],
                xAxes:[{
                    gridLines:{
                        display:false,
                        color:'black'
                    }
                }],
            }
        }
    });
    min.innerHTML = Math.min(...dataArray[0]);
    max.innerHTML = Math.max(...dataArray[0]);
    mean.innerHTML = '';
    mode.innerHTML = '';
    variance.innerHTML = '';
    stDev.innerHTML = '';
});