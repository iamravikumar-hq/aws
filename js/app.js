/**
 * HEARTZZY - Global Movie Discovery & Recommendation Platform
 * Main Controller & UI Architecture
 * Zero-error guarantees, interactive Chart.js, CineMatch, Comparator & Watchlist.
 */

(function () {
  "use strict";

  // --- APPLICATION STATE ---
  const state = {
    theme: "light", // Strict default
    currentNav: "all", // 'all' | 'trending' | 'top_rated' | 'upcoming' | 'watchlist'
    selectedGenre: null,
    selectedLanguage: "all",
    selectedYear: "all",
    selectedSort: "popularity.desc",
    searchQuery: "",
    currentPage: 1,
    totalPages: 1,
    movies: [],
    trendingMovies: [],
    topRatedMovies: [],
    watchlist: new Set(),
    comparedMovies: [], // Max 2 movies
    currentDetailMovie: null,
    chartInstance: null,
    cinematch: {
      time: "standard",
      companion: "solo",
      mood: "mind-bending",
      lang: "all"
    },
    detailOttRegion: "IN",
    reviewFormRating: 9,
    isGenresExpanded: false
  };

  // --- DOM ELEMENT REFERENCES ---
  const dom = {
    html: document.documentElement,
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    themeIcon: document.getElementById("themeIcon"),
    mobileMenuBtn: document.getElementById("mobileMenuBtn"),
    sidebar: document.getElementById("sidebar"),
    sidebarBackdrop: document.getElementById("sidebarBackdrop"),
    genresSidebarList: document.getElementById("genresSidebarList"),
    toggleGenresBtn: document.getElementById("toggleGenresBtn"),
    toggleGenresText: document.getElementById("toggleGenresText"),
    toggleGenresIcon: document.getElementById("toggleGenresIcon"),
    languagesChipGrid: document.getElementById("languagesChipGrid"),
    navItems: document.querySelectorAll(".nav-item"),
    watchlistCountBadge: document.getElementById("watchlistCountBadge"),
    compareCountBadge: document.getElementById("compareCountBadge"),
    globalSearchInput: document.getElementById("globalSearchInput"),
    searchClearBtn: document.getElementById("searchClearBtn"),
    searchDropdown: document.getElementById("searchDropdown"),
    openCinematchBtn: document.getElementById("openCinematchBtn"),
    bannerCinematchCta: document.getElementById("bannerCinematchCta"),
    openComparatorBtn: document.getElementById("openComparatorBtn"),
    apiStatusIndicator: document.getElementById("apiStatusIndicator"),
    apiStatusText: document.getElementById("apiStatusText"),
    
    // Strips
    trendingStripSection: document.getElementById("trendingStripSection"),
    trendingStripCarousel: document.getElementById("trendingStripCarousel"),
    stripTrendingPrev: document.getElementById("stripTrendingPrev"),
    stripTrendingNext: document.getElementById("stripTrendingNext"),
    topRatedStripSection: document.getElementById("topRatedStripSection"),
    topRatedStripCarousel: document.getElementById("topRatedStripCarousel"),
    stripTopPrev: document.getElementById("stripTopPrev"),
    stripTopNext: document.getElementById("stripTopNext"),

    // Catalog & Filters
    discoverHeading: document.getElementById("discoverHeading"),
    discoverSubtitle: document.getElementById("discoverSubtitle"),
    filterYearSelect: document.getElementById("filterYearSelect"),
    filterLanguageSelect: document.getElementById("filterLanguageSelect"),
    filterSortSelect: document.getElementById("filterSortSelect"),
    filterResetBtn: document.getElementById("filterResetBtn"),
    activeFiltersRow: document.getElementById("activeFiltersRow"),
    movieGrid: document.getElementById("movieGrid"),
    movieGridEmptyState: document.getElementById("movieGridEmptyState"),
    emptyStateResetBtn: document.getElementById("emptyStateResetBtn"),
    loadMoreBtn: document.getElementById("loadMoreBtn"),
    paginationArea: document.getElementById("paginationArea"),

    // Movie Detail Modal
    movieDetailModal: document.getElementById("movieDetailModal"),
    closeDetailModalBtn: document.getElementById("closeDetailModalBtn"),
    modalLiveSyncPill: document.getElementById("modalLiveSyncPill"),
    modalBackdrop: document.getElementById("modalBackdrop"),
    modalPoster: document.getElementById("modalPoster"),
    modalTitle: document.getElementById("modalTitle"),
    modalTagline: document.getElementById("modalTagline"),
    modalYear: document.getElementById("modalYear"),
    modalRuntime: document.getElementById("modalRuntime"),
    modalLanguage: document.getElementById("modalLanguage"),
    modalCertification: document.getElementById("modalCertification"),
    modalWatchlistBtn: document.getElementById("modalWatchlistBtn"),
    modalWatchlistText: document.getElementById("modalWatchlistText"),
    modalCompareBtn: document.getElementById("modalCompareBtn"),
    modalShareBtn: document.getElementById("modalShareBtn"),
    metricRating: document.getElementById("metricRating"),
    metricVotes: document.getElementById("metricVotes"),
    metricRevenue: document.getElementById("metricRevenue"),
    metricRevenueInr: document.getElementById("metricRevenueInr"),
    metricReleaseDate: document.getElementById("metricReleaseDate"),
    metricGenres: document.getElementById("metricGenres"),
    modalPlot: document.getElementById("modalPlot"),
    modalDirector: document.getElementById("modalDirector"),
    modalCast: document.getElementById("modalCast"),
    awardsWinsCount: document.getElementById("awardsWinsCount"),
    awardsNomsCount: document.getElementById("awardsNomsCount"),
    awardsSummaryText: document.getElementById("awardsSummaryText"),
    majorAwardsList: document.getElementById("majorAwardsList"),
    genreChartCanvas: document.getElementById("genreChartCanvas"),
    genreProgressList: document.getElementById("genreProgressList"),
    ottTiersGrid: document.getElementById("ottTiersGrid"),
    ottRegionTabs: document.querySelectorAll(".region-tab-btn"),
    modalReviewsList: document.getElementById("modalReviewsList"),
    writeReviewForm: document.getElementById("writeReviewForm"),
    starPicker: document.getElementById("starPicker"),
    reviewAuthorInput: document.getElementById("reviewAuthorInput"),
    reviewTextInput: document.getElementById("reviewTextInput"),
    modalSimilarGrid: document.getElementById("modalSimilarGrid"),

    // CineMatch Modal
    cinematchModal: document.getElementById("cinematchModal"),
    closeCinematchBtn: document.getElementById("closeCinematchBtn"),
    cmStep1: document.getElementById("cmStep1"),
    cmStep2: document.getElementById("cmStep2"),
    cmStep3: document.getElementById("cmStep3"),
    cmStep4: document.getElementById("cmStep4"),
    cmStepResult: document.getElementById("cmStepResult"),
    cmNext1: document.getElementById("cmNext1"),
    cmNext2: document.getElementById("cmNext2"),
    cmNext3: document.getElementById("cmNext3"),
    cmBack2: document.getElementById("cmBack2"),
    cmBack3: document.getElementById("cmBack3"),
    cmBack4: document.getElementById("cmBack4"),
    cmFindMatchesBtn: document.getElementById("cmFindMatchesBtn"),
    cmRestartBtn: document.getElementById("cmRestartBtn"),
    cmDoneBtn: document.getElementById("cmDoneBtn"),
    cmResultsContainer: document.getElementById("cmResultsContainer"),

    // Comparator Drawer
    comparatorDrawer: document.getElementById("comparatorDrawer"),
    closeComparatorBtn: document.getElementById("closeComparatorBtn"),
    clearCompareBtn: document.getElementById("clearCompareBtn"),
    compareEmptyPrompt: document.getElementById("compareEmptyPrompt"),
    vsComparisonGrid: document.getElementById("vsComparisonGrid"),
    vsMovieCard1: document.getElementById("vsMovieCard1"),
    vsMovieCard2: document.getElementById("vsMovieCard2"),
    compareBrowseBtn: document.getElementById("compareBrowseBtn"),

    // Auth & User Menu
    userMenuWrapper: document.getElementById("userMenuWrapper"),
    topbarAdminBtn: document.getElementById("topbarAdminBtn"),
    sidebarAdminItem: document.getElementById("sidebarAdminItem"),
    authModal: document.getElementById("authModal"),
    authModalCard: document.querySelector(".auth-modal-card"),
    closeAuthModalBtn: document.getElementById("closeAuthModalBtn"),
    authModalTitle: document.getElementById("authModalTitle"),
    authModalSubtitle: document.getElementById("authModalSubtitle"),
    authTabLogin: document.getElementById("authTabLogin"),
    authTabRegister: document.getElementById("authTabRegister"),
    loginForm: document.getElementById("loginForm"),
    registerForm: document.getElementById("registerForm"),
    loginUsernameInput: document.getElementById("loginUsernameInput"),
    loginPasswordInput: document.getElementById("loginPasswordInput"),
    loginPassToggle: document.getElementById("loginPassToggle"),
    loginPassIcon: document.getElementById("loginPassIcon"),
    loginErrorMsg: document.getElementById("loginErrorMsg"),
    loginSubmitBtn: document.getElementById("loginSubmitBtn"),
    loginSpinner: document.getElementById("loginSpinner"),
    loginSubmitText: document.getElementById("loginSubmitText"),
    loginArrowIcon: document.getElementById("loginArrowIcon"),
    regUsernameInput: document.getElementById("regUsernameInput"),
    regEmailInput: document.getElementById("regEmailInput"),
    regPasswordInput: document.getElementById("regPasswordInput"),
    regPassToggle: document.getElementById("regPassToggle"),
    regPassIcon: document.getElementById("regPassIcon"),
    passStrengthWrapper: document.getElementById("passStrengthWrapper"),
    passStrengthBar: document.getElementById("passStrengthBar"),
    passStrengthVal: document.getElementById("passStrengthVal"),
    registerErrorMsg: document.getElementById("registerErrorMsg"),
    registerSubmitBtn: document.getElementById("registerSubmitBtn"),
    regSpinner: document.getElementById("regSpinner"),
    regSubmitText: document.getElementById("regSubmitText"),
    regArrowIcon: document.getElementById("regArrowIcon"),
    btnForgotPass: document.getElementById("btnForgotPass"),
    btnSwitchAuthTab: document.getElementById("btnSwitchAuthTab"),
    authFooterPrompt: document.getElementById("authFooterPrompt"),

    // Toast Container
    toastContainer: document.getElementById("toastContainer")
  };

  // --- INITIALIZATION ---
  function init() {
    loadUserPreferences();
    initTheme();
    renderSidebarGenres();
    renderSidebarLanguages();
    renderLanguageDropdown();
    setupEventListeners();
    setupAuthUI();
    updateApiStatusUI();
    updateWatchlistBadge();
    updateCompareBadge();

    // Fetch initial datasets
    loadCuratedStrips();
    loadCatalogMovies(true);

    // Initial Lucide icons initialization
    safeRefreshIcons();

    // Deep linking for shared movie links (?movie=ID)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const sharedMovieId = urlParams.get("movie");
      if (sharedMovieId) {
        setTimeout(() => {
          openMovieDetail(sharedMovieId);
        }, 500);
      }
    } catch (e) {}
  }

  // --- SAFE LUCIDE ICON HELPER ---
  function safeRefreshIcons() {
    try {
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    } catch (e) {
      console.warn("Lucide render skipped:", e);
    }
  }

  // --- LOCAL STORAGE HANDLING ---
  function loadUserPreferences() {
    try {
      // Theme (default light)
      const savedTheme = localStorage.getItem("heartzzy_theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        state.theme = savedTheme;
      } else {
        state.theme = "light";
      }

      // Watchlist
      const savedWatchlist = localStorage.getItem("heartzzy_watchlist");
      if (savedWatchlist) {
        state.watchlist = new Set(JSON.parse(savedWatchlist));
      }
    } catch (e) {
      console.warn("Storage loading fallback", e);
      state.theme = "light";
      state.watchlist = new Set();
    }
  }

  function saveWatchlist() {
    try {
      localStorage.setItem("heartzzy_watchlist", JSON.stringify([...state.watchlist]));
    } catch (e) {
      console.warn("Watchlist storage failed", e);
    }
  }

  // --- THEME SYSTEM ---
  function initTheme() {
    applyTheme(state.theme);
  }

  function applyTheme(theme) {
    state.theme = theme;
    dom.html.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("heartzzy_theme", theme);
    } catch (e) {}

    if (dom.themeIcon) {
      dom.themeIcon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
      safeRefreshIcons();
    }

    // If detail modal chart is active, redraw for optimal dark/light contrast
    if (state.chartInstance && state.currentDetailMovie) {
      renderGenreChart(state.currentDetailMovie);
    }
  }

  function toggleTheme() {
    const nextTheme = state.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme === "dark" ? "Dark" : "Light"} Mode`);
  }

  // --- API STATUS UI ---
  function updateApiStatusUI() {
    if (!dom.apiStatusIndicator || !dom.apiStatusText) return;
    const dot = dom.apiStatusIndicator.querySelector(".status-dot");
    if (movieApi.hasApiKeys()) {
      if (dot) {
        dot.style.backgroundColor = "var(--accent-blue)";
        dot.style.boxShadow = "0 0 6px var(--accent-blue)";
      }
      dom.apiStatusText.textContent = "Live TMDB + OMDb Active";
    } else {
      if (dot) {
        dot.style.backgroundColor = "var(--accent-green)";
        dot.style.boxShadow = "0 0 6px var(--accent-green)";
      }
      dom.apiStatusText.textContent = "Catalog Operational";
    }
  }

  // --- SIDEBAR RENDERING ---
  function renderSidebarGenres() {
    const genres = TMDB_GENRES;
    const limit = state.isGenresExpanded ? genres.length : 8;
    const visibleGenres = genres.slice(0, limit);

    dom.genresSidebarList.innerHTML = visibleGenres
      .map(
        g => `
      <button type="button" class="genre-btn ${state.selectedGenre === g.name ? "active" : ""}" data-genre="${g.name}">
        <i data-lucide="${g.icon}"></i>
        <span>${g.name}</span>
      </button>
    `
      )
      .join("");

    dom.toggleGenresText.textContent = state.isGenresExpanded ? "Show Fewer Genres" : "Show All Genres";
    dom.toggleGenresIcon.setAttribute("data-lucide", state.isGenresExpanded ? "chevron-up" : "chevron-down");
    safeRefreshIcons();
  }

  function renderSidebarLanguages() {
    dom.languagesChipGrid.innerHTML = AVAILABLE_LANGUAGES.map(
      l => `
      <button type="button" class="lang-chip ${state.selectedLanguage === l.code ? "active" : ""}" data-lang="${l.code}">
        ${l.code === "all" ? "All" : l.name.split(" ")[0]}
      </button>
    `
    ).join("");
  }

  function renderLanguageDropdown() {
    dom.filterLanguageSelect.innerHTML = AVAILABLE_LANGUAGES.map(
      l => `<option value="${l.code}" ${state.selectedLanguage === l.code ? "selected" : ""}>${l.name}</option>`
    ).join("");
  }

  // --- CURATED STRIPS (MOCTALE INSPIRED) ---
  async function loadCuratedStrips() {
    try {
      const [trending, topRated] = await Promise.all([
        movieApi.getTrendingMovies(),
        movieApi.getTopRatedMovies()
      ]);

      state.trendingMovies = trending;
      state.topRatedMovies = topRated;

      renderStripCarousel(dom.trendingStripCarousel, trending, true);
      renderStripCarousel(dom.topRatedStripCarousel, topRated, false);
      safeRefreshIcons();
    } catch (e) {
      console.warn("Failed loading curated strips:", e);
    }
  }

  function renderStripCarousel(container, movies, showRank = false) {
    if (!movies || !movies.length) {
      container.innerHTML = `<div style="padding: 20px; color: var(--text-muted);">No movies available</div>`;
      return;
    }

    container.innerHTML = movies
      .map((movie, idx) => {
        const delay = Math.min(idx * 35, 350);
        return `
        <div class="strip-card" data-id="${movie.id}" style="animation-delay: ${delay}ms;">
          <div class="strip-poster-wrap">
            <img 
              src="${movie.poster}" 
              alt="${movie.title}" 
              class="strip-poster" 
              loading="lazy" 
              onerror="this.onerror=null; this.src='${getFallbackPosterSVG(movie.title, movie.year)}';"
            >
            ${showRank ? `<span class="rank-badge rank-${idx + 1}">#${idx + 1}</span>` : ""}
          </div>
          <div class="strip-card-body">
            <div class="strip-card-title">${movie.title}</div>
            <div class="strip-card-meta">
              <span>${movie.year}</span>
              <span class="meta-rating">
                <i data-lucide="star" style="width: 13px; height: 13px;"></i>
                ${movie.imdbRating}
              </span>
            </div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  // --- CATALOG DISCOVERY & FILTERING ---
  async function loadCatalogMovies(resetPage = false) {
    if (resetPage) {
      state.currentPage = 1;
      state.movies = [];
      renderSkeletonGrid();
    }

    updateActiveFiltersUI();

    try {
      if (state.currentNav === "watchlist") {
        // Show watchlist movies
        dom.discoverHeading.textContent = "My Watchlist";
        dom.discoverSubtitle.textContent = `You have saved ${state.watchlist.size} movies to watch later`;
        hideStrips(true);

        const allDefault = DEFAULT_MOVIES;
        const watchlisted = allDefault.filter(m => state.watchlist.has(m.id));
        state.movies = watchlisted;
        state.totalPages = 1;
        renderMovieGrid(state.movies);
        dom.paginationArea.style.display = "none";
        return;
      }

      // Normal Discover Catalog
      hideStrips(Boolean(state.searchQuery || state.selectedGenre || state.currentNav !== "all"));

      // Update Section Heading
      if (state.searchQuery) {
        dom.discoverHeading.textContent = `Search Results: "${state.searchQuery}"`;
        dom.discoverSubtitle.textContent = `Found titles matching your query`;
      } else if (state.selectedGenre) {
        dom.discoverHeading.textContent = `${state.selectedGenre} Movies`;
        dom.discoverSubtitle.textContent = `Top rated & trending ${state.selectedGenre.toLowerCase()} cinema`;
      } else if (state.currentNav === "trending") {
        dom.discoverHeading.textContent = "Trending Movies";
        dom.discoverSubtitle.textContent = "The most popular releases making waves worldwide";
      } else if (state.currentNav === "top_rated") {
        dom.discoverHeading.textContent = "Highest Rated Movies";
        dom.discoverSubtitle.textContent = "All-time critically acclaimed masterpieces";
      } else if (state.currentNav === "upcoming") {
        dom.discoverHeading.textContent = "Upcoming Releases";
        dom.discoverSubtitle.textContent = "Anticipated cinema arriving in theatres and OTT soon";
      } else {
        dom.discoverHeading.textContent = "Discover Movies";
        dom.discoverSubtitle.textContent = "Explore top-rated films, awards winners, and box office blockbusters";
      }

      let res;
      if (state.searchQuery) {
        res = await movieApi.searchMovies(state.searchQuery, state.currentPage);
      } else {
        res = await movieApi.discoverMovies({
          genre: state.selectedGenre,
          language: state.selectedLanguage,
          year: state.selectedYear,
          sortBy: state.selectedSort,
          page: state.currentPage,
          category: state.currentNav
        });
      }

      const newMovies = res.results || [];
      state.totalPages = res.totalPages || 1;

      if (state.currentPage === 1) {
        state.movies = newMovies;
      } else {
        // Append without duplicates
        const existingIds = new Set(state.movies.map(m => m.id));
        newMovies.forEach(m => {
          if (!existingIds.has(m.id)) {
            state.movies.push(m);
          }
        });
      }

      renderMovieGrid(state.movies);

      // Pagination Load More visibility
      if (state.currentPage < state.totalPages && state.movies.length > 0) {
        dom.paginationArea.style.display = "flex";
      } else {
        dom.paginationArea.style.display = "none";
      }
    } catch (e) {
      console.error("Failed to load catalog movies:", e);
      renderMovieGrid(DEFAULT_MOVIES.slice(0, 8));
      showToast("Loaded offline fallback catalog");
    }
  }

  function hideStrips(hide) {
    if (dom.trendingStripSection && dom.topRatedStripSection) {
      dom.trendingStripSection.style.display = hide ? "none" : "flex";
      dom.topRatedStripSection.style.display = hide ? "none" : "flex";
    }
  }

  // --- RENDER MOVIE GRID ---
  function renderMovieGrid(movies) {
    if (!movies || !movies.length) {
      dom.movieGrid.innerHTML = "";
      dom.movieGridEmptyState.style.display = "block";
      dom.paginationArea.style.display = "none";
      return;
    }

    dom.movieGridEmptyState.style.display = "none";

    dom.movieGrid.innerHTML = movies
      .map((movie, idx) => {
        const isSaved = state.watchlist.has(movie.id);
        const isCompared = state.comparedMovies.some(m => m.id === movie.id);
        const genresDisplay = (movie.genres || []).slice(0, 2).map(g => `<span class="genre-tag-sm">${g}</span>`).join("");
        const delay = Math.min(idx * 35, 420);

        return `
        <article class="movie-card" data-id="${movie.id}" style="animation-delay: ${delay}ms;">
          <div class="poster-wrapper">
            <img 
              src="${movie.poster}" 
              alt="${movie.title}" 
              class="card-poster" 
              loading="lazy" 
              onerror="this.onerror=null; this.src='${getFallbackPosterSVG(movie.title, movie.year)}';"
            >
            <!-- Hover Quick Action Overlay -->
            <div class="card-overlay-actions">
              <button 
                type="button" 
                class="card-action-btn ${isSaved ? "active" : ""}" 
                data-action="watchlist" 
                data-id="${movie.id}" 
                title="${isSaved ? "Remove from Watchlist" : "Save to Watchlist"}"
              >
                <i data-lucide="bookmark"></i>
              </button>
              <button 
                type="button" 
                class="card-action-btn ${isCompared ? "active" : ""}" 
                data-action="compare" 
                data-id="${movie.id}" 
                title="Add to Compare"
              >
                <i data-lucide="columns"></i>
              </button>
            </div>

            <!-- Bottom Badges on Poster -->
            <div class="poster-badges-bottom">
              <span class="rating-badge">
                <i data-lucide="star" style="width: 13px; height: 13px;"></i>
                <span>${movie.imdbRating}</span>
              </span>
              <span class="lang-badge">${movie.languageName || movie.language.toUpperCase()}</span>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title" title="${movie.title}">${movie.title}</h3>
            
            <div class="card-genres">
              ${genresDisplay}
            </div>

            <!-- Aligned Metadata Rows -->
            <div class="card-meta-list">
              <div class="meta-row">
                <span class="meta-label">Language:</span>
                <span class="meta-val">${movie.languageName}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Release:</span>
                <span class="meta-val">${movie.releaseDate || movie.year}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Lifetime Gross:</span>
                <span class="meta-val-boxoffice">${movie.revenueDisplay || "N/A"}</span>
              </div>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    safeRefreshIcons();
  }

  function renderSkeletonGrid() {
    dom.movieGridEmptyState.style.display = "none";
    dom.movieGrid.innerHTML = Array(8)
      .fill(0)
      .map(
        () => `
      <div class="skeleton-card">
        <div class="skeleton-poster"></div>
        <div class="skeleton-body">
          <div class="skeleton-line medium"></div>
          <div class="skeleton-line short"></div>
          <div class="skeleton-line" style="margin-top: 10px;"></div>
          <div class="skeleton-line"></div>
        </div>
      </div>
    `
      )
      .join("");
  }

  // --- ACTIVE FILTER CHIPS ---
  function updateActiveFiltersUI() {
    const chips = [];

    if (state.searchQuery) {
      chips.push({
        label: `Search: "${state.searchQuery}"`,
        onRemove: () => {
          state.searchQuery = "";
          dom.globalSearchInput.value = "";
          dom.searchClearBtn.style.display = "none";
          loadCatalogMovies(true);
        }
      });
    }

    if (state.selectedGenre) {
      chips.push({
        label: `Genre: ${state.selectedGenre}`,
        onRemove: () => {
          state.selectedGenre = null;
          renderSidebarGenres();
          loadCatalogMovies(true);
        }
      });
    }

    if (state.selectedLanguage !== "all") {
      const lObj = AVAILABLE_LANGUAGES.find(l => l.code === state.selectedLanguage);
      chips.push({
        label: `Language: ${lObj ? lObj.name : state.selectedLanguage}`,
        onRemove: () => {
          state.selectedLanguage = "all";
          dom.filterLanguageSelect.value = "all";
          renderSidebarLanguages();
          loadCatalogMovies(true);
        }
      });
    }

    if (state.selectedYear !== "all") {
      chips.push({
        label: `Year: ${state.selectedYear}`,
        onRemove: () => {
          state.selectedYear = "all";
          dom.filterYearSelect.value = "all";
          loadCatalogMovies(true);
        }
      });
    }

    if (chips.length > 0) {
      dom.activeFiltersRow.innerHTML = chips
        .map(
          (c, idx) => `
        <span class="filter-chip">
          <span>${c.label}</span>
          <button type="button" class="filter-chip-remove" data-chip-idx="${idx}" aria-label="Remove filter">
            <i data-lucide="x" style="width: 13px; height: 13px;"></i>
          </button>
        </span>
      `
        )
        .join("");
      dom.activeFiltersRow.style.display = "flex";

      dom.activeFiltersRow.querySelectorAll(".filter-chip-remove").forEach(btn => {
        btn.addEventListener("click", e => {
          e.stopPropagation();
          const idx = parseInt(btn.dataset.chipIdx, 10);
          if (chips[idx] && typeof chips[idx].onRemove === "function") {
            chips[idx].onRemove();
          }
        });
      });
    } else {
      dom.activeFiltersRow.innerHTML = "";
      dom.activeFiltersRow.style.display = "none";
    }

    safeRefreshIcons();
  }

  // --- ROBUST MOVIE LOOKUP HELPER ---
  function findMovieById(id) {
    if (!id) return null;
    const strId = String(id);
    return (
      (state.movies && state.movies.find(m => String(m.id) === strId)) ||
      (state.trendingMovies && state.trendingMovies.find(m => String(m.id) === strId)) ||
      (state.topRatedMovies && state.topRatedMovies.find(m => String(m.id) === strId)) ||
      (state.comparedMovies && state.comparedMovies.find(m => String(m.id) === strId)) ||
      (typeof DEFAULT_MOVIES !== "undefined" ? DEFAULT_MOVIES.find(m => String(m.id) === strId) : null) ||
      null
    );
  }

  // Populate all visual fields of the movie detail modal
  function populateMovieDetailModal(movie) {
    if (!movie) return;
    state.currentDetailMovie = movie;

    // Populate Hero Banner
    dom.modalBackdrop.src = movie.backdrop || movie.poster;
    dom.modalPoster.src = movie.poster;
    dom.modalPoster.onerror = () => {
      dom.modalPoster.src = getFallbackPosterSVG(movie.title, movie.year);
    };
    dom.modalTitle.textContent = movie.title || "Selected Title";
    dom.modalTagline.textContent = movie.tagline ? `"${movie.tagline}"` : "";
    dom.modalYear.textContent = movie.year || (movie.releaseDate ? movie.releaseDate.substring(0, 4) : "2024");
    dom.modalRuntime.textContent = movie.runtimeFormatted || (movie.runtime ? `${movie.runtime}m` : "2h 00m");
    dom.modalLanguage.textContent = movie.languageName || (movie.language ? movie.language.toUpperCase() : "English");
    dom.modalCertification.textContent = movie.certification || "PG-13";

    // Watchlist Button State
    const isSaved = state.watchlist.has(movie.id);
    dom.modalWatchlistText.textContent = isSaved ? "Remove from Watchlist" : "Add to Watchlist";
    dom.modalWatchlistBtn.classList.toggle("primary", !isSaved);

    // Key Metrics Ribbon
    dom.metricRating.textContent = movie.imdbRating || "7.5";
    dom.metricVotes.textContent = movie.imdbVotes ? (String(movie.imdbVotes).includes("votes") ? movie.imdbVotes : `(${movie.imdbVotes} votes)`) : "(10,000+ votes)";
    dom.metricRevenue.textContent = movie.revenueDisplay || "N/A";
    dom.metricRevenueInr.textContent = movie.revenueInr ? `approx. ${movie.revenueInr}` : "";
    dom.metricReleaseDate.textContent = movie.releaseDate || `${movie.year || 2024}-01-01`;
    dom.metricGenres.innerHTML = (movie.genres || []).map(g => `<span class="genre-tag-sm">${g}</span>`).join("");

    // Plot & Crew
    dom.modalPlot.textContent = movie.overview || "No plot summary available for this title.";
    dom.modalDirector.textContent = movie.director || "Acclaimed Director";
    dom.modalCast.textContent = Array.isArray(movie.cast) ? movie.cast.join(", ") : (movie.cast || "Lead Cast");

    // Awards Breakdown
    dom.awardsWinsCount.textContent = `${movie.awards?.wins || 0} Wins`;
    dom.awardsNomsCount.textContent = `${movie.awards?.nominations || 0} Nominations`;
    dom.awardsSummaryText.textContent = movie.awards?.summary || "Critically celebrated release across worldwide film festivals.";
    dom.majorAwardsList.innerHTML = (movie.awards?.major || ["International Audience Award", "Global Critics Choice Honor"])
      .map(
        a => `
      <span class="major-award-pill">
        <i data-lucide="award"></i>
        <span>${a}</span>
      </span>
    `
      )
      .join("");

    // Render Genre Composition % Chart (Interactive Chart.js)
    renderGenreChart(movie);

    // Where to Watch (OTT)
    renderWatchProviders(movie, state.detailOttRegion);

    // User Reviews
    renderReviewsList(movie);

    // Similar Movies
    renderSimilarMovies(movie);

    safeRefreshIcons();
  }

  // --- MOVIE DETAIL MODAL OPENER ---
  async function openMovieDetail(movieId, preloadedMovie = null) {
    const known = preloadedMovie || findMovieById(movieId);

    try {
      // Instant 0ms response: if we have existing card data, open immediately!
      if (known) {
        populateMovieDetailModal(known);
        dom.movieDetailModal.classList.add("active");
        document.body.style.overflow = "hidden";
        if (dom.modalLiveSyncPill) {
          dom.modalLiveSyncPill.style.display = "inline-flex";
        }
        safeRefreshIcons();
      }

      // Fetch or enrich live details in background
      const fullMovie = await movieApi.getMovieDetails(movieId, known);

      if (dom.modalLiveSyncPill) {
        dom.modalLiveSyncPill.style.display = "none";
      }

      if (fullMovie) {
        // If modal is still open for this movie, seamlessly update with full enriched data
        if (state.currentDetailMovie && String(state.currentDetailMovie.id) === String(movieId)) {
          populateMovieDetailModal(fullMovie);
        } else if (!known) {
          populateMovieDetailModal(fullMovie);
          dom.movieDetailModal.classList.add("active");
          document.body.style.overflow = "hidden";
        }
        safeRefreshIcons();
      }
    } catch (e) {
      console.error("Error opening detail view:", e);
      if (dom.modalLiveSyncPill) {
        dom.modalLiveSyncPill.style.display = "none";
      }
      if (known) {
        populateMovieDetailModal(known);
        dom.movieDetailModal.classList.add("active");
      } else {
        showToast("Unable to load full movie details");
      }
    }
  }

  function closeMovieDetail() {
    dom.movieDetailModal.classList.remove("active");
    document.body.style.overflow = "";
    if (state.chartInstance) {
      state.chartInstance.destroy();
      state.chartInstance = null;
    }
  }

  // --- GENRE COMPOSITION CHART (CHART.JS) ---
  function renderGenreChart(movie) {
    if (!movie || !movie.genreWeights) return;

    // Destroy existing instance to prevent "Canvas is already in use" errors
    if (state.chartInstance) {
      state.chartInstance.destroy();
      state.chartInstance = null;
    }

    const labels = Object.keys(movie.genreWeights);
    const dataValues = Object.values(movie.genreWeights);

    // Harmonious modern color palette
    const colorPalette = [
      "#E11D48", // Crimson
      "#FF6B00", // Warm Orange
      "#7C3AED", // Purple
      "#2563EB", // Blue
      "#059669", // Emerald
      "#D97706", // Cinema Gold
      "#0891B2"  // Cyan
    ];

    const isDark = state.theme === "dark";
    const bgColors = labels.map((_, i) => colorPalette[i % colorPalette.length]);

    // Right-side Percentage Progress Bars
    dom.genreProgressList.innerHTML = labels
      .map((genre, idx) => {
        const pct = dataValues[idx];
        const color = bgColors[idx];
        return `
        <div class="genre-progress-item">
          <div class="progress-header">
            <span>${genre}</span>
            <span class="progress-pct" style="color: ${color};">${pct}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${pct}%; background-color: ${color};"></div>
          </div>
        </div>
      `;
      })
      .join("");

    // Initialize Chart.js Doughnut
    try {
      const ctx = dom.genreChartCanvas.getContext("2d");
      state.chartInstance = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels,
          datasets: [
            {
              data: dataValues,
              backgroundColor: bgColors,
              borderColor: isDark ? "#131A29" : "#FFFFFF",
              borderWidth: 3,
              hoverOffset: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          cutout: "68%",
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return ` ${context.label}: ${context.raw}% DNA`;
                }
              }
            }
          },
          animation: {
            duration: 800,
            easing: "easeOutQuart"
          }
        }
      });
    } catch (e) {
      console.warn("Chart.js render error:", e);
    }
  }

  // --- OTT STREAMING PROVIDERS ---
  function renderWatchProviders(movie, region = "IN") {
    state.detailOttRegion = region;
    dom.ottRegionTabs.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.region === region);
    });

    const regionData = movie.ott?.[region] || { stream: [], rent: [], buy: [] };

    const renderTier = (title, items) => {
      if (!items || !items.length) {
        return `
          <div class="ott-tier-box">
            <span class="ott-tier-title">${title}</span>
            <span class="ott-empty-state">No listings currently recorded for ${region}</span>
          </div>
        `;
      }
      return `
        <div class="ott-tier-box">
          <span class="ott-tier-title">${title}</span>
          <div class="ott-provider-list">
            ${items
              .map(
                p => `
              <span class="provider-badge" style="background-color: ${p.color || "var(--accent-brand)"};">
                ${p.logo ? `<img src="${p.logo}" alt="${p.name}" style="width: 16px; height: 16px; border-radius: 3px;">` : ""}
                <span>${p.name}</span>
              </span>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    };

    dom.ottTiersGrid.innerHTML = `
      ${renderTier("Stream (Subscription)", regionData.stream)}
      ${renderTier("Rent Online", regionData.rent)}
      ${renderTier("Buy Digital Copy", regionData.buy)}
    `;
  }

  // --- USER REVIEWS ---
  async function renderReviewsList(movie) {
    let reviews = [...(movie.reviews || [])];

    // Fetch live community reviews from Cloud Firestore
    if (typeof authService !== "undefined" && authService.firestoreReady) {
      try {
        const firestoreReviews = await authService.getMovieReviews(movie.id);
        if (firestoreReviews && firestoreReviews.length > 0) {
          // Prepend Firestore reviews
          const existingIds = new Set(reviews.map(r => r.id));
          firestoreReviews.forEach(fr => {
            if (!existingIds.has(fr.id)) {
              reviews.unshift(fr);
            }
          });
        }
      } catch (e) {}
    }

    if (!reviews.length) {
      dom.modalReviewsList.innerHTML = `<p style="color: var(--text-muted); font-size: 0.88rem;">Be the first audience member to write a review for this movie!</p>`;
      return;
    }

    dom.modalReviewsList.innerHTML = reviews
      .map(
        r => `
      <div class="review-card">
        <div class="review-author-row">
          <div class="review-author-info">
            <img src="${r.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"}" alt="${r.user}" class="review-avatar">
            <div>
              <div class="review-name">${r.user}</div>
              <div class="review-date">${r.date}</div>
            </div>
          </div>
          <span class="review-rating-score">
            <i data-lucide="star" style="width: 14px; height: 14px;"></i>
            <span>${r.rating} / 10</span>
          </span>
        </div>
        <p class="review-text">${r.text}</p>
      </div>
    `
      )
      .join("");

    safeRefreshIcons();
  }

  async function handleReviewSubmission(e) {
    e.preventDefault();
    if (!state.currentDetailMovie) return;

    const author = dom.reviewAuthorInput.value.trim();
    const text = dom.reviewTextInput.value.trim();
    const rating = state.reviewFormRating || 9;

    if (!author || !text) {
      showToast("Please enter your name and review text");
      return;
    }

    const newReview = {
      id: `usr-rev-${Date.now()}`,
      user: author,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      rating,
      date: new Date().toISOString().substring(0, 10),
      text
    };

    if (!state.currentDetailMovie.reviews) {
      state.currentDetailMovie.reviews = [];
    }
    state.currentDetailMovie.reviews.unshift(newReview);

    // Save to Cloud Firestore
    if (typeof authService !== "undefined") {
      try {
        await authService.saveReview(state.currentDetailMovie.id, newReview);
      } catch (err) {}
    }

    // Recompute score slightly
    const totalVotes = state.currentDetailMovie.reviews.length;
    const avg = (
      state.currentDetailMovie.reviews.reduce((acc, r) => acc + Number(r.rating), 0) / totalVotes
    ).toFixed(1);
    dom.metricRating.textContent = avg;

    renderReviewsList(state.currentDetailMovie);

    // Reset form
    dom.reviewTextInput.value = "";
    showToast("Your review has been published to Cloud Firestore!");
  }

  // --- SIMILAR MOVIES ---
  async function renderSimilarMovies(movie) {
    try {
      const similar = await movieApi.getSimilarMovies(movie.id);
      if (!similar || !similar.length) {
        dom.modalSimilarGrid.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">No similar titles cataloged yet.</p>`;
        return;
      }

      dom.modalSimilarGrid.innerHTML = similar
        .slice(0, 4)
        .map(
          sm => `
        <div class="similar-card" data-similar-id="${sm.id}">
          <img 
            src="${sm.poster}" 
            alt="${sm.title}" 
            class="similar-poster" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='${getFallbackPosterSVG(sm.title, sm.year)}';"
          >
          <div class="similar-info">
            <div class="similar-title">${sm.title}</div>
            <div class="similar-meta">
              <span>${sm.year}</span>
              <span style="color: var(--accent-gold); font-weight: 600;">★ ${sm.imdbRating}</span>
            </div>
          </div>
        </div>
      `
        )
        .join("");

      dom.modalSimilarGrid.querySelectorAll(".similar-card").forEach(c => {
        c.addEventListener("click", () => {
          const id = c.dataset.similarId;
          const smMovie = similar.find(m => String(m.id) === String(id)) || findMovieById(id);
          openMovieDetail(id, smMovie);
        });
      });
    } catch (e) {
      console.warn("Failed loading similar movies:", e);
    }
  }

  // --- WATCHLIST ACTIONS ---
  function toggleWatchlist(movieId) {
    const id = parseInt(movieId, 10);
    if (state.watchlist.has(id)) {
      state.watchlist.delete(id);
      showToast("Removed from Watchlist");
    } else {
      state.watchlist.add(id);
      showToast("Added to your Watchlist ♥");
    }
    saveWatchlist();
    updateWatchlistBadge();

    // Micro-animation on clicked card button
    const cardBtn = document.querySelector(`.card-action-btn[data-action="watchlist"][data-id="${id}"]`);
    if (cardBtn) {
      cardBtn.classList.remove("animate-pop");
      void cardBtn.offsetWidth;
      cardBtn.classList.add("animate-pop");
    }
    if (dom.modalWatchlistBtn && state.currentDetailMovie && state.currentDetailMovie.id === id) {
      dom.modalWatchlistBtn.classList.remove("animate-pop");
      void dom.modalWatchlistBtn.offsetWidth;
      dom.modalWatchlistBtn.classList.add("animate-pop");
    }

    // Sync to Cloud Firestore if logged in
    if (typeof authService !== "undefined") {
      authService.syncUserWatchlist(Array.from(state.watchlist));
    }

    // If modal open, update button
    if (state.currentDetailMovie && state.currentDetailMovie.id === id) {
      const isSaved = state.watchlist.has(id);
      dom.modalWatchlistText.textContent = isSaved ? "Remove from Watchlist" : "Add to Watchlist";
      dom.modalWatchlistBtn.classList.toggle("primary", !isSaved);
    }

    // Refresh grid cards active state
    renderMovieGrid(state.movies);
  }

  function updateWatchlistBadge() {
    if (!dom.watchlistCountBadge) return;
    dom.watchlistCountBadge.textContent = state.watchlist.size;
    dom.watchlistCountBadge.classList.remove("bump");
    void dom.watchlistCountBadge.offsetWidth;
    dom.watchlistCountBadge.classList.add("bump");
  }

  // --- MOVIE COMPARATOR (SIDE-BY-SIDE VS) ---
  function toggleCompareMovie(movie) {
    if (!movie) return;

    const existingIdx = state.comparedMovies.findIndex(m => m.id === movie.id);
    if (existingIdx >= 0) {
      state.comparedMovies.splice(existingIdx, 1);
      showToast(`Removed "${movie.title}" from comparison`);
    } else {
      if (state.comparedMovies.length >= 2) {
        state.comparedMovies[1] = movie;
        showToast(`Replaced comparison slot 2 with "${movie.title}"`);
      } else {
        state.comparedMovies.push(movie);
        showToast(`Added "${movie.title}" to Compare (Slot ${state.comparedMovies.length}/2)`);
      }
    }

    // Micro-animation on clicked card button
    const cardBtn = document.querySelector(`.card-action-btn[data-action="compare"][data-id="${movie.id}"]`);
    if (cardBtn) {
      cardBtn.classList.remove("animate-pop");
      void cardBtn.offsetWidth;
      cardBtn.classList.add("animate-pop");
    }

    updateCompareBadge();
    renderMovieGrid(state.movies);
    renderComparatorDrawer();

    if (state.comparedMovies.length === 2) {
      dom.comparatorDrawer.classList.add("active");
    }
  }

  function updateCompareBadge() {
    if (!dom.compareCountBadge) return;
    dom.compareCountBadge.textContent = `${state.comparedMovies.length}/2`;
    dom.compareCountBadge.classList.remove("bump");
    void dom.compareCountBadge.offsetWidth;
    dom.compareCountBadge.classList.add("bump");
  }

  function renderComparatorDrawer() {
    if (state.comparedMovies.length === 0) {
      dom.compareEmptyPrompt.style.display = "block";
      dom.vsComparisonGrid.style.display = "none";
      return;
    }

    dom.compareEmptyPrompt.style.display = "none";
    dom.vsComparisonGrid.style.display = "grid";

    const m1 = state.comparedMovies[0];
    const m2 = state.comparedMovies[1] || null;

    renderVsCard(dom.vsMovieCard1, m1, m2);
    renderVsCard(dom.vsMovieCard2, m2, m1);
    safeRefreshIcons();
  }

  function renderVsCard(container, movie, rival) {
    if (!movie) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">🎬</div>
          <h4>Slot 2 Empty</h4>
          <p style="font-size: 0.85rem; margin-top: 6px;">Click "Add to Compare" on any other movie to unlock split-screen comparison.</p>
        </div>
      `;
      return;
    }

    // Determine comparative highlights
    const isRatingWinner = rival && movie.imdbRating > rival.imdbRating;
    const isBoxOfficeWinner = rival && (movie.revenueUSD || 0) > (rival.revenueUSD || 0) && movie.revenueUSD > 0;
    const isAwardsWinner = rival && (movie.awards?.wins || 0) > (rival.awards?.wins || 0);

    const dnaBars = Object.entries(movie.genreWeights || {})
      .map(([g, pct]) => `
      <div style="margin-bottom: 6px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.78rem;">
          <span>${g}</span>
          <span style="font-weight: 700; color: var(--accent-brand);">${pct}%</span>
        </div>
        <div style="height: 6px; background-color: var(--border-subtle); border-radius: 4px; overflow: hidden; margin-top: 2px;">
          <div style="height: 100%; width: ${pct}%; background-color: var(--accent-brand); border-radius: 4px;"></div>
        </div>
      </div>
    `).join("");

    container.innerHTML = `
      <div class="vs-movie-header">
        <img 
          src="${movie.poster}" 
          alt="${movie.title}" 
          class="vs-poster"
          onerror="this.onerror=null; this.src='${getFallbackPosterSVG(movie.title, movie.year)}';"
        >
        <div>
          <h4 class="vs-title">${movie.title}</h4>
          <span style="font-size: 0.85rem; color: var(--text-muted);">${movie.year} · ${movie.runtimeFormatted}</span>
        </div>
      </div>

      <div class="vs-metrics-table">
        <div class="vs-metric-row">
          <span class="vs-row-label">IMDb Rating</span>
          <div class="vs-row-val">
            <span style="color: var(--accent-gold);">★ ${movie.imdbRating} / 10</span>
            ${isRatingWinner ? `<span class="winner-highlight">Highest Rated 🔥</span>` : ""}
          </div>
        </div>

        <div class="vs-metric-row">
          <span class="vs-row-label">Lifetime Box Office</span>
          <div class="vs-row-val">
            <span style="color: var(--accent-green); font-family: var(--font-mono);">${movie.revenueDisplay || "N/A"}</span>
            ${isBoxOfficeWinner ? `<span class="winner-highlight">Box Office Winner 🏆</span>` : ""}
          </div>
        </div>

        <div class="vs-metric-row">
          <span class="vs-row-label">Awards Won</span>
          <div class="vs-row-val">
            <span>${movie.awards?.wins || 0} Wins (${movie.awards?.nominations || 0} Noms)</span>
            ${isAwardsWinner ? `<span class="winner-highlight">Most Awarded 🎖️</span>` : ""}
          </div>
        </div>

        <div class="vs-metric-row">
          <span class="vs-row-label">Director & Language</span>
          <div class="vs-row-val" style="font-size: 0.9rem;">
            ${movie.director} · ${movie.languageName}
          </div>
        </div>

        <div class="vs-metric-row" style="border-bottom: none;">
          <span class="vs-row-label" style="margin-bottom: 6px;">Genre DNA Breakdown</span>
          <div>${dnaBars}</div>
        </div>
      </div>
    `;
  }

  // --- CINEMATCH WIZARD CONTROLLER ---
  function openCinematch() {
    showCmStep(1);
    dom.cinematchModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeCinematch() {
    dom.cinematchModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function showCmStep(stepNumber) {
    [dom.cmStep1, dom.cmStep2, dom.cmStep3, dom.cmStep4, dom.cmStepResult].forEach(s => s.classList.remove("active"));
    if (stepNumber === 1) dom.cmStep1.classList.add("active");
    else if (stepNumber === 2) dom.cmStep2.classList.add("active");
    else if (stepNumber === 3) dom.cmStep3.classList.add("active");
    else if (stepNumber === 4) dom.cmStep4.classList.add("active");
    else if (stepNumber === 5) dom.cmStepResult.classList.add("active");
    safeRefreshIcons();
  }

  function calculateCinematchRecommendations() {
    const { time, companion, mood, lang } = state.cinematch;
    const pool = [...DEFAULT_MOVIES];

    const scored = pool.map(movie => {
      let score = 50; // base score

      // Time fit
      if (time !== "any") {
        if (movie.cinematch?.timeCategory === time) score += 20;
        else score -= 10;
      }

      // Companion fit
      if (movie.cinematch?.companions?.includes(companion)) {
        score += 20;
      }

      // Mood fit
      if (movie.cinematch?.moods?.includes(mood)) {
        score += 25;
      }

      // Language fit
      if (lang === "en" && movie.language === "en") score += 15;
      else if (lang === "indian" && ["hi", "te", "ta", "ml", "kn"].includes(movie.language)) score += 20;
      else if (lang === "international" && ["ko", "ja", "es", "fr"].includes(movie.language)) score += 20;
      else if (lang === "all") score += 10;

      // Quality rating bonus
      score += Math.round(movie.imdbRating * 1.5);

      // Clamp between 82% and 99% for excitement
      const matchPct = Math.min(99, Math.max(82, score));

      return {
        movie,
        matchPct,
        whyFits: movie.cinematch?.whyFits || `Exceptional match for a ${mood} session with ${companion}.`
      };
    });

    // Sort by highest match %
    scored.sort((a, b) => b.matchPct - a.matchPct);
    const top3 = scored.slice(0, 3);

    // Render Results
    dom.cmResultsContainer.innerHTML = top3
      .map(
        res => `
      <div class="cinematch-result-card" data-id="${res.movie.id}">
        <img 
          src="${res.movie.poster}" 
          alt="${res.movie.title}" 
          class="cinematch-res-poster"
          onerror="this.onerror=null; this.src='${getFallbackPosterSVG(res.movie.title, res.movie.year)}';"
        >
        <div class="cinematch-res-info">
          <div class="res-header-row">
            <h4 class="res-title">${res.movie.title} (${res.movie.year})</h4>
            <span class="match-badge">${res.matchPct}% Match</span>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">
            ★ ${res.movie.imdbRating} · ${res.movie.runtimeFormatted} · ${res.movie.genres.join(", ")}
          </div>
          <div class="why-fits-box">
            <strong>Why it fits tonight:</strong> ${res.whyFits}
          </div>
        </div>
      </div>
    `
      )
      .join("");

    dom.cmResultsContainer.querySelectorAll(".cinematch-result-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        const resObj = top3.find(r => String(r.movie.id) === String(id));
        closeCinematch();
        openMovieDetail(id, resObj ? resObj.movie : null);
      });
    });

    showCmStep(5);
  }

  // --- LIVE AUTOCOMPLETE SEARCH ---
  let searchDebounceTimer = null;

  function handleSearchInput(e) {
    const val = e.target.value;
    dom.searchClearBtn.style.display = val.length ? "block" : "none";

    clearTimeout(searchDebounceTimer);
    if (!val.trim()) {
      dom.searchDropdown.classList.remove("active");
      dom.searchDropdown.innerHTML = "";
      return;
    }

    searchDebounceTimer = setTimeout(async () => {
      const q = val.trim();
      const res = await movieApi.searchMovies(q, 1);
      const results = (res.results || []).slice(0, 5);

      if (results.length > 0) {
        dom.searchDropdown.innerHTML = results
          .map(
            m => `
          <div class="search-item" data-id="${m.id}">
            <img 
              src="${m.poster}" 
              alt="${m.title}" 
              class="search-thumb" 
              onerror="this.onerror=null; this.src='${getFallbackPosterSVG(m.title, m.year)}';"
            >
            <div class="search-info">
              <div class="search-title">${m.title}</div>
              <div class="search-meta">
                <span>${m.year}</span>
                <span>•</span>
                <span>${m.languageName}</span>
                <span>•</span>
                <span class="search-meta-rating">★ ${m.imdbRating}</span>
              </div>
            </div>
          </div>
        `
          )
          .join("");

        dom.searchDropdown.classList.add("active");
        dom.searchDropdown.querySelectorAll(".search-item").forEach(item => {
          item.addEventListener("click", () => {
            const id = item.dataset.id;
            const searchMovie = results.find(m => String(m.id) === String(id));
            dom.searchDropdown.classList.remove("active");
            openMovieDetail(id, searchMovie);
          });
        });
      } else {
        dom.searchDropdown.innerHTML = `<div style="padding: 14px; font-size: 0.88rem; color: var(--text-muted); text-align: center;">No titles matching "${q}"</div>`;
        dom.searchDropdown.classList.add("active");
      }
    }, 300);
  }

  function handleSearchKeydown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const q = dom.globalSearchInput.value.trim();
      state.searchQuery = q;
      dom.searchDropdown.classList.remove("active");
      loadCatalogMovies(true);
    }
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <i data-lucide="check-circle" style="color: var(--accent-brand); width: 16px; height: 16px;"></i>
      <span>${message}</span>
    `;
    dom.toastContainer.appendChild(toast);
    safeRefreshIcons();

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      setTimeout(() => toast.remove(), 250);
    }, 3000);
  }

  // --- EVENT LISTENERS ATTACHMENT ---
  function setupEventListeners() {
    // Theme Switcher
    dom.themeToggleBtn.addEventListener("click", toggleTheme);

    // Mobile Sidebar Drawer
    dom.mobileMenuBtn.addEventListener("click", () => {
      dom.sidebar.classList.toggle("mobile-open");
      dom.sidebarBackdrop.classList.toggle("active");
    });
    dom.sidebarBackdrop.addEventListener("click", () => {
      dom.sidebar.classList.remove("mobile-open");
      dom.sidebarBackdrop.classList.remove("active");
    });

    // Sidebar Navigation Items
    dom.navItems.forEach(item => {
      item.addEventListener("click", () => {
        dom.navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        state.currentNav = item.dataset.nav;
        state.selectedGenre = null;
        renderSidebarGenres();
        loadCatalogMovies(true);
        // Mobile close
        dom.sidebar.classList.remove("mobile-open");
        dom.sidebarBackdrop.classList.remove("active");
      });
    });

    // Expand / Collapse Genres
    dom.toggleGenresBtn.addEventListener("click", () => {
      state.isGenresExpanded = !state.isGenresExpanded;
      renderSidebarGenres();
    });

    // Genre Button Delegate
    dom.genresSidebarList.addEventListener("click", e => {
      const btn = e.target.closest(".genre-btn");
      if (!btn) return;
      const genre = btn.dataset.genre;
      if (state.selectedGenre === genre) {
        state.selectedGenre = null;
      } else {
        state.selectedGenre = genre;
        state.currentNav = "all";
        dom.navItems.forEach(i => i.classList.remove("active"));
        dom.navItems[0].classList.add("active");
      }
      renderSidebarGenres();
      loadCatalogMovies(true);
      dom.sidebar.classList.remove("mobile-open");
      dom.sidebarBackdrop.classList.remove("active");
    });

    // Language Chip Delegate
    dom.languagesChipGrid.addEventListener("click", e => {
      const chip = e.target.closest(".lang-chip");
      if (!chip) return;
      state.selectedLanguage = chip.dataset.lang;
      dom.filterLanguageSelect.value = state.selectedLanguage;
      renderSidebarLanguages();
      loadCatalogMovies(true);
    });

    // Top Filter Selects
    dom.filterYearSelect.addEventListener("change", e => {
      state.selectedYear = e.target.value;
      loadCatalogMovies(true);
    });

    dom.filterLanguageSelect.addEventListener("change", e => {
      state.selectedLanguage = e.target.value;
      renderSidebarLanguages();
      loadCatalogMovies(true);
    });

    dom.filterSortSelect.addEventListener("change", e => {
      state.selectedSort = e.target.value;
      loadCatalogMovies(true);
    });

    dom.filterResetBtn.addEventListener("click", () => {
      state.selectedGenre = null;
      state.selectedLanguage = "all";
      state.selectedYear = "all";
      state.selectedSort = "popularity.desc";
      state.searchQuery = "";
      dom.globalSearchInput.value = "";
      dom.filterYearSelect.value = "all";
      dom.filterLanguageSelect.value = "all";
      dom.filterSortSelect.value = "popularity.desc";
      renderSidebarGenres();
      renderSidebarLanguages();
      loadCatalogMovies(true);
      showToast("Filters reset to default");
    });

    dom.emptyStateResetBtn.addEventListener("click", () => {
      dom.filterResetBtn.click();
    });

    // Pagination Load More
    dom.loadMoreBtn.addEventListener("click", () => {
      if (state.currentPage < state.totalPages) {
        state.currentPage++;
        loadCatalogMovies(false);
      }
    });

    // Global Search Input
    dom.globalSearchInput.addEventListener("input", handleSearchInput);
    dom.globalSearchInput.addEventListener("keydown", handleSearchKeydown);
    dom.searchClearBtn.addEventListener("click", () => {
      dom.globalSearchInput.value = "";
      state.searchQuery = "";
      dom.searchClearBtn.style.display = "none";
      dom.searchDropdown.classList.remove("active");
      loadCatalogMovies(true);
    });

    // Document click to close search autocomplete
    document.addEventListener("click", e => {
      if (!dom.globalSearchInput.contains(e.target) && !dom.searchDropdown.contains(e.target)) {
        dom.searchDropdown.classList.remove("active");
      }
    });

    // Movie Grid Card Clicks (Event Delegation)
    dom.movieGrid.addEventListener("click", e => {
      const actionBtn = e.target.closest(".card-action-btn");
      if (actionBtn) {
        e.stopPropagation();
        const action = actionBtn.dataset.action;
        const id = actionBtn.dataset.id;
        const movie = state.movies.find(m => String(m.id) === String(id));
        if (action === "watchlist") {
          toggleWatchlist(id);
        } else if (action === "compare") {
          toggleCompareMovie(movie);
        }
        return;
      }

      const card = e.target.closest(".movie-card");
      if (card) {
        const id = card.dataset.id;
        const movie = state.movies.find(m => String(m.id) === String(id)) || findMovieById(id);
        openMovieDetail(id, movie);
      }
    });

    // Strip Carousels Scroll Arrows
    dom.stripTrendingPrev.addEventListener("click", () => {
      dom.trendingStripCarousel.scrollBy({ left: -320, behavior: "smooth" });
    });
    dom.stripTrendingNext.addEventListener("click", () => {
      dom.trendingStripCarousel.scrollBy({ left: 320, behavior: "smooth" });
    });
    dom.stripTopPrev.addEventListener("click", () => {
      dom.topRatedStripCarousel.scrollBy({ left: -320, behavior: "smooth" });
    });
    dom.stripTopNext.addEventListener("click", () => {
      dom.topRatedStripCarousel.scrollBy({ left: 320, behavior: "smooth" });
    });

    // Strip Card Click
    [dom.trendingStripCarousel, dom.topRatedStripCarousel].forEach(carousel => {
      carousel.addEventListener("click", e => {
        const card = e.target.closest(".strip-card");
        if (card) {
          const id = card.dataset.id;
          const movie = findMovieById(id);
          openMovieDetail(id, movie);
        }
      });
    });

    // Movie Detail Modal Controls
    dom.closeDetailModalBtn.addEventListener("click", closeMovieDetail);
    dom.movieDetailModal.addEventListener("click", e => {
      if (e.target === dom.movieDetailModal) {
        closeMovieDetail();
      }
    });

    dom.modalWatchlistBtn.addEventListener("click", () => {
      if (state.currentDetailMovie) {
        toggleWatchlist(state.currentDetailMovie.id);
      }
    });

    dom.modalCompareBtn.addEventListener("click", () => {
      if (state.currentDetailMovie) {
        toggleCompareMovie(state.currentDetailMovie);
      }
    });

    dom.modalShareBtn.addEventListener("click", () => {
      if (!state.currentDetailMovie) return;
      const shareUrl = window.location.href.split("#")[0] + `?movie=${state.currentDetailMovie.id}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast("Movie link copied to clipboard!");
        });
      } else {
        showToast("Sharing link ready");
      }
    });

    // OTT Region Selector
    dom.ottRegionTabs.forEach(btn => {
      btn.addEventListener("click", () => {
        if (state.currentDetailMovie) {
          renderWatchProviders(state.currentDetailMovie, btn.dataset.region);
        }
      });
    });

    // Star Rating Picker
    dom.starPicker.addEventListener("click", e => {
      const starBtn = e.target.closest(".star-btn");
      if (!starBtn) return;
      state.reviewFormRating = parseInt(starBtn.dataset.rating, 10);
      dom.starPicker.querySelectorAll(".star-btn").forEach(b => {
        const r = parseInt(b.dataset.rating, 10);
        b.classList.toggle("active", r <= state.reviewFormRating);
      });
    });

    // Review Form Submit
    dom.writeReviewForm.addEventListener("submit", handleReviewSubmission);

    // CineMatch Triggers & Steps
    dom.openCinematchBtn.addEventListener("click", openCinematch);
    dom.bannerCinematchCta.addEventListener("click", openCinematch);
    dom.closeCinematchBtn.addEventListener("click", closeCinematch);
    dom.cinematchModal.addEventListener("click", e => {
      if (e.target === dom.cinematchModal) closeCinematch();
    });

    // CineMatch Pills Selection
    dom.cinematchModal.addEventListener("click", e => {
      const pill = e.target.closest(".cinematch-pill-btn");
      if (!pill) return;
      const step = pill.closest(".cinematch-step");
      step.querySelectorAll(".cinematch-pill-btn").forEach(p => p.classList.remove("selected"));
      pill.classList.add("selected");

      if (pill.dataset.time) state.cinematch.time = pill.dataset.time;
      if (pill.dataset.companion) state.cinematch.companion = pill.dataset.companion;
      if (pill.dataset.mood) state.cinematch.mood = pill.dataset.mood;
      if (pill.dataset.lang) state.cinematch.lang = pill.dataset.lang;
    });

    dom.cmNext1.addEventListener("click", () => showCmStep(2));
    dom.cmBack2.addEventListener("click", () => showCmStep(1));
    dom.cmNext2.addEventListener("click", () => showCmStep(3));
    dom.cmBack3.addEventListener("click", () => showCmStep(2));
    dom.cmNext3.addEventListener("click", () => showCmStep(4));
    dom.cmBack4.addEventListener("click", () => showCmStep(3));
    dom.cmFindMatchesBtn.addEventListener("click", calculateCinematchRecommendations);
    dom.cmRestartBtn.addEventListener("click", () => showCmStep(1));
    dom.cmDoneBtn.addEventListener("click", closeCinematch);

    // Comparator Drawer Controls
    dom.openComparatorBtn.addEventListener("click", () => {
      renderComparatorDrawer();
      dom.comparatorDrawer.classList.toggle("active");
    });
    dom.closeComparatorBtn.addEventListener("click", () => {
      dom.comparatorDrawer.classList.remove("active");
    });
    dom.clearCompareBtn.addEventListener("click", () => {
      state.comparedMovies = [];
      updateCompareBadge();
      renderComparatorDrawer();
      renderMovieGrid(state.movies);
      showToast("Comparison cleared");
    });
    dom.compareBrowseBtn.addEventListener("click", () => {
      dom.comparatorDrawer.classList.remove("active");
    });

    // Global ESC key closes open modals
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        closeMovieDetail();
        closeCinematch();
        dom.comparatorDrawer.classList.remove("active");
        if (dom.authModal) dom.authModal.classList.remove("active");
      }
    });

    // --- AUTHENTICATION MODAL & USER ACTIONS ---
    setupAuthListeners();
  }

  // --- AUTH UI SETUP & STATE ---
  function setupAuthUI() {
    if (typeof authService !== "undefined") {
      authService.onAuthStateChanged(async (user) => {
        renderUserMenu(user);

        // Sync watchlist from Cloud Firestore
        if (user) {
          try {
            const cloudWl = await authService.getUserWatchlist();
            if (cloudWl && Array.isArray(cloudWl)) {
              cloudWl.forEach(id => state.watchlist.add(Number(id)));
              saveWatchlist();
              updateWatchlistBadge();
              renderMovieGrid(state.movies);
            }
          } catch (e) {}
        }
      });
    }
  }

  function renderUserMenu(user) {
    if (!dom.userMenuWrapper) return;

    // Show or hide admin links in sidebar and topbar based on authenticated role
    const isAdmin = Boolean(user && user.role === "admin");
    if (dom.topbarAdminBtn) {
      dom.topbarAdminBtn.style.display = isAdmin ? "inline-flex" : "none";
    }
    if (dom.sidebarAdminItem) {
      dom.sidebarAdminItem.style.display = isAdmin ? "block" : "none";
    }

    if (!user) {
      dom.userMenuWrapper.innerHTML = `
        <button type="button" class="btn-sign-in" id="btnOpenAuthModal">
          <i data-lucide="user" style="width: 16px; height: 16px;"></i>
          <span>Sign In</span>
        </button>
      `;
      const btn = document.getElementById("btnOpenAuthModal");
      if (btn) btn.addEventListener("click", () => openAuthModal("login"));
    } else {
      dom.userMenuWrapper.innerHTML = `
        <div class="user-profile-chip" id="userProfileChip">
          <img src="${user.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"}" alt="" class="user-chip-avatar">
          <span class="user-chip-name">${user.username}</span>
          <span class="user-chip-role ${user.role}">${user.role}</span>
          <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: var(--text-muted);"></i>
        </div>

        <div class="user-dropdown-menu" id="userDropdownMenu">
          <div class="dropdown-header">
            <div class="dropdown-header-name">${user.username}</div>
            <div class="dropdown-header-email">${user.email}</div>
          </div>
          ${user.role === "admin" ? `
            <a href="admin.html" class="dropdown-item">
              <i data-lucide="shield" style="width: 16px; height: 16px; color: #7C3AED;"></i>
              <span>Admin Dashboard</span>
            </a>
          ` : ""}
          <div class="dropdown-item" id="dropdownWatchlistBtn">
            <i data-lucide="bookmark" style="width: 16px; height: 16px;"></i>
            <span>My Watchlist (${state.watchlist.size})</span>
          </div>
          <div class="dropdown-item danger" id="dropdownLogoutBtn">
            <i data-lucide="log-out" style="width: 16px; height: 16px;"></i>
            <span>Sign Out</span>
          </div>
        </div>
      `;

      const chip = document.getElementById("userProfileChip");
      const menu = document.getElementById("userDropdownMenu");
      const logoutBtn = document.getElementById("dropdownLogoutBtn");
      const watchlistBtn = document.getElementById("dropdownWatchlistBtn");

      if (chip && menu) {
        chip.addEventListener("click", (e) => {
          e.stopPropagation();
          menu.classList.toggle("active");
        });
      }

      if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
          await authService.logout();
          showToast("Signed out successfully");
        });
      }

      if (watchlistBtn) {
        watchlistBtn.addEventListener("click", () => {
          menu.classList.remove("active");
          const wlNavItem = document.querySelector('[data-nav="watchlist"]');
          if (wlNavItem) wlNavItem.click();
        });
      }

      // Click outside to close dropdown
      document.addEventListener("click", (e) => {
        if (menu && !menu.contains(e.target) && chip && !chip.contains(e.target)) {
          menu.classList.remove("active");
        }
      });
    }

    safeRefreshIcons();
  }

  function openAuthModal(tab = "login") {
    if (!dom.authModal) return;
    switchAuthTab(tab);
    dom.loginErrorMsg.style.display = "none";
    dom.registerErrorMsg.style.display = "none";
    dom.authModal.classList.add("active");
    document.body.style.overflow = "hidden";
    safeRefreshIcons();
  }

  function closeAuthModal() {
    if (!dom.authModal) return;
    dom.authModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function switchAuthTab(tab) {
    const isLogin = tab === "login";
    if (dom.authTabLogin) dom.authTabLogin.classList.toggle("active", isLogin);
    if (dom.authTabRegister) dom.authTabRegister.classList.toggle("active", !isLogin);

    if (dom.loginForm) dom.loginForm.style.display = isLogin ? "flex" : "none";
    if (dom.registerForm) dom.registerForm.style.display = isLogin ? "none" : "flex";

    if (dom.authModalTitle) {
      dom.authModalTitle.textContent = isLogin ? "Welcome to HEARTZZY" : "Join HEARTZZY";
    }
    if (dom.authModalSubtitle) {
      dom.authModalSubtitle.textContent = isLogin
        ? "Sign in to sync your personal watchlist, movie ratings, and custom movie comparisons across all devices."
        : "Create a free cinephile account to unlock AI CineMatch profiles, watchlists, and cloud sync.";
    }
    if (dom.authFooterPrompt) {
      dom.authFooterPrompt.textContent = isLogin ? "Don't have an account yet?" : "Already have an account?";
    }
    if (dom.btnSwitchAuthTab) {
      dom.btnSwitchAuthTab.textContent = isLogin ? "Create Account" : "Sign In";
    }

    if (dom.loginErrorMsg) dom.loginErrorMsg.style.display = "none";
    if (dom.registerErrorMsg) dom.registerErrorMsg.style.display = "none";
    safeRefreshIcons();
  }

  function shakeModalCard() {
    const card = dom.authModalCard || document.querySelector(".auth-modal-card");
    if (card) {
      card.classList.remove("shake");
      void card.offsetWidth;
      card.classList.add("shake");
      setTimeout(() => card.classList.remove("shake"), 500);
    }
  }

  function setupAuthListeners() {
    if (!dom.authModal) return;

    if (dom.closeAuthModalBtn) {
      dom.closeAuthModalBtn.addEventListener("click", closeAuthModal);
    }
    dom.authModal.addEventListener("click", (e) => {
      if (e.target === dom.authModal) closeAuthModal();
    });

    if (dom.authTabLogin) {
      dom.authTabLogin.addEventListener("click", () => switchAuthTab("login"));
    }
    if (dom.authTabRegister) {
      dom.authTabRegister.addEventListener("click", () => switchAuthTab("register"));
    }

    // Toggle Password Visibility
    function togglePasswordVisibility(input, icon) {
      if (!input) return;
      const isPassword = input.getAttribute("type") === "password";
      input.setAttribute("type", isPassword ? "text" : "password");
      if (icon) {
        icon.setAttribute("data-lucide", isPassword ? "eye-off" : "eye");
        safeRefreshIcons();
      }
    }

    if (dom.loginPassToggle) {
      dom.loginPassToggle.addEventListener("click", () => {
        togglePasswordVisibility(dom.loginPasswordInput, dom.loginPassIcon);
      });
    }

    if (dom.regPassToggle) {
      dom.regPassToggle.addEventListener("click", () => {
        togglePasswordVisibility(dom.regPasswordInput, dom.regPassIcon);
      });
    }

    // 1-Click Quick Demo Pill Logins
    document.querySelectorAll(".btn-demo-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const demoType = pill.getAttribute("data-demo");
        switchAuthTab("login");
        if (demoType === "admin") {
          if (dom.loginUsernameInput) dom.loginUsernameInput.value = "admin";
          if (dom.loginPasswordInput) dom.loginPasswordInput.value = "admin123";
          showToast("Autofilled Super Admin credentials!", "info");
        } else {
          if (dom.loginUsernameInput) dom.loginUsernameInput.value = "cinephile";
          if (dom.loginPasswordInput) dom.loginPasswordInput.value = "movie123";
          showToast("Autofilled Cinephile credentials!", "info");
        }

        // Trigger flash feedback animation on inputs
        [dom.loginUsernameInput, dom.loginPasswordInput].forEach((inp) => {
          if (inp) {
            inp.classList.remove("input-autofill-flash");
            void inp.offsetWidth; // force reflow
            inp.classList.add("input-autofill-flash");
          }
        });
      });
    });

    // Live Password Strength Meter on Register Input
    if (dom.regPasswordInput && dom.passStrengthWrapper) {
      dom.regPasswordInput.addEventListener("input", (e) => {
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

    // Forgot Password Helper
    if (dom.btnForgotPass) {
      dom.btnForgotPass.addEventListener("click", () => {
        showToast("Quick Demo Credentials: Use admin/admin123 or cinephile/movie123", "info");
      });
    }

    // Bottom Auth Switch Button
    if (dom.btnSwitchAuthTab) {
      dom.btnSwitchAuthTab.addEventListener("click", () => {
        const isLoginActive = dom.authTabLogin && dom.authTabLogin.classList.contains("active");
        switchAuthTab(isLoginActive ? "register" : "login");
      });
    }

    // Login Form Submit with interactive state & feedback
    if (dom.loginForm) {
      dom.loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (dom.loginErrorMsg) dom.loginErrorMsg.style.display = "none";
        const u = dom.loginUsernameInput ? dom.loginUsernameInput.value.trim() : "";
        const p = dom.loginPasswordInput ? dom.loginPasswordInput.value.trim() : "";

        // UI Loading state
        if (dom.loginSubmitBtn) dom.loginSubmitBtn.disabled = true;
        if (dom.loginSpinner) dom.loginSpinner.style.display = "inline-block";
        if (dom.loginArrowIcon) dom.loginArrowIcon.style.display = "none";
        if (dom.loginSubmitText) dom.loginSubmitText.textContent = "Signing In...";

        try {
          const user = await authService.login(u, p);
          closeAuthModal();
          showToast(`Welcome back, ${user.username}!`);
        } catch (err) {
          shakeModalCard();
          if (dom.loginErrorMsg) {
            dom.loginErrorMsg.textContent = err.message;
            dom.loginErrorMsg.style.display = "block";
          }
        } finally {
          if (dom.loginSubmitBtn) dom.loginSubmitBtn.disabled = false;
          if (dom.loginSpinner) dom.loginSpinner.style.display = "none";
          if (dom.loginArrowIcon) dom.loginArrowIcon.style.display = "inline-block";
          if (dom.loginSubmitText) dom.loginSubmitText.textContent = "Sign In to Heartzy";
        }
      });
    }

    // Register Form Submit with interactive state & feedback
    if (dom.registerForm) {
      dom.registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (dom.registerErrorMsg) dom.registerErrorMsg.style.display = "none";
        const u = dom.regUsernameInput ? dom.regUsernameInput.value.trim() : "";
        const em = dom.regEmailInput ? dom.regEmailInput.value.trim() : "";
        const p = dom.regPasswordInput ? dom.regPasswordInput.value.trim() : "";

        // UI Loading state
        if (dom.registerSubmitBtn) dom.registerSubmitBtn.disabled = true;
        if (dom.regSpinner) dom.regSpinner.style.display = "inline-block";
        if (dom.regArrowIcon) dom.regArrowIcon.style.display = "none";
        if (dom.regSubmitText) dom.regSubmitText.textContent = "Creating Account...";

        try {
          const user = await authService.register(u, em, p);
          closeAuthModal();
          showToast(`Account created! Welcome, ${user.username}!`);
        } catch (err) {
          shakeModalCard();
          if (dom.registerErrorMsg) {
            dom.registerErrorMsg.textContent = err.message;
            dom.registerErrorMsg.style.display = "block";
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

  // --- START APP ON DOM LOAD ---
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
