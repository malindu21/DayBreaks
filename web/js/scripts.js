/* 
   Author: Malindu Kirindegama
   Created: Oct 2023
   Description: Day Break
*/

function onclickPackage(packageId, van4Price, suv4Price, van7Price, suv7Price) {
  window.location.href = "tour.html?packageId=" + packageId;
  localStorage.setItem("packageId", packageId);
  localStorage.setItem("van4Price", van4Price);
  localStorage.setItem("suv4Price", suv4Price);
  localStorage.setItem("van7Price", van7Price);
  localStorage.setItem("suv7Price", suv7Price);
}

(function ($) {
  const sentences1 = [
    "Day tours",
    "For families & small groups",
    "Travel, Explore, Repeat!",
    "#daybreak",
  ];

  const Box1 = ["Pickup & Drop-off"];

  const Box2 = ["Private group"];

  const Box3 = ["Chauffeur service"];

  const Box4 = ["Free Photography"];

  const Box5 = ["Beverages on-board"];

  const Box6 = ["Lunch Included"];
  const speed = 150; // typing speed in milliseconds

  // First Typewriter
  const typewriterElement1 = document.getElementById("typewriter-text");
  const cursorElement1 = document.getElementById("cursor");

  $(window).on("scroll load", function () {
    if ($(".navbar").length > 0) {
      if ($(".navbar").offset().top > 20) {
        $(".fixed-top").addClass("top-nav-collapse");
      } else {
        $(".fixed-top").removeClass("top-nav-collapse");
      }
    }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $(document).on("click", "a.page-scroll", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 100,
          },
          100,
          "easeInOutExpo"
        ); // Reduced duration to 300 milliseconds
      event.preventDefault();
    });
  });

  $(document).ready(function () {
    $(this).scrollTop(0);
  });

  // closes the responsive menu on menu item click
  $(".navbar-nav li a").on("click", function (event) {
    if (!$(this).parent().hasClass("dropdown"))
      $(".navbar-collapse").collapse("hide");
  });

  /* Filter - Isotope */
  var $grid = $(".grid").isotope({
    // options
    itemSelector: ".element-item",
    layoutMode: "fitRows",
  });

  // filter items on button click
  $(".filters-button-group").on("click", "a", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $(".button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "a", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });

  /* Counter - CountTo */
  var a = 0;
  $(window).scroll(function () {
    if ($("#counter").length) {
      // checking if CountTo section exists in the page, if not it will not run the script and avoid errors
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              },
            }
          );
        });
        a = 1;
      }
    }
  });

  /* Move Form Fields Label When User Types */
  // for input and textarea fields
  $("input, textarea").keyup(function () {
    if ($(this).val() != "") {
      $(this).addClass("notEmpty");
    } else {
      $(this).removeClass("notEmpty");
    }
  });

  if (cursorElement1 != null) {
    typeWritterHomePage();
  }

  function typeWritterHomePage() {
    // Start the first typewriter
    typeWriter(0, sentences1, typewriterElement1, cursorElement1);

    // Start the second typewriter
    // typeWriter(0, Box1, typewriterElementBox1, cursorElement1);
    // typeWriter(0, Box2, typewriterElementBox2, cursorElement1);
    // typeWriter(0, Box3, typewriterElementBox3, cursorElement1);
    // typeWriter(0, Box4, typewriterElementBox4, cursorElement1);
    // typeWriter(0, Box5, typewriterElementBox5, cursorElement1);
    // typeWriter(0, Box6, typewriterElementBox6, cursorElement1);
  }

  function typeWriter(
    sentenceIndex,
    sentences,
    typewriterElement,
    cursorElement
  ) {
    let i = 0;
    const currentSentence = sentences[sentenceIndex];

    function type() {
      if (i < currentSentence.length) {
        typewriterElement.innerHTML += currentSentence.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // Move to the next sentence after typing
        cursorElement.style.display = "none"; // hide cursor while waiting
        setTimeout(() => {
          typewriterElement.innerHTML = "";
          cursorElement.style.display = "inline"; // show cursor before starting the next sentence
          const nextSentenceIndex = (sentenceIndex + 1) % sentences.length;
          typeWriter(
            nextSentenceIndex,
            sentences,
            typewriterElement,
            cursorElement
          );
        }, 1000); // wait for 1 second before starting the next sentence
      }
    }

    cursorElement.style.display = "inline"; // show cursor
    type();
  }

  /**Tour package list **/

  fetch("https://raw.githubusercontent.com/malindu21/DayBreaks/main/web/js/package_list.json")
    .then((response) => response.json())
    .then((data) => {
      let packageList = data;
      let packageHtml = "";
      for (let i = 0; i < packageList.length; i++) {
        let package = packageList[i];
        packageHtml += `
        <div class="tour-package-wrapper">
          <div class="fs-4 fw-bold mb-2 pl-2">Tour ${i + 1}</div>  
          <div id="lazyLoadDiv" class="tour-package d-flex flex-column justify-content-between px-2 py-3"
            style="background-image: url('${package["backgroundImage"]}');"
            onclick="onclickPackage(
                '${package["id"]}',
                '${package["pricePerPersonVan"]}',
                '${package["pricePerPersonSuv"]}',
                '${package["pricePerPersonVan"] * 7}',
                '${package["pricePerPersonVan"] * 4}')" 
                role="button">
          <div class="tour-card-header blur-bg  px-2 py-3">
           <div class="mr-2">
              <div class="header-text-heading">${package["heading"]}</div>
              <div class="header-text-subHeading">${package["subHeading"]}</div>
           </div>
           ${
             package["icon"].startsWith("image")
               ? `<img src="${package["icon"]}" class="tour-package-middle-icon" alt="icon" height="40px" width="40px">`
               : `<i class="fa-solid ${package["icon"]} fa-inverse fa-2x tour-package-middle-icon"></i>`
           }
          </div>
          <div class="tour-card-body blur-bg px-2 py-3" style="text-align: center;">
            <div class="tour-card-body-text text-white" style="font-size: 17px;margin-bottom: 10px;">
              ${package["description"]}
            </div>
            <div class="tour-card-body-price text-white fw-bold" style="font-size: 25px;">
              $${package["pricePerPersonVan"]} Per Person
            </div>
          </div>
          <div class="tour-card-footer blur-bg text-white py-3">
            <a id="bookPackageThree" href="tour.html" role="button" onclick="onclickPackage(
              '${package["id"]}',
              '${package["pricePerPersonVan"]}',
              '${package["pricePerPersonSuv"]}',
              '${package["pricePerPersonVan"] * 7}',
              '${package["pricePerPersonVan"] * 4}')"
                class="btn btn-lg btn-dark text-regular w-50 rounded-pill  px-3 py-3">
                Book Now
            </a>
           <div class="duration-wrapper">
              <i class="fas fa-clock" style="font-size: 20px;"></i>
              <div class="duraiton-text" style="font-size: 14px;">
                 ${package["durationInHours"]}hrs
              </div>
              </div>
              <div class="timslot-wrapper">
                ${package["tourTimes"]}
              </div>
            </div>
          </div>
        </div>
      `;
        document.getElementById("tour-package-list").innerHTML = packageHtml;
      }
    });

  /****** Tour package list *******/

  /* Contact Form */
  $("#contactForm")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        cformError();
        csubmitMSG(false, "Please fill all fields!");
      } else {
        // everything looks good!
        event.preventDefault();
        csubmitForm();
      }
    });

  function csubmitForm() {
    // initiate variables with form content
    var name = $("#cname").val();
    var email = $("#cemail").val();
    var message = $("#cmessage").val();
    var terms = $("#cterms").val();
    $.ajax({
      type: "POST",
      url: "php/contactform-process.php",
      data:
        "name=" +
        name +
        "&email=" +
        email +
        "&message=" +
        message +
        "&terms=" +
        terms,
      success: function (text) {
        if (text == "success") {
          cformSuccess();
        } else {
          cformError();
          csubmitMSG(false, text);
        }
      },
    });
  }

  function cformSuccess() {
    $("#contactForm")[0].reset();
    csubmitMSG(true, "Message Submitted!");
    $("input").removeClass("notEmpty"); // resets the field label after submission
    $("textarea").removeClass("notEmpty"); // resets the field label after submission
  }

  function cformError() {
    $("#contactForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass();
        }
      );
  }

  function csubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center tada animated";
    } else {
      var msgClasses = "h3 text-center";
    }
    $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
  }

  //  function changeBackgroundImage() {
  //     const header = document.getElementById('header');
  //     const randomIndex = Math.floor(Math.random() * imageUrls.length);
  //     const randomImageUrl = imageUrls[randomIndex];

  //     // Use the Image object to preload the image before updating the background
  //     const tempImage = new Image();
  //     tempImage.src = randomImageUrl;
  //     tempImage.onload = function () {
  //       header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("${randomImageUrl}")`;
  //     };
  //   }

  //   // Change the background image every 5 seconds (adjust the interval as needed)
  //   setInterval(changeBackgroundImage, 5000);

  /* Back To Top Button */
  // create the back to top button
  $("body").prepend(
    '<a href="body" class="back-to-top page-scroll">Back to Top</a>'
  );
  var amountScrolled = 700;
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("500");
    } else {
      $("a.back-to-top").fadeOut("500");
    }
  });

  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function () {
    $(this).blur();
  });
})(jQuery);
