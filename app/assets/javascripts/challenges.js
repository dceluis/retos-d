Paloma.controller('Challenges', {
  before: ['all -> set_active'],
  index: function(){
    var self = this;
    $('#example3').progress({ percent: self.params.progress });
    $('.disabled').find('.blurring.segment').dimmer('show');
    $('.disabled').find('.button').addClass('disabled');
  },
  set_active: function(){
    $('#challenges_active').addClass('active');
  }

});
