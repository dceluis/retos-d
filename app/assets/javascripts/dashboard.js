Paloma.controller('Dashboard', {
  before: ['all -> set_active'],
  show: function(){
    // Handle edit article
    var dataUsers = [];
    var num_users = 300;
    for (var i = 0; i < num_users; i++) {
      var dataConsumo = new Map();
      for (var mes = 1; mes <= 12; mes++) {
        dataConsumo.set((2017).toString() + mes.toString(), Math.random() * (30 - 5) + 5);
      }
      dataUsers.push({
        suministro: i.toString(),
        dni: i.toString() + mes.toString(),
        idEps: '28',
        idZona: '15',
        consumos: dataConsumo
      });
    }
    var dataConsumo = new Map();
    for (var mes = 1; mes <= 12; mes++) {
      dataConsumo.set((2017).toString() + mes.toString(), Math.random() * (30 - 5) + 5);
    }
    var data_me = {
      suministro: i.toString(),
      dni: i.toString() + mes.toString(),
      idEps: '28',
      idZona: '15',
      consumos: dataConsumo
    }
    var meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Setiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
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
    var id = Math.floor(Math.random() * (recomendaciones.length - 0) + 0);

    $('#content-suggestion').html(recomendaciones[id]);

    $('#drp-mes').change(function () {
      updateGraph();
    });

    function getMostSaverByZone(idZona, mes, ano) {
      var user = null;
      var minorValor = 9999999999999;
      for (var i = 0; i < dataUsers.length; i++) {
        if (dataUsers[i].idZona === idZona) {
          var cons = dataUsers[i].consumos.get(ano.toString() + mes.toString());
          if (cons!==null && cons < minorValor) {
            minorValor = cons.consumo;
            user = dataUsers[i];
          }
        }
      }
      return user;
    }

    function getConsumoLast12Months(user,month, year) {
      var points = [];
      var i = month+1;
      var position =0;
      do {
        points.push({ x: position, y: Math.floor(user.consumos.get(year.toString() + (i).toString())) });
        if (i == 12)
          i = 0;
        i++;

        position++;
      } while (i != month+1);

      return points;
    }
    function updateGraph() {
      var ctx = document.getElementById("myChart").getContext('2d');
      var dataSaver = getMostSaverByZone('15', parseInt($('#drp-mes').val()), 2017);
      var dataYo = getConsumoLast12Months(data_me, parseInt($('#drp-mes').val()), 2017);
      var dataTu = getConsumoLast12Months(dataSaver, parseInt($('#drp-mes').val()), 2017);
      var textsocial = '';
      var textanual = '';
      var textmensual = '';
      var periodo = (2017).toString() + $('#drp-mes').val();
      var average = 0.0;
      for (var mes = 0; mes < parseInt($('#drp-mes').val()); mes++)
        average += data_me.consumos.get((2017).toString() + (mes + 1).toString())
      var dataActual = data_me.consumos.get(periodo);
      var dataAnterior = data_me.consumos.get((2017).toString() + (parseInt($('#drp-mes').val()) - 1).toString())
      var a = dataActual / dataAnterior;
      var porc = (100 * a) - 100;

      if (porc < 0)
        textmensual = '<i class="yellow smile icon"></i>Has consumido un ' + Math.floor(Math.abs(porc)) + '% menos que ' + meses[parseInt($('#drp-mes').val()) - 2];
      else
        textmensual = '<i class="meh   icon"></i>Has consumido un ' + Math.floor(porc)+ '% mas que ' + meses[parseInt($('#drp-mes').val()) - 2];

      if (data_me.consumos.get(periodo) > average / parseInt($('#drp-mes').val()))
        textanual = '<i class="meh   icon"></i>Has consumido mas que tu promedio anual.';
      else
        textanual = '<i class="yellow smile icon"></i>Has consumido menos que tu promedio anual.';
      if (data_me.consumos.get(periodo) <dataSaver.consumos.get(periodo))
        textsocial = '<i class="yellow smile  icon"></i>Eres el mas ahorrador de tu zona.';
      else
        textsocial = '<i class="meh   icon"></i>Alguien mas fue el mas ahorrador de la zona.';
      $('#mensual-highlight').html(textmensual);
      $('#anual-highlight').html(textanual);
      $('#social-highlight').html(textsocial);
      var labels = [];
      var val = parseInt($('#drp-mes').val());
      var i = val;
      do {
        labels.push(meses[i]);
        if (i == 11)
          i = -1;
        i++
      } while (i != val);
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets:
          [
            {
              border: 1,
              backgroundColor: ['blue'],
              borderColor: ['blue'],
              fill: false,
              label: "T'u",
              data: dataYo
            },
            {
              border: 1,
              backgroundColor: ['green'],
              borderColor: ['green'],
              fill: false,
              label: "El mas eficiente de la zona",
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
            }],
            xAxes: [{
              ticks: {
                max: 12,
                min: 0,
                stepSize: 12
              }
            }]
          }
        }
      });

    }
    updateGraph();
    $(document.getElementsByClassName('chart-container')).removeAttr('style');
    $('.ui.selection.dropdown').dropdown();
  },
  set_active: function(){
    $('#dashboard_active').addClass('active');
  }
});
