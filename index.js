const toasts = document.getElementById("toasts")

const successInput = document.getElementById("success")
const errorInput = document.getElementById("error")

const messageContent = document.getElementById("message-content")

const addButton = document.getElementById("add-button")
const clearButton = document.getElementById("clear-button")

const duration = document.getElementById("duration")

const cancelable = document.getElementById("cancelable")


addButton.addEventListener("click", () => {
    const divToast = document.createElement("div")
    divToast.classList.add("toast")
    divToast.append()
    if (successInput.checked) {
        divToast.classList.add("success-toast");
    }
    else {
        divToast.classList.add("error-toast");
    }

    const message = document.createElement("p");
    message.textContent = messageContent.value;
    message.classList.add("message");
    if (!messageContent.value) {
        if(successInput.checked){
      message.textContent="SUCCESS!"}
      else{
        message.textContent="ERROR"
      }
    }
  
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "x";
    cancelButton.classList.add("cancel-button");
    if (cancelable.checked) {
        divToast.prepend(message, cancelButton)
    }
    else {
        divToast.append(message)
    }
    cancelButton.addEventListener("click", () => {
        divToast.remove()
    })

if(duration.value==0){
    duration.value=500
}
    setTimeout(myStopFunction, +duration.value);
    function myStopFunction() {
        divToast.remove()
    }

    toasts.prepend(divToast)
    clearButton.addEventListener("click", () => {
        divToast.remove();
    })
})