$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox" data-message-id=${message.id}>
          <div class="MessageBox__MessageInfo">
            <div class="MessageBox__MessageInfo__userName">
              ${message.user_name}
            </div>
            <div class="MessageBox__MessageInfo__date">
              ${message.created_at}
            </div>
          </div>
          <div class="MessageBox__Message">
            <p class="MessageBox__Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="MessageBox__MessageInfo">
          <div class="MessageBox__MessageInfo__userName">
            ${message.user_name}
          </div>
          <div class="MessageBox__MessageInfo__date">
            ${message.created_at}
          </div>
        </div>
        <div class="MessageBox__Message">
          <p class="MessageBox__Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.MessageBox:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.MessageList').append(insertHTML);
        $('.MessageList').animate({ scrollTop: $('.MessageList')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});