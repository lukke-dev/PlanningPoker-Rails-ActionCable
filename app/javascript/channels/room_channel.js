import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data)
    $('#cards-container').append($('<div>', { class: 'me-5' }).append($('<div>', { class: 'estimate-card'})))
  }
});
