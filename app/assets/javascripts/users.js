$(function() {
  $("#UserSearch__field").on("keyup", function() {
    let input = $("#UserSearch__field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
    .fail(function() {
      alert("通信エラーです。ユーザーが表示できません。");
    });
});