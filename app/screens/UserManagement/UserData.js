class User {
  static currentUser = null;

  //other relevant code here

  static getCurrentUser() {
      return this.currentUser;
  }

  static setCurrentUser(user){
    this.currentUser = user;
  }
}

export default User;