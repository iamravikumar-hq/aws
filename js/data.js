/**
 * HEARTZZY - Global Movie Discovery & Recommendation Platform
 * Default Built-in Multilingual Dataset (26 Iconic Global & Regional Masterpieces)
 * Ensures 100% Zero-Error Out-of-the-Box Experience without API keys.
 */

const DEFAULT_MOVIES = [
  {
    id: 872585,
    imdbId: "tt15398776",
    title: "Oppenheimer",
    tagline: "The world forever changes.",
    year: 2023,
    releaseDate: "2023-07-21",
    runtime: 180,
    runtimeFormatted: "3h 00m",
    language: "en",
    languageName: "English",
    certification: "R",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr.", "Florence Pugh"],
    genres: ["Biography", "Drama", "History", "Thriller"],
    genreWeights: {
      "Biography": 35,
      "Drama": 30,
      "History": 20,
      "Thriller": 15
    },
    imdbRating: 8.9,
    imdbVotes: "780,450",
    revenueUSD: 975800000,
    revenueDisplay: "$975.8M",
    revenueInr: "₹8,120 Cr",
    awards: {
      wins: 348,
      nominations: 382,
      summary: "Won 7 Oscars. 348 wins & 382 nominations total.",
      major: ["7 Academy Awards (Best Picture, Director, Actor)", "7 BAFTAs", "5 Golden Globes", "3 SAG Awards"]
    },
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, tracing the tension between patriotic science and existential guilt.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    ott: {
      IN: {
        stream: [{ name: "JioHotstar", color: "#1e3a8a" }, { name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Apple TV", color: "#333333" }, { name: "Google Play", color: "#0f9d58" }],
        buy: [{ name: "YouTube Movies", color: "#cc0000" }]
      },
      US: {
        stream: [{ name: "Peacock", color: "#000000" }, { name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Amazon Video", color: "#00a8e1" }, { name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Fandango at Home", color: "#f26522" }]
      },
      UK: {
        stream: [{ name: "NOW Cinema", color: "#002f6c" }, { name: "Sky Go", color: "#001937" }],
        rent: [{ name: "Curzon Home Cinema", color: "#000" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-opp-1",
        user: "Aarav Sharma",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        rating: 10,
        date: "2024-01-14",
        text: "Christopher Nolan delivers a towering historical masterwork. Cillian Murphy's expressive gaze conveys decades of torment without uttering a single unnecessary word."
      },
      {
        id: "rev-opp-2",
        user: "Elena Rostova",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 9,
        date: "2023-11-20",
        text: "The sound design during the Trinity test alone cements this in modern cinematic canon. Uncompromising pacing that demands total attention."
      }
    ],
    cinematch: {
      timeCategory: "epic", // epic: 2.5+ hrs
      companions: ["solo", "friends", "date-night"],
      moods: ["mind-bending", "emotional-drama", "edge-of-seat"],
      whyFits: "A masterclass in tension, physics, and human morality for an immersive, deep-thinking evening."
    },
    isTrending: true,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 157336,
    imdbId: "tt0816692",
    title: "Interstellar",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    year: 2014,
    releaseDate: "2014-11-07",
    runtime: 169,
    runtimeFormatted: "2h 49m",
    language: "en",
    languageName: "English",
    certification: "PG-13",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    genres: ["Adventure", "Drama", "Sci-Fi"],
    genreWeights: {
      "Sci-Fi": 48,
      "Drama": 32,
      "Adventure": 20
    },
    imdbRating: 8.7,
    imdbVotes: "2,050,000",
    revenueUSD: 701729206,
    revenueDisplay: "$701.7M",
    revenueInr: "₹5,840 Cr",
    awards: {
      wins: 44,
      nominations: 148,
      summary: "Won 1 Oscar. 44 wins & 148 nominations total.",
      major: ["Academy Award for Best Visual Effects", "BAFTA for Best Visual Effects", "Saturn Award for Best Sci-Fi Film"]
    },
    overview: "When Earth becomes uninhabitable in the near future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers through a mysterious wormhole near Saturn.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYDit5fK5VQsXEG.jpg",
    ott: {
      IN: {
        stream: [{ name: "Netflix", color: "#e50914" }, { name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Apple TV", color: "#333333" }, { name: "Google Play", color: "#0f9d58" }],
        buy: [{ name: "YouTube", color: "#cc0000" }]
      },
      US: {
        stream: [{ name: "Paramount+", color: "#0064ff" }, { name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Amazon Video", color: "#00a8e1" }]
      },
      UK: {
        stream: [{ name: "NOW Cinema", color: "#002f6c" }, { name: "Sky Cinema", color: "#001937" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-int-1",
        user: "Rohan Varma",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
        rating: 10,
        date: "2024-02-10",
        text: "Hans Zimmer's pipe organ score combined with the emotional core of father-daughter love transcending time and gravity makes this the definitive sci-fi epic of this century."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["solo", "family", "date-night"],
      moods: ["mind-bending", "emotional-drama"],
      whyFits: "A cosmic journey through wormholes and relativity anchored by deep father-daughter emotional resonance."
    },
    isTrending: true,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 579974,
    imdbId: "tt8178634",
    title: "RRR",
    tagline: "Rise. Roar. Revolt.",
    year: 2022,
    releaseDate: "2022-03-25",
    runtime: 187,
    runtimeFormatted: "3h 07m",
    language: "te",
    languageName: "Telugu",
    certification: "UA",
    director: "S.S. Rajamouli",
    cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt", "Ajay Devgn", "Olivia Morris"],
    genres: ["Action", "Adventure", "Drama"],
    genreWeights: {
      "Action": 52,
      "Drama": 28,
      "Adventure": 20
    },
    imdbRating: 7.8,
    imdbVotes: "172,000",
    revenueUSD: 175000000,
    revenueDisplay: "$175.0M",
    revenueInr: "₹1,387 Cr",
    awards: {
      wins: 76,
      nominations: 124,
      summary: "Won 1 Oscar. 76 wins & 124 nominations total.",
      major: ["Academy Award for Best Original Song ('Naatu Naatu')", "Golden Globe for Best Original Song", "Critics' Choice Movie Award for Best Foreign Language Film"]
    },
    overview: "A fearless warrior on a perilous mission comes face-to-face with a steely cop serving British forces in pre-independent India. Together, they forge an unbreakable bond that ignites a revolution.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kd5G6c4z1bUaX7xXn6aI2M9wKj9.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/m03Oi3HIi77bKvhKqVqWJzXoXpU.jpg",
    ott: {
      IN: {
        stream: [{ name: "Netflix", color: "#e50914" }, { name: "ZEE5", color: "#8230c6" }, { name: "Disney+ Hotstar", color: "#113ccf" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Netflix", color: "#e50914" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Amazon Video", color: "#00a8e1" }]
      },
      UK: {
        stream: [{ name: "Netflix", color: "#e50914" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      }
    },
    reviews: [
      {
        id: "rev-rrr-1",
        user: "Karthik Reddy",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 10,
        date: "2023-04-12",
        text: "Pure, unadulterated cinematic joy. S.S. Rajamouli has redefined modern action spectacle with unmatched emotional crescendo and heart-thumping beats."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["friends", "family"],
      moods: ["high-octane", "feel-good"],
      whyFits: "Unstoppable kinetic energy, mythological grandeur, brotherhood, and pulse-pounding action."
    },
    isTrending: true,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 496243,
    imdbId: "tt6751668",
    title: "Parasite",
    tagline: "Act like you own the place.",
    year: 2019,
    releaseDate: "2019-10-11",
    runtime: 132,
    runtimeFormatted: "2h 12m",
    language: "ko",
    languageName: "Korean",
    certification: "R",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam"],
    genres: ["Comedy", "Drama", "Thriller"],
    genreWeights: {
      "Thriller": 42,
      "Drama": 36,
      "Comedy": 22
    },
    imdbRating: 8.5,
    imdbVotes: "940,000",
    revenueUSD: 263136741,
    revenueDisplay: "$263.1M",
    revenueInr: "₹2,190 Cr",
    awards: {
      wins: 308,
      nominations: 271,
      summary: "Historic 4 Oscar wins. 308 wins total worldwide.",
      major: ["4 Academy Awards (Best Picture, Director, Original Screenplay, Int'l Feature)", "Palme d'Or at Cannes", "Golden Globe Best Foreign Language Film"]
    },
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan in modern-day Seoul.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
    ott: {
      IN: {
        stream: [{ name: "SonyLIV", color: "#000000" }, { name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Max", color: "#002be7" }, { name: "Hulu", color: "#1ce783" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Amazon Video", color: "#00a8e1" }]
      },
      UK: {
        stream: [{ name: "Channel 4", color: "#222" }, { name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Curzon", color: "#000" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      }
    },
    reviews: [
      {
        id: "rev-par-1",
        user: "Min-ho Park",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        rating: 10,
        date: "2023-09-02",
        text: "The transition from black comedy to suffocating suspense is seamless. Bong Joon-ho's architectural framing is pure cinema."
      }
    ],
    cinematch: {
      timeCategory: "standard", // standard: ~2 hrs
      companions: ["solo", "friends", "date-night"],
      moods: ["mind-bending", "edge-of-seat"],
      whyFits: "Razor-sharp social satire that twists suddenly into jaw-dropping suspense."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 693134,
    imdbId: "tt15239678",
    title: "Dune: Part Two",
    tagline: "Long live the fighters.",
    year: 2024,
    releaseDate: "2024-03-01",
    runtime: 166,
    runtimeFormatted: "2h 46m",
    language: "en",
    languageName: "English",
    certification: "PG-13",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem", "Austin Butler"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    genreWeights: {
      "Sci-Fi": 45,
      "Adventure": 30,
      "Action": 25
    },
    imdbRating: 8.6,
    imdbVotes: "510,000",
    revenueUSD: 714444358,
    revenueDisplay: "$714.4M",
    revenueInr: "₹5,945 Cr",
    awards: {
      wins: 38,
      nominations: 85,
      summary: "38 wins & 85 nominations across visual guilds.",
      major: ["Hollywood Critics Association Midseason Award", "Multiple BAFTA & Critics Choice Honors"]
    },
    overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between love and the fate of the known universe, he endeavors to prevent a catastrophic future.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5200bm.jpg",
    ott: {
      IN: {
        stream: [{ name: "JioHotstar", color: "#1e3a8a" }],
        rent: [{ name: "Prime Video", color: "#00a8e1" }, { name: "Apple TV", color: "#333333" }],
        buy: [{ name: "YouTube Movies", color: "#cc0000" }]
      },
      US: {
        stream: [{ name: "Max", color: "#002be7" }],
        rent: [{ name: "Amazon Video", color: "#00a8e1" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      },
      UK: {
        stream: [{ name: "NOW Cinema", color: "#002f6c" }],
        rent: [{ name: "Sky Store", color: "#001937" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-dun-1",
        user: "Sarah Jenkins",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        rating: 10,
        date: "2024-04-18",
        text: "Denis Villeneuve has crafted our generation's Empire Strikes Back. Greig Fraser's cinematography in the Giedi Prime gladiatorial arena is jaw-dropping."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["friends", "solo", "date-night"],
      moods: ["mind-bending", "high-octane"],
      whyFits: "A breathtaking cinematic triumph with massive soundscapes, sandworms, and imperial political intrigue."
    },
    isTrending: true,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 129,
    imdbId: "tt0245429",
    title: "Spirited Away",
    tagline: "The tunnel led Chihiro to a mysterious town.",
    year: 2001,
    releaseDate: "2001-07-20",
    runtime: 125,
    runtimeFormatted: "2h 05m",
    language: "ja",
    languageName: "Japanese",
    certification: "PG",
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takashi Naito"],
    genres: ["Animation", "Adventure", "Family", "Fantasy"],
    genreWeights: {
      "Animation": 40,
      "Fantasy": 35,
      "Adventure": 15,
      "Family": 10
    },
    imdbRating: 8.6,
    imdbVotes: "850,000",
    revenueUSD: 395580000,
    revenueDisplay: "$395.6M",
    revenueInr: "₹3,290 Cr",
    awards: {
      wins: 60,
      nominations: 30,
      summary: "Won 1 Oscar. 60 wins total worldwide.",
      major: ["Academy Award for Best Animated Feature (Historic hand-drawn win)", "Golden Bear at Berlin International Film Festival", "Japan Academy Prize"]
    },
    overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
    ott: {
      IN: {
        stream: [{ name: "Netflix", color: "#e50914" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Max", color: "#002be7" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Amazon Video", color: "#00a8e1" }]
      },
      UK: {
        stream: [{ name: "Netflix", color: "#e50914" }],
        rent: [{ name: "BFI Player", color: "#000" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      }
    },
    reviews: [
      {
        id: "rev-spi-1",
        user: "Kenji Sato",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        rating: 10,
        date: "2024-03-01",
        text: "Miyazaki's hand-drawn animation holds a soul and nostalgia that digital CGI can never recreate. A timeless portal into childlike wonder and courage."
      }
    ],
    cinematch: {
      timeCategory: "standard",
      companions: ["solo", "family", "date-night"],
      moods: ["feel-good", "hidden-gem"],
      whyFits: "Soul-soothing Studio Ghibli magic filled with spirits, courage, and visual poetry."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 119569,
    imdbId: "tt12584128",
    title: "Manjummel Boys",
    tagline: "The bond of friendship tested against the depths of darkness.",
    year: 2024,
    releaseDate: "2024-02-22",
    runtime: 135,
    runtimeFormatted: "2h 15m",
    language: "ml",
    languageName: "Malayalam",
    certification: "U",
    director: "Chidambaram",
    cast: ["Soubin Shahir", "Sreenath Bhasi", "Balu Varghese", "Ganapathi", "Jean Paul Lal"],
    genres: ["Adventure", "Drama", "Thriller"],
    genreWeights: {
      "Thriller": 45,
      "Drama": 35,
      "Adventure": 20
    },
    imdbRating: 8.5,
    imdbVotes: "48,500",
    revenueUSD: 29500000,
    revenueDisplay: "$29.5M",
    revenueInr: "₹242 Cr",
    awards: {
      wins: 14,
      nominations: 20,
      summary: "Highest grossing Malayalam film of all time.",
      major: ["Kerala State Film Critics Award", "Best Director & Sound Design Honors"]
    },
    overview: "A tight-knit group of friends from Kochi travel to Kodaikanal for a vacation. Their trip turns into a harrowing survival ordeal when one of them plunges into the pitch-black Guna Caves (Devil's Kitchen).",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3Ff52bYF1UeO4F4KkC0F4vL3f3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/m9jFzS9l3m1p3zR9E5Q0YvV3.jpg",
    ott: {
      IN: {
        stream: [{ name: "Disney+ Hotstar", color: "#113ccf" }],
        rent: [{ name: "Hotstar Premium", color: "#113ccf" }],
        buy: []
      },
      US: {
        stream: [{ name: "Hulu", color: "#1ce783" }],
        rent: [],
        buy: []
      },
      UK: {
        stream: [{ name: "Disney+", color: "#113ccf" }],
        rent: [],
        buy: []
      }
    },
    reviews: [
      {
        id: "rev-man-1",
        user: "Gautham Nair",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop",
        rating: 10,
        date: "2024-05-10",
        text: "The sheer tension inside the cave combined with the legendary 'Kanmani Anbodu' track payoff gives goosebumps every single time. Real friendship on celluloid."
      }
    ],
    cinematch: {
      timeCategory: "standard",
      companions: ["friends", "family"],
      moods: ["edge-of-seat", "emotional-drama"],
      whyFits: "A true-story survival thriller proving that ordinary friendship can conquer the darkest abyss."
    },
    isTrending: true,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 155,
    imdbId: "tt0468569",
    title: "The Dark Knight",
    tagline: "Why so serious?",
    year: 2008,
    releaseDate: "2008-07-18",
    runtime: 152,
    runtimeFormatted: "2h 32m",
    language: "en",
    languageName: "English",
    certification: "PG-13",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Maggie Gyllenhaal"],
    genres: ["Action", "Crime", "Drama", "Thriller"],
    genreWeights: {
      "Crime": 38,
      "Action": 32,
      "Drama": 18,
      "Thriller": 12
    },
    imdbRating: 9.0,
    imdbVotes: "2,900,000",
    revenueUSD: 1006234167,
    revenueDisplay: "$1,006.2M",
    revenueInr: "₹8,370 Cr",
    awards: {
      wins: 162,
      nominations: 163,
      summary: "Won 2 Oscars. 162 wins total.",
      major: ["Academy Award for Best Supporting Actor (Heath Ledger posthumously)", "Academy Award for Best Sound Editing", "BAFTA Award"]
    },
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the city streets until the Joker unleashes anarchy.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hkBaDkMWbLaf8B1rWsRqRr5H96Q.jpg",
    ott: {
      IN: {
        stream: [{ name: "JioHotstar", color: "#1e3a8a" }, { name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Max", color: "#002be7" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Amazon Video", color: "#00a8e1" }]
      },
      UK: {
        stream: [{ name: "NOW Cinema", color: "#002f6c" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-tdk-1",
        user: "Marcus Brody",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
        rating: 10,
        date: "2023-12-05",
        text: "Heath Ledger's Joker is the gold standard of villainy in cinematic history. Gripping moral dilemmas from the opening bank heist to the twin ferry boats."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["solo", "friends", "date-night"],
      moods: ["high-octane", "edge-of-seat"],
      whyFits: "An electrifying philosophical crime duel between an unmovable bat and an unstoppable agent of chaos."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 361743,
    imdbId: "tt5074352",
    title: "Top Gun: Maverick",
    tagline: "Feel the need. The need for speed.",
    year: 2022,
    releaseDate: "2022-05-27",
    runtime: 130,
    runtimeFormatted: "2h 10m",
    language: "en",
    languageName: "English",
    certification: "PG-13",
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm", "Glen Powell"],
    genres: ["Action", "Drama"],
    genreWeights: {
      "Action": 65,
      "Drama": 35
    },
    imdbRating: 8.3,
    imdbVotes: "690,000",
    revenueUSD: 1495696292,
    revenueDisplay: "$1,495.7M",
    revenueInr: "₹12,440 Cr",
    awards: {
      wins: 104,
      nominations: 228,
      summary: "Won 1 Oscar. 104 wins total.",
      major: ["Academy Award for Best Sound", "AFI Movie of the Year", "6 Oscar Nominations including Best Picture"]
    },
    overview: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on an impossible mission requiring ultimate sacrifice.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    ott: {
      IN: {
        stream: [{ name: "Prime Video", color: "#00a8e1" }, { name: "JioHotstar", color: "#1e3a8a" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "YouTube Movies", color: "#cc0000" }]
      },
      US: {
        stream: [{ name: "Paramount+", color: "#0064ff" }],
        rent: [{ name: "Amazon Video", color: "#00a8e1" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      },
      UK: {
        stream: [{ name: "Paramount+", color: "#0064ff" }],
        rent: [{ name: "Sky Store", color: "#001937" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-top-1",
        user: "Jason Miller",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        rating: 9,
        date: "2023-08-11",
        text: "The practical cockpit IMAX aerial photography is second to none. Pure adrenaline pumped into your veins from beginning to end."
      }
    ],
    cinematch: {
      timeCategory: "standard",
      companions: ["friends", "family", "date-night"],
      moods: ["high-octane", "feel-good"],
      whyFits: "Real fighter jet speeds, brotherhood, and fist-pumping aerial action."
    },
    isTrending: false,
    isTopRated: false,
    isUpcoming: false
  },
  {
    id: 360814,
    imdbId: "tt5074352",
    title: "Dangal",
    tagline: "Success requires perseverance, not gender.",
    year: 2016,
    releaseDate: "2016-12-23",
    runtime: 161,
    runtimeFormatted: "2h 41m",
    language: "hi",
    languageName: "Hindi",
    certification: "U",
    director: "Nitesh Tiwari",
    cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra", "Sakshi Tanwar", "Zaira Wasim"],
    genres: ["Biography", "Drama", "Action", "Sport"],
    genreWeights: {
      "Drama": 42,
      "Sport": 33,
      "Biography": 25
    },
    imdbRating: 8.3,
    imdbVotes: "215,000",
    revenueUSD: 340000000,
    revenueDisplay: "$340.0M",
    revenueInr: "₹2,024 Cr",
    awards: {
      wins: 28,
      nominations: 35,
      summary: "Highest grossing Indian film worldwide.",
      major: ["Filmfare Award for Best Film, Best Director, Best Actor", "National Film Award for Best Supporting Actress (Zaira Wasim)"]
    },
    overview: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become world-class wrestlers against all societal taboos, aiming for India's first Commonwealth Games gold medal.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/p2Z44n27l7L1LwD0wQ2zQhW5m4u.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/s1p5vXkO0P9X0Fk7G1G8c7j7uYd.jpg",
    ott: {
      IN: {
        stream: [{ name: "Netflix", color: "#e50914" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "YouTube", color: "#cc0000" }]
      },
      US: {
        stream: [{ name: "Netflix", color: "#e50914" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Amazon Video", color: "#00a8e1" }]
      },
      UK: {
        stream: [{ name: "Netflix", color: "#e50914" }],
        rent: [],
        buy: []
      }
    },
    reviews: [
      {
        id: "rev-dan-1",
        user: "Pooja Hegde",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        rating: 10,
        date: "2023-06-19",
        text: "The wrestling sequences are intensely realistic. Aamir Khan's physical transformation and the emotional mother-daughter-father dynamic brings tears of triumph."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["family", "friends"],
      moods: ["feel-good", "emotional-drama"],
      whyFits: "Inspiring true story of parental grit, gender empowerment, and monumental athletic triumph."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 20453,
    imdbId: "tt1187043",
    title: "3 Idiots",
    tagline: "Chase excellence, and success will follow.",
    year: 2009,
    releaseDate: "2009-12-25",
    runtime: 170,
    runtimeFormatted: "2h 50m",
    language: "hi",
    languageName: "Hindi",
    certification: "UA",
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi", "Kareena Kapoor", "Boman Irani"],
    genres: ["Comedy", "Drama"],
    genreWeights: {
      "Comedy": 50,
      "Drama": 50
    },
    imdbRating: 8.4,
    imdbVotes: "430,000",
    revenueUSD: 90000000,
    revenueDisplay: "$90.0M",
    revenueInr: "₹460 Cr",
    awards: {
      wins: 62,
      nominations: 45,
      summary: "Won 3 National Film Awards and 6 Filmfare Awards.",
      major: ["National Film Award for Best Popular Film", "Filmfare Award for Best Film & Director", "Grand Prize at Japan's Videomarket Awards"]
    },
    overview: "Two friends search for their long-lost college buddy while revisiting their undergraduate days at the prestigious Imperial College of Engineering and recalling their unconventional friend who taught them to think differently.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/66A9MqXOyVFCssoloscw79z8OtQ.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/l6hQWH92m4Ka3gq1oGfJ8wM7eDk.jpg",
    ott: {
      IN: {
        stream: [{ name: "Prime Video", color: "#00a8e1" }, { name: "SonyLIV", color: "#000" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "YouTube", color: "#cc0000" }]
      },
      UK: {
        stream: [{ name: "Prime Video", color: "#00a8e1" }],
        rent: [],
        buy: []
      }
    },
    reviews: [
      {
        id: "rev-3id-1",
        user: "Vikram Malhotra",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 10,
        date: "2024-01-05",
        text: "More than a movie, it is a life philosophy. Laugh till you cry, cry till you laugh. 'All Izz Well' remains immortal."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["friends", "family"],
      moods: ["feel-good", "emotional-drama"],
      whyFits: "Unfiltered laughter, heartfelt college nostalgia, and timeless life lessons on passion over grades."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 870096,
    imdbId: "tt9179430",
    title: "Vikram",
    tagline: "Once upon a time there lived a ghost...",
    year: 2022,
    releaseDate: "2022-06-03",
    runtime: 175,
    runtimeFormatted: "2h 55m",
    language: "ta",
    languageName: "Tamil",
    certification: "UA",
    director: "Lokesh Kanagaraj",
    cast: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil", "Suriya", "Narain"],
    genres: ["Action", "Crime", "Thriller"],
    genreWeights: {
      "Action": 55,
      "Thriller": 25,
      "Crime": 20
    },
    imdbRating: 8.3,
    imdbVotes: "75,000",
    revenueUSD: 60000000,
    revenueDisplay: "$60.0M",
    revenueInr: "₹500 Cr",
    awards: {
      wins: 22,
      nominations: 30,
      summary: "22 wins across Ananda Vikatan and SIIMA Awards.",
      major: ["SIIMA Best Actor (Kamal Haasan)", "Best Music Director (Anirudh Ravichander)", "Blockbuster of the Year"]
    },
    overview: "A covert investigation team led by Amar is assigned to track down a masked syndicate of serial killers. When the trail leads to a deceased black-ops commander named Vikram, a shadowy war erupts across Chennai.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7zQ93994c9Cekg5GZ270H3qL22.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/t5zCBSB5xMdpAJMmCd0MB6ygc1a.jpg",
    ott: {
      IN: {
        stream: [{ name: "Disney+ Hotstar", color: "#113ccf" }, { name: "ZEE5", color: "#8230c6" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: []
      },
      US: {
        stream: [{ name: "Hulu", color: "#1ce783" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: []
      },
      UK: {
        stream: [{ name: "Disney+", color: "#113ccf" }],
        rent: [],
        buy: []
      }
    },
    reviews: [
      {
        id: "rev-vik-1",
        user: "Anand Sundaram",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        rating: 9,
        date: "2023-10-14",
        text: "Kamal Haasan's majestic screen presence combined with Anirudh's thumping background score and Rolex's legendary 3-minute cameo set theatres on fire."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["friends", "solo"],
      moods: ["high-octane", "edge-of-seat"],
      whyFits: "High-octane gunfights, gritty undercover agents, and an electrifying cinematic universe payoff."
    },
    isTrending: true,
    isTopRated: false,
    isUpcoming: false
  },
  {
    id: 545611,
    imdbId: "tt6718170",
    title: "Everything Everywhere All at Once",
    tagline: "The universe is so much bigger than you realize.",
    year: 2022,
    releaseDate: "2022-03-25",
    runtime: 139,
    runtimeFormatted: "2h 19m",
    language: "en",
    languageName: "English",
    certification: "R",
    director: "Daniel Kwan, Daniel Scheinert",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis", "James Hong"],
    genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    genreWeights: {
      "Sci-Fi": 35,
      "Comedy": 25,
      "Action": 20,
      "Adventure": 20
    },
    imdbRating: 7.8,
    imdbVotes: "540,000",
    revenueUSD: 143411000,
    revenueDisplay: "$143.4M",
    revenueInr: "₹1,192 Cr",
    awards: {
      wins: 395,
      nominations: 260,
      summary: "Won 7 Oscars. Most awarded film of all time.",
      major: ["7 Academy Awards including Best Picture, Best Actress, Best Director", "2 Golden Globes", "4 SAG Awards"]
    },
    overview: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/w3LxiVYPqrlexP02048ST9YvYvr.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7py8k4sa0LzPv0EZeg7vzqh9IR7.jpg",
    ott: {
      IN: {
        stream: [{ name: "SonyLIV", color: "#000" }],
        rent: [{ name: "Apple TV", color: "#333333" }, { name: "Prime Video", color: "#00a8e1" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Prime Video", color: "#00a8e1" }, { name: "Paramount+", color: "#0064ff" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Amazon Video", color: "#00a8e1" }]
      },
      UK: {
        stream: [{ name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-eea-1",
        user: "Chloe Zhao",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        rating: 10,
        date: "2023-05-18",
        text: "Googly eyes, hot dog fingers, rocks talking with subtitles — and yet it made me weep uncontrollably about mother-daughter reconciliation and nihilism."
      }
    ],
    cinematch: {
      timeCategory: "standard",
      companions: ["solo", "friends", "date-night"],
      moods: ["mind-bending", "feel-good", "emotional-drama"],
      whyFits: "Multiverse madness meets deeply touching family love and existential optimism."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 372058,
    imdbId: "tt5311514",
    title: "Your Name",
    tagline: "Treasure the experience. Dreams fade away after you wake up.",
    year: 2016,
    releaseDate: "2016-08-26",
    runtime: 106,
    runtimeFormatted: "1h 46m",
    language: "ja",
    languageName: "Japanese",
    certification: "PG",
    director: "Makoto Shinkai",
    cast: ["Ryunosuke Kamiki", "Mone Kamishiraishi", "Ryo Narita", "Aoi Yuki"],
    genres: ["Animation", "Drama", "Fantasy", "Romance"],
    genreWeights: {
      "Romance": 35,
      "Animation": 30,
      "Fantasy": 20,
      "Drama": 15
    },
    imdbRating: 8.4,
    imdbVotes: "320,000",
    revenueUSD: 382238181,
    revenueDisplay: "$382.2M",
    revenueInr: "₹3,180 Cr",
    awards: {
      wins: 16,
      nominations: 25,
      summary: "16 wins worldwide across animation and festival circuits.",
      major: ["Mainichi Film Concours for Best Animation", "Sitges Film Festival Best Animated Feature"]
    },
    overview: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies across time. Things become even more complicated when the boy and girl decide to meet in person before a comet strikes.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q719jXXEzOoYaps6qFsRwa0qWcu.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/dIWwZW7dJJ1q49RJvW2IMU2K9et.jpg",
    ott: {
      IN: {
        stream: [{ name: "Netflix", color: "#e50914" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: []
      },
      US: {
        stream: [{ name: "Crunchyroll", color: "#f47521" }],
        rent: [{ name: "Apple TV", color: "#333333" }, { name: "Amazon Video", color: "#00a8e1" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      UK: {
        stream: [{ name: "Crunchyroll", color: "#f47521" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: []
      }
    },
    reviews: [
      {
        id: "rev-yn-1",
        user: "Taro Yamada",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 10,
        date: "2023-11-12",
        text: "Radwimps' soundtrack combined with Makoto Shinkai's lush sky visuals creates an ache in your chest that lingers for weeks. Masterpiece."
      }
    ],
    cinematch: {
      timeCategory: "standard",
      companions: ["date-night", "solo"],
      moods: ["emotional-drama", "feel-good"],
      whyFits: "A visually stunning, heart-fluttering cosmic romance tied by the threads of fate and time."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 569094,
    imdbId: "tt9362722",
    title: "Spider-Man: Across the Spider-Verse",
    tagline: "It's how you wear the mask that matters.",
    year: 2023,
    releaseDate: "2023-06-02",
    runtime: 140,
    runtimeFormatted: "2h 20m",
    language: "en",
    languageName: "English",
    certification: "PG",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Jake Johnson", "Daniel Kaluuya"],
    genres: ["Animation", "Action", "Adventure", "Sci-Fi"],
    genreWeights: {
      "Animation": 40,
      "Action": 30,
      "Sci-Fi": 20,
      "Adventure": 10
    },
    imdbRating: 8.6,
    imdbVotes: "410,000",
    revenueUSD: 690516673,
    revenueDisplay: "$690.5M",
    revenueInr: "₹5,750 Cr",
    awards: {
      wins: 84,
      nominations: 130,
      summary: "84 wins and Oscar nomination for Best Animated Feature.",
      major: ["Critics' Choice Movie Award for Best Animated Feature", "7 Annie Awards", "AFI Special Award"]
    },
    overview: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    ott: {
      IN: {
        stream: [{ name: "Netflix", color: "#e50914" }],
        rent: [{ name: "Apple TV", color: "#333333" }, { name: "Prime Video", color: "#00a8e1" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Netflix", color: "#e50914" }],
        rent: [{ name: "Amazon Video", color: "#00a8e1" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      },
      UK: {
        stream: [{ name: "Sky Cinema", color: "#001937" }, { name: "NOW", color: "#002f6c" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-atsv-1",
        user: "Maya Lin",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 10,
        date: "2024-01-22",
        text: "Every individual frame could hang in a modern art museum. Daniel Kaluuya as Spider-Punk steals every scene he steps into."
      }
    ],
    cinematch: {
      timeCategory: "standard",
      companions: ["friends", "family", "solo"],
      moods: ["mind-bending", "high-octane"],
      whyFits: "Eye-popping artistic animation styles, multiverse lore, and rebellious punk-rock energy."
    },
    isTrending: true,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 1417,
    imdbId: "tt0457430",
    title: "Pan's Labyrinth",
    tagline: "Innocence has a power evil cannot imagine.",
    year: 2006,
    releaseDate: "2006-10-11",
    runtime: 118,
    runtimeFormatted: "1h 58m",
    language: "es",
    languageName: "Spanish",
    certification: "R",
    director: "Guillermo del Toro",
    cast: ["Ivana Baquero", "Sergi López", "Maribel Verdú", "Doug Jones", "Ariadna Gil"],
    genres: ["Drama", "Fantasy", "War"],
    genreWeights: {
      "Fantasy": 45,
      "Drama": 30,
      "War": 25
    },
    imdbRating: 8.2,
    imdbVotes: "695,000",
    revenueUSD: 83862984,
    revenueDisplay: "$83.9M",
    revenueInr: "₹698 Cr",
    awards: {
      wins: 102,
      nominations: 110,
      summary: "Won 3 Oscars. 102 wins worldwide.",
      major: ["3 Academy Awards (Cinematography, Art Direction, Makeup)", "3 BAFTA Awards", "7 Goya Awards"]
    },
    overview: "In the falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world presided over by an enigmatic faun.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/k61p6Zf1z9x3z1fWf3128mU1M6Y.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/lU8X4z2fE89kG3aYpL6s3N9y6M5.jpg",
    ott: {
      IN: {
        stream: [{ name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: []
      },
      US: {
        stream: [{ name: "Criterion Channel", color: "#000" }],
        rent: [{ name: "Amazon Video", color: "#00a8e1" }, { name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      UK: {
        stream: [{ name: "BFI Player", color: "#000" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: []
      }
    },
    reviews: [
      {
        id: "rev-pan-1",
        user: "Carlos Mendes",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 9,
        date: "2023-08-30",
        text: "The Pale Man scene remains one of the most chilling sequences in film history. Guillermo del Toro's dark fairy tale touches the soul."
      }
    ],
    cinematch: {
      timeCategory: "standard",
      companions: ["solo", "date-night"],
      moods: ["mind-bending", "hidden-gem"],
      whyFits: "A dark gothic fairy tale exploring childhood courage against the brutal horrors of real-world war."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 976573,
    imdbId: "tt15314262",
    title: "Premalu",
    tagline: "Love in the city of pearls.",
    year: 2024,
    releaseDate: "2024-02-09",
    runtime: 156,
    runtimeFormatted: "2h 36m",
    language: "ml",
    languageName: "Malayalam",
    certification: "U",
    director: "Girish A.D.",
    cast: ["Naslen K. Gafoor", "Mamitha Baiju", "Shyam Mohan", "Sangeeth Prathap", "Akhila Bhargavan"],
    genres: ["Comedy", "Romance"],
    genreWeights: {
      "Comedy": 55,
      "Romance": 45
    },
    imdbRating: 8.0,
    imdbVotes: "29,000",
    revenueUSD: 16500000,
    revenueDisplay: "$16.5M",
    revenueInr: "₹136 Cr",
    awards: {
      wins: 8,
      nominations: 12,
      summary: "One of the highest grossing romantic comedies in Indian cinema history.",
      major: ["Kerala State Youth Icon Honors", "Breakout Star of the Year (Mamitha Baiju)"]
    },
    overview: "Sachin pursues romance while navigating his ambitions and ends up in Hyderabad, where he falls head over heels for Reenu, an IT employee who has very specific standards for her dream partner.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3Ff52bYF1UeO4F4KkC0F4vL3f3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8tU8w13hQ3G9P10x3M6w4Y1N2L5.jpg",
    ott: {
      IN: {
        stream: [{ name: "Disney+ Hotstar", color: "#113ccf" }, { name: "Aha Video", color: "#ff6600" }],
        rent: [],
        buy: []
      },
      US: {
        stream: [{ name: "Hulu", color: "#1ce783" }],
        rent: [],
        buy: []
      },
      UK: {
        stream: [{ name: "Disney+", color: "#113ccf" }],
        rent: [],
        buy: []
      }
    },
    reviews: [
      {
        id: "rev-pre-1",
        user: "Rhea Thomas",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        rating: 9,
        date: "2024-03-25",
        text: "The humor is organic, relatable, and genuinely refreshing. JK's 'Just Kidding' character brought non-stop laughs throughout the theatre."
      }
    ],
    cinematch: {
      timeCategory: "standard",
      companions: ["date-night", "friends"],
      moods: ["feel-good"],
      whyFits: "Laugh-out-loud relatable young romance packed with charm, witty banter, and breezy Hyderabad vibes."
    },
    isTrending: true,
    isTopRated: false,
    isUpcoming: false
  },
  {
    id: 299534,
    imdbId: "tt4154796",
    title: "Avengers: Endgame",
    tagline: "Part of the journey is the end.",
    year: 2019,
    releaseDate: "2019-04-26",
    runtime: 181,
    runtimeFormatted: "3h 01m",
    language: "en",
    languageName: "English",
    certification: "PG-13",
    director: "Anthony Russo, Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    genreWeights: {
      "Action": 50,
      "Adventure": 30,
      "Sci-Fi": 20
    },
    imdbRating: 8.4,
    imdbVotes: "1,250,000",
    revenueUSD: 2799439100,
    revenueDisplay: "$2,799.4M",
    revenueInr: "₹23,300 Cr",
    awards: {
      wins: 70,
      nominations: 133,
      summary: "Second highest grossing film in cinema history.",
      major: ["Academy Award Nomination for Best Visual Effects", "6 Critics' Choice Nominations", "Saturn Award for Best Comic-to-Film Motion Picture"]
    },
    overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zJW8Q9zRk8G3y.jpg",
    ott: {
      IN: {
        stream: [{ name: "Disney+ Hotstar", color: "#113ccf" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Disney+", color: "#113ccf" }],
        rent: [{ name: "Amazon Video", color: "#00a8e1" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      },
      UK: {
        stream: [{ name: "Disney+", color: "#113ccf" }],
        rent: [{ name: "Sky Store", color: "#001937" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-end-1",
        user: "Dave Filoni",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        rating: 10,
        date: "2023-07-04",
        text: "The 'Portals' scene and Cap lifting Mjolnir remain the highest peak of collective audience euphoria in modern moviegoing history."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["friends", "family"],
      moods: ["high-octane", "emotional-drama"],
      whyFits: "A 3-hour emotional, superhero tour-de-force culminating a 22-film epic saga."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 1022789,
    imdbId: "tt22022452",
    title: "Inside Out 2",
    tagline: "Make room for new emotions.",
    year: 2024,
    releaseDate: "2024-06-14",
    runtime: 96,
    runtimeFormatted: "1h 36m",
    language: "en",
    languageName: "English",
    certification: "PG",
    director: "Kelsey Mann",
    cast: ["Amy Poehler", "Maya Hawke", "Kensington Tallman", "Liza Lapira", "Tony Hale"],
    genres: ["Animation", "Comedy", "Family", "Adventure"],
    genreWeights: {
      "Animation": 40,
      "Comedy": 30,
      "Family": 20,
      "Adventure": 10
    },
    imdbRating: 7.7,
    imdbVotes: "185,000",
    revenueUSD: 1698000000,
    revenueDisplay: "$1,698.0M",
    revenueInr: "₹14,140 Cr",
    awards: {
      wins: 12,
      nominations: 25,
      summary: "Highest grossing animated film of all time.",
      major: ["Golden Trailer Awards Best Family Animation", "Box Office Milestone Record"]
    },
    overview: "Teenager Riley's mind headquarters undergoes a sudden demolition to make room for unexpected new emotions: Anxiety, Envy, Ennui, and Embarrassment, threatening Joy and the original crew.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xg27NrXi7vCGUrII1g53ug4J7GC.jpg",
    ott: {
      IN: {
        stream: [{ name: "Disney+ Hotstar", color: "#113ccf" }],
        rent: [{ name: "Apple TV", color: "#333333" }, { name: "Prime Video", color: "#00a8e1" }],
        buy: [{ name: "YouTube Movies", color: "#cc0000" }]
      },
      US: {
        stream: [{ name: "Disney+", color: "#113ccf" }],
        rent: [{ name: "Amazon Video", color: "#00a8e1" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      },
      UK: {
        stream: [{ name: "Disney+", color: "#113ccf" }],
        rent: [{ name: "Sky Store", color: "#001937" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-io2-1",
        user: "Rebecca Vance",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 9,
        date: "2024-07-28",
        text: "Maya Hawke's portrayal of Anxiety is terrifyingly accurate and healing at the same time. Pixar found its magic once more."
      }
    ],
    cinematch: {
      timeCategory: "quick", // quick: < 105 min
      companions: ["family", "solo", "date-night"],
      moods: ["feel-good", "emotional-drama"],
      whyFits: "A brisk, compassionate, and deeply resonant look inside teenage panic, empathy, and joy."
    },
    isTrending: true,
    isTopRated: false,
    isUpcoming: false
  },
  {
    id: 1053544,
    imdbId: "tt21192142",
    title: "Gladiator II",
    tagline: "What we do in life echoes in eternity.",
    year: 2024,
    releaseDate: "2024-11-22",
    runtime: 148,
    runtimeFormatted: "2h 28m",
    language: "en",
    languageName: "English",
    certification: "R",
    director: "Ridley Scott",
    cast: ["Paul Mescal", "Pedro Pascal", "Denzel Washington", "Connie Nielsen", "Joseph Quinn"],
    genres: ["Action", "Adventure", "Drama"],
    genreWeights: {
      "Action": 50,
      "Drama": 30,
      "Adventure": 20
    },
    imdbRating: 7.9,
    imdbVotes: "85,000",
    revenueUSD: 460000000,
    revenueDisplay: "$460.0M",
    revenueInr: "₹3,830 Cr",
    awards: {
      wins: 6,
      nominations: 18,
      summary: "Major visual and acting awards candidate.",
      major: ["Critics Choice nomination for Denzel Washington", "BAFTA Longlist for Costume & Sound"]
    },
    overview: "Years after witnessing the death of Maximus at the hands of his uncle, Lucius must enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/euYIwmwkmz95mnXvufEmbL69ovr.jpg",
    ott: {
      IN: {
        stream: [{ name: "Prime Video", color: "#00a8e1" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Paramount+", color: "#0064ff" }],
        rent: [{ name: "Amazon Video", color: "#00a8e1" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      },
      UK: {
        stream: [{ name: "Paramount+", color: "#0064ff" }],
        rent: [{ name: "Sky Store", color: "#001937" }],
        buy: []
      }
    },
    reviews: [
      {
        id: "rev-g2-1",
        user: "Simon Fraser",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 8,
        date: "2024-11-25",
        text: "Denzel Washington completely commands every frame with ruthless charisma. The flooded Colosseum naval battle is pure blockbuster spectacle."
      }
    ],
    cinematch: {
      timeCategory: "standard",
      companions: ["friends", "solo"],
      moods: ["high-octane", "edge-of-seat"],
      whyFits: "Colosseum warfare, political backstabbing, and Denzel Washington at peak theatrical power."
    },
    isTrending: true,
    isTopRated: false,
    isUpcoming: false
  },
  {
    id: 533535,
    imdbId: "tt6263850",
    title: "Deadpool & Wolverine",
    tagline: "Come together.",
    year: 2024,
    releaseDate: "2024-07-26",
    runtime: 128,
    runtimeFormatted: "2h 08m",
    language: "en",
    languageName: "English",
    certification: "R",
    director: "Shawn Levy",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin", "Matthew Macfadyen", "Dafne Keen"],
    genres: ["Action", "Comedy", "Sci-Fi"],
    genreWeights: {
      "Comedy": 45,
      "Action": 40,
      "Sci-Fi": 15
    },
    imdbRating: 7.7,
    imdbVotes: "390,000",
    revenueUSD: 1338000000,
    revenueDisplay: "$1,338.0M",
    revenueInr: "₹11,130 Cr",
    awards: {
      wins: 15,
      nominations: 30,
      summary: "Highest grossing R-rated movie in global history.",
      major: ["Hollywood Critics Association Best Comedy", "People's Choice Favorite Movie of the Year"]
    },
    overview: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/9l1eZiJHmhr5jY76Rh53cqJu5Hy.jpg",
    ott: {
      IN: {
        stream: [{ name: "Disney+ Hotstar", color: "#113ccf" }],
        rent: [{ name: "Apple TV", color: "#333333" }, { name: "Prime Video", color: "#00a8e1" }],
        buy: [{ name: "YouTube Movies", color: "#cc0000" }]
      },
      US: {
        stream: [{ name: "Disney+", color: "#113ccf" }],
        rent: [{ name: "Amazon Video", color: "#00a8e1" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      },
      UK: {
        stream: [{ name: "Disney+", color: "#113ccf" }],
        rent: [{ name: "Sky Store", color: "#001937" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-dw-1",
        user: "Kyle Brooks",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
        rating: 9,
        date: "2024-08-10",
        text: "The Madonna 'Like a Prayer' needle drop fight scene made the whole theatre stand up and cheer. Hugh Jackman still embodies Wolverine effortlessly."
      }
    ],
    cinematch: {
      timeCategory: "standard",
      companions: ["friends", "date-night"],
      moods: ["high-octane", "feel-good"],
      whyFits: "Unapologetic R-rated humor, legendary cameos, and explosive comic-book buddy chemistry."
    },
    isTrending: true,
    isTopRated: false,
    isUpcoming: false
  },
  {
    id: 1114513,
    imdbId: "tt27424680",
    title: "Kantara: Chapter 1",
    tagline: "A Legend Comes Alive.",
    year: 2025,
    releaseDate: "2025-10-02",
    runtime: 160,
    runtimeFormatted: "2h 40m",
    language: "kn",
    languageName: "Kannada",
    certification: "UA",
    director: "Rishab Shetty",
    cast: ["Rishab Shetty", "Sapthami Gowda", "Kishore"],
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    genreWeights: {
      "Fantasy": 40,
      "Action": 30,
      "Drama": 30
    },
    imdbRating: 8.8,
    imdbVotes: "Expected",
    revenueUSD: 0,
    revenueDisplay: "N/A (Upcoming)",
    revenueInr: "N/A",
    awards: {
      wins: 0,
      nominations: 0,
      summary: "Prequel to the National Award-winning cultural sensation.",
      major: ["National Award Winner Rishab Shetty's Magnum Opus"]
    },
    overview: "Set during the reign of the Kadamba dynasty, this epic prequel delves deep into the origins of the Panjurli Daiva deity and the timeless contract between the indigenous forest tribe and the royal kings.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7zQ93994c9Cekg5GZ270H3qL22.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/t5zCBSB5xMdpAJMmCd0MB6ygc1a.jpg",
    ott: {
      IN: {
        stream: [],
        rent: [],
        buy: []
      },
      US: {
        stream: [],
        rent: [],
        buy: []
      },
      UK: {
        stream: [],
        rent: [],
        buy: []
      }
    },
    reviews: [
      {
        id: "rev-kan-1",
        user: "Deepak Bhat",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 10,
        date: "2024-10-10",
        text: "The teaser alone showed an otherworldly level of devotion and intensity. The most anticipated Indian film of the year."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["family", "friends", "solo"],
      moods: ["mind-bending", "high-octane"],
      whyFits: "Deep folklore, divine mythology, and intense tribal martial arts in an ancient forest realm."
    },
    isTrending: false,
    isTopRated: false,
    isUpcoming: true
  },
  {
    id: 1064213,
    imdbId: "tt22678680",
    title: "Anatomy of a Fall",
    tagline: "Did he fall or was he pushed?",
    year: 2023,
    releaseDate: "2023-08-23",
    runtime: 151,
    runtimeFormatted: "2h 31m",
    language: "fr",
    languageName: "French",
    certification: "R",
    director: "Justine Triet",
    cast: ["Sandra Hüller", "Swann Arlaud", "Milo Machado-Graner", "Antoine Reinartz"],
    genres: ["Crime", "Drama", "Mystery", "Thriller"],
    genreWeights: {
      "Drama": 45,
      "Mystery": 30,
      "Crime": 15,
      "Thriller": 10
    },
    imdbRating: 7.7,
    imdbVotes: "195,000",
    revenueUSD: 36000000,
    revenueDisplay: "$36.0M",
    revenueInr: "₹300 Cr",
    awards: {
      wins: 112,
      nominations: 174,
      summary: "Won 1 Oscar. 112 wins worldwide.",
      major: ["Academy Award for Best Original Screenplay", "Palme d'Or at Cannes", "2 Golden Globes", "6 César Awards"]
    },
    overview: "A German writer is arrested for murder following her husband's death in the snow below their secluded chalet. During the high-profile French trial, their visually impaired son becomes the sole star witness.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5Aqv3vWcR5K3y28j094h04R8G40.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8Z8QZ18K78gY75pL96s4Q1vN0.jpg",
    ott: {
      IN: {
        stream: [{ name: "SonyLIV", color: "#000" }],
        rent: [{ name: "Apple TV", color: "#333333" }, { name: "Prime Video", color: "#00a8e1" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Hulu", color: "#1ce783" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Amazon Video", color: "#00a8e1" }]
      },
      UK: {
        stream: [{ name: "Channel 4", color: "#222" }],
        rent: [{ name: "Curzon", color: "#000" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      }
    },
    reviews: [
      {
        id: "rev-ana-1",
        user: "Camille Laurent",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        rating: 10,
        date: "2024-02-14",
        text: "The recorded kitchen argument scene is the most realistic portrayal of married resentment ever captured on film. Sandra Hüller is miraculous."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["solo", "date-night"],
      moods: ["mind-bending", "edge-of-seat"],
      whyFits: "A masterclass in courtroom suspense and human ambiguity that leaves you debating the verdict for days."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 424,
    imdbId: "tt0108052",
    title: "Schindler's List",
    tagline: "Whoever saves one life saves the world entire.",
    year: 1993,
    releaseDate: "1993-12-15",
    runtime: 195,
    runtimeFormatted: "3h 15m",
    language: "en",
    languageName: "English",
    certification: "R",
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Caroline Goodall"],
    genres: ["Biography", "Drama", "History"],
    genreWeights: {
      "History": 40,
      "Drama": 35,
      "Biography": 25
    },
    imdbRating: 9.0,
    imdbVotes: "1,450,000",
    revenueUSD: 322161245,
    revenueDisplay: "$322.2M",
    revenueInr: "₹2,680 Cr",
    awards: {
      wins: 91,
      nominations: 49,
      summary: "Won 7 Oscars. 91 wins total.",
      major: ["7 Academy Awards including Best Picture & Best Director", "7 BAFTA Awards", "3 Golden Globes"]
    },
    overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/zb6fM1CX41D9r69hdYvv9040xT.jpg",
    ott: {
      IN: {
        stream: [{ name: "JioHotstar", color: "#1e3a8a" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Starz", color: "#000" }],
        rent: [{ name: "Amazon Video", color: "#00a8e1" }],
        buy: [{ name: "Apple TV", color: "#333333" }]
      },
      UK: {
        stream: [{ name: "NOW Cinema", color: "#002f6c" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: []
      }
    },
    reviews: [
      {
        id: "rev-sch-1",
        user: "David Stern",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 10,
        date: "2023-11-09",
        text: "John Williams' violin solos played by Itzhak Perlman elevate this heartbreaking historical testimony into sacred art."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["solo", "family"],
      moods: ["emotional-drama"],
      whyFits: "An indelible monument to human compassion in the face of profound historical darkness."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  },
  {
    id: 597,
    imdbId: "tt0120338",
    title: "Titanic",
    tagline: "Nothing on Earth could come between them.",
    year: 1997,
    releaseDate: "1997-12-19",
    runtime: 194,
    runtimeFormatted: "3h 14m",
    language: "en",
    languageName: "English",
    certification: "PG-13",
    director: "James Cameron",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates", "Bill Paxton"],
    genres: ["Drama", "Romance"],
    genreWeights: {
      "Romance": 55,
      "Drama": 45
    },
    imdbRating: 7.9,
    imdbVotes: "1,280,000",
    revenueUSD: 2264743305,
    revenueDisplay: "$2,264.7M",
    revenueInr: "₹18,850 Cr",
    awards: {
      wins: 126,
      nominations: 83,
      summary: "Tied for most Oscars ever (11 wins).",
      major: ["11 Academy Awards including Best Picture & Director", "4 Golden Globes", "Grammy for 'My Heart Will Go On'"]
    },
    overview: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic during its fateful maiden voyage across the Atlantic Ocean.",
    poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/yDI6D5ZQh67YU4r2ms8qcSbAviZ.jpg",
    ott: {
      IN: {
        stream: [{ name: "Disney+ Hotstar", color: "#113ccf" }],
        rent: [{ name: "Apple TV", color: "#333333" }, { name: "Prime Video", color: "#00a8e1" }],
        buy: [{ name: "Google Play", color: "#0f9d58" }]
      },
      US: {
        stream: [{ name: "Paramount+", color: "#0064ff" }],
        rent: [{ name: "Apple TV", color: "#333333" }],
        buy: [{ name: "Amazon Video", color: "#00a8e1" }]
      },
      UK: {
        stream: [{ name: "Disney+", color: "#113ccf" }],
        rent: [{ name: "Sky Store", color: "#001937" }],
        buy: [{ name: "Rakuten TV", color: "#e50046" }]
      }
    },
    reviews: [
      {
        id: "rev-tit-1",
        user: "Hannah Scott",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 10,
        date: "2024-02-14",
        text: "The grandest romantic spectacle ever mounted. James Cameron's meticulous practical recreation of the ship's sinking remains unmatched."
      }
    ],
    cinematch: {
      timeCategory: "epic",
      companions: ["date-night", "family", "solo"],
      moods: ["emotional-drama", "feel-good"],
      whyFits: "Epic tragedy, timeless romance, and unmatched golden-era Hollywood scale."
    },
    isTrending: false,
    isTopRated: true,
    isUpcoming: false
  }
];

// Fallback SVG Generator for broken/missing posters
function getFallbackPosterSVG(title, year = '') {
  const safeTitle = (title || 'Movie').replace(/[<>&"]/g, '');
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450" fill="%231E293B"><rect width="300" height="450" rx="12" fill="%230F172A"/><circle cx="150" cy="180" r="50" fill="%23E11D48" opacity="0.2"/><path d="M140 160 L170 180 L140 200 Z" fill="%23E11D48"/><text x="150" y="270" fill="%23F8FAFC" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">${encodeURIComponent(safeTitle.slice(0, 22))}</text><text x="150" y="295" fill="%2394A3B8" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">${encodeURIComponent(year)}</text><text x="150" y="410" fill="%23E11D48" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">HEARTZZY CINEMA</text></svg>`;
}

// Global Genres Definition
const TMDB_GENRES = [
  { id: 28, name: "Action", icon: "zap" },
  { id: 12, name: "Adventure", icon: "compass" },
  { id: 16, name: "Animation", icon: "smile" },
  { id: 35, name: "Comedy", icon: "laugh" },
  { id: 80, name: "Crime", icon: "shield" },
  { id: 99, name: "Documentary", icon: "video" },
  { id: 18, name: "Drama", icon: "heart" },
  { id: 10751, name: "Family", icon: "users" },
  { id: 14, name: "Fantasy", icon: "feather" },
  { id: 36, name: "History", icon: "book-open" },
  { id: 27, name: "Horror", icon: "skull" },
  { id: 10402, name: "Music", icon: "music" },
  { id: 9648, name: "Mystery", icon: "search" },
  { id: 10749, name: "Romance", icon: "flame" },
  { id: 878, name: "Sci-Fi", icon: "atom" },
  { id: 53, name: "Thriller", icon: "eye" },
  { id: 10752, name: "War", icon: "flag" }
];

const AVAILABLE_LANGUAGES = [
  { code: "all", name: "All Languages" },
  { code: "en", name: "English (en)" },
  { code: "hi", name: "Hindi (hi)" },
  { code: "te", name: "Telugu (te)" },
  { code: "ta", name: "Tamil (ta)" },
  { code: "ml", name: "Malayalam (ml)" },
  { code: "kn", name: "Kannada (kn)" },
  { code: "ko", name: "Korean (ko)" },
  { code: "ja", name: "Japanese (ja)" },
  { code: "es", name: "Spanish (es)" },
  { code: "fr", name: "French (fr)" }
];
