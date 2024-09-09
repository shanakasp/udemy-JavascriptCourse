var uid = prompt("Enter User ID", "User ID");
var pwd = prompt("Enter your password", "Password");

if (uid && pwd) {
  var message = uid === "john" && pwd === "1234" ? "Welcome" : "Invalid User";
} else {
  var message = "Please enter both User ID and Password.";
}

alert(message);
