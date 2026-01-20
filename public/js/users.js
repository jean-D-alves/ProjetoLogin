async function GetUsers() {
  try {
    const response = await fetch("/api/", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    if (response.status === 400) {
      ElementAlert("Bad request redirecting to home", "negativo");

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
    return data.data;
  } catch (erro) {}
}
async function AddUserTable() {
  const TableBody = document.getElementById("tbody");
  const users = await GetUsers();
  users.map((user) => {
    TableBody.innerHTML += `
          <tr id="${user.id}">
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
          </tr>`;
  });
}
function ElementAlert(message, status) {
  const main = document.querySelector("main");

  const div = document.createElement("div");
  div.classList.add("AlertElement");

  const button = document.createElement("button");
  button.textContent = "x";
  button.classList.add("ButtonAlert");
  button.onclick = () => {
    main.removeChild(div);
  };
  const text = document.createElement("p");
  text.textContent = message;

  if (status === "negativo") {
    div.classList.add("negativo");
    button.classList.add("negativo");
  }

  div.appendChild(text);
  div.appendChild(button);
  main.appendChild(div);
}
await AddUserTable();
