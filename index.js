const fakeBasicAuth = () => {
  console.log("fakeBasicAuth");
  const setPass = `aaa`.toUpperCase();
  const whiteURL = [];
  const htmlElStyle = document.querySelector("html").style;
  htmlElStyle.opacity = 0;
  const localPass = localStorage.getItem("fakeAuthStr");

  let returnToggle = false;
  whiteURL.forEach((url) => {
    if (location.host.includes(url)) {
      htmlElStyle.opacity = 1;
      returnToggle = true;
    }
  });
  if (returnToggle) return;

  if (localPass !== null && localPass === setPass) {
    htmlElStyle.opacity = 1;
    return;
  }
  const allRemove = () => {
    htmlElStyle.opacity = 0;
    htmlElStyle.pointerEvents = "none";
    document.body.remove();
    document.head.remove();
    window.alert("パスワードが違います");
  }
  window.setTimeout(() => {
    let password = window.prompt("パスワードを入力してください", "");

    if (password === null) {
      allRemove()
    }
    password = password.toUpperCase();

    if (password.toUpperCase() === setPass) {
      localStorage.setItem("fakeAuthStr", password);
      htmlElStyle.opacity = 1;
    } else {
      allRemove()
    }
  }, 100);
};


fakeBasicAuth()