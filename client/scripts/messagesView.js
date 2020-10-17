var MessagesView = {

  $chats: $('#chats'),
  // first displays before the any message are inputted
  //MessagesView.$chats.on('submit', MessagesView.handleSumbit)

  initialize: function() {
    //MessagesView.render();
  },

  render: function() {
    MessagesView.$chats.html('');

    var filteredMess = _.filter(Messages.data, function(message) {
      return message.roomname === Rooms.selected;
    });
    _.each(filteredMess, (message) => {
      if (message.username !== undefined) {
        MessagesView.renderMessage(message);
      }
    });
    Messages.mostRecent = Messages.data.objectID;
  },

  renderMessage: function(message) {
    var $renderedMessage = MessageView.render(message);
    MessagesView.$chats.append($renderedMessage);
  }

};