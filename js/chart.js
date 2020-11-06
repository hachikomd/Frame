

let ctx = document.getElementById('myChart').getContext('2d');
let ctx2 = document.getElementById('myChart2').getContext('2d');
let labels = ['ご自身用', 'プレゼント用', '再販', '商品サンプル'];
let labels2 = ['5.最高', '4.まあまあ、期待以上', '3.普通。期待通り', '2.残念。期待外れ','1.二度と利用しない'];
let colorHex = ['#00AACC', '#EE9900', '#72BE00', '#CC9E7A', '#F7CD8B'];

let myChart = new Chart(ctx, {
  
  type: 'pie',
  data: {
    datasets: [{
      data: [66.7, 25, 0, 8.3],
      backgroundColor: colorHex,
      
      
    }],
    labels: labels
  },
  options: {
    responsive: true,
    
    legend: {
     position: '',
     
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -5,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '11'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})



let myChart2 = new Chart(ctx2, {
  type: 'pie',
  showInLegend: false,
  data: {
    
    datasets: [{
      data: [33, 41.7, 16.7, 8.3,0],
      backgroundColor: colorHex,
      
    }],
    labels: labels2
    
  },
  options: {
    responsive: true,
    legend: {
      position: ''
      
    },
    plugins: {
      datalabels: {
        
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -5,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '11'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})