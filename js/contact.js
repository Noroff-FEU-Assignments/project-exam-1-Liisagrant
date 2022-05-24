const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#name-error p");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error p");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error p");
const message = document.querySelector("#message");
const messegeError = document.querySelector("#message-error p");
const succsess = document.querySelector(".success");

const validationForm = (event) => {
  event.preventDefault();

  if (checkLength(fullName.value, 5) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validEmail(email.value, 5) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 25) === true) {
    messegeError.style.display = "none";
  } else {
    messegeError.style.display = "block";
  }

  if (
    checkLength(fullName.value, 5) === true &&
    validEmail(email.value) === true &&
    checkLength(subject.value, 15) === true &&
    checkLength(message.value, 25) === true
  ) {
    succsess.style.display = "block";
    form.style.display = "none";
  } else {
    succsess.style.display = "none";
  }
};

form.addEventListener("submit", validationForm);

const checkLength = (value, len) => {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
};

const validEmail = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
};
