    function addCloseButtons() {
      let myNodeList = document.getElementsByTagName("li");
      for (let i = 0; i < myNodeList.length; i++) {
        if (!myNodeList[i].querySelector(".close")) {
          let span = document.createElement("span");
          let txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          myNodeList[i].appendChild(span);
        }
      }

      let closeButtons = document.getElementsByClassName("close");
      for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function () {
          let div = this.parentElement;
          div.style.display = "none";
        };
      }
    }

    // Add check mark on click
    document.querySelector("ul").addEventListener(
      "click",
      function (ev) {
        if (ev.target.tagName === "LI") {
          ev.target.classList.toggle("checked");
        }
      },
      false
    );

    function newElement() {
      let li = document.createElement("li");
      let inputValue = document.getElementById("myInput").value;
      let txt = document.createTextNode(inputValue);
      li.appendChild(txt);

      if (inputValue === "") {
        alert("You must write something!");
      } else {
        document.getElementById("myUl").appendChild(li);
        document.getElementById("myInput").value = "";
        addCloseButtons(); // Add close button to new element
      }
    }

    // Initial run to add close buttons to existing items
    addCloseButtons();
 