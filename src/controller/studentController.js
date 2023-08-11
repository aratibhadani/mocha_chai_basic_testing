const { default: axios } = require("axios");

class Student {
  constructor() {}
  home(type) {
    let data = this.getInfo(type, 1);
    return data;
  }
  home2(type) {
    let data = this.getInfo2(type, 1);
    return data;
  }
  getInfo() {
    return 10;
  }
  getInfo2() {
    return 10;
  }
  getuserId() {
    return 12;
  }
  finalmarks(total) {
    let external = this.getExternal(total); //5 //reason is stub.withArgs(40).returns(5)
    let internal = this.getInternal(total); //39
    let finalSum = external + internal + 10; //5+39+10=54
    return finalSum;
  }
  getExternal(total) {
    return total + 1;
  }
  getInternal(total) {
    return total - 1;
  }
  getDBData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 3000);
    }).then((result) => result);
  }

  getDummyEmpData() {
    return new Promise((resolve, reject) => {
      axios.get("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
        console.log("BE>>>>", data.data);
        resolve(data.data);
      });
    });
  }
}
module.exports = Student;
