const doorType = document.querySelector("#door-type");
const doorInputs = [...document.querySelector(".door-inputs").children];

doorType.addEventListener("change", (event) => {
  if (event.currentTarget.value === "flush") {
    doorInputs.forEach((ele) => {
      if (ele.classList.contains("stile-rail-doors")) {
        ele.classList.add("off");
      }
    });
  }
});
