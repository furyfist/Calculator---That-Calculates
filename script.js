const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += event.target.innerHTML.trim();
  });
});

document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (event) {
    const operation = event.target.innerHTML.trim();
    let lastValue = inputValue.innerText.slice(-1);

    if (operation === "=") {
      try {
        if (!isNaN(lastValue)) {
          inputValue.innerText = eval(inputValue.innerText);
        }
      } catch (e) {
        inputValue.innerText = "NaN";
      }
    } else if (operation === "AC") {
      inputValue.innerText = "0";
    } else if (operation === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1);
      if (inputValue.innerText.length === 0) {
        inputValue.innerText = "0";
      }
    } else if (operation === "%") {
      if (!isNaN(lastValue)) {
        inputValue.innerText = eval(inputValue.innerText + "/100");
      }
    } else {
      if (!isNaN(lastValue) || lastValue === ".") {
        inputValue.innerText += operation;
      }
    }
  });
});
