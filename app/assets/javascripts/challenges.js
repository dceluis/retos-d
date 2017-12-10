Paloma.controller('Challenges', {
  before: ['all -> set_active'],
  index: function(){
    var self = this;
    $('.ui.menu .item.menu').tab();
    $('.ui.menu .item.trimestre').tab();
    $('#example3').progress({ percent: self.params.progress });
    $('.item.trimestre').on('click',function(){
      $('.hidable.panel').show();
    });
  },
  set_active: function(){
    $('#challenges_active').addClass('active');
  }

});
