const submitBtn = document.querySelector(".Contact__Button");
const txtArea = document.querySelector(".Contact__Textarea");

submitBtn.addEventListener("click", () => {
  txtArea.value = "";
  alert("Your message has been sent successfully");
});
