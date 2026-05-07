const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

      link.addEventListener("click", function(){

        navLinks.forEach(item => {
          item.classList.remove("active-link");
        });

        this.classList.add("active-link");

      });

    });

    // DROPDOWN MENU
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");

    dropdownBtn.addEventListener("click", () => {

      dropdownMenu.classList.toggle("show-dropdown");

    });

    // MOBILE MENU
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {

      mobileMenu.classList.toggle("show-menu");

    });

    // CHANGE HERO TEXT
    const heroText = document.getElementById("heroText");
    const changeTextBtn = document.getElementById("changeTextBtn");

    changeTextBtn.addEventListener("click", () => {

      heroText.textContent =
      "JavaScript can dynamically change website content instantly.";

    });

    // DARK MODE
    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode");

      if(document.body.classList.contains("dark-mode")){

        themeBtn.textContent = "Light Mode";

        themeBtn.classList.remove("bg-black");
        themeBtn.classList.add("bg-white");
        themeBtn.classList.add("text-black");

      }else{

        themeBtn.textContent = "Dark Mode";

        themeBtn.classList.remove("bg-white");
        themeBtn.classList.remove("text-black");

        themeBtn.classList.add("bg-black");
        themeBtn.classList.add("text-white");

      }

    });

    // DISPLAY USER INPUT
    const nameInput = document.getElementById("nameInput");
    const displayBtn = document.getElementById("displayBtn");
    const displayText = document.getElementById("displayText");

    displayBtn.addEventListener("click", () => {

      if(nameInput.value.trim() === ""){

        displayText.textContent =
        "Please enter your name.";

      }else{

        displayText.textContent =
        "Welcome " + nameInput.value + " 👋";

      }

    });

    // DYNAMIC LIST
    const itemInput = document.getElementById("itemInput");
    const addItemBtn = document.getElementById("addItemBtn");
    const activityList = document.getElementById("activityList");

    function createListItem(text){

      const li = document.createElement("li");

      li.textContent = text;

      li.className =
      "list-item shadow-lg px-5 py-4 rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-300";

      li.addEventListener("click", () => {

        li.remove();

      });

      activityList.appendChild(li);

    }

    addItemBtn.addEventListener("click", () => {

      if(itemInput.value.trim() !== ""){

        createListItem(itemInput.value);

        itemInput.value = "";

      }

    });

    // SEARCH
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keyup", () => {

      const filter =
      searchInput.value.toLowerCase();

      const items =
      document.querySelectorAll("#activityList li");

      items.forEach(item => {

        const text =
        item.textContent.toLowerCase();

        if(text.includes(filter)){

          item.style.display = "block";

        }else{

          item.style.display = "none";

        }

      });

    });

    // ACTIVITY CARDS
    const activityButtons =
    document.querySelectorAll(".activityBtn");

    activityButtons.forEach(button => {

      button.addEventListener("click", () => {

        const activityName =
        button.parentElement.querySelector("h3").textContent;

        createListItem(activityName);

      });

    });
