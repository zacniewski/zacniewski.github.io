const navbar = document.getElementById("main-navbar")

    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        navbar.classList.add("navbar-after-scroll")
      } else {
        navbar.classList.remove("navbar-after-scroll")
      }
    })