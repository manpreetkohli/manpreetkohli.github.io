
  teams = teams || (window.teams = {});
microsoftTeams.app.initialize().catch(function () {
    console.info('Unable to initialize MS Teams library');
  }).then(() => {
  microsoftTeams.authentication.authenticate({
        url: '/being-auth',
        width: 600,
        height: 535,
        successCallback: function (result) {
          console.log('made it');
        },
        failureCallback: function (reason) {
          console.log('failed');
        }
      });

});
