$("#surveySubmit").on("click", event => {
  event.preventDefault();

  const name = $("#name")
    .val()
    .trim();
  const imageUrl = $("#pictureUrl")
    .val()
    .trim();
  const question1 = Number($("#question1").val());
  const question2 = Number($("#question2").val());
  const question3 = Number($("#question3").val());
  const question4 = Number($("#question4").val());
  const question5 = Number($("#question5").val());
  const question6 = Number($("#question6").val());
  const question7 = Number($("#question7").val());
  const question8 = Number($("#question8").val());
  const question9 = Number($("#question9").val());
  const question10 = Number($("#question10").val());

  const userAnswers = {
    name,
    imageUrl,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10
  };

  fetch("/api/friends", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userAnswers)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      $('#match-modal').modal('show');
      $('#matchImage').attr('src', data.photo);
      $('#matchImage').height(200);
      $("#modalMatchTitle").text(`You Matched: ${data.name}`);
    })
    .catch(error => {
      console.log(error);
    });

  $("form").trigger("reset");
});
