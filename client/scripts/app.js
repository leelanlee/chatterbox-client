var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    //
    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval(function() {
      App.fetch();
    }, 6000);


  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:


      Messages.data = data.results;
      MessagesView.render();
      RoomsView.render();

      callback();
    });
  },





  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
