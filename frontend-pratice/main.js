const home = document.querySelector("#home");
const backButton = document.querySelector("#back-button");
const signup = document.querySelector("#signup");
const signupButton = document.querySelector("#signup-button");
const login = document.querySelector("#login");
// home.addEventListener("click", (event) => {
//     if (event.target.id === "signup-button") {
//         // alert("회원가입 버튼이 클릭되었습니다.");
//         home.hidden = true;
//         signup.hidden = false;
//     }
// }
// )
signupButton.addEventListener("click", () => {
        // alert("회원가입 버튼이 클릭되었습니다.");
        signup.hidden = false;
        home.hidden = true;
    }
)
backButton.addEventListener("click", () => {
    // alert("뒤로가기 버튼이 클릭되었습니다.");
    signup.hidden = true;
    home.hidden = false;
}
)