
//  hides the flash message that it has been saved
$('#flashMessage').hide()

$('#previewButton').click(function() {
  const title = $("#blogTitleInput").val();
  const content = $("#blogContentInput").val();

  $("#blogTitlePreview").text(title);
  $("#blogContentPreview").html(content);

  $("#flashMessage")
    .slideDown(1000)
    .delay(3000)
    .slideUp();
});
