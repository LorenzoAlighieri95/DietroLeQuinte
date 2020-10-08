bG   = "api/getBudget.php"; 
iG   = "api/getIncasso.php";
bP   = "api/getProduttoriBudget.php"; 
iP   = "api/getProduttoriIncassi.php";  
rP   = "api/getBudgetIncasso.php";
vB   = "api/getVotoMedio.php";
lF   = "api/getLocation.php"; 
lV   = "api/getVotoLocation.php";
lB   = "api/getLocationBudget.php";  
rB   = "api/getRegistaBudget.php"; 
rS   = "api/getRegistaBudgetSum.php";   
aR   = "api/getAttoriRegisti.php";  
lg   = "api/getGenereLikes.php";


$(document).ready(function() { 
    budgetGenere();
    incassiGenere();
    budgetProduttori();
    incassiProduttori();
    rapportoBudgetIncassi();
    votoBudget();
    locationFilm();
    locationVoto();
    locationBudget();
    registaBudget();
    registaBudgetSum();
    attoriRegisti();
	  //likeGenere();
}); 

Highcharts.setOptions({
  colors: ['']
});


function budgetGenere(){
  var options = { 
    colors:['SlateGrey'],
    chart: {
      renderTo:'grafico1',type:'column',
      backgroundColor:'transparent',
      colors: 'black'
    }, 
    series: [{name: 'Budget medio'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(bG, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 
}


function incassiGenere(){
  var options = {
    colors:['#71718B'], 
    chart: {
      renderTo:'grafico2',type:'column',
      backgroundColor:'transparent'
    }, 
    series: [{name: 'Incasso medio'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(iG, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 
}

function budgetProduttori(){
  var options = {
    colors:['#71718B'], 
    chart: {
      renderTo:'grafico3',type:'column',
      backgroundColor:'transparent'
    }, 
    series: [{name: 'Budget medio'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(bP, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 

}

function incassiProduttori(){
  var options = {
    colors:['#71718B'], 
    chart: {
      renderTo:'grafico4',type:'column',
      backgroundColor:'transparent'
    }, 
    series: [{name: 'Incasso medio'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(iP, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 

}

function rapportoBudgetIncassi(){
  var options = {
    colors:['#71718B'], 
    chart: {
      renderTo:'grafico5',type:'column',
      backgroundColor:'transparent'
    }, 
    series: [{name: 'Rapporto incassi/budget'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(rP, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 

}

function votoBudget(){
  var options = { 
    colors:['SlateGrey'],
    chart: {
      renderTo:'grafico6',type:'line',
      backgroundColor:'transparent'
    }, 
    series: [{name: 'Budget medio'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(vB, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 
}

function locationFilm(){
  var options = { 
    //colors:['rgb(112, 128, 144,0.95)','rgb(112, 128, 144,0.9)','rgb(112, 128, 144,0.85)','rgb(112, 128, 144,0.8)','rgb(112, 128, 144,0.75)','rgb(112, 128, 144,0.7)','rgb(112, 128, 144,0.65)','rgb(112, 128, 144,0.6)','rgb(112, 128, 144,0.55)','rgb(112, 128, 144,0.5)','rgb(112, 128, 144,0.45)','rgb(112, 128, 144,0.4)'],
    //colors:['#4a898f','#689a9f','#84acaf','#a0bdc0','#bccfd1','#d7e1e2','#f3f3f3','#dcdef0','#c4caed','#abb5ea','#91a2e6','#748fe2'],
    //colors:['#437b81','#75a3aa', '#8eb8bf','#a8cdd4','#c1e2e9','#dbf8ff','#d7f2fa','#d2ecf5','#cee5ef','#cadfea','#c6d8e4','#c2d2de','#f6fcff'],
    colors:['#7c534e','#a88985','#bda5a2','#d3c2c0','#e9e0df','#ffffff','#e9f5f9','#d2ebf2','#bbe0ec','#a3d6e6','#8accdf','#6ec2d9'],
    chart: {
      renderTo:'grafico7',type:'pie',
      backgroundColor:'transparent',
    }, 
    plotOptions: {
      pie: {
          allowPointSelect: true,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
        }
      }
    },
    series: [{name: 'Location'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(lF, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 
}

function locationVoto(){
  var options = { 
    colors:['SlateGrey'],
    chart: {
      renderTo:'grafico8',type:'line',
      backgroundColor:'transparent'
    }, 
    series: [{name: 'Voto medio'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(lV, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 
}

function locationBudget(){
  var options = { 
    colors:['#744327'],
    chart: {
      renderTo:'grafico9',type:'line',
      backgroundColor:'transparent'
    }, 
    series: [{name: 'Budget medio'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(lB, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 
}

function registaBudget(){
  var options = { 
    colors:['#859EB1'],
    chart: {
      renderTo:'grafico10',type:'bar',
      backgroundColor:'transparent',
      colors: 'black'
    }, 
    series: [{name: 'Budget medio'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(rB, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 
}

function registaBudgetSum(){
  var options = { 
    colors:['#859EB1'],
    chart: {
      renderTo:'grafico11',type:'bar',
      backgroundColor:'transparent',
      colors: 'black'
    }, 
    series: [{name: 'Totale budget'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(rS, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 
}

function attoriRegisti(){
  var options = { 
    colors:['SlateGrey'],
    chart: {
      renderTo:'grafico12',type:'bar',
      backgroundColor:'transparent',
      colors: 'black'
    }, 
    series: [{name: 'Numero film insieme'}],
    title : {
      text:""
    },
    yAxis : {
      title: {
        text:""
      },
      allowDecimals: false
    },
    xAxis : {
      title: {
        text:""
      },
      type: 'category'
    }
  }; 

  $.getJSON(aR, function(data){ 
    options.series[0].data = data;
    var chart = new Highcharts.Chart(options); 
  }); 
 
}


