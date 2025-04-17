let users = [];

async function fetchUsers() {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const data = await response.json();
  users = data.data;
  displayUsers(users);
}

function displayUsers(userArray) {
  const list = document.getElementById("userList");
  list.innerHTML = "";
  userArray.forEach(user => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>ID:</strong> ${user.id} <br> 
                      <strong>Name:</strong> ${user.first_name} ${user.last_name} <br> 
                      <strong>Email:</strong> ${user.email}`;
    list.appendChild(item);
  });
}

document.getElementById("search").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = users.filter(u => u.first_name.toLowerCase().includes(keyword));
  displayUsers(filtered);
});

fetchUsers();
