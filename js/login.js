const $userId = document.getElementById("userId");
const $userPassword = document.getElementById("userPassword");
const $logInButton = document.getElementById("logInButton");

logInButton.addEventListener("click", () => {
  logIn();
});

function logIn(event) {
  if ($userId.value !== "WOOJINLEEdev") {
    alert("일치하는 회원 정보가 없습니다.");
    $userId.focus();
    event.preventDefault();
    return false;
  }

  if ($userPassword.value !== "123456") {
    alert("비밀번호가 일치하지 않습니다.");
    $userPassword.focus();
    return false;
  }

  alert("로그인되었습니다.");
  console.log("로그인 성공");
}
