function Users(fName, lName) {
  // console.log(this);
  if (this instanceof Users) {
    this.firstName = fName;
    this.lastName = lName;
  } else {
    return new Users(fName, lName);
  }
}

let user1 = new Users('James', 'Madison');

Users.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

let user2 = new Users('James', 'Garfield');
