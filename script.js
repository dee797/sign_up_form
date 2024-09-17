function main() {

    const RED = "rgb(200,0,0)";
    const REDBORDER = `1px solid ${RED}`;
    const GRAYBORDER = "1px solid #E5E7EB";


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
    checkPassMatch();


    pass.addEventListener("input", (event) => {
        passInputs = event.data;
        checkPassMatch(passInputs, checkPassInputs);
    });

    checkPass.addEventListener("input", (event) => {
        checkPassInputs = event.data;
        checkPassMatch(passInputs, checkPassInputs);
    })

    pass.addEventListener("invalid", () => {
        passMismatch.style.display = "block";
        pass.style.border = REDBORDER;
    });

    checkPass.addEventListener("invalid", () => {
        checkPass.style.border = REDBORDER;
    });



    function checkPassMatch(passInputs, checkPassInputs) {
        if (passInputs !== checkPassInputs || (passInputs === "" && checkPassInputs == "")) {
            pass.dispatchEvent(new InputEvent("invalid"));
            checkPass.dispatchEvent(new InputEvent("invalid"));
        } else {
            passMismatch.style.display = "none";
            pass.style.border = "";
            checkPass.style.border = "";
        }
    }
}

main()

