Paloma.controller('UserChallenges', {
  before: ['all -> set_active'],
  index: function(){
    var self = this;
    $('#progress-bar').progress({ percent: self.params.progress });
    $('.disabled').find('.blurring.segment').dimmer('show');
  },
  set_active: function(){
    $('#user_challenges_active').addClass('active');
  }

});
