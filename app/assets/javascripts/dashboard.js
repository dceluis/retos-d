Paloma.controller('Dashboard', {
  before: ['all -> set_active'],
  show: function(){
    // Handle edit article
        var recomendaciones = [
            "Dúchate en vez de bañarte y acuérdate de cerrar el grifo siempre que no lo estés utilizando.",
            "Instala amortizadores o reductores de caudal en grifos y cisternas.",
            "Haz un uso responsable de la lavadora y el lavavajillas.",
            "Si friegas los platos a mano, hazlo en dos pilas o barreños.",
            "No abuses de detergentes, lejías o productos abrillantadores.",
            "Descongela en la nevera y no bajo el chorro del grifo.",
            "Recicla el aceite usado y no viertas por el fregadero o baño medicamentos u otras sustancias que contaminan el agua.",
            "Opta por las plantas con un crecimiento sostenible adecuado al clima en el que vives.",
            "Instala un depósito de aguas pluviales."
            ];
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
        $('.ui.menu .item.menu').tab();
        $('.ui.menu .item.trimestre').tab();
        $('#example3')
            .progress({
                total: 8.33
            })
            ;
        $('#example3')
            .progress('increment');
        $('#example3')
            .progress('increment');
        $('#example3')
            .progress('increment');
        $('.item.trimestre').on('click', function () {
            $('.hidable.panel').show();
        });
  },
  set_active: function(){
    $('#dashboard_active').addClass('active');
  }
});
