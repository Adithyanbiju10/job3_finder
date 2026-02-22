================================================================================
                    ABILITYJOBS - PROJECT README
================================================================================

PROJECT NAME: AbilityJobs - Inclusive Job Portal
PROJECT DESCRIPTION: A smart job search website for differently abled people
                      with voice assistant capabilities for blind users.

================================================================================
                          HOW TO INSTALL
================================================================================

STEP 1: CREATE FOLDER
   - Create a new folder on your computer named "AbilityJobs"
   - You can create it on your Desktop or anywhere you prefer

STEP 2: CREATE FILES
   Inside the AbilityJobs folder, create these 4 text files:
   
   a) index.html
   b) style.css  
   c) script.js
   d) README.txt (This file)

STEP 3: COPY CODE
   - Copy the code from each file and paste it into the respective files
   - Make sure to save each file with the correct extension (.html, .css, .js)

STEP 4: VERIFY
   - You should have these 4 files in your AbilityJobs folder:
     ✅ index.html
     ✅ style.css
     ✅ script.js
     ✅ README.txt

================================================================================
                          HOW TO RUN
================================================================================

METHOD 1: OPEN IN BROWSER
   1. Go to the AbilityJobs folder
   2. Double-click on "index.html"
   3. The website will open in your default web browser

METHOD 2: USING VS CODE (RECOMMENDED)
   1. Open Visual Studio Code
   2. Click "File" → "Open Folder"
   3. Select the AbilityJobs folder
   4. Right-click on "index.html" and select "Open with Live Server"
   5. The website will open in your browser

RECOMMENDED BROWSER: Google Chrome (Best Voice Assistant support)

================================================================================
                          FEATURES
================================================================================

1. AUTOMATIC SLIDESHOW:
   - The homepage has 3 slides that change automatically every 5 seconds
   - You can also click the dots at the bottom to change slides manually
   - Slides include: Welcome, Voice Search, and Inclusive Workplace

2. SMOOTH SCROLLING:
   - Click on any navigation link (Home, About, Features, Jobs, Contact)
   - The page smoothly scrolls down to that section

3. SMART JOB SEARCH:
   - Select your disability from the dropdown:
     * Blind / Visually Impaired → Activates Voice Mode
     * Deaf / Hearing Impaired → Shows text-based jobs
     * Physically Disabled → Shows accessible jobs
     * Other / No Disability → Shows all jobs
   
   - Type in the search box to filter jobs by title, company, or description
   - Click "Search Jobs" or press Enter to search

4. VOICE MODE (For Blind Users):
   - When you select "Blind" from dropdown:
     * Website turns to High Contrast Black/Yellow
     * Microphone button appears
     * Click the mic and speak to search jobs
     * Click on any job card to hear the full description
     * The website will speak job details aloud

5. MODERN CONTACT SECTION:
   - Beautiful contact info cards with icons
   - Interactive FAQ accordion
   - Enhanced contact form with subject selection
   - Hover effects and animations
   - Fully responsive design

6. MOBILE FRIENDLY:
   - Responsive design works on phones and tablets
   - Hamburger menu for mobile navigation

7. ACCESSIBILITY FEATURES:
   - WCAG compliant design
   - Keyboard navigation support
   - Screen reader friendly
   - High contrast mode for voice users

================================================================================
                          FILES DESCRIPTION
================================================================================

index.html
   - Contains all the HTML structure, sections, and content
   - This is the main webpage structure
   - Links to CSS and JavaScript files

style.css
   - Contains all the design, colors, and styling
   - Makes the website look professional
   - Includes animations and responsive design
   - Contains voice mode accessibility styles

script.js
   - Contains all the JavaScript code for interactivity
   - Handles the automatic slideshow
   - Manages job search and filtering
   - Controls voice search functionality
   - Handles mobile menu toggle
   - Manages contact form and FAQ accordion

README.txt
   - This file! Contains installation and usage instructions

================================================================================
                          TECHNICAL DETAILS
================================================================================

TECHNOLOGIES USED:
   - HTML5 (Structure)
   - CSS3 (Styling and Animations)
   - JavaScript (Interactivity)
   - Font Awesome (Icons)
   - Web Speech API (Voice Recognition and Text-to-Speech)

BROWSER COMPATIBILITY:
   - Google Chrome (Recommended - Full voice support)
   - Mozilla Firefox (Good - Voice support may vary)
   - Microsoft Edge (Good - Voice support may vary)
   - Safari (Limited - Voice support may not work)

================================================================================
                          CUSTOMIZATION
================================================================================

CHANGING COLORS:
   Open style.css and find the ":root" section at the top:
   
   :root {
       --primary-color: #2c3e50;    /* Change this for main color */
       --secondary-color: #27ae60;  /* Change this for accent color */
       --accent-color: #e67e22;     /* Change this for buttons */
   }

ADDING MORE JOBS:
   Open script.js and find the "jobs" array at the top:
   
   const jobs = [
       { title: "New Job", company: "Company Name", type: "Remote", 
         desc: "Job description", suitable: ["blind", "physical"] },
       // Add more jobs here
   ];

CHANGING SLIDES:
   Open index.html and find the "slideshow-container" section:
   
   <div class="slide">
       <div class="slide-content">
           <h1>Your Title</h1>
           <p>Your description</p>
           <a href="#jobs" class="btn-primary">Your Button</a>
       </div>
   </div>

ADDING MORE FAQS:
   Open index.html and find the "faq-grid" section:
   
   <div class="faq-item">
       <div class="faq