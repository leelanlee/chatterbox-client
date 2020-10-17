var MessagesView = {

  $chats: $('#chats'),
  // first displays before the any message are inputted
  //MessagesView.$chats.on('submit', MessagesView.handleSumbit)

  initialize: function() {
    MessagesView.render();
  },

  //handleSubmit: function(event) {
  //event.preventDefault();
  //need to render all messages in data.results array
  //}

  // updates the messages as more are added
  render: function() {
    //iterate through the data.result array and pass each through the renderMessage to render to HTML format, prepend each to the body
    //console.log('MessagesView.render ran')
    //console.log('Messages', Messages.data)
    MessagesView.$chats.html('');
    _.each(Messages.data, (message) => {
      if (message.username !== undefined) {
        MessagesView.renderMessage(message);
      }
    });
  },

  renderMessage: function(message) {
    var $renderedMessage = MessageView.render(message);
    MessagesView.$chats.append($renderedMessage);
  }

};