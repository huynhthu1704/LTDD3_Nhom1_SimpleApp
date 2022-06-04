// class User {
//   static currentUser = null;

//   //other relevant code here

//   static getCurrentUser() {
//       return this.currentUser;
//   }

//   static setCurrentUser(user){
//     this.currentUser = user;
//   }
// }

// export default User;
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase";
import { async } from "@firebase/util";

export default class User{
  static currentUser = null;
  constructor(user) {
    this.users = users;
  }
  getUsers = async () => {
    const usersCol = collection(db, 'users');
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map(doc => doc.data());
    this.users = userList;
  }
}
