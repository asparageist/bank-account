function BankAccount() {
  this.users = {};
  this.currentId = 0;
}

BankAccount.prototype.addUser = function(user) {
  user.id = this.assignId();
  this.users[user.id] = user;
};

BankAccount.prototype.assignId = function() {
this.currentId += 1;
return this.currentId;
};

// Bank Account constructor function
function BankContact(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}

//Deposit method
BankContact.prototype.deposit = function(amount) {
  this.balance += amount;
}

//Create Account function
// function createAccount() {
//     const name = document.getElementById("new-name").value;
//     const initialDeposit = parseFloat(document.getElementById("initial-deposit"))
//     if (name && initialDeposit) {
//         account = new BankAccount(name, initialDeposit);
//         document.getElementById("register").style.display = "none";
//         document.getElementById("transactions").style.display = "block";
//         updateBalance();
//     }
// }

// function deposit() {
//     const amount = parseFloat(document.getElementById("deposit").value);
//     if (amount) {
//         account.deposit(amount);
//         updateBalance():
      
//     }
// }


Define function to update balance display
function updateBalance() {
document.getElementById("new-name").innerHTML = name;
document.getElementById("initial-deposit").innerHTML = initialDeposit;
console.log(BankContact);
}