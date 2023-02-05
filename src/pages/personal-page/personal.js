import { checkValidation } from "../../helpers/nameValidators.js";

document.getElementById("firstname").addEventListener("input", () => {
  checkValidation("firstname");
});

document.getElementById("lastname").addEventListener("input", () => {
  checkValidation("lastname");
});