function main() {

    const RED = "rgb(200,0,0)";
    const REDBORDER = `1px solid ${RED}`;


    const pass = document.querySelector("#password");
    const checkPass = document.querySelector("#checkPassword");
    const div = document.querySelector("#passContainer");
    const form = document.querySelector("#userInfo");
    const btn = document.querySelector("#createAccount");



    const passMismatch = document.createElement("p");
    passMismatch.textContent = "*Passwords do not match";
    passMismatch.style.color = RED;
    passMismatch.style.display = "none";
    div.appendChild(passMismatch);



    btn.addEventListener("click", e => {
        const validityCheck = checkPassMatch(pass.value, checkPass.value);
        if (validityCheck === false) {
            alert("Passwords do not match or are blank.")
            e.preventDefault();
        }
    });

    pass.addEventListener("input", () => {
        checkPassMatch(pass.value, checkPass.value);
    });

    checkPass.addEventListener("input", () => {
        checkPassMatch(pass.value, checkPass.value);
    });

    form.addEventListener("submit", e => {
        alert("Form submitted!");
        e.preventDefault();
        form.reset();
        checkPassMatch(pass.value, checkPass.value);
    });



    function checkPassMatch(passInputs, checkPassInputs) {
        if (passInputs === "" || checkPassInputs === "" || passInputs !== checkPassInputs) {
            
            passMismatch.style.display = "block";
            pass.style.border = REDBORDER;
            checkPass.style.border = REDBORDER;
            return false;

        } else {
            
            passMismatch.style.display = "none";
            pass.style.border = "";
            checkPass.style.border = "";
            return true;
        }
    }

    checkPassMatch(pass.value, checkPass.value);
}

main()

