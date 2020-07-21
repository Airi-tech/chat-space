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
  
  $('.new_message').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MessageList').append(html);
      $('form')[0].reset();
      $('.MessageList').animate({ scrollTop: $('.MessageList')[0].scrollHeight});
      $('.SubmitBtn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.SubmitBtn').prop("disabled", false);
    });
  });
});