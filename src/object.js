function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  this.score++;
};

UserCreator.prototype.login = function () {
  console.log('you are logged in');
};

const user1 = new UserCreator('ALfred', 567890);
user1.increment();

// how to build the new key word from scratch

class UserCreators {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }

  login() {
    console.log('you are logged in');
  }
}

const user2 = new UserCreators('ALfred', 567890);
user2.increment();
