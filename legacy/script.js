(function () {
  var body = document.body;
  var header = document.querySelector(".site-header");
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  var revealItems = document.querySelectorAll(".reveal");
  var counterItems = document.querySelectorAll("[data-count]");
  var accordionToggles = document.querySelectorAll(".accordion-toggle, .faq-toggle");
  var form = document.getElementById("audit-form");
  var submitButton = document.getElementById("submit-button");
  var formStatus = document.getElementById("form-status");

  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  function toggleMenu(forceState) {
    if (!menuToggle || !mobileMenu) return;

    var isOpen = typeof forceState === "boolean" ? forceState : !mobileMenu.classList.contains("is-open");
    mobileMenu.classList.toggle("is-open", isOpen);
    menuToggle.classList.toggle("is-active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    body.classList.toggle("menu-open", isOpen);
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      toggleMenu();
    });
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggleMenu(false);
      });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      toggleMenu(false);
    }
  });

  function animateCounter(node) {
    if (node.dataset.animated === "true") return;
    node.dataset.animated = "true";

    var target = Number(node.dataset.count || 0);
    var prefix = node.dataset.prefix || "";
    var suffix = node.dataset.suffix || "";
    var duration = 1200;
    var startTime = performance.now();

    function frame(now) {
      var progress = Math.min((now - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(target * eased);
      node.textContent = prefix + current + suffix;

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16 });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });

    var counterObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.55 });

    counterItems.forEach(function (item) {
      counterObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });

    counterItems.forEach(function (item) {
      animateCounter(item);
    });
  }

  accordionToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var panelId = toggle.getAttribute("aria-controls");
      var panel = panelId ? document.getElementById(panelId) : null;
      var isOpen = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!isOpen));

      if (panel) {
        panel.classList.toggle("is-open", !isOpen);
      }
    });
  });

  if (!form || !submitButton || !formStatus) {
    return;
  }

  var validationRules = {
    fullName: function (value) {
      return value.trim().length >= 2 ? "" : "Enter your full name.";
    },
    businessEmail: function (value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Enter a valid business email.";
    },
    businessType: function (value) {
      return value ? "" : "Select your business type.";
    },
    country: function (value) {
      return value ? "" : "Select your country.";
    },
    challenge: function (value) {
      return value.trim().length >= 12 ? "" : "Describe the challenge in a bit more detail.";
    }
  };

  var fields = Array.prototype.slice.call(form.querySelectorAll("input, select, textarea"));

  function setFieldState(field, message) {
    var fieldWrap = field.closest(".form-field");
    var errorNode = fieldWrap ? fieldWrap.querySelector(".field-error") : null;

    if (fieldWrap) {
      fieldWrap.classList.toggle("is-error", Boolean(message));
    }

    field.setAttribute("aria-invalid", message ? "true" : "false");

    if (errorNode) {
      errorNode.textContent = message || "";
    }
  }

  function validateField(field) {
    var rule = validationRules[field.name];
    if (!rule) return true;

    var message = rule(field.value);
    setFieldState(field, message);
    return !message;
  }

  fields.forEach(function (field) {
    field.addEventListener("blur", function () {
      validateField(field);
    });

    field.addEventListener("input", function () {
      if (field.getAttribute("aria-invalid") === "true") {
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var valid = fields.every(validateField);

    if (!valid) {
      formStatus.textContent = "Please fix the highlighted fields and try again.";
      formStatus.className = "form-status is-error";

      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    submitButton.disabled = true;
    submitButton.classList.add("is-loading");
    submitButton.innerHTML = '<span class="spinner" aria-hidden="true"></span><span>Sending...</span>';
    formStatus.textContent = "Sending your audit request...";
    formStatus.className = "form-status";

    var payload = Object.fromEntries(new FormData(form).entries());

    window.setTimeout(function () {
      console.info("FORM_API_SLOT payload", payload);
      form.reset();

      fields.forEach(function (field) {
        setFieldState(field, "");
      });

      submitButton.disabled = false;
      submitButton.classList.remove("is-loading");
      submitButton.textContent = "Send My Audit Request";

      formStatus.textContent = "Audit request sent. Proxy Solutions will respond within 24 hours.";
      formStatus.className = "form-status is-success";
    }, 1000);

    // FORM_API_SLOT: replace timeout with fetch() POST to your webhook or backend.
  });
}());
