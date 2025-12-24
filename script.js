// ----------------------
//   APPLICATION STATE
// ----------------------
const state = {
    currentUser: null,
    currentPage: 'home',
    currentTheme: 'light',

    quizData: [
        {
            question: "Which field are you most interested in?",
            options: ["Technology", "Business", "Design", "Science", "Arts", "Healthcare"]
        },
        {
            question: "What's your current skill level?",
            options: ["Beginner", "Intermediate", "Advanced", "Expert"]
        },
        {
            question: "How much time can you dedicate per week?",
            options: ["1–5 hours", "5–10 hours", "10–20 hours", "20+ hours"]
        },
        {
            question: "What is your primary learning goal?",
            options: ["Career advancement", "Personal interest", "Skill development", "Academic credit"]
        },
        {
            question: "Which learning format do you prefer?",
            options: ["Self-paced online", "Structured", "In-person", "Mixed"]
        }
    ],

    courseDatabase: [
        {
            id: 1,
            title: "Web Development Fundamentals",
            description: "Learn HTML, CSS, and JavaScript to build responsive websites.",
            duration: "8 weeks",
            level: "Beginner",
            field: "Technology",
            jobs: ["Frontend Developer", "Web Designer"],
            cheatsheet: "https://web.dev/learn/css/",
            youtube: [
                "https://www.youtube.com/watch?v=UB1O30fR-EE",
                "https://www.youtube.com/watch?v=PkZNo7MFNFg"
            ],
            roadmap: "https://roadmap.sh/frontend",
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 2,
            title: "Data Science Essentials",
            description: "Master data analysis, visualization, and ML basics.",
            duration: "10 weeks",
            level: "Intermediate",
            field: "Technology",
            jobs: ["Data Analyst", "ML Engineer"],
            cheatsheet: "https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf",
            youtube: [
                "https://www.youtube.com/watch?v=ua-CiDNNj30",
                "https://www.youtube.com/watch?v=r-uOLxNrNk8"
            ],
            roadmap: "https://roadmap.sh/data-science",
            image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 3,
            title: "UI/UX Design Principles",
            description: "Design intuitive interfaces with proper UX workflows.",
            duration: "6 weeks",
            level: "Beginner",
            field: "Design",
            jobs: ["UI Designer", "Product Designer"],
            cheatsheet: "https://www.smashingmagazine.com/2018/01/ux-cheat-sheet/",
            youtube: [
                "https://www.youtube.com/watch?v=Ovj4hFxko7c",
                "https://www.youtube.com/watch?v=3jZlI1b80L4"
            ],
            roadmap: "https://roadmap.sh/ui-ux",
            image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 4,
            title: "Digital Marketing Strategy",
            description: "Learn to create effective digital marketing campaigns across multiple platforms.",
            duration: "8 weeks",
            level: "Intermediate",
            field: "Business",
            tags: ["marketing", "business", "social media"],
            jobs: ["Digital Marketer", "SEO Specialist", "Content Strategist"],
            cheatsheet: "https://backlinko.com/digital-marketing-cheat-sheet",
            youtube: [
                "https://www.youtube.com/watch?v=nCgQDjiotG0",
                "https://www.youtube.com/watch?v=V0vQnQSrC-g"
            ],
            roadmap: "https://roadmap.sh/marketing",
            image: "https://images.pexels.com/photos/3182832/pexels-photo-3182832.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 5,
            title: "Introduction to Psychology",
            description: "Explore the fundamental concepts and theories of human behavior and mental processes.",
            duration: "12 weeks",
            level: "Beginner",
            field: "Science",
            tags: ["psychology", "science", "behavior"],
            jobs: ["Psychologist", "Counselor", "Research Assistant"],
            cheatsheet: "https://www.psychologytoday.com/us/basics/psychology",
            youtube: [
                "https://www.youtube.com/watch?v=vo4pMVb0R6M",
                "https://www.youtube.com/watch?v=Q3pzbFjYy5w"
            ],
            roadmap: "https://www.coursera.org/articles/psychology-careers",
            image: "https://images.pexels.com/photos/3184643/pexels-photo-3184643.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 6,
            title: "Financial Accounting",
            description: "Understand the principles of financial accounting and financial statement analysis.",
            duration: "10 weeks",
            level: "Intermediate",
            field: "Business",
            tags: ["finance", "accounting", "business"],
            jobs: ["Accountant", "Financial Analyst", "Auditor"],
            cheatsheet: "https://www.accountingcoach.com/cheat-sheet",
            youtube: [
                "https://www.youtube.com/watch?v=7gkF6QpQ6uA",
                "https://www.youtube.com/watch?v=1I3hMwQU6GU"
            ],
            roadmap: "https://corporatefinanceinstitute.com/resources/accounting/accounting-career-paths/",
            image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 7,
            title: "Graphic Design Fundamentals",
            description: "Learn the principles of visual design, typography, and color theory.",
            duration: "6 weeks",
            level: "Beginner",
            field: "Design",
            tags: ["design", "graphic", "visual arts"],
            jobs: ["Graphic Designer", "Brand Designer", "Illustrator"],
            cheatsheet: "https://www.canva.com/learn/graphic-design-cheat-sheet/",
            youtube: [
                "https://www.youtube.com/watch?v=piQKrwS6Yms",
                "https://www.youtube.com/watch?v=QH2T6YkQb6A"
            ],
            roadmap: "https://www.careerexplorer.com/careers/graphic-designer/",
            image: "https://images.pexels.com/photos/620822/pexels-photo-620822.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 8,
            title: "Machine Learning Basics",
            description: "Supervised and unsupervised ML fundamentals.",
            duration: "12 weeks",
            level: "Advanced",
            field: "Technology",
            tags: ["programming", "AI", "data science"],
            jobs: ["Machine Learning Engineer", "AI Developer", "Data Scientist"],
            cheatsheet: "https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-supervised-learning",
            youtube: [
                "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
                "https://www.youtube.com/watch?v=ukzFI9rgwfU"
            ],
            roadmap: "https://roadmap.sh/ai",
            image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    ],

    userAnswers: []
};

// ----------------------
//   DOM ELEMENTS
// ----------------------
const elements = {
    authButtons: document.getElementById('authButtons'),
    userProfile: document.getElementById('userProfile'),
    userAvatar: document.getElementById('userAvatar'),
    username: document.getElementById('username'),
    logoutBtn: document.getElementById('logoutBtn'),
    loginBtn: document.getElementById('loginBtn'),
    signupBtn: document.getElementById('signupBtn'),
    startQuizBtn: document.getElementById('startQuizBtn'),

    progressBar: document.getElementById('progressBar'),
    quizContent: document.getElementById('quizContent'),
    loginPage: document.getElementById('loginPage'),
    signupPage: document.getElementById('signupPage'),

    goToLogin: document.getElementById('goToLogin'),
    goToSignup: document.getElementById('goToSignup'),
    loginSubmit: document.getElementById('loginSubmit'),
    signupSubmit: document.getElementById('signupSubmit'),

    recommendedCoursesList: document.getElementById('recommendedCoursesList'),
    themeToggle: document.getElementById('themeToggle')
};


// ----------------------
//   THEME HANDLING
// ----------------------
function toggleTheme() {
    if (state.currentTheme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        state.currentTheme = "dark";
        localStorage.setItem("theme", "dark");
        elements.themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
        document.documentElement.removeAttribute("data-theme");
        state.currentTheme = "light";
        localStorage.setItem("theme", "light");
        elements.themeToggle.innerHTML = `<i class="fas fa-moon"></i>`;
    }
}

function loadTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        state.currentTheme = "dark";
        elements.themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
    }
}


// ----------------------
//   NAVIGATION
// ----------------------
function showPage(pageId) {
    document.querySelectorAll(".active-page, .auth-page").forEach(p => p.style.display = "none");
    document.getElementById(pageId).style.display = "block";
    window.scrollTo(0, 0);
}

function navigateTo(id) {
    if (id === "quiz") startQuiz();
    showPage(id);
}


// ----------------------
//   AUTH (LOGIN / SIGNUP)
// ----------------------
function loginUser(email, password) {
    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }
    
    state.currentUser = {
        name: email.split("@")[0],
        email
    };
    
    elements.userAvatar.textContent = state.currentUser.name.charAt(0).toUpperCase();
    elements.username.textContent = state.currentUser.name;
    document.getElementById('authButtons').style.display = 'none';
    elements.userProfile.style.display = 'flex';
    
    showPage('home');
}

function signupUser(name, email, password) {
    if (!name || !email || !password) {
        alert('Please fill all fields');
        return;
    }
    
    state.currentUser = {
        name: name,
        email: email
    };
    
    elements.userAvatar.textContent = state.currentUser.name.charAt(0).toUpperCase();
    elements.username.textContent = state.currentUser.name;
    document.getElementById('authButtons').style.display = 'none';
    elements.userProfile.style.display = 'flex';
    
    showPage('home');
}

function logoutUser() {
    state.currentUser = null;
    state.userAnswers = [];
    elements.userProfile.style.display = "none";
    elements.authButtons.style.display = "flex";
    showPage("home");
}


// ----------------------
//   QUIZ SYSTEM
// ----------------------
function startQuiz() {
    state.userAnswers = [];
    showQuizQuestion(0);
}

function showQuizQuestion(index) {
    if (index >= state.quizData.length) {
        // Fill progress bar fully on finish
        elements.progressBar.style.width = '100%';
        showRecommendations();
        return;
    }
    
    const question = state.quizData[index];
    const progress = (index / state.quizData.length) * 100;
    elements.progressBar.style.width = `${progress}%`;
    
    let optionsHTML = '';
    question.options.forEach((option, i) => {
        optionsHTML += `
            <div class="option" data-index="${i}">
                ${option}
            </div>
        `;
    });
    
    elements.quizContent.innerHTML = `
        <div class="question"><h3>${q.question}</h3>
            <div class="options">${options}</div>
        </div>
        <div class="quiz-navigation">
            ${index > 0 ? `<button class="btn btn-outline" id="prevQuestion">Previous</button>` : `<div></div>`}
            <button class="btn btn-primary" id="nextQuestion" disabled>Next</button>
        </div>
    `;
    
    // Add event listeners to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            this.classList.add('selected');
            document.getElementById('nextQuestion').disabled = false;
            
            const selectedIndex = parseInt(this.getAttribute('data-index'));
            state.userAnswers[index] = question.options[selectedIndex];
        });
    });
    
    // Navigation buttons
    if (index > 0) {
        document.getElementById("prevQuestion").addEventListener("click", () =>
            showQuizQuestion(index - 1)
        );
    }

    document.getElementById("nextQuestion").addEventListener("click", () =>
        showQuizQuestion(index + 1)
    );
}
// ----------------------
//   RECOMMENDATION ENGINE
// ----------------------
function calculateRecommendations() {
    const fieldInterest = state.userAnswers[0];
    const skillLevel = state.userAnswers[1];

    let filtered = state.courseDatabase.filter(course =>
        course.field === fieldInterest && course.level === skillLevel
    );

    if (filtered.length < 3) {
        filtered = state.courseDatabase.filter(course =>
            course.field === fieldInterest
        );
    }

    if (filtered.length < 3) {
        filtered = [...state.courseDatabase].sort(() => 0.5 - Math.random());
    }

    return filtered.slice(0, 4);
}


// ----------------------
//   SHOW RECOMMENDED COURSES
// ----------------------
function showRecommendations() {
    const recommendations = calculateRecommendations();

    showPage('recommended-courses');

    let coursesHTML = '';
    recommendations.forEach(course => {
        coursesHTML += `
            <div class="course-card" data-course-id="${course.id}" style="cursor:pointer;">
                <div class="course-img">
                    <img src="${course.image}" alt="${course.title}">
                </div>
                <div class="course-content">
                    <h3 class="course-title">${c.title}</h3>
                    <p class="course-description">${c.description}</p>
                    <div class="course-meta">
                        <span><i class="far fa-clock"></i> ${c.duration}</span>
                        <span><i class="fas fa-user-graduate"></i> ${c.level}</span>
                    </div>

                    <!-- ⭐ Bookmark Button -->
                    <button class="btn bookmark-btn" data-id="course-${c.id}">
                        <i class="fas fa-bookmark"></i> Bookmark
                    </button>
                </div>

                <div class="course-details" style="display:none;"></div>
            </div>
        `;
    });

    elements.recommendedCoursesList.innerHTML = coursesHTML;

    // Click to show details
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', function() {
            // Collapse any open details
            document.querySelectorAll('.course-details').forEach(d => d.style.display = 'none');

            const courseId = parseInt(this.getAttribute('data-course-id'));
            const course = state.courseDatabase.find(c => c.id === courseId);
            const detailsDiv = this.querySelector('.course-details');

            detailsDiv.innerHTML = `
                <div class="related-section">
                    <h4>Jobs</h4>
                    <ul>
                        ${(course.jobs || []).map(j => `<li>${j}</li>`).join('')}
                    </ul>

                    <h4>Cheatsheet</h4>
                    <a href="${course.cheatsheet}" target="_blank">${course.cheatsheet}</a>

                    <h4>YouTube Videos</h4>
                    <ul>
                        ${(course.youtube || []).map(url => `<li><a href="${url}" target="_blank">${url}</a></li>`).join('')}
                    </ul>

                    <h4>Roadmap</h4>
                    <a href="${course.roadmap}" target="_blank">${course.roadmap}</a>
                </div>
            `;

            details.style.display = "block";
        });
    });
}

function calculateRecommendations() {
    const fieldInterest = state.userAnswers[0]; // Technology, Business, Design, etc.
    const skillLevel = state.userAnswers[1]; // Beginner, Intermediate, etc.
    
    let filteredCourses = state.courseDatabase.filter(course => {
        return course.field === fieldInterest && course.level === skillLevel;
    });
    
    if (filteredCourses.length < 3) {
        filteredCourses = state.courseDatabase.filter(course => {
            return course.field === fieldInterest;
        });
    }
    
    if (filteredCourses.length < 3) {
        filteredCourses = [...state.courseDatabase].sort(() => 0.5 - Math.random()).slice(0, 4);
    }
    
    return filteredCourses.slice(0, 4);
}

// ----------------------
//   GLOBAL EVENT LISTENERS
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
    loadTheme();

    elements.themeToggle.addEventListener("click", toggleTheme);

    // NAVBAR LINKS
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const id = link.getAttribute("href").substring(1);
            navigateTo(id);
        });
    });

    // LOGIN/SIGNUP clicks
    elements.loginBtn.addEventListener("click", () => showPage("loginPage"));
    elements.signupBtn.addEventListener("click", () => showPage("signupPage"));

    elements.goToLogin.addEventListener("click", e => {
        e.preventDefault();
        showPage("loginPage");
    });

    elements.goToSignup.addEventListener("click", e => {
        e.preventDefault();
        showPage("signupPage");
    });

    // AUTH SUBMIT
    elements.loginSubmit.addEventListener("click", () => {
        loginUser(
            document.getElementById("loginEmail").value,
            document.getElementById("loginPassword").value
        );
    });

    elements.signupSubmit.addEventListener("click", () => {
        signupUser(
            document.getElementById("signupName").value,
            document.getElementById("signupEmail").value,
            document.getElementById("signupPassword").value
        );
    });

    elements.logoutBtn.addEventListener("click", logoutUser);

    elements.startQuizBtn.addEventListener("click", () => {
        if (!state.currentUser) {
            alert("Please login first");
            showPage("loginPage");
            return;
        }
        startQuiz();
        showPage("quiz");
    });

    initCertificationCardClickable();
});


// ----------------------
//   CERTIFICATION CARDS → CLICKABLE CARDS
// ----------------------
function initCertificationCardClickable() {
    document.querySelectorAll(".certification-card").forEach(card => {
        const link = card.querySelector("a.btn-primary");
        if (!link) return;

        card.style.cursor = "pointer";
        card.setAttribute("tabindex", "0");

        card.addEventListener("click", e => {
            if (e.target.closest(".bookmark-btn")) return;
            if (e.target.tagName === "A") return;
            window.open(link.href, "_blank");
        });

        card.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                window.open(link.href, "_blank");
            }
        });
    });
}
// ---------------------------------------------
// BOOKMARK SYSTEM
// ---------------------------------------------

// Ensure bookmarks array exists in localStorage
if (!localStorage.getItem("bookmarks")) {
    localStorage.setItem("bookmarks", JSON.stringify([]));
}

function getBookmarks() {
    return JSON.parse(localStorage.getItem("bookmarks")) || [];
}

function saveBookmarks(list) {
    localStorage.setItem("bookmarks", JSON.stringify(list));
}

function addBookmark(item) {
    const bookmarks = getBookmarks();
    if (bookmarks.some(b => b.id === item.id)) return; // avoid duplicates
    bookmarks.push(item);
    saveBookmarks(bookmarks);
}

function removeBookmark(id) {
    let bookmarks = getBookmarks();
    bookmarks = bookmarks.filter(b => b.id !== id);
    saveBookmarks(bookmarks);
}

function isBookmarked(id) {
    const bookmarks = getBookmarks();
    return bookmarks.some(b => b.id === id);
}

function toggleBookmark(item) {
    if (!item || !item.id) return;

    if (isBookmarked(item.id)) {
        removeBookmark(item.id);
    } else {
        addBookmark(item);
    }
    updateAllBookmarkButtons();
}


// ---------------------------------------------
// INIT + UPDATE BOOKMARK BUTTONS
// ---------------------------------------------
function updateAllBookmarkButtons() {
    document.querySelectorAll(".bookmark-btn").forEach(btn => {
        const id = btn.dataset.id;
        if (isBookmarked(id)) {
            btn.innerHTML = `<i class="fas fa-check"></i> Bookmarked`;
            btn.classList.add("bookmarked");
        } else {
            btn.innerHTML = `<i class="fas fa-bookmark"></i> Bookmark`;
            btn.classList.remove("bookmarked");
        }
    });
}

function initBookmarkButtons() {
    document.querySelectorAll(".bookmark-btn").forEach(btn => {
        // prevent attaching multiple listeners to the same button
        if (btn.dataset.bookmarkListenerAttached === "true") return;

        btn.addEventListener("click", e => {
            e.stopPropagation(); // don't trigger card click
            e.preventDefault();

            const id = btn.dataset.id;
            let item = null;

            // Course bookmark (home / recommended)
            if (id.startsWith("course-")) {
                const numericId = parseInt(id.split("-")[1], 10);
                const course = state.courseDatabase.find(c => c.id === numericId);
                if (!course) return;
                item = {
                    id: id,
                    type: "course",
                    title: course.title,
                    image: course.image
                };
            }

            // Certification bookmark
            else if (id.startsWith("cert-")) {
                const card = btn.closest(".certification-card");
                if (!card) return;
                const titleEl = card.querySelector(".certification-title");
                const imgEl = card.querySelector("img");
                if (!titleEl || !imgEl) return;

                item = {
                    id: id,
                    type: "cert",
                    title: titleEl.innerText.trim(),
                    image: imgEl.src
                };
            }

            toggleBookmark(item);
        });

        btn.dataset.bookmarkListenerAttached = "true";
    });

    updateAllBookmarkButtons();
}


// ---------------------------------------------
// INJECT BOOKMARK BUTTONS INTO EXISTING CARDS
// ---------------------------------------------

// 1) Home → Popular Courses (static in HTML)
function injectHomeCourseBookmarkButtons() {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const cards = homeSection.querySelectorAll(".course-card");
    cards.forEach(card => {
        const content = card.querySelector(".course-content");
        const titleEl = card.querySelector(".course-title");
        if (!content || !titleEl) return;

        const titleText = titleEl.innerText.trim();
        const course = state.courseDatabase.find(c => c.title === titleText);
        if (!course) return;

        // Avoid duplicate bookmark button
        if (content.querySelector(".bookmark-btn")) return;

        const btn = document.createElement("button");
        btn.className = "btn bookmark-btn";
        btn.dataset.id = `course-${course.id}`;
        btn.innerHTML = `<i class="fas fa-bookmark"></i> Bookmark`;

        content.appendChild(btn);
    });
}

    // Certification cards clickable & keyboard accessible
    (function makeCertificationCardsClickable() {
        document.querySelectorAll('.certification-card').forEach(card => {
            const link = card.querySelector('a.btn[href], a[href].btn-primary, a[href*="http"]');
            if (!link) return;
            card.style.cursor = 'pointer';
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'link');

            card.addEventListener('click', (e) => {
                const target = e.target;
                if (target.closest('a')) return;
                window.open(link.href, '_blank', 'noopener');
            });

            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.open(link.href, '_blank', 'noopener');
                }
            });
        });
    }

    showPage("bookmarks");
}


// ---------------------------------------------
// HOOK NAVBAR "BOOKMARKS" LINK
// ---------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Make sure section exists
    ensureBookmarksSectionExists();

    // Inject bookmark buttons into existing cards
    injectHomeCourseBookmarkButtons();
    injectCertificationBookmarkButtons();

    // Initialize button behaviors
    initBookmarkButtons();

    // Hook navbar Bookmarks link (if present)
    const bookmarksNavLink = document.querySelector('a[href="#bookmarks"]');
    if (bookmarksNavLink) {
        bookmarksNavLink.addEventListener("click", e => {
            e.preventDefault();
            showBookmarks();
        });
    }
});

// Currently unused, but kept if you plan backend integration
const API_URL = 'http://localhost:3000';
