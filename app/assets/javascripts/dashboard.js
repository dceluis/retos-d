Paloma.controller('Dashboard', {
  before: ['all -> set_active'],
  show: function(){
    // Handle edit article
        var ctx = $("#myChart");
        var dataYo = [];
        var dataTu = [];
        for (var i = 1; i <= 12; i++) {
            dataYo.push({ x: i, y: Math.floor(Math.random() * (30 - 5) + 5) });
            dataTu.push({ x: i, y: Math.floor(Math.random() * (30 - 5) + 5) });
        }
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets:
                [
                    {
                        border: 1,
                        backgroundColor: ['blue'],
                        borderColor: ['blue'],
                        fill: false,
                        label: "Alexis",
                        data: dataYo
                    },
                    {
                        border: 1,
                        backgroundColor: ['green'],
                        borderColor: ['green'],
                        fill: false,
                        label: "El mas eficiente",
                        data: dataTu
                    }
                ]
            },
            options: {
                borderColor: '#fa556d',
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 30,
                            min: 0,
                            stepSize: 15
                        }
                    }]
                }
            }
        });
        $(document.getElementsByClassName('chart-container')).removeAttr('style');

        $('.ui.selection.dropdown').dropdown();
  },
  set_active: function(){
    $('#dashboard_active').addClass('active');
  }
});
