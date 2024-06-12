window.addEventListener("load", function () {
  var headerHeight = document.querySelector(".page-header").clientHeight;
  var stickyNavbarElement = document.querySelector(".navbar-sticky");
  var courseInfoWrapper = document.querySelector(".course-info-wrapper");
  var checkoutWrapper = document.querySelector(".checkout-wrapper");
  var offset = 300;

  checkLocation();
  toggleStickyNavbar();

  window.addEventListener("scroll", function () {
    toggleStickyNavbar();
    toggleCheckoutPosition();
  });

  window.addEventListener("resize", function () {
    toggleCheckoutPosition();
  });
  toggleCheckoutPosition();

  function toggleStickyNavbar() {
    if (window.scrollY > headerHeight - offset) {
      return stickyNavbarElement.classList.add("visible");
    }
    stickyNavbarElement.classList.remove("visible");
  }

  function toggleCheckoutPosition() {
    if (window.innerHeight < checkoutWrapper.clientHeight + 100) {
      resetCheckoutWrapperPosition();
      return;
    }
    if (window.innerWidth > 991) {
      var maxScrollPos =
        courseInfoWrapper.offsetTop +
        courseInfoWrapper.clientHeight -
        checkoutWrapper.clientHeight -
        200;
      if (
        window.scrollY > courseInfoWrapper.offsetTop &&
        window.scrollY < maxScrollPos
      ) {
        checkoutWrapper.style.position = "fixed";
        checkoutWrapper.style.top = "100px";
        checkoutWrapper.style.marginLeft = "18px";
        return;
      } else if (window.scrollY >= maxScrollPos) {
        var padding = 200;
        checkoutWrapper.style.position = "absolute";
        checkoutWrapper.style.marginLeft = "18px";
        checkoutWrapper.style.top =
          courseInfoWrapper.offsetHeight -
          checkoutWrapper.offsetHeight -
          padding +
          "px";
        return;
      }
      resetCheckoutWrapperPosition();
    } else {
      resetCheckoutWrapperPosition();
    }
  }

  function resetCheckoutWrapperPosition() {
    checkoutWrapper.style.marginLeft = "0px";
    checkoutWrapper.style.position = "static";
  }

  registerNavigation();

  function registerNavigation() {
    var elements = document.querySelectorAll(".anchor");
    elements.forEach(function (el) {
      const href = el.getAttribute("href") || "";
      const isAnchor = href[0] === "#";
      if (!isAnchor) {
        return;
      }
      el.addEventListener("click", function (event) {
        if (!el.scrollIntoView) {
          return;
        }
        event.preventDefault();

        var targetElement = document.querySelector(el.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      });
    });
  }

  const newsletterAddButton = document.querySelector(".newsletter-form button");
  const newsletterEmailInput = document.querySelector("#newsletter-email");
  const formRef = document.querySelector(".newsletter-form form");
  if (newsletterAddButton && newsletterEmailInput) {
    formRef.addEventListener("submit", function (e) {
      e.preventDefault();

      newsletterAddButton.setAttribute("disabled", "disabled");
      newsletterEmailInput.setAttribute("disabled", "disabled");

      const value = newsletterEmailInput.value;
      const xhr = new XMLHttpRequest();
      const url =
        "https://nbdggbnqnrevwg6xlex3st3vpe0nyhiq.lambda-url.us-east-2.on.aws/?token=db1f899025b5a59a76b6b34b2a013893";
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        newsletterAddButton.classList.add("btn-success");
      };
      const data = JSON.stringify({ email: value });
      xhr.send(data);
    });
  }

  const body = this.document.querySelector('body');
  const mobileNavIcon = this.document.querySelector('.mobile-nav-icon');
  const mobileNav = this.document.querySelector('.mobile-nav');
  const mobileNavClose = this.document.querySelector('.mobile-nav-close');
  mobileNavIcon.addEventListener('click', function() {
    mobileNav.classList.add('open');
    body.classList.add('mobile-nav-open');
  });
  mobileNavClose.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    body.classList.remove('mobile-nav-open');
  });

  document.querySelectorAll(".category-heading").forEach(function (headingRef) {
    if (headingRef.classList.contains('category-heading--no-expand')) {
      return;
    }
    headingRef.addEventListener("click", function (el) {
      if (this.parentElement.classList.contains("opened")) {
        this.parentElement.classList.remove("opened");
        if (this.parentNode && this.parentNode.previousElementSibling) {
          this.parentNode.previousElementSibling.classList.remove(
            "opened-below"
          );
        }
        toggleCheckoutPosition();
      } else {
        this.parentElement.classList.add("opened");
        if (this.parentNode && this.parentNode.previousElementSibling) {
          this.parentNode.previousElementSibling.classList.add("opened-below");
        }
      }
    });
  });

  document.querySelectorAll("[data-extension-link]").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      const link = el.getAttribute("data-extension-link");
      window.open(link, "_blank");
    });
  });

    // Video modal
  const videoModalContainerRef = document.querySelector(
    ".video-modal-container"
  );
  const videoModalRef = document.querySelector(".video-modal");

  // Extensions modal
  document.querySelectorAll(".open-extension-trigger").forEach(function (buttonRef) {
    buttonRef.addEventListener("click", function (btnClickEvent) {
      const extensionKey = buttonRef.getAttribute("data-extension-key");
      if (!extensionKey) {
        return;
      }
      const extensionModalContainerRef = document.querySelector(`.extension-modal-container[data-extension-key='${extensionKey}']`);
      if (extensionModalContainerRef) {
        if (history.pushState) {
          history.pushState(null, null, `#${extensionKey}`);
        } else {
          location.hash = `#${extensionKey}`;
        }

        extensionModalContainerRef.classList.add("opened");

        const extensionModalRef = extensionModalContainerRef.querySelector('.extension-modal');
        const extensionModalContentRef = extensionModalContainerRef.querySelector('.extension-modal-content');
        const checkoutWrapperRef = extensionModalContainerRef.querySelector('.checkout-wrapper');
        const closeIconRef = extensionModalContainerRef.querySelector('.close-icon');

        const isCheckoutDisplayedInline = window.innerWidth >= 1070
        if (isCheckoutDisplayedInline) {
          const minContentHeight = extensionModalContentRef.clientHeight;
          extensionModalContentRef.style.height = '95vh';
          checkoutWrapperRef.style.height = minContentHeight + 'px';
        } else {
          extensionModalContentRef.style.height = '95vh';
        }

        const onCloseCleanup = function() {
          // Reset CSS
          extensionModalContainerRef.classList.remove("opened");

          if (isCheckoutDisplayedInline) {
            extensionModalContentRef.style.height = 'auto';
            checkoutWrapperRef.style.height = 'auto';
          }

          // Strip hash
          if (!window.location.hash) {
            return;
          }
          if (window.history.replaceState) {
            window.history.replaceState(null, null, ' ');
          } else {
            window.location.hash = '';
          }
        }

        const handler = function (event) {
          if (btnClickEvent === event) {
            return;
          }
          const isClickInside = extensionModalRef.contains(event.target);
          if (
            !isClickInside 
            && extensionModalContainerRef.classList.contains("opened")
            && videoModalContainerRef !== event.target
            && !videoModalContainerRef.contains(event.target)
          ) {
            onCloseCleanup();
            document.removeEventListener("click", handler);
          }
        };
        btnClickEvent.stopPropagation();
        document.addEventListener("click", handler);

        closeIconRef.addEventListener("click", function() {
          onCloseCleanup();
        }, { once: true });
      }
    });
  });

  document.querySelectorAll(".btn-watch").forEach(function (buttonRef) {
    buttonRef.addEventListener("click", function (btnClickEvent) {
      const videoId = btnClickEvent.target.getAttribute("data-video-id");
      if (!videoId) {
        return;
      }
      const vimeoIframe = getVimeoIframe(videoId);

      videoModalContainerRef.classList.add("opened");
      videoModalRef.innerHTML = vimeoIframe;

      const handler = function (event) {
        if (btnClickEvent === event) {
          return;
        }
        const vimeoIframeRef = document.querySelector(".video-modal iframe");

        const isClickInside = vimeoIframeRef.contains(event.target);
        if (
          !isClickInside &&
          videoModalContainerRef.classList.contains("opened")
        ) {
          videoModalContainerRef.classList.remove("opened");
          videoModalRef.textContent = "";

          document.removeEventListener("click", handler);
        }
      };
      document.addEventListener("click", handler);
    });
  });

  function checkIfAutoOpenModal () {
    let hash = window.location.hash;
    if (!hash) {
      return;
    }
    hash = hash.slice(1);
    const buttonRef = document.querySelector(`.open-extension-trigger[data-extension-key='${hash}']`);
    if (buttonRef) {
      buttonRef.click();
    }
  }
  checkIfAutoOpenModal();
});

function checkLocation() {
  /*const request = new XMLHttpRequest();
  const url = "https://pro.ip-api.com/json?fields=16386&key=b7VoEVfWO5L9bxN";
  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }
    try {
      let { status, countryCode } = JSON.parse(request.responseText);
      if (status !== "success") {
        return;
      }
      const isParityDiscount = [
        "IN",
        "BR",
        "PK",
        "TH",
        "ID",
        "PH",
        "NG",
        "VN",
      ].includes(countryCode);
      if (isParityDiscount) {
        showParityDiscountBar(countryCode);
        showParityDiscountTooltip(countryCode);
      } else {
        showPreorderBar();
      }
    } catch {
      showPreorderBar();
    }
  };
  request.onerror = showPreorderBar;
  request.open("GET", url);
  request.send();
  */
  showPreorderBar();

  function showPreorderBar() {
    document
      .querySelector(".preorder-discount-wrapper")
      .classList.add("visible");

    const timeleftDate = new Date(
      new Date(2020, 11, 28).getTime() - Date.now()
    );
    document.querySelector(".preorder-discount-wrapper .timeleft").textContent =
      "ONLY " + (timeleftDate.getUTCDate() - 1) + " days left!";
  }

  function showParityDiscountBar(countryCode) {
    document.querySelector(".parity-discount-wrapper").classList.add("visible");

    document
      .querySelector(".parity-discount-wrapper img")
      .setAttribute("src", "/img/flags/" + countryCode + ".svg");
  }

  function showParityDiscountTooltip(countryCode) {
    document.querySelector(".discount-tooltip").classList.add("visible");

    document
      .querySelector(".discount-tooltip img")
      .setAttribute("src", "/img/flags/" + countryCode + ".svg");
  }
}

function getVimeoIframe(videoId) {
  return `<iframe
  src="https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&sidedock=0"
  width="1170"
  height="675"
  frameborder="0"
  class="featured-lesson"
  allow="autoplay; fullscreen"
  allowfullscreen
></iframe>`;
}
