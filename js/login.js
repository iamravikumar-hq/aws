/**
 * HEARTZZY - Dedicated Login & Authentication Page Controller
 * Powers interactive login, registration, password strength metering, and session management.
 */

(function () {
  "use strict";

  // --- DOM REFERENCES ---
  const dom = {
    html: document.documentElement,
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    themeIcon: document.getElementById("themeIcon"),
    loginCard: document.getElementById("loginCard"),

    // Active session view
    activeSessionView: document.getElementById("activeSessionView"),
    sessionAvatar: document.getElementById("sessionAvatar"),
    sessionUsername: document.getElementById("sessionUsername"),
    sessionEmail: document.getElementById("sessionEmail"),
    sessionRoleBadge: document.getElementById("sessionRoleBadge"),
    btnSwitchAccount: document.getElementById("btnSwitchAccount"),

    // Form container & tabs
    authFormsContainer: document.getElementById("authFormsContainer"),
    pageAuthTitle: document.getElementById("pageAuthTitle"),
    pageAuthSubtitle: document.getElementById("pageAuthSubtitle"),
    tabLoginBtn: document.getElementById("tabLoginBtn"),
    tabRegisterBtn: document.getElementById("tabRegisterBtn"),

    // Login Form
    pageLoginForm: document.getElementById("pageLoginForm"),
    loginUsername: document.getElementById("loginUsername"),
    loginPassword: document.getElementById("loginPassword"),
    toggleLoginPass: document.getElementById("toggleLoginPass"),
    loginPassIcon: document.getElementById("loginPassIcon"),
    loginErrorAlert: document.getElementById("loginErrorAlert"),
    loginSubmitBtn: document.getElementById("loginSubmitBtn"),
    loginSpinner: document.getElementById("loginSpinner"),
    loginSubmitText: document.getElementById("loginSubmitText"),
    loginArrowIcon: document.getElementById("loginArrowIcon"),

    // Register Form
    pageRegisterForm: document.getElementById("pageRegisterForm"),
    regUsername: document.getElementById("regUsername"),
    regEmail: document.getElementById("regEmail"),
    regPassword: document.getElementById("regPassword"),
    toggleRegPass: document.getElementById("toggleRegPass"),
    regPassIcon: document.getElementById("regPassIcon"),
    passStrengthWrapper: document.getElementById("passStrengthWrapper"),
    passStrengthBar: document.getElementById("passStrengthBar"),
    passStrengthVal: document.getElementById("passStrengthVal"),
    regErrorAlert: document.getElementById("regErrorAlert"),
    registerSubmitBtn: document.getElementById("registerSubmitBtn"),
    regSpinner: document.getElementById("regSpinner"),
    regSubmitText: document.getElementById("regSubmitText"),
    regArrowIcon: document.getElementById("regArrowIcon"),

    // Footer & Actions
    btnForgotPass: document.getElementById("btnForgotPass"),
    btnSwitchAuthTab: document.getElementById("btnSwitchAuthTab"),
    authFooterPrompt: document.getElementById("authFooterPrompt"),
    toastContainer: document.getElementById("toastContainer")
  };

  // --- INITIALIZATION ---
  function init() {
    initTheme();
    safeRefreshIcons();
    checkExistingSession();
    setupEventListeners();
  }

  // --- THEME MANAGEMENT ---
  function initTheme() {
    const savedTheme = localStorage.getItem("heartzzy_theme") || "light";
    applyTheme(savedTheme);

    if (dom.themeToggleBtn) {
      dom.themeToggleBtn.addEventListener("click", () => {
        const current = dom.html.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        showToast(`Switched to ${next === "dark" ? "Dark" : "Light"} mode`, "info");
      });
    }
  }

  function applyTheme(theme) {
    dom.html.setAttribute("data-theme", theme);
    localStorage.setItem("heartzzy_theme", theme);
    if (dom.themeIcon) {
      dom.themeIcon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
      safeRefreshIcons();
    }
  }

  function safeRefreshIcons() {
    if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
      try {
        lucide.createIcons();
      } catch (e) {}
    }
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message, type = "success") {
    if (!dom.toastContainer) return;
    const toast = document.createElement("div");
    toast.className = `toast-item ${type}`;

    let iconName = "check-circle-2";
    if (type === "error") iconName = "alert-circle";
    if (type === "info") iconName = "info";

    toast.innerHTML = `
      <i data-lucide="${iconName}" class="toast-icon"></i>
      <div class="toast-message">${message}</div>
    `;

    dom.toastContainer.appendChild(toast);
    safeRefreshIcons();

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // --- CHECK EXISTING SESSION ---
  function checkExistingSession() {
    if (typeof authService === "undefined") return;

    const user = authService.currentUser;
    if (user && dom.activeSessionView && dom.authFormsContainer) {
      dom.activeSessionView.style.display = "flex";
      dom.authFormsContainer.style.display = "none";

      if (dom.sessionAvatar) {
        dom.sessionAvatar.src = user.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop";
      }
      if (dom.sessionUsername) {
        dom.sessionUsername.textContent = user.username || "Movie Fan";
      }
      if (dom.sessionEmail) {
        dom.sessionEmail.textContent = user.email || "";
      }
      if (dom.sessionRoleBadge) {
        dom.sessionRoleBadge.style.display = user.role === "admin" ? "inline-flex" : "none";
      }
      safeRefreshIcons();
    }
  }

  // --- TAB SWITCHING ---
  function switchTab(tab) {
    const isLogin = tab === "login";

    if (dom.tabLoginBtn) dom.tabLoginBtn.classList.toggle("active", isLogin);
    if (dom.tabRegisterBtn) dom.tabRegisterBtn.classList.toggle("active", !isLogin);

    if (dom.pageLoginForm) dom.pageLoginForm.style.display = isLogin ? "flex" : "none";
    if (dom.pageRegisterForm) dom.pageRegisterForm.style.display = isLogin ? "none" : "flex";

    if (dom.pageAuthTitle) {
      dom.pageAuthTitle.textContent = isLogin ? "Welcome to HEARTZZY" : "Join HEARTZZY";
    }
    if (dom.pageAuthSubtitle) {
      dom.pageAuthSubtitle.textContent = isLogin
        ? "Sign in to sync your personal watchlist, movie ratings, and custom movie comparisons across all devices."
        : "Create a free cinephile account to unlock AI CineMatch profiles, watchlists, and cloud sync.";
    }
    if (dom.authFooterPrompt) {
      dom.authFooterPrompt.textContent = isLogin ? "Don't have an account yet?" : "Already have an account?";
    }
    if (dom.btnSwitchAuthTab) {
      dom.btnSwitchAuthTab.textContent = isLogin ? "Create Account" : "Sign In";
    }

    if (dom.loginErrorAlert) dom.loginErrorAlert.style.display = "none";
    if (dom.regErrorAlert) dom.regErrorAlert.style.display = "none";
    safeRefreshIcons();
  }

  // --- SHAKE CARD FEEDBACK ---
  function shakeCard() {
    if (!dom.loginCard) return;
    dom.loginCard.classList.remove("shake");
    void dom.loginCard.offsetWidth; // force reflow
    dom.loginCard.classList.add("shake");
    setTimeout(() => dom.loginCard.classList.remove("shake"), 500);
  }

  // --- PASSWORD VISIBILITY TOGGLE ---
  function togglePassword(input, icon) {
    if (!input) return;
    const isPass = input.getAttribute("type") === "password";
    input.setAttribute("type", isPass ? "text" : "password");
    if (icon) {
      icon.setAttribute("data-lucide", isPass ? "eye-off" : "eye");
      safeRefreshIcons();
    }
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Tab buttons
    if (dom.tabLoginBtn) {
      dom.tabLoginBtn.addEventListener("click", () => switchTab("login"));
    }
    if (dom.tabRegisterBtn) {
      dom.tabRegisterBtn.addEventListener("click", () => switchTab("register"));
    }
    if (dom.btnSwitchAuthTab) {
      dom.btnSwitchAuthTab.addEventListener("click", () => {
        const isLogin = dom.tabLoginBtn && dom.tabLoginBtn.classList.contains("active");
        switchTab(isLogin ? "register" : "login");
      });
    }

    // Switch account button in active session view
    if (dom.btnSwitchAccount) {
      dom.btnSwitchAccount.addEventListener("click", async () => {
        if (typeof authService !== "undefined") {
          await authService.logout();
        }
        if (dom.activeSessionView) dom.activeSessionView.style.display = "none";
        if (dom.authFormsContainer) dom.authFormsContainer.style.display = "block";
        switchTab("login");
      });
    }

    // Password visibility toggles
    if (dom.toggleLoginPass) {
      dom.toggleLoginPass.addEventListener("click", () => {
        togglePassword(dom.loginPassword, dom.loginPassIcon);
      });
    }
    if (dom.toggleRegPass) {
      dom.toggleRegPass.addEventListener("click", () => {
        togglePassword(dom.regPassword, dom.regPassIcon);
      });
    }

    // 1-Click Quick Demo Pill Logins
    document.querySelectorAll(".btn-demo-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const role = pill.getAttribute("data-demo");
        switchTab("login");
        if (role === "admin") {
          if (dom.loginUsername) dom.loginUsername.value = "admin";
          if (dom.loginPassword) dom.loginPassword.value = "admin123";
          showToast("Autofilled Super Admin credentials!", "info");
        } else {
          if (dom.loginUsername) dom.loginUsername.value = "cinephile";
          if (dom.loginPassword) dom.loginPassword.value = "movie123";
          showToast("Autofilled Cinephile Member credentials!", "info");
        }

        // Trigger flash feedback animation
        [dom.loginUsername, dom.loginPassword].forEach((inp) => {
          if (inp) {
            inp.classList.remove("input-autofill-flash");
            void inp.offsetWidth; // trigger reflow
            inp.classList.add("input-autofill-flash");
          }
        });
      });
    });

    // Live Password Strength Meter on Register
    if (dom.regPassword && dom.passStrengthWrapper) {
      dom.regPassword.addEventListener("input", (e) => {
        const val = e.target.value;
        if (!val) {
          dom.passStrengthWrapper.style.display = "none";
          return;
        }
        dom.passStrengthWrapper.style.display = "flex";

        let score = 0;
        if (val.length >= 6) score++;
        if (val.length >= 10) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        let percent = "20%";
        let color = "#e50914";
        let text = "Weak";

        if (score <= 1) {
          percent = "25%";
          color = "#e50914";
          text = "Weak";
        } else if (score === 2) {
          percent = "50%";
          color = "#f97316";
          text = "Fair";
        } else if (score === 3 || score === 4) {
          percent = "75%";
          color = "#eab308";
          text = "Good";
        } else if (score >= 5) {
          percent = "100%";
          color = "#10b981";
          text = "Strong & Secure ✨";
        }

        if (dom.passStrengthBar) {
          dom.passStrengthBar.style.width = percent;
          dom.passStrengthBar.style.backgroundColor = color;
        }
        if (dom.passStrengthVal) {
          dom.passStrengthVal.textContent = text;
          dom.passStrengthVal.style.color = color;
        }
      });
    }

    // Forgot Password Guidance
    if (dom.btnForgotPass) {
      dom.btnForgotPass.addEventListener("click", () => {
        showToast("Quick Demo Credentials: Use admin/admin123 or cinephile/movie123", "info");
      });
    }

    // Login Form Submit
    if (dom.pageLoginForm) {
      dom.pageLoginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (dom.loginErrorAlert) dom.loginErrorAlert.style.display = "none";
        const u = dom.loginUsername ? dom.loginUsername.value.trim() : "";
        const p = dom.loginPassword ? dom.loginPassword.value.trim() : "";

        // UI Loading
        if (dom.loginSubmitBtn) dom.loginSubmitBtn.disabled = true;
        if (dom.loginSpinner) dom.loginSpinner.style.display = "inline-block";
        if (dom.loginArrowIcon) dom.loginArrowIcon.style.display = "none";
        if (dom.loginSubmitText) dom.loginSubmitText.textContent = "Signing In...";

        try {
          const user = await authService.login(u, p);
          showToast(`Welcome back, ${user.username}! Redirecting...`, "success");

          // Smart redirect: check URL query params or route to index / admin
          setTimeout(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const redirectTarget = urlParams.get("redirect");
            if (redirectTarget === "admin" && user.role === "admin") {
              window.location.href = "admin.html";
            } else {
              window.location.href = "index.html";
            }
          }, 800);
        } catch (err) {
          shakeCard();
          if (dom.loginErrorAlert) {
            dom.loginErrorAlert.textContent = err.message;
            dom.loginErrorAlert.style.display = "block";
          }
        } finally {
          if (dom.loginSubmitBtn) dom.loginSubmitBtn.disabled = false;
          if (dom.loginSpinner) dom.loginSpinner.style.display = "none";
          if (dom.loginArrowIcon) dom.loginArrowIcon.style.display = "inline-block";
          if (dom.loginSubmitText) dom.loginSubmitText.textContent = "Sign In to Heartzy";
        }
      });
    }

    // Register Form Submit
    if (dom.pageRegisterForm) {
      dom.pageRegisterForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (dom.regErrorAlert) dom.regErrorAlert.style.display = "none";
        const u = dom.regUsername ? dom.regUsername.value.trim() : "";
        const em = dom.regEmail ? dom.regEmail.value.trim() : "";
        const p = dom.regPassword ? dom.regPassword.value.trim() : "";

        // UI Loading
        if (dom.registerSubmitBtn) dom.registerSubmitBtn.disabled = true;
        if (dom.regSpinner) dom.regSpinner.style.display = "inline-block";
        if (dom.regArrowIcon) dom.regArrowIcon.style.display = "none";
        if (dom.regSubmitText) dom.regSubmitText.textContent = "Creating Account...";

        try {
          const user = await authService.register(u, em, p);
          showToast(`Account created! Welcome, ${user.username}! Redirecting...`, "success");

          setTimeout(() => {
            window.location.href = "index.html";
          }, 800);
        } catch (err) {
          shakeCard();
          if (dom.regErrorAlert) {
            dom.regErrorAlert.textContent = err.message;
            dom.regErrorAlert.style.display = "block";
          }
        } finally {
          if (dom.registerSubmitBtn) dom.registerSubmitBtn.disabled = false;
          if (dom.regSpinner) dom.regSpinner.style.display = "none";
          if (dom.regArrowIcon) dom.regArrowIcon.style.display = "inline-block";
          if (dom.regSubmitText) dom.regSubmitText.textContent = "Create Free Account";
        }
      });
    }
  }

  // --- RUN ON READY ---
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
