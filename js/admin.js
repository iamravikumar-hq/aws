/**
 * HEARTZZY - Admin Console Controller
 * Powers user management, API keys configuration, and Firebase Auth settings.
 */

(function () {
  "use strict";

  // --- STATE ---
  const adminState = {
    currentTab: "overview",
    userSearch: "",
    roleFilter: "all",
    statusFilter: "all"
  };

  // --- DOM REFERENCES ---
  const dom = {
    html: document.documentElement,
    adminLayout: document.getElementById("adminLayout"),
    adminAuthGuard: document.getElementById("adminAuthGuard"),
    adminThemeToggleBtn: document.getElementById("adminThemeToggleBtn"),
    adminThemeIcon: document.getElementById("adminThemeIcon"),
    adminCurrentTabTitle: document.getElementById("adminCurrentTabTitle"),
    adminUsernameDisplay: document.getElementById("adminUsernameDisplay"),
    adminAvatar: document.getElementById("adminAvatar"),
    btnAdminLogout: document.getElementById("btnAdminLogout"),
    navButtons: document.querySelectorAll(".admin-nav-btn"),
    tabPanels: document.querySelectorAll(".admin-tab-panel"),
    firebaseStatusChip: document.getElementById("firebaseStatusChip"),
    firebaseStatusText: document.getElementById("firebaseStatusText"),
    tmdbStatusChip: document.getElementById("tmdbStatusChip"),
    tmdbStatusText: document.getElementById("tmdbStatusText"),

    // Overview Tab
    kpiTotalUsers: document.getElementById("kpiTotalUsers"),
    kpiActiveUsers: document.getElementById("kpiActiveUsers"),
    kpiSuspendedCount: document.getElementById("kpiSuspendedCount"),
    kpiApiMode: document.getElementById("kpiApiMode"),
    kpiApiDetails: document.getElementById("kpiApiDetails"),
    kpiAuthEngine: document.getElementById("kpiAuthEngine"),
    kpiAuthSub: document.getElementById("kpiAuthSub"),
    btnOverviewAddUser: document.getElementById("btnOverviewAddUser"),
    btnOverviewConfigApis: document.getElementById("btnOverviewConfigApis"),
    btnOverviewClearCache: document.getElementById("btnOverviewClearCache"),
    btnOverviewViewAllUsers: document.getElementById("btnOverviewViewAllUsers"),
    overviewRecentUsersTableBody: document.getElementById("overviewRecentUsersTableBody"),

    // Users Tab
    userSearchInput: document.getElementById("userSearchInput"),
    userRoleFilterSelect: document.getElementById("userRoleFilterSelect"),
    userStatusFilterSelect: document.getElementById("userStatusFilterSelect"),
    btnOpenAddUserModal: document.getElementById("btnOpenAddUserModal"),
    usersTableBody: document.getElementById("usersTableBody"),
    usersEmptyState: document.getElementById("usersEmptyState"),

    // API Keys Tab
    adminTmdbKey: document.getElementById("adminTmdbKey"),
    adminTmdbToken: document.getElementById("adminTmdbToken"),
    adminOmdbKey: document.getElementById("adminOmdbKey"),
    movieApiKeysForm: document.getElementById("movieApiKeysForm"),
    btnTestMovieApis: document.getElementById("btnTestMovieApis"),
    movieApiTestResult: document.getElementById("movieApiTestResult"),
    firebaseConfigForm: document.getElementById("firebaseConfigForm"),
    fbApiKey: document.getElementById("fbApiKey"),
    fbAuthDomain: document.getElementById("fbAuthDomain"),
    fbProjectId: document.getElementById("fbProjectId"),
    fbStorageBucket: document.getElementById("fbStorageBucket"),
    fbAppId: document.getElementById("fbAppId"),
    btnClearFirebaseConfig: document.getElementById("btnClearFirebaseConfig"),
    btnAdminPurgeCache: document.getElementById("btnAdminPurgeCache"),
    btnAdminResetSeedUsers: document.getElementById("btnAdminResetSeedUsers"),
    btnAdminExportData: document.getElementById("btnAdminExportData"),

    // Audit Logs Tab
    auditLogsTableBody: document.getElementById("auditLogsTableBody"),
    btnClearAuditLogs: document.getElementById("btnClearAuditLogs"),

    // Modals
    addUserModal: document.getElementById("addUserModal"),
    closeAddUserModalBtn: document.getElementById("closeAddUserModalBtn"),
    cancelAddUserBtn: document.getElementById("cancelAddUserBtn"),
    addUserForm: document.getElementById("addUserForm"),
    newUsername: document.getElementById("newUsername"),
    newEmail: document.getElementById("newEmail"),
    newPassword: document.getElementById("newPassword"),
    newRole: document.getElementById("newRole"),

    editUserModal: document.getElementById("editUserModal"),
    closeEditUserModalBtn: document.getElementById("closeEditUserModalBtn"),
    cancelEditUserBtn: document.getElementById("cancelEditUserBtn"),
    editUserForm: document.getElementById("editUserForm"),
    editTargetUsername: document.getElementById("editTargetUsername"),
    editUserId: document.getElementById("editUserId"),
    editRoleSelect: document.getElementById("editRoleSelect"),
    editStatusSelect: document.getElementById("editStatusSelect"),

    adminToastContainer: document.getElementById("adminToastContainer")
  };

  // --- INITIALIZATION ---
  function init() {
    initTheme();
    checkAuthGuard();
    setupEventListeners();
    if (typeof authService !== "undefined" && typeof authService.onAuthStateChanged === "function") {
      authService.onAuthStateChanged(() => checkAuthGuard());
    }
  }

  // --- SAFE ICONS ---
  function safeRefreshIcons() {
    try {
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    } catch (e) {}
  }

  // --- THEME SYNC ---
  function initTheme() {
    const savedTheme = localStorage.getItem("heartzzy_theme") || "light";
    dom.html.setAttribute("data-theme", savedTheme);
    if (dom.adminThemeIcon) {
      dom.adminThemeIcon.setAttribute("data-lucide", savedTheme === "dark" ? "sun" : "moon");
    }
    safeRefreshIcons();
  }

  function toggleTheme() {
    const current = dom.html.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    dom.html.setAttribute("data-theme", next);
    localStorage.setItem("heartzzy_theme", next);
    if (dom.adminThemeIcon) {
      dom.adminThemeIcon.setAttribute("data-lucide", next === "dark" ? "sun" : "moon");
    }
    safeRefreshIcons();
  }

  // --- AUTH GUARD ---
  function checkAuthGuard() {
    const user = authService.currentUser;
    if (!user || user.role !== "admin") {
      dom.adminAuthGuard.style.display = "flex";
      dom.adminLayout.style.display = "none";
    } else {
      dom.adminAuthGuard.style.display = "none";
      dom.adminLayout.style.display = "flex";
      dom.adminUsernameDisplay.textContent = user.username;
      if (user.avatar) dom.adminAvatar.src = user.avatar;
      refreshAll();
    }
  }

  // --- REFRESH EVERYTHING ---
  async function refreshAll() {
    updateStatusPills();
    await renderOverview();
    await renderUsersTable();
    loadApiForms();
    await renderAuditLogs();
    safeRefreshIcons();
  }

  // --- STATUS PILLS ---
  function updateStatusPills() {
    // Firebase
    if (authService.firebaseInitialized) {
      dom.firebaseStatusChip.className = "status-chip live";
      dom.firebaseStatusText.textContent = "Firebase Auth & Firestore: Live";
      dom.kpiAuthEngine.textContent = "Firebase";
      dom.kpiAuthSub.textContent = "Project: heartzzy (Live)";
    } else {
      dom.firebaseStatusChip.className = "status-chip demo";
      dom.firebaseStatusText.textContent = "Firebase: Local Auth Provider";
      dom.kpiAuthEngine.textContent = "Local";
      dom.kpiAuthSub.textContent = "Ready for Firebase Config";
    }

    // TMDB
    if (movieApi.hasApiKeys()) {
      dom.tmdbStatusChip.className = "status-chip live";
      dom.tmdbStatusText.textContent = "TMDB: Live Catalog (600k+)";
      dom.kpiApiMode.textContent = "Live TMDB";
      dom.kpiApiDetails.textContent = "Global Catalog Connected";
    } else {
      dom.tmdbStatusChip.className = "status-chip demo";
      dom.tmdbStatusText.textContent = "TMDB: Offline Fallback (25+ Titles)";
      dom.kpiApiMode.textContent = "Fallback";
      dom.kpiApiDetails.textContent = "25+ Built-in Masterpieces";
    }
  }

  // --- TAB NAVIGATION ---
  function switchTab(tabName) {
    adminState.currentTab = tabName;
    dom.navButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    dom.tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === `tab${capitalize(tabName)}`);
    });

    const titles = {
      overview: "Dashboard Overview",
      users: "User Management Directory",
      apis: "API Keys & Google Firebase Configuration",
      logs: "Platform Audit & Activity Trail"
    };
    dom.adminCurrentTabTitle.textContent = titles[tabName] || "Admin Console";
    safeRefreshIcons();
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // --- OVERVIEW TAB ---
  async function renderOverview() {
    const users = await authService.getAllUsers();
    const active = users.filter((u) => u.status === "active").length;
    const suspended = users.filter((u) => u.status !== "active").length;

    dom.kpiTotalUsers.textContent = users.length;
    dom.kpiActiveUsers.textContent = active;
    dom.kpiSuspendedCount.textContent = `${suspended} Suspended Accounts`;

    // Recent 5 users
    const recent = [...users].reverse().slice(0, 5);
    dom.overviewRecentUsersTableBody.innerHTML = recent
      .map(
        (u) => `
      <tr>
        <td>
          <div class="user-cell">
            <img src="${u.avatar}" alt="" class="user-cell-avatar">
            <div>
              <div class="user-cell-name">${u.username}</div>
              <div class="user-cell-source">Source: Firestore</div>
            </div>
          </div>
        </td>
        <td>${u.email}</td>
        <td><span class="badge-role ${u.role}">${u.role}</span></td>
        <td><span class="badge-status ${u.status}">${u.status}</span></td>
        <td>${u.createdAt ? u.createdAt.substring(0, 10) : "N/A"}</td>
      </tr>
    `
      )
      .join("");
  }

  // --- USERS MANAGEMENT TAB ---
  async function renderUsersTable() {
    let users = await authService.getAllUsers();

    // Search filter
    if (adminState.userSearch) {
      const q = adminState.userSearch.toLowerCase();
      users = users.filter(
        (u) => u.username.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
      );
    }

    // Role filter
    if (adminState.roleFilter !== "all") {
      users = users.filter((u) => u.role === adminState.roleFilter);
    }

    // Status filter
    if (adminState.statusFilter !== "all") {
      users = users.filter((u) => u.status === adminState.statusFilter);
    }

    if (users.length === 0) {
      dom.usersTableBody.innerHTML = "";
      dom.usersEmptyState.style.display = "block";
      return;
    }

    dom.usersEmptyState.style.display = "none";
    dom.usersTableBody.innerHTML = users
      .map(
        (u) => `
      <tr>
        <td>
          <div class="user-cell">
            <img src="${u.avatar}" alt="${u.username}" class="user-cell-avatar">
            <div>
              <div class="user-cell-name">${u.username}</div>
              <div class="user-cell-source">Auth: Firebase / Firestore</div>
            </div>
          </div>
        </td>
        <td>${u.email}</td>
        <td><span class="badge-role ${u.role}">${u.role}</span></td>
        <td><span class="badge-status ${u.status}">${u.status}</span></td>
        <td>${u.createdAt ? u.createdAt.substring(0, 10) : "N/A"}</td>
        <td>${u.lastLogin && u.lastLogin !== "Never" ? u.lastLogin.substring(0, 10) : "Never"}</td>
        <td>
          <div class="table-actions" style="justify-content: flex-end;">
            <button 
              type="button" 
              class="action-icon-btn btn-edit-user" 
              data-id="${u.id}" 
              title="Edit Role & Status"
            >
              <i data-lucide="edit-3"></i>
            </button>
            <button 
              type="button" 
              class="action-icon-btn btn-toggle-status" 
              data-id="${u.id}" 
              data-status="${u.status}" 
              title="${u.status === "active" ? "Suspend Account" : "Activate Account"}"
            >
              <i data-lucide="${u.status === "active" ? "user-x" : "user-check"}"></i>
            </button>
            <button 
              type="button" 
              class="action-icon-btn danger btn-delete-user" 
              data-id="${u.id}" 
              data-username="${u.username}" 
              title="Delete User"
            >
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `
      )
      .join("");

    safeRefreshIcons();
  }

  // --- API FORMS LOADING ---
  function loadApiForms() {
    // TMDB & OMDb
    dom.adminTmdbKey.value = movieApi.tmdbKey || "";
    dom.adminTmdbToken.value = movieApi.tmdbToken || "";
    dom.adminOmdbKey.value = movieApi.omdbKey || "";

    // Firebase
    const fb = authService.getFirebaseConfig() || {};
    dom.fbApiKey.value = fb.apiKey || "";
    dom.fbAuthDomain.value = fb.authDomain || "";
    dom.fbProjectId.value = fb.projectId || "";
    dom.fbStorageBucket.value = fb.storageBucket || "";
    dom.fbAppId.value = fb.appId || "";
  }

  // --- AUDIT LOGS ---
  async function renderAuditLogs() {
    const logs = await authService.getAuditLogs();
    if (!logs.length) {
      dom.auditLogsTableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 24px;">No audit logs recorded yet.</td></tr>`;
      return;
    }

    dom.auditLogsTableBody.innerHTML = logs
      .map(
        (l) => `
      <tr>
        <td class="log-timestamp">${l.timestamp ? l.timestamp.replace("T", " ").substring(0, 19) : "Just now"}</td>
        <td><strong>${l.user}</strong></td>
        <td><span class="log-action-tag">${l.action}</span></td>
        <td>${l.description}</td>
      </tr>
    `
      )
      .join("");
  }

  // --- TOAST NOTIFICATION ---
  function showAdminToast(msg) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <i data-lucide="check-circle" style="color: var(--accent-brand); width: 16px; height: 16px;"></i>
      <span>${msg}</span>
    `;
    dom.adminToastContainer.appendChild(toast);
    safeRefreshIcons();

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      setTimeout(() => toast.remove(), 250);
    }, 3000);
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Theme toggle
    dom.adminThemeToggleBtn.addEventListener("click", toggleTheme);

    // Logout
    dom.btnAdminLogout.addEventListener("click", async () => {
      await authService.logout();
      showAdminToast("Logged out successfully");
      checkAuthGuard();
    });

    // Navigation Buttons
    dom.navButtons.forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    // Overview buttons shortcut
    dom.btnOverviewAddUser.addEventListener("click", () => {
      switchTab("users");
      dom.btnOpenAddUserModal.click();
    });
    dom.btnOverviewConfigApis.addEventListener("click", () => switchTab("apis"));
    dom.btnOverviewViewAllUsers.addEventListener("click", () => switchTab("users"));

    dom.btnOverviewClearCache.addEventListener("click", async () => {
      movieApi.cache.clear();
      try { sessionStorage.clear(); } catch (e) {}
      await authService.logAudit("MAINTENANCE_CACHE", "Admin purged all movie discovery caches");
      showAdminToast("Movie cache purged successfully!");
      await renderAuditLogs();
    });

    // Users Search & Filters
    dom.userSearchInput.addEventListener("input", async (e) => {
      adminState.userSearch = e.target.value.trim();
      await renderUsersTable();
    });

    dom.userRoleFilterSelect.addEventListener("change", async (e) => {
      adminState.roleFilter = e.target.value;
      await renderUsersTable();
    });

    dom.userStatusFilterSelect.addEventListener("change", async (e) => {
      adminState.statusFilter = e.target.value;
      await renderUsersTable();
    });

    // Add User Modal
    dom.btnOpenAddUserModal.addEventListener("click", () => {
      dom.addUserForm.reset();
      dom.addUserModal.classList.add("active");
    });
    dom.closeAddUserModalBtn.addEventListener("click", () => dom.addUserModal.classList.remove("active"));
    dom.cancelAddUserBtn.addEventListener("click", () => dom.addUserModal.classList.remove("active"));
    dom.addUserModal.addEventListener("click", (e) => {
      if (e.target === dom.addUserModal) dom.addUserModal.classList.remove("active");
    });

    dom.addUserForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const u = await authService.createUser({
          username: dom.newUsername.value,
          email: dom.newEmail.value,
          password: dom.newPassword.value,
          role: dom.newRole.value
        });
        dom.addUserModal.classList.remove("active");
        showAdminToast(`User "${u.username}" created successfully in Firestore!`);
        await refreshAll();
      } catch (err) {
        alert(err.message);
      }
    });

    // Users Table Action Delegation (Edit, Toggle Status, Delete)
    dom.usersTableBody.addEventListener("click", async (e) => {
      const editBtn = e.target.closest(".btn-edit-user");
      if (editBtn) {
        const id = editBtn.dataset.id;
        const user = authService.findUserById(id);
        if (user) {
          dom.editUserId.value = user.id;
          dom.editTargetUsername.textContent = user.username;
          dom.editRoleSelect.value = user.role;
          dom.editStatusSelect.value = user.status;
          dom.editUserModal.classList.add("active");
        }
        return;
      }

      const statusBtn = e.target.closest(".btn-toggle-status");
      if (statusBtn) {
        const id = statusBtn.dataset.id;
        const curStatus = statusBtn.dataset.status;
        const nextStatus = curStatus === "active" ? "suspended" : "active";
        try {
          await authService.toggleUserStatus(id, nextStatus);
          showAdminToast(`Account status updated to [${nextStatus}]`);
          await refreshAll();
        } catch (err) {
          alert(err.message);
        }
        return;
      }

      const deleteBtn = e.target.closest(".btn-delete-user");
      if (deleteBtn) {
        const id = deleteBtn.dataset.id;
        const name = deleteBtn.dataset.username;
        if (confirm(`Are you sure you want to permanently delete user "${name}" from Firestore?`)) {
          try {
            await authService.deleteUser(id);
            showAdminToast(`User "${name}" deleted`);
            await refreshAll();
          } catch (err) {
            alert(err.message);
          }
        }
        return;
      }
    });

    // Edit User Modal
    dom.closeEditUserModalBtn.addEventListener("click", () => dom.editUserModal.classList.remove("active"));
    dom.cancelEditUserBtn.addEventListener("click", () => dom.editUserModal.classList.remove("active"));
    dom.editUserModal.addEventListener("click", (e) => {
      if (e.target === dom.editUserModal) dom.editUserModal.classList.remove("active");
    });

    dom.editUserForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const id = dom.editUserId.value;
      const role = dom.editRoleSelect.value;
      const status = dom.editStatusSelect.value;
      try {
        await authService.updateUserRole(id, role);
        await authService.toggleUserStatus(id, status);
        dom.editUserModal.classList.remove("active");
        showAdminToast("User account updated in Firestore!");
        await refreshAll();
      } catch (err) {
        alert(err.message);
      }
    });

    // Movie APIs Form Submit
    dom.movieApiKeysForm.addEventListener("submit", (e) => {
      e.preventDefault();
      movieApi.saveKeys(dom.adminTmdbKey.value, dom.adminTmdbToken.value, dom.adminOmdbKey.value);
      authService.logAudit("CONFIG_TMDB_OMDB", "Updated TMDB & OMDb API credentials");
      showAdminToast("Movie API keys updated!");
      refreshAll();
    });

    // Test Movie APIs Ping
    dom.btnTestMovieApis.addEventListener("click", async () => {
      dom.movieApiTestResult.style.display = "block";
      dom.movieApiTestResult.style.color = "var(--text-muted)";
      dom.movieApiTestResult.textContent = "Pinging TMDB endpoint...";

      try {
        const t0 = performance.now();
        const res = await movieApi.getTrendingMovies();
        const duration = Math.round(performance.now() - t0);
        if (res && res.length) {
          dom.movieApiTestResult.style.color = "var(--accent-green)";
          dom.movieApiTestResult.textContent = `✓ Connection operational (${duration}ms latency, ${res.length} titles received)`;
        } else {
          dom.movieApiTestResult.style.color = "var(--accent-gold)";
          dom.movieApiTestResult.textContent = "Connected to fallback dataset.";
        }
      } catch (err) {
        dom.movieApiTestResult.style.color = "var(--accent-brand)";
        dom.movieApiTestResult.textContent = `Ping failed: ${err.message}`;
      }
    });

    // Firebase Config Form Submit
    dom.firebaseConfigForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const apiKey = dom.fbApiKey.value.trim();
      const authDomain = dom.fbAuthDomain.value.trim();
      const projectId = dom.fbProjectId.value.trim();
      const storageBucket = dom.fbStorageBucket.value.trim();
      const appId = dom.fbAppId.value.trim();

      if (!apiKey || !projectId) {
        alert("Please provide at least Firebase apiKey and projectId.");
        return;
      }

      authService.saveFirebaseConfig({ apiKey, authDomain, projectId, storageBucket, appId });
      showAdminToast("Google Firebase project configuration saved!");
      refreshAll();
    });

    // Revert to Local Provider
    dom.btnClearFirebaseConfig.addEventListener("click", () => {
      if (confirm("Revert Firebase Auth configuration and use the built-in local provider?")) {
        authService.saveFirebaseConfig(null);
        dom.fbApiKey.value = "";
        dom.fbAuthDomain.value = "";
        dom.fbProjectId.value = "";
        dom.fbStorageBucket.value = "";
        dom.fbAppId.value = "";
        showAdminToast("Reverted to local auth provider.");
        refreshAll();
      }
    });

    // Purge Cache Button
    dom.btnAdminPurgeCache.addEventListener("click", () => {
      movieApi.cache.clear();
      try { sessionStorage.clear(); } catch (e) {}
      authService.logAudit("MAINTENANCE_CACHE", "Admin purged all movie discovery caches");
      showAdminToast("All caches cleared!");
      renderAuditLogs();
    });

    // Reset Seed Users
    dom.btnAdminResetSeedUsers.addEventListener("click", () => {
      if (confirm("Reset user database to default seed accounts? Any newly created users will be cleared.")) {
        localStorage.removeItem(authService.usersDbKey);
        authService.initLocalUsers();
        authService.logAudit("MAINTENANCE_RESET_USERS", "Reset user database to seed defaults");
        showAdminToast("Users reset to demo seeds.");
        refreshAll();
      }
    });

    // Export Data
    dom.btnAdminExportData.addEventListener("click", () => {
      const data = {
        exportedAt: new Date().toISOString(),
        users: authService.getAllUsers(),
        auditLogs: authService.getAuditLogs(),
        firebaseConfig: authService.getFirebaseConfig(),
        tmdbKeyConfigured: Boolean(movieApi.tmdbKey),
        omdbKeyConfigured: Boolean(movieApi.omdbKey)
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `heartzzy_admin_backup_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showAdminToast("Backup JSON file exported!");
    });

    // Clear Audit Logs
    dom.btnClearAuditLogs.addEventListener("click", () => {
      if (confirm("Clear all platform audit logs?")) {
        authService.clearAuditLogs();
        renderAuditLogs();
        showAdminToast("Audit logs cleared.");
      }
    });

    // Global ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        dom.addUserModal.classList.remove("active");
        dom.editUserModal.classList.remove("active");
      }
    });
  }

  // --- START ---
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
