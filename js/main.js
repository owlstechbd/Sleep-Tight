//faq

 document.querySelectorAll(".faq-question").forEach((question) => {
      question.addEventListener("click", () => {
        const parent = question.parentElement;
        const icon = question.querySelector(".faq-icon");

        // close all
        document.querySelectorAll(".faq-item").forEach((item) => {
          item.classList.remove("active");
          item.querySelector(".faq-icon").textContent = "+";
        });

        // open clicked one
        parent.classList.add("active");
        icon.textContent = "−";
      });
    });

//animated
AOS.init();

//message
var _gorilla = _gorilla || {};
  _gorilla.account_id = 'd11b9a0c7ace77dba127eba33bd7a49f';
  _gorilla.loaded = false;
  _gorilla.chatbot = false;
  var _gorillaInitPortal = function () {
      _gorilla.loaded = true;
      var a = document.createElement('script');
      a.type = 'text/javascript';
      a.async = !0;
      a.defer = !0;
      a.src = 'https://app.gorilladesk.com/js/portal/portal.js';
      var b = document.getElementsByTagName('script')[0];
      b.parentNode.insertBefore(a, b);
  };
  window.addEventListener
      ? window.addEventListener('load', _gorillaInitPortal, !1)
      : window.attachEvent
      ? window.attachEvent('onload', _gorillaInitPortal)
      : (window.onload = _gorillaInitPortal);