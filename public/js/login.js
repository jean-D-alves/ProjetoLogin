const form = document.getElementById("formTag");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("ilogin").value;
  const password = document.getElementById("isen").value;
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (data) {
      ElementAlert(
        data.statusText,
        data.status === 200 ? "positive" : "negativo"
      );
    }
    const token = SaveToken(data.data.token);
    return token;
  } catch (error) {
    ElementAlert("The backend is not working", "negativo");
  }
});
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
function SaveToken(token) {
  const save = localStorage.setItem("token", token);
  return save;
}
