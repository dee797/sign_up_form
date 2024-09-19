window.onload = () => {
    document.forms[0].onsubmit = () => {
        alert("Form submitted!");
        document.forms[0].dispatchEvent(new FormDataEvent("reset"));
        return false;
    }
}


function main() {

    const RED = "rgb(200,0,0)";
    const REDBORDER = `1px solid ${RED}`;


    const pass = document.querySelector("#password");
    const checkPass = document.querySelector("#checkPassword");
    const div = document.querySelector("#passContainer");


    const passMismatch = document.createElement("p");
    passMismatch.textContent = "*Passwords do not match";
    passMismatch.style.color = RED;
    passMismatch.style.display = "none";
    div.appendChild(passMismatch);


    let passInputs = "";
    let checkPassInputs = "";


    pass.addEventListener("input", () => {
        passInputs = pass.value;
        checkPassMatch(passInputs, checkPassInputs);
    });

    checkPass.addEventListener("input", () => {
        checkPassInputs = checkPass.value;
        checkPassMatch(passInputs, checkPassInputs);
    });

    pass.addEventListener("invalid", () => {
        passMismatch.style.display = "block";
        pass.style.border = REDBORDER;
    });

    checkPass.addEventListener("invalid", () => {
        checkPass.style.border = REDBORDER;
    });



    function checkPassMatch(passInputs, checkPassInputs) {
        if (passInputs === "" || checkPassInputs === "" || passInputs !== checkPassInputs) {
            pass.dispatchEvent(new InputEvent("invalid"));
            checkPass.dispatchEvent(new InputEvent("invalid"));
        } else {
            passMismatch.style.display = "none";
            pass.style.border = "";
            checkPass.style.border = "";
        }
    }

    checkPassMatch(passInputs,checkPassInputs);
}

main()

