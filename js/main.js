

// drobDownMenu
let notification = document.querySelector('.notification');
let avatar = document.querySelector('.avatar');


dropDownMenu(avatar)
dropDownMenu(notification)
function dropDownMenu(selector)
{
    selector.addEventListener('click',() => {
        
        selector.querySelector('.dropdown-menu').classList.contains('active') ? selector.querySelector('.dropdown-menu').classList.remove('active') : selector.querySelector('.dropdown-menu').classList.add('active')
    })
}


// sideBar Toggle

let sideBar = document.querySelector('.sideBar');
let bars = document.querySelector('.bars');

bars.addEventListener('click',() => {
    
    sideBar.classList.contains('active') ? sideBar.classList.remove('active') : sideBar.classList.add('active');
})


// Chart 

let visitors = [1000,2000,3000,4000,5000,6000]
let Hired = [500,1000,1500,2000,2500,3000]
let Years = [2015,2016,2017,2018,2019,2020]


var options = {
    chart: {
      type: 'area',
      width: '100%',
      height : '100%'
    },
    series: [{
        type: 'area',
        name : "visitors",
        data: [...visitors],
      }, {
        type: 'area',
        name : "Hired",
        data: [...Hired]
      }],
    xaxis: {
      categories: [...Years]
    },
    colors:['#43a047', '#e65245', '#e43a15']
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  // bodyDark

  let mode = document.querySelector('.mode');

  mode.addEventListener('click',() => {

    //   document.body.classList.contains('dark') ? document.body.classList.remove('dark') : document.body.classList.add('dark')

    if(document.body.classList.contains('dark'))
    {
        document.body.classList.remove('dark');
        mode.querySelector('i').classList.replace('fa-sun','fa-moon');
    }
    else
    {
        document.body.classList.add('dark')
        mode.querySelector('i').classList.replace('fa-moon','fa-sun');
    }
  })