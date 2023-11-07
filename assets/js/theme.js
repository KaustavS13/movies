
function checkDarkModePreference() {
  // document.body.classList.toggle('dark-mode')
  // document.body.classList.add('dark-mode')
  if (localStorage.getItem('lightMode') === 'enabled') {
    document.body.classList.add('dark-mode')
    icon.src = "../assets/images/sun.png";
  }
}

// document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem('lightMode', 'enabled')
    icon.src = "../assets/images/sun.png";
  } else {
    icon.src = "../assets/images/moon.png";
    localStorage.setItem('lightMode', 'disabled')
  }
}

