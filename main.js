//Get Data
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate Data
function validateForm()
{

    clearMessage();
    let errorFlag = false;

    if(nameInput.value.length < 1)
    {
        errorNodes[0].innerText = "Name Cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailValid(emailInput.value))
    {
        errorNodes[1].innerText = "Invalid email address";
        emailInput.classList.add("error-border");
        errorFlag = true;
    }
    if(messageInput.value.length < 1)
    {
        errorNodes[2].innerText = "Please Enter Message";
        messageInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }

} 

//Clear error / success message
function clearMessage()
{
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    messageInput.classList.remove("error-border");
}

//Check if email is valid
function emailValid(emailInput) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(emailInput);
}