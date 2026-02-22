/* ===== AUTH MODAL FUNCTIONALITY ===== */
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginClose = document.getElementById('loginClose');
const signupClose = document.getElementById('signupClose');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

if (signupClose) {
    signupClose.addEventListener('click', () => {
        signupModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

if (switchToSignup) {
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    });
}

if (switchToLogin) {
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'block';
    });
}

window.addEventListener('click', (e) => {
    if (loginModal && e.target === loginModal) {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (signupModal && e.target === signupModal) {
        signupModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if (email && password) {
            alert('Login successful! Welcome back to AbilityJobs.');
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            loginForm.reset();
            
            if (isVoiceMode) {
                speak("Login successful! Welcome back.");
            }
        }
    });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        const userType = document.getElementById('userType').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            if (isVoiceMode) {
                speak("Passwords do not match. Please try again.");
            }
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long!');
            if (isVoiceMode) {
                speak("Password is too short. Please use at least 6 characters.");
            }
            return;
        }
        
        if (name && email && password && userType) {
            alert('Account created successfully! Welcome, ' + name + '! You are registered as a ' + userType + '.');
            signupModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            signupForm.reset();
            
            if (isVoiceMode) {
                speak('Account created successfully! Welcome, ' + name + '.');
            }
        }
    });
}

/* ===== JOB DATABASE ===== */
const jobs = [
    { title: "Customer Support", company: "Tech Corp", type: "Remote", desc: "Work from home answering chats.", suitable: ["blind", "physical"] },
    { title: "Audio Editor", company: "Podcast Inc", type: "Remote", desc: "Edit audio files using software.", suitable: ["blind"] },
    { title: "Sign Language Interpreter", company: "Global Services", type: "On-Site", desc: "Interpret for meetings.", suitable: ["deaf"] },
    { title: "Data Entry Clerk", company: "Admin Solutions", type: "Remote", desc: "Enter data into spreadsheets.", suitable: ["blind", "deaf", "physical"] },
    { title: "Wheelchair Accessible Office Admin", company: "City Office", type: "On-Site", desc: "Front desk job, wheelchair accessible.", suitable: ["physical"] },
    { title: "Braille Transcriber", company: "EduBooks", type: "Remote", desc: "Convert books to Braille format.", suitable: ["blind"] },
    { title: "IT Support Specialist", company: "Tech Solutions", type: "On-Site", desc: "Help employees with computer issues.", suitable: ["physical", "other"] },
    { title: "Captioning Specialist", company: "VideoHub", type: "Remote", desc: "Add captions to video content.", suitable: ["deaf"] },
    { title: "Accessibility Tester", company: "WebA11y", type: "Remote", desc: "Test websites for accessibility compliance.", suitable: ["blind", "physical", "other"] },
    { title: "Mobility Equipment Technician", company: "MedEquip", type: "On-Site", desc: "Repair and maintain wheelchairs and other devices.", suitable: ["physical"] }
];

/* ===== MOBILE MENU TOGGLE ===== */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

/* ===== JOB SEARCH FUNCTIONALITY ===== */
const disabilitySelect = document.getElementById('disability-select');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const voiceBtn = document.getElementById('voice-btn');
const jobList = document.getElementById('job-list');

let isVoiceMode = false;

if (disabilitySelect) {
    disabilitySelect.addEventListener('change', function() {
        const selectedDisability = this.value;
        
        if (selectedDisability === 'blind') {
            if (voiceBtn) voiceBtn.style.display = 'inline-block';
            enableVoiceMode();
        } else {
            if (voiceBtn) voiceBtn.style.display = 'none';
            disableVoiceMode();
        }
        
        filterJobs();
    });
}

function enableVoiceMode() {
    isVoiceMode = true;
    document.body.classList.add('voice-mode');
    speak("Voice mode activated. Please click the microphone button and speak to search for jobs.");
}

function disableVoiceMode() {
    isVoiceMode = false;
    document.body.classList.remove('voice-mode');
}

if (searchBtn) {
    searchBtn.addEventListener('click', filterJobs);
}

if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            filterJobs();
        }
    });
}

function filterJobs() {
    const disability = disabilitySelect.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredJobs = jobs.filter(job => {
        const matchesDisability = job.suitable.includes(disability) || disability === 'other' || disability === '';
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) || 
                             job.company.toLowerCase().includes(searchTerm) ||
                             job.desc.toLowerCase().includes(searchTerm);
        return matchesDisability && matchesSearch;
    });
    
    displayJobs(filteredJobs);
    
    if (isVoiceMode) {
        if (filteredJobs.length > 0) {
            if (disability === '') {
                speak("Found " + jobs.length + " jobs through voice search.");
            } else {
                speak("Found " + filteredJobs.length + " jobs through voice search.");
            }
        } else {
            speak("No jobs found matching your criteria.");
        }
    }
}

function displayJobs(jobsToDisplay) {
    if (!jobList) return;
    
    jobList.innerHTML = '';
    
    if (jobsToDisplay.length === 0) {
        jobList.innerHTML = '<p class="placeholder-text">No jobs found matching your criteria. Try a different search.</p>';
        return;
    }
    
    jobsToDisplay.forEach((job, index) => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.setAttribute('role', 'article');
        jobCard.setAttribute('tabindex', '0');
        
        jobCard.innerHTML = '<h3>' + job.title + '</h3><p><strong>Company:</strong> ' + job.company + '</p><p><strong>Type:</strong> ' + job.type + '</p><p>' + job.desc + '</p><div class="tags">' + job.suitable.map(tag => '<span>' + capitalizeFirst(tag) + '</span>').join('') + '</div>';
        
        jobCard.addEventListener('click', () => {
            if (isVoiceMode) {
                speak(job.title + " at " + job.company + ". " + job.desc);
            }
        });
        
        jobList.appendChild(jobCard);
    });
}

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* ===== DISABILITY CARD SELECTION ===== */
const disabilityCards = document.querySelectorAll('.disability-card');

if (disabilityCards.length > 0) {
    disabilityCards.forEach(card => {
        card.addEventListener('click', function() {
            disabilityCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            const value = this.getAttribute('data-value');
            if (disabilitySelect) {
                disabilitySelect.value = value;
                disabilitySelect.dispatchEvent(new Event('change'));
            }
            if (typeof isVoiceMode !== 'undefined' && isVoiceMode) {
                const labels = {'blind':'Blind or Visually Impaired','deaf':'Deaf or Hearing Impaired','physical':'Physically Disabled','other':'Other or No Disability'};
                speak('You selected ' + labels[value] + '. Jobs will be filtered accordingly.');
            }
        });
    });
}

/* ===== VOICE SEARCH FUNCTIONALITY ===== */
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

if (SpeechRecognition && voiceBtn) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    
    recognition.onstart = function() {
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Listening...';
        voiceBtn.style.background = '#e74c3c';
    };
    
    recognition.onend = function() {
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Click to Speak';
        voiceBtn.style.background = '';
    };
    
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        filterJobs();
        
        if (isVoiceMode) {
            speak("Searching for " + transcript);
        }
    };
    
    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        speak("Sorry, I couldn't understand. Please try again.");
    };
    
    voiceBtn.addEventListener('click', () => {
        try {
            recognition.start();
        } catch (e) {
            console.error('Recognition already started:', e);
        }
    });
} else if (voiceBtn) {
    voiceBtn.title = 'Speech recognition not supported in this browser';
    voiceBtn.style.cursor = 'not-allowed';
}

/* ===== TEXT-TO-SPEECH FUNCTION ===== */
function speak(text) {
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    window.speechSynthesis.speak(utterance);
}

/* ===== SMOOTH SCROLLING FOR NAVIGATION LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===== CONTACT FORM HANDLING ===== */
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && message) {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            
            if (isVoiceMode) {
                speak("Thank you for your message. We will respond within 24 hours.");
            }
        } else {
            alert('Please fill in all fields.');
            
            if (isVoiceMode) {
                speak("Please fill in all the required fields.");
            }
        }
    });
}

/* ===== FAQ ACCORDION ===== */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        item.classList.toggle('active');
    });
});

/* ===== ACCESSIBILITY FEATURES ===== */
window.addEventListener('load', () => {
    if (isVoiceMode) {
        speak("AbilityJobs page loaded. Use the dropdown to select your disability type.");
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('job-card')) {
        e.target.click();
    }
});

/* ===== DARK MODE TOGGLE ===== */
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
});

/* ===== SKELETON LOADER FUNCTIONALITY ===== */
// Modified filterJobs function to show skeleton loader during search
const originalFilterJobs = filterJobs;

filterJobs = function() {
    const skeletonLoader = document.getElementById('skeleton-loader');
    const disability = disabilitySelect.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    // Show skeleton loader, hide job list
    if (skeletonLoader) {
        skeletonLoader.classList.add('active');
    }
    if (jobList) {
        jobList.style.display = 'none';
    }
    
    // Simulate loading delay for skeleton animation
    setTimeout(() => {
        const filteredJobs = jobs.filter(job => {
            const matchesDisability = job.suitable.includes(disability) || disability === 'other' || disability === '';
            const matchesSearch = job.title.toLowerCase().includes(searchTerm) || 
                                 job.company.toLowerCase().includes(searchTerm) ||
                                 job.desc.toLowerCase().includes(searchTerm);
            return matchesDisability && matchesSearch;
        });
        
        // Hide skeleton loader, show job list
        if (skeletonLoader) {
            skeletonLoader.classList.remove('active');
        }
        if (jobList) {
            jobList.style.display = 'grid';
        }
        
        displayJobs(filteredJobs);
        
        if (isVoiceMode) {
            if (filteredJobs.length > 0) {
                speak('Found ' + filteredJobs.length + ' jobs through voice search.');
            } else {
                speak('No jobs found matching your criteria.');
            }
        }
    }, 800); // 800ms delay to show skeleton animation
};
