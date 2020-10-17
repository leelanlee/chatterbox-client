var Friends = {
  data: new Set,
  //should add a friend upon clicking their username
  //need click handle on username tag
    //create pop up that ask to add <username> to friends
      //if yes, push username to friends array. exit out of pop up.
      //if no, exit out of pop up
  $username: $('.username'),
  initialize: function() {
    MessagesView.$chats.on('click','.username', Friends.handleClick)
  },

  handleClick: function(event) {
    var user = event.target.innerHTML;
    if (Friends.data.has(user)) {
      return;
    } else {
      Friends.data.add(user);
      var username = $(event.target).data('username');
      if (username === undefined) { return; }
      console.log(username)
      console.log(Friends.data)
      console.log(event.target)

    }
    Friends.toggleStatus(user)
    MessagesView.render()
  },

  toggleStatus: function(user) {
    if (Friends.data.has(user)) {
      console.log('added friend')
      return true;

    } else {
      return false;
    }
  },

  isFriend: function(name) {
    return Friends.data.has(name);
  },

};