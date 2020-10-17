var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    RoomsView.$select.on('change', RoomsView.changeRoom);
  },

  render: function() {
    for (let i = 0; i < Messages.data.length; i++) {
      var roomName = Messages.data[i].roomname;
      if (roomName !== undefined) {
        this.renderRoom(roomName);
      }
    }
  },

  renderRoom: function(roomName) {
    if (roomName !== undefined) {
      if (Rooms.rooms[roomName] === undefined) {
        var roomDom = '<option>' + roomName + '</option>';
        this.$select.append(roomDom);
        Rooms.rooms[roomName] = roomName;
      }
    }

  },
  changeRoom: function(roomname) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  }



};
