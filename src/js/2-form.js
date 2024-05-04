let formData  = { email: "", message: "" };
const form = document.querySelector(".feedback-form");
const formDataKey = "feedback-form-state";

const { email, message } = form.elements;

const savedFormData = JSON.parse(localStorage.getItem(formDataKey));
 if (savedFormData) {
    email.value = savedFormData.email;
    message.value = savedFormData.message;
 }


form.addEventListener("input", (event) => {
    formData.email = email.value.trim();
    formData.message = message.value.trim();
    
    localStorage.setItem(formDataKey, JSON.stringify(formData));
});



form.addEventListener("submit", (event) => {
 event.preventDefault();
    if ( email.value === "" || message.value === "") {
       alert("Fill please all fields");
       return; 
    }
    console.log(formData);
    localStorage.removeItem(formDataKey);
     form.elements.email.value = "";
     form.elements.message.value = "";

     form.reset();
 });