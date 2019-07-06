export class Loki {

  static db = 'authdb';

  static saveAuth(auth) {
    localStorage.setItem(this.db, auth);
  }

  static isAuth() {
    let au = localStorage.getItem(this.db);
    return au != null || au != undefined;
  }

  static removeAuth() {
    localStorage.removeItem(this.db);
  }

  static getAuth() {
    return localStorage.getItem(this.db);
  }

}
