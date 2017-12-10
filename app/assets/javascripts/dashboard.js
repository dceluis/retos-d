Paloma.controller('Dashboard', {
  before: ['all -> set_active'],
  show: function(){
    // Handle edit article
  },
  set_active: function(){
    $('#dashboard_active').addClass('active');
  }
});
