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
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { db, authentication } from "../../firebase/firebase";
import { async } from "@firebase/util";

export default class User{
  static currentUser = null;
  constructor(user) {
    this.users = users;
  }
  static async getCurrentUser(){
    const q = query(collection(db, "users"), where("email", "==", authentication.currentUser.email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      User.currentUser = doc.data();
    });
  };
}
