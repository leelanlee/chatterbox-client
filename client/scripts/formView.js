var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    //need to capture user input for message var to pass into parse.create function
    var input = document.getElementById('message').value;
    var message = {
      username: App.username,
      text: input,
      roomname: Rooms.selected
    };

    //MessagesView.renderMessage(message);
    //pass input into parse.create function
    Parse.create(message, (data) => {
      message.objectId = data.objectId;
      message.createdAt = data.createdAt;
      Messages.data.push(message);

    });



    //need to invoke render message

    // MessagesView.renderMessage()

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};