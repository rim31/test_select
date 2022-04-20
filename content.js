// alert("Hello from your Chrome extension!");
function getElementsByText(str, tag = "a") {
    return Array.prototype.slice
      .call(document.getElementsByTagName(tag))
      .filter(function trimmer(elem) {
        // console.log(elem, str);
        // console.log(elem.include(str));
        if (
          elem.toLoweCase().textContent.trim().includes(str.toLoweCase().trim())
        )
          return elem
            .toLoweCase()
            .textContent.trim()
            .includes(str.toLoweCase().trim());
        // return elem.toLoweCase().textContent.trim() === str.toLoweCase().trim();
      });
  }
  function getElementsByText(str, tag = "a") {
    return Array.prototype.slice
      .call(document.getElementsByTagName(tag))
      .filter((el) => el.textContent.trim() === str.trim());
  }
  // cas 1 : tableau de refuser tout
  var refusesArray = ["refuser tout", "rejeter tout", "disagree"];
  
  // cas 2 : doit choisir plus doption puis refuser tout
  var optionsArray = [];
  
  function findString(text) {
    console.log(`debug`, Window.find(text));
  }
  function changeBackgroundRed() {
    document.body.style.background = "#151B8D";
    $('span:contains("4G"):last').css("background-color", "red");
    // $('span:contains("Sign"):last').css("background-color", "red");
    // $("div:contains('Lol')").css("text-decoration", "underline");
  
    // var element = $("span:contains('accepter')");
    // console.log(`element`, element);
    // findString("Sign");
    // console.log(getElementsByText("Sign", "span"));
  
    // getElementsByText("refuser", "span");
    // var Accept = getElementsByText("sign up with", "a");
    // if (Accept.length) {
    //   alert(Accept.length);
    //   console.log(`Accept`, Accept);
    // }
  }
  // call the function when the whole DOM content is loaded
  document.addEventListener("DOMContentLoaded", function () {
    return setTimeout(function () {
      changeBackgroundRed();
    }, 2000);
  });
  
  // $(document).ready(function () {
  //   document.body.style.background = "hotpink";
  //   console.log("jquery");
  // });
  