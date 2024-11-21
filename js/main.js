document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const btn = document.querySelector(".btn");
  const input = document.querySelector(".input");
  const form = document.querySelector(".form");
  const wheel = document.getElementById("wheel");

  let isSpinning = false;

  const TEL_NUMBERS = [
    "+998 95 123 33 52",
    "+998 98 456 78 98",
    "+998 99 100 00 10",
    "+998 55 412 55 05",
    "+998 90 410 10 20",
    "+998 97 952 00 80",
  ];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue) {
      TEL_NUMBERS.unshift(inputValue); 
      input.value = "";
    }
    console.log("Hozirgi telefon raqamlari ro'yxati:", TEL_NUMBERS);
  });

  btn.addEventListener("click", () => {
    if (isSpinning) return; 

    btn.setAttribute("disabled", true);
    isSpinning = true;

    let interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * TEL_NUMBERS.length);
      title.textContent = TEL_NUMBERS[randomIndex];
    }, 50);

    const randomRotation = Math.floor(Math.random() * 3600 + 360);
    wheel.style.transition = "transform 3s ease-out";
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    setTimeout(() => {
      clearInterval(interval);
      btn.removeAttribute("disabled"); 
      const finalIndex = Math.floor(Math.random() * TEL_NUMBERS.length);
      title.textContent = TEL_NUMBERS[finalIndex];
      isSpinning = false; 
    }, 3000);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.querySelector(".dark_btn");

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "Light Mode";
    } else {
      darkModeToggle.textContent = "Dark Mode";
    }
  });
});

