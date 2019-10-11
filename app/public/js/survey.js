$("#surveySubmit").on("click", event => {
  event.preventDefault();
  const matchImage = $("#matchImage");
  const userImage = $("#userImage");
  const userBody = $("#user-body");
  const matchBody = $("#match-body");
  const matchModal = $("#match-modal");
  const matchModalTitle = $("#modalMatchTitle");
  const modalSubtitle = $("#modalSubtitle");

  const name = $("#name")
    .val()
    .trim();
  const userImageUrl = $("#pictureUrl")
    .val()
    .trim();

  //validate name and picture
  if (name === "" || userImageUrl === "") {
    matchImage.hide();
    userImage.hide();
    userBody.hide();
    matchBody.hide();
    matchModal.modal("show");
    matchModalTitle.text("Missing Required Fields");
    modalSubtitle.html(
      "Make sure to enter both <b>Name</b> and <b>Link</b> to Photo."
    );
  } else {
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
      imageUrl: userImageUrl,
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
        matchImage.show();
        userImage.show();
        userBody.show();
        matchBody.show();
        matchModal.modal("show");
        matchModalTitle.text(`Match Found`);
        modalSubtitle.text("You matched...");
        userBody.text(`${name}`);
        userImage.attr('src',userImageUrl);
        matchBody.text(`${data.name}`)
        matchImage.attr("src", data.photo);
        $("img").height(200);
        $("form").trigger("reset");
      })
      .catch(error => {
        console.log(error);
      });


  }
});
