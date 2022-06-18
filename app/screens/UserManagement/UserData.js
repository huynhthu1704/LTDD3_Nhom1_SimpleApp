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

export default class User {
  static currentUser = null;
  constructor(user) {
    this.users = users;
  }
  static async getCurrentUser() {
    const q = query(collection(db, "users"), where("email", "==", authentication.currentUser.email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      User.currentUser = doc.data();
    });
  };

  static isEmail(emailStr) {
    var emailPat = /^(.+)@(.+)$/
    var specialChars = "\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
    var validChars = "\[^\\s" + specialChars + "\]"
    var quotedUser = "(\"[^\"]*\")"
    var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
    var atom = validChars + '+'
    var word = "(" + atom + "|" + quotedUser + ")"
    var userPat = new RegExp("^" + word + "(\\." + word + ")*$")
    var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$")
    var matchArray = emailStr.match(emailPat)
    if (matchArray == null) {
      return false
    }
    var user = matchArray[1]
    var domain = matchArray[2]

    // See if "user" is valid
    if (user.match(userPat) == null) {
      return false
    }
    var IPArray = domain.match(ipDomainPat)
    if (IPArray != null) {
      // this is an IP address
      for (var i = 1; i <= 4; i++) {
        if (IPArray[i] > 255) {
          return false
        }
      }
      return true
    }
    var domainArray = domain.match(domainPat)
    if (domainArray == null) {
      return false
    }

    var atomPat = new RegExp(atom, "g")
    var domArr = domain.match(atomPat)
    var len = domArr.length

    if (domArr[domArr.length - 1].length < 2 ||
      domArr[domArr.length - 1].length > 3) {
      return false
    }

    // Make sure there's a host name preceding the domain.
    if (len < 2) {
      return false
    }

    // If we've gotten this far, everything's valid!
    return true;
  }
  static checkPassword(passwordStr) {
    if (passwordStr.length < 8) {
      return false;
    }
    const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-= ";
    for (let index = 0; index < specialChars.length; index++) {
      if (passwordStr.includes(specialChars[index])) {
        return false;
      }
    }
    const AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const az = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    var haveCapitalLetter = false;
    var check = {
      haveCapitalLetter: false,
      haveLowercaseLetter: false,
      haveNumberLetter: false
    }
    for (let index = 0; index < AZ.length; index++) {
      if (passwordStr.includes(AZ[index])) {
        check.haveCapitalLetter = true;
        break;
      }
    }
    if (check.haveCapitalLetter == false) {
      return false;
    }
    for (let index = 0; index < az.length; index++) {
      if (passwordStr.includes(az[index])) {
        check.haveLowercaseLetter = true;
        break;
      }
    }
    if (check.haveLowercaseLetter == false) {
      return false;
    }
    for (let index = 0; index < number.length; index++) {
      if (passwordStr.includes(number[index])) {
        check.haveNumberLetter = true;
        break;
      }
    }
    if (check.haveNumberLetter == false) {
      return false;
    }
    return true;
  }
}
