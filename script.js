let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = {
    name,
    email,
    password
  };

  // Push to array
  users.push(user);

  // Save to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // AJAX POST
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
    console.log("Server Response:", data);
    alert("User Registered Successfully!");
    window.location.href = "list.html";
  })
  .catch(err => console.log(err));
});