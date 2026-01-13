const form = document.getElementById("formTag");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("ilogin").value;
  const password = document.getElementById("isen").value;
  try {
    const response = await fetch("http://localhost:3000/login", {
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
    console.log(data)
    const token = SaveToken(data.data.token);
    return token;
  } catch (error) {
    console.log(error);
  }
});

function SaveToken(token) {
  const save = localStorage.setItem("token", token);
  return save;
}
