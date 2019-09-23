const friendsArray = require("../data/friends");
module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });

  app.post("/api/friends", (req, res) => {
    const {
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
    } = req.body;

    const userAnswersArray = [
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
    ];


    let usersObjectsArray = [];
    let differencesArray = [];
    let match = {}

    for (const userObject of friendsArray) {
      const userObjWithDiff = compareAnswers(userAnswersArray, userObject);
      usersObjectsArray.push(userObjWithDiff);
    }

    for (const userObject of usersObjectsArray) {
      differencesArray.push(userObject.difference);
    }

    for (const user of usersObjectsArray) {
      if (user.difference === Math.min(...differencesArray)) {
        match = user;
        break;
      }
    }

    // console.log(Math.min(...totalDifferencesArray));

    res.json(match);
  });

};

const compareAnswers = (userAnswers, friend) => {
    let totalDifference = 0;
    for (let i=0; i < userAnswers.length; i++) {
      totalDifference = totalDifference + Math.abs(userAnswers[i]-friend.scores[i]);
    }
    return {
      name: friend.name,
      photo: friend.photo,
      difference: totalDifference
    };
  };
