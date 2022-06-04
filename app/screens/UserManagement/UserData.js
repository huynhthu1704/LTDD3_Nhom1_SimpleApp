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