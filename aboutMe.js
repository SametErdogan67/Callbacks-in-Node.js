function getName(callback) {
  setTimeout(() => {
    console.log("Hello! I am F-16 Fighting  Falcon Pilot.");
    callback();
  }, 2000);
}

function getAge(callback) {
  setTimeout(() => {
    console.log("I am 36 years old.");
    callback();
  }, 1000);
}

function getPlace(callback) {
  setTimeout(() => {
    console.log(
      "I was born in Zonguldak, Turkey and now I live in Alingsås, Sweden."
    );
    callback();
  }, 1000);
}

function getHobbies(callback) {
  setTimeout(() => {
    console.log(
      "My hobbies include coding, gaming, basketball playing  and  watching and swimming in the sea."
    );
    callback();
  }, 1000);
}

getName(() => {
  getAge(() => {
    getPlace(() => {
      getHobbies(() => {
        console.log("That`s about me and my hobbies.");
      });
    });
  });
});
