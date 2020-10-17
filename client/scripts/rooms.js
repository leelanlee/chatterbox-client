var Rooms = {

  selected: 'lobby',

  rooms: {},

  add: function (roomName) {
    var newRoom = prompt('Enter new room');
    if (newRoom !== '') {
      RoomsView.renderRoom(newRoom);
      if (Rooms.rooms[newRoom] !== undefined) {
        return true;
      }
      return false;
    }
  }

};