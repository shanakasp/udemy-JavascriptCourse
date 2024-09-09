function sayHI() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name && age) {
    document.write(`Hello, ${name}! You are ${age} years old.`);
  } else {
    document.write("Please enter both your name and age.");
  }
}
