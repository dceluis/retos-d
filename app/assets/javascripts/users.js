Paloma.controller('Users', {
  before: ['all -> set_active'],
  set_active: function(){
    $('#users_active').addClass('active');
  }
});
