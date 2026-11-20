/**
 * HEARTZZY - Google Firebase Authentication & Cloud Firestore Service
 * Integrated with user's Firebase Project "heartzzy".
 * Uses Firebase Auth for secure credential management & Cloud Firestore for user profiles.
 * Pure Username + Password authentication support.
 */

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCFOEGYyEWwEO-7TdwUq-BEpv1hmzBffvo",
  authDomain: "heartzzy.firebaseapp.com",
  projectId: "heartzzy",
  storageBucket: "heartzzy.firebasestorage.app",
  messagingSenderId: "1044966926470",
  appId: "1:1044966926470:web:513279deadbcf00ece4907",
  measurementId: "G-T6PXJFX5WZ"
};

class AuthService {
  constructor() {
    this.currentUser = null;
    this.firebaseInitialized = false;
    this.firestoreReady = false;
    this.db = null;
    this.auth = null;
    this.listeners = [];
    this.cachedUsers = [];
    this.cachedLogs = [];

    this.storageKey = "heartzzy_current_user";
    this.firebaseConfigKey = "heartzzy_firebase_config";

    this.loadSession();
    this.initFirebase();
  }

  // --- INITIALIZE GOOGLE FIREBASE & FIRESTORE ---
  initFirebase() {
    try {
      if (typeof window === "undefined" || !window.firebase) {
        console.warn("Firebase SDK not loaded in environment.");
        return;
      }

      // Check for user-saved override or use default credentials
      let config = DEFAULT_FIREBASE_CONFIG;
      const storedConfig = localStorage.getItem(this.firebaseConfigKey);
      if (storedConfig) {
        try {
          config = JSON.parse(storedConfig);
        } catch (e) {}
      }

      if (config && config.apiKey && config.projectId) {
        if (!window.firebase.apps || !window.firebase.apps.length) {
          window.firebase.initializeApp(config);
        }

        this.auth = window.firebase.auth();
        if (window.firebase.firestore) {
          this.db = window.firebase.firestore();
          this.firestoreReady = true;
        }

        this.firebaseInitialized = true;
        this.listenFirebaseAuthState();
        this.syncUsersFromFirestore();
      }
    } catch (e) {
      console.warn("Firebase initialization notice:", e.message);
    }
  }

  // Listen to Firebase Auth state
  listenFirebaseAuthState() {
    if (!this.auth) return;

    this.auth.onAuthStateChanged(async (fbUser) => {
      if (fbUser) {
        try {
          const profile = await this.fetchUserProfile(fbUser.uid, fbUser.email);
          this.setCurrentUser(profile);
        } catch (e) {
          const fallbackProfile = {
            id: fbUser.uid,
            username: fbUser.displayName || fbUser.email.split("@")[0],
            email: fbUser.email,
            role: fbUser.email.includes("admin") ? "admin" : "user",
            status: "active",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
          };
          this.setCurrentUser(fallbackProfile);
        }
      } else {
        this.setCurrentUser(null);
      }
    });
  }

  // Load session from localStorage
  loadSession() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.currentUser = JSON.parse(stored);
      }
    } catch (e) {
      this.currentUser = null;
    }
  }

  setCurrentUser(user) {
    this.currentUser = user;
    try {
      if (user) {
        localStorage.setItem(this.storageKey, JSON.stringify(user));
      } else {
        localStorage.removeItem(this.storageKey);
      }
    } catch (e) {}

    this.notifyListeners();
  }

  onAuthStateChanged(callback) {
    if (typeof callback === "function") {
      this.listeners.push(callback);
      callback(this.currentUser);
    }
  }

  notifyListeners() {
    this.listeners.forEach((fn) => {
      try {
        fn(this.currentUser);
      } catch (e) {}
    });
  }

  // Format username to standard Firebase email format
  formatAuthEmail(usernameOrEmail) {
    const trimmed = (usernameOrEmail || "").trim();
    if (trimmed.includes("@")) {
      return trimmed.toLowerCase();
    }
    const clean = trimmed.toLowerCase().replace(/[^a-z0-9_.-]/g, "");
    return `${clean || "user"}@heartzzy.app`;
  }

  // --- CLOUD FIRESTORE USER PROFILE OPERATIONS ---

  async fetchUserProfile(uid, email) {
    if (!this.db) {
      return {
        id: uid,
        username: email ? email.split("@")[0] : "user",
        email: email || "user@heartzzy.app",
        role: email && email.includes("admin") ? "admin" : "user",
        status: "active",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
      };
    }

    try {
      const doc = await this.db.collection("users").doc(uid).get();
      if (doc.exists) {
        return { id: doc.id, ...doc.data() };
      }
      
      // If doc doesn't exist yet, create it
      const username = email.split("@")[0];
      const newProfile = {
        id: uid,
        username,
        email,
        role: username.toLowerCase() === "admin" ? "admin" : "user",
        status: "active",
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
      };
      await this.db.collection("users").doc(uid).set(newProfile);
      return newProfile;
    } catch (err) {
      console.warn("Firestore user fetch notice:", err.message);
      return {
        id: uid,
        username: email ? email.split("@")[0] : "user",
        email: email || "user@heartzzy.app",
        role: email && email.includes("admin") ? "admin" : "user",
        status: "active",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
      };
    }
  }

  // Real-time synchronization of users from Cloud Firestore
  syncUsersFromFirestore() {
    if (!this.db) return;

    try {
      this.db.collection("users").onSnapshot((snapshot) => {
        const usersList = [];
        snapshot.forEach((doc) => {
          usersList.push({ id: doc.id, ...doc.data() });
        });
        if (usersList.length > 0) {
          this.cachedUsers = usersList;
        }
      }, (err) => {
        console.warn("Firestore snapshot listener:", err.message);
      });
    } catch (e) {}
  }

  // --- USER AUTHENTICATION (USERNAME & PASSWORD) ---

  async login(usernameOrEmail, password) {
    const rawUser = (usernameOrEmail || "").trim();
    const cleanPass = (password || "").trim();

    if (!rawUser || !cleanPass) {
      throw new Error("Please enter both username/email and password.");
    }

    // Demo account offline fallback check
    const isDemoAdmin = (rawUser.toLowerCase() === "admin" && cleanPass === "admin123");
    const isDemoUser = (rawUser.toLowerCase() === "cinephile" && cleanPass === "movie123");

    if (!this.auth) {
      if (isDemoAdmin) {
        const adminProfile = {
          id: "admin-demo-id",
          username: "admin",
          email: "admin@heartzzy.app",
          role: "admin",
          status: "active",
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
          watchlist: []
        };
        this.setCurrentUser(adminProfile);
        return adminProfile;
      }
      if (isDemoUser) {
        const userProfile = {
          id: "user-demo-id",
          username: "cinephile",
          email: "cinephile@heartzzy.app",
          role: "user",
          status: "active",
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
          watchlist: []
        };
        this.setCurrentUser(userProfile);
        return userProfile;
      }
      throw new Error("Firebase Auth service is offline and credentials were not recognized.");
    }

    // Resolve email: Check Firestore for username to get real email if user used pure username
    let email = rawUser;
    if (!rawUser.includes("@")) {
      if (this.db) {
        try {
          const snap = await this.db.collection("users").where("username", "==", rawUser).limit(1).get();
          if (!snap.empty) {
            email = snap.docs[0].data().email || this.formatAuthEmail(rawUser);
          } else {
            email = this.formatAuthEmail(rawUser);
          }
        } catch (e) {
          email = this.formatAuthEmail(rawUser);
        }
      } else {
        email = this.formatAuthEmail(rawUser);
      }
    }

    try {
      let cred;
      try {
        cred = await this.auth.signInWithEmailAndPassword(email, cleanPass);
      } catch (signInErr) {
        // Auto-provision default admin if testing for the first time
        if (
          (signInErr.code === "auth/user-not-found" || signInErr.code === "auth/invalid-credential" || signInErr.code === "auth/invalid-login-credentials") &&
          rawUser.toLowerCase() === "admin" &&
          cleanPass === "admin123"
        ) {
          console.log("Auto-provisioning super admin account on Firebase project...");
          cred = await this.auth.createUserWithEmailAndPassword("admin@heartzzy.app", "admin123");
          if (cred.user) {
            await cred.user.updateProfile({ displayName: "admin" });
          }
        } else {
          throw signInErr;
        }
      }

      const fbUser = cred.user;
      const profile = await this.fetchUserProfile(fbUser.uid, fbUser.email);

      // Check account status
      if (profile.status === "suspended" || profile.status === "banned") {
        await this.auth.signOut();
        throw new Error("This account has been suspended by an administrator.");
      }

      // Update last active in Firestore
      if (this.db) {
        try {
          await this.db.collection("users").doc(fbUser.uid).update({
            lastLogin: new Date().toISOString()
          });
        } catch (e) {}
      }

      this.setCurrentUser(profile);
      this.logAudit("USER_LOGIN", `User "${profile.username}" signed in via Firebase Auth`);
      return profile;
    } catch (err) {
      // If Firebase failed due to network or connection, permit demo accounts to log in smoothly
      if ((isDemoAdmin || isDemoUser) && (err.code === "auth/network-request-failed" || (err.message && err.message.toLowerCase().includes("network")))) {
        const fallbackProfile = {
          id: isDemoAdmin ? "admin-demo-id" : "user-demo-id",
          username: isDemoAdmin ? "admin" : "cinephile",
          email: isDemoAdmin ? "admin@heartzzy.app" : "cinephile@heartzzy.app",
          role: isDemoAdmin ? "admin" : "user",
          status: "active",
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          avatar: isDemoAdmin 
            ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
            : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
          watchlist: []
        };
        this.setCurrentUser(fallbackProfile);
        return fallbackProfile;
      }

      let msg = err.message;
      if (err.code === "auth/wrong-password" || err.code === "auth/invalid-credential" || err.code === "auth/invalid-login-credentials") {
        msg = "Incorrect password. Please verify your credentials.";
      } else if (err.code === "auth/user-not-found") {
        msg = `User account "${rawUser}" not found. Please register or check spelling.`;
      } else if (err.code === "auth/invalid-email") {
        msg = "Invalid email or username format.";
      }
      throw new Error(msg);
    }
  }

  async register(username, email, password) {
    const cleanUsername = (username || "").trim();
    let cleanEmail = (email || "").trim();
    const cleanPass = (password || "").trim();

    if (!cleanUsername) throw new Error("Username is required.");
    if (cleanUsername.length < 3) throw new Error("Username must be at least 3 characters.");
    if (!cleanPass || cleanPass.length < 6) throw new Error("Password must be at least 6 characters.");

    // Check username uniqueness in Firestore
    if (this.db) {
      try {
        const existing = await this.db.collection("users").where("username", "==", cleanUsername).limit(1).get();
        if (!existing.empty) {
          throw new Error(`Username "${cleanUsername}" is already taken. Please choose another.`);
        }
      } catch (e) {
        if (e.message && e.message.includes("already taken")) throw e;
      }
    }

    if (!cleanEmail) {
      cleanEmail = this.formatAuthEmail(cleanUsername);
    }

    if (!this.auth) {
      const demoUser = {
        id: "offline_" + Date.now(),
        username: cleanUsername,
        email: cleanEmail,
        role: cleanUsername.toLowerCase() === "admin" ? "admin" : "user",
        status: "active",
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        watchlist: []
      };
      this.setCurrentUser(demoUser);
      return demoUser;
    }

    try {
      const cred = await this.auth.createUserWithEmailAndPassword(cleanEmail, cleanPass);
      const fbUser = cred.user;

      await fbUser.updateProfile({ displayName: cleanUsername });

      const newProfile = {
        id: fbUser.uid,
        username: cleanUsername,
        email: cleanEmail,
        role: cleanUsername.toLowerCase() === "admin" ? "admin" : "user",
        status: "active",
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        watchlist: []
      };

      // Save user record directly in Firebase Cloud Firestore
      if (this.db) {
        try {
          await this.db.collection("users").doc(fbUser.uid).set(newProfile);
        } catch (dbErr) {
          console.warn("Firestore document write notice:", dbErr.message);
        }
      }

      this.setCurrentUser(newProfile);
      this.logAudit("USER_REGISTER", `New user "${cleanUsername}" registered in Firebase`);
      return newProfile;
    } catch (err) {
      let msg = err.message;
      if (err.code === "auth/email-already-in-use") {
        msg = `Username or email "${cleanUsername}" is already registered.`;
      } else if (err.code === "auth/weak-password") {
        msg = "Password should be at least 6 characters.";
      }
      throw new Error(msg);
    }
  }

  // --- FIRESTORE USER WATCHLIST SYNC ---

  async syncUserWatchlist(watchlistIds) {
    if (!this.currentUser || !this.db) return;
    try {
      const arr = Array.isArray(watchlistIds) ? watchlistIds : Array.from(watchlistIds || []);
      await this.db.collection("users").doc(this.currentUser.id).update({
        watchlist: arr
      });
    } catch (e) {
      console.warn("Firestore watchlist sync notice:", e.message);
    }
  }

  async getUserWatchlist() {
    if (!this.currentUser || !this.db) return null;
    try {
      const doc = await this.db.collection("users").doc(this.currentUser.id).get();
      if (doc.exists && doc.data().watchlist) {
        return doc.data().watchlist;
      }
    } catch (e) {}
    return null;
  }

  // --- FIRESTORE COMMUNITY REVIEWS ---

  async saveReview(movieId, review) {
    if (!this.db) return null;
    try {
      const newReviewDoc = {
        movieId: String(movieId),
        user: review.user || (this.currentUser ? this.currentUser.username : "Audience"),
        userId: this.currentUser ? this.currentUser.id : null,
        avatar: review.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        rating: Number(review.rating) || 8,
        text: review.text || "",
        date: review.date || new Date().toISOString().substring(0, 10),
        createdAt: new Date().toISOString()
      };
      const ref = await this.db.collection("reviews").add(newReviewDoc);
      return { id: ref.id, ...newReviewDoc };
    } catch (e) {
      console.warn("Firestore review save notice:", e.message);
      return null;
    }
  }

  async getMovieReviews(movieId) {
    if (!this.db) return [];
    try {
      const snap = await this.db.collection("reviews")
        .where("movieId", "==", String(movieId))
        .get();
      const list = [];
      snap.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
      return list;
    } catch (e) {
      return [];
    }
  }

  async logout() {
    const username = this.currentUser ? this.currentUser.username : "User";
    if (this.auth) {
      try {
        await this.auth.signOut();
      } catch (e) {}
    }
    this.setCurrentUser(null);
    this.logAudit("USER_LOGOUT", `User "${username}" signed out`);
  }

  // --- CLOUD FIRESTORE USER MANAGEMENT (ADMIN) ---

  async getAllUsers() {
    if (this.db) {
      try {
        const snapshot = await this.db.collection("users").get();
        const users = [];
        snapshot.forEach((doc) => {
          users.push({ id: doc.id, ...doc.data() });
        });
        if (users.length > 0) {
          this.cachedUsers = users;
          return users;
        }
      } catch (e) {
        console.warn("Firestore get users notice:", e.message);
      }
    }

    if (this.cachedUsers.length > 0) {
      return this.cachedUsers;
    }

    // Default seed if Firestore is brand new
    return [
      {
        id: "usr_admin_default",
        username: "admin",
        email: "admin@heartzzy.app",
        role: "admin",
        status: "active",
        createdAt: "2024-01-01T10:00:00Z",
        lastLogin: new Date().toISOString(),
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
      }
    ];
  }

  findUserById(id) {
    return this.cachedUsers.find((u) => u.id === id);
  }

  async createUser(userData) {
    const username = (userData.username || "").trim();
    if (!username) throw new Error("Username is required.");

    const email = userData.email || this.formatAuthEmail(username);
    const password = userData.password || "user123";
    const role = userData.role || "user";

    let uid = `usr_${Date.now()}`;

    // Create in Firebase Auth
    if (this.auth) {
      try {
        const cred = await this.auth.createUserWithEmailAndPassword(email, password);
        if (cred.user) {
          uid = cred.user.uid;
          await cred.user.updateProfile({ displayName: username });
        }
      } catch (e) {
        console.warn("Auth user creation notice:", e.message);
      }
    }

    const newUser = {
      id: uid,
      username,
      email,
      role,
      status: userData.status || "active",
      createdAt: new Date().toISOString(),
      lastLogin: "Never",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
    };

    // Save in Cloud Firestore
    if (this.db) {
      try {
        await this.db.collection("users").doc(uid).set(newUser);
      } catch (e) {}
    }

    this.cachedUsers.push(newUser);
    this.logAudit("ADMIN_USER_CREATE", `Admin created user "${username}" [${role}] in Firebase`);
    return newUser;
  }

  async updateUserRole(userId, newRole) {
    if (this.db) {
      try {
        await this.db.collection("users").doc(userId).update({ role: newRole });
      } catch (e) {}
    }

    const user = this.cachedUsers.find((u) => u.id === userId);
    if (user) {
      user.role = newRole;
      if (this.currentUser && this.currentUser.id === userId) {
        this.currentUser.role = newRole;
      }
    }
    this.logAudit("ADMIN_ROLE_CHANGE", `Updated role for user ID [${userId}] to [${newRole}] in Firestore`);
    return user;
  }

  async toggleUserStatus(userId, newStatus) {
    if (this.currentUser && this.currentUser.id === userId && newStatus !== "active") {
      throw new Error("You cannot suspend your own active administrator account.");
    }

    if (this.db) {
      try {
        await this.db.collection("users").doc(userId).update({ status: newStatus });
      } catch (e) {}
    }

    const user = this.cachedUsers.find((u) => u.id === userId);
    if (user) {
      user.status = newStatus;
    }
    this.logAudit("ADMIN_STATUS_CHANGE", `Updated account status for [${userId}] to [${newStatus}] in Firestore`);
    return user;
  }

  async deleteUser(userId) {
    if (this.currentUser && this.currentUser.id === userId) {
      throw new Error("You cannot delete your own logged-in account.");
    }

    if (this.db) {
      try {
        await this.db.collection("users").doc(userId).delete();
      } catch (e) {}
    }

    this.cachedUsers = this.cachedUsers.filter((u) => u.id !== userId);
    this.logAudit("ADMIN_USER_DELETE", `Admin deleted user profile ID [${userId}] from Firestore`);
    return true;
  }

  // --- FIREBASE CONFIGURATION STORAGE ---

  getFirebaseConfig() {
    try {
      const stored = localStorage.getItem(this.firebaseConfigKey);
      return stored ? JSON.parse(stored) : DEFAULT_FIREBASE_CONFIG;
    } catch (e) {
      return DEFAULT_FIREBASE_CONFIG;
    }
  }

  saveFirebaseConfig(config) {
    try {
      if (!config) {
        localStorage.removeItem(this.firebaseConfigKey);
      } else {
        localStorage.setItem(this.firebaseConfigKey, JSON.stringify(config));
      }
      this.initFirebase();
      this.logAudit("CONFIG_FIREBASE", "Updated Google Firebase project credentials");
      return true;
    } catch (e) {
      return false;
    }
  }

  // --- CLOUD FIRESTORE AUDIT LOGS ---

  async logAudit(action, description) {
    const logEntry = {
      id: `log_${Date.now()}`,
      timestamp: new Date().toISOString(),
      user: this.currentUser ? this.currentUser.username : "System",
      action,
      description
    };

    this.cachedLogs.unshift(logEntry);

    if (this.db) {
      try {
        await this.db.collection("audit_logs").add(logEntry);
      } catch (e) {}
    }
  }

  async getAuditLogs() {
    if (this.db) {
      try {
        const snap = await this.db.collection("audit_logs").orderBy("timestamp", "desc").limit(50).get();
        const logs = [];
        snap.forEach((doc) => logs.push({ id: doc.id, ...doc.data() }));
        if (logs.length > 0) {
          this.cachedLogs = logs;
          return logs;
        }
      } catch (e) {}
    }
    return this.cachedLogs;
  }

  async clearAuditLogs() {
    this.cachedLogs = [];
    if (this.db) {
      try {
        const snap = await this.db.collection("audit_logs").get();
        const batch = this.db.batch();
        snap.forEach((doc) => batch.delete(doc.ref));
        await batch.commit();
      } catch (e) {}
    }
  }
}

// Global Auth Singleton
const authService = new AuthService();
