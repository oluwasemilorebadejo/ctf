/* eslint-disable */

import "@babel/polyfill"; // gives older browsers access to new js features
import { login } from "./login";
import { signup } from "./signup";

// DOM ELEMENTS
const loginForm = document.querySelector(".form--login");
const signupForm = document.querySelector(".form--signup");

console.log(signupForm);

// DELEGATION
if (loginForm)
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    login(email, password);
  });

if (signupForm)
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;

    signup(name, email, password, passwordConfirm);
  });
