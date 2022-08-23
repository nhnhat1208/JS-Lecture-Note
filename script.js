function User(name, age){
    this.name = name;
    this.age = age;
}
User.prototype.job = 'Dev';
User.address = '2HCM';

let user = new User('Ng Van A', 18);
console.log(user.job); // D
console.log(user.address)