Siam Saroar - 1170 Assignment 3

Purpose

This website serves a rofessional personal portfolio designed for my job and internship applications.
It includes a homepage, projects page, and contact page.It builds on Assignment 1 and 2.

The site was improved to meet Assignment 3 requirements by adding stronger CSS styling, responsive layouts for desktop, 
tablet, and mobile, a table, a photo gallery, a form, flexbox, grid, and accessibility features.


1. Purpose of the Website

The website includes three pages:

index.html – homepage with introduction and interactive features
projects.html – examples of projects and user interaction
contact.html – contact form with event handling


2. File Structure
assignment3/
│
├── index.html
├── projects.html
├── contact.html
├── style.css
├── script.js
├── README.txt
│
└── assets/
    └── images/
        ├── favicon.png
        ├── profile.jpg
        ├── project1.jpg
        ├── project2.jpg
        ├── team.jpg
        ├── report.jpg
        └── growth.jpg


3. Relative Paths Used

All files use relative paths only.

Examples:
CSS file:
href="style.css"

JavaScript file:
src="script.js"

Images:
src="assets/images/profile.svg"

Favicon:
href="assets/images/favicon.svg"

Navigation:
href="projects.html"

4. HTML Structure

Each page uses semantic HTML structure.

<header> for title and navigation
<nav> for menu links
<main> for the main content
<section> for grouped content
<aside> for secondary information on the contact page
<footer> for the closing section

Additional required HTML elements included in the website:
Three webpages
Navigation menu
Table
Text area
Photo gallery
Hero image
Lists
Form
Images with alt text

5. CSS Features

The CSS controls layout, colour, spacing, image styling, links, tables, lists, responsiveness, and themes.

The following assignment requirements are included:
Three styled webpages
Styled navigation
Three styled images with border, padding, and margin treatment
Styled URLs
Styled ordered and unordered lists
Styled table
Responsive design for desktop, tablet, and mobile
Flexbox layout
Grid layout
Form styling
Theme classes for JavaScript interaction
Focus styles for keyboard accessibility

6. Required CSS Selectors and Their Locations

Universal selector
Location: style.css near the top
Selector used: *
Purpose: applies box-sizing to all elements.

Multiple selector
Location: style.css near the heading styles
Selector used: h1, h2, h3
Purpose: gives all headings a common line height, colour, and spacing.

Child selector
Location: style.css in the header/footer section
Selector used: .site-header > .container and .site-footer > .container
Purpose: styles direct child containers inside header and footer.

Sibling selector
Location: style.css in the card section
Selector used: .card ~ .card
Purpose: applies a visual offset to cards that follow another card.

Adjacent sibling selector
Location: style.css below the card styles
Selector used: h2 + p
Purpose: styles the first paragraph directly after each h2.

Attribute selector
Location: style.css in the link styles
Selector used: a[href$=".html"]
Purpose: styles links that go to local HTML pages.

Pseudo-element selector
Location: style.css after heading rules
Selector used: h2::after
Purpose: adds a decorative accent line below each h2 heading.

7. JavaScript Functions

The JavaScript file adds interactivity to the website.

Function 1: setupGreeting
Purpose: changes the homepage greeting based on the current time.
Input: system time
Output: updates the text inside the greeting element.
Example: morning shows “Good morning”.

Function 2: setupNotification
Purpose: shows a welcome alert when the button is clicked.
Input: button click
Output: alert message.
Example: clicking the button shows “Welcome to my professional portfolio website.”

Function 3: setupThemeButtons
Purpose: changes the body class to a blue, light, or dark theme.
Input: theme button click
Output: different colour theme appears on the page.
Example: clicking Dark Theme applies the theme-dark class.

Function 4: loadSavedTheme
Purpose: Loads the previously selected colour theme 
Input: Value stored in localStorage under the key "selectedTheme"
Output:Applies the saved CSS class to the <body> element

Function 5: setupContactForm
Purpose: handles contact form submission with an event listener.
Input: form submission and user name entry
Output: shows a message without reloading the page.
Example: “Thank you, Siam. Your message has been received.”

Function 6: setupTopicChecker
Purpose: checks the entered project topic and gives a custom response.
Input: text entered by the user and button click
Output: a matching response message.
Example: entering “automation” returns a message about efficiency.

8. Accessibility Features

The website was designed with accessibility in mind.

A skip link is included for keyboard users.
All images include descriptive alt text.
Form controls use labels.
Colour contrast is strong for readability.
Keyboard focus styles are visible.
The table uses caption, thead, tbody, and scope attributes.
Navigation remains available on all screen sizes.
Semantic HTML elements are used throughout.
No empty links or absolute links are used.

9. References (Images/Media)

Favicon and Profile Image

Animation Magazine. 2025. Nickelodeon to celebrate Avatar: The Last Airbender’s 20th anniversary at Comic-Con. Retrieved February 24, 2026 from
https://www.animationmagazine.net/2025/07/nickelodeon-to-celebrate-avatar-the-last-airbenders-20th-anniversary-at-comic-con/

Usage: Used as the website favicon and profile.
Local path: /images/favicon.png, /images/profile

Project Images

Report Image
i-net software. n.d. i-net Clear Reports Features. Retrieved April 2, 2026 from
https://www.inetsoftware.de/en/i-net-clear-reports/features/

Usage: Used as a visual representation for reporting/dashboard project.
Local path: /assets/images/report.jpg

Growth Image
SlideTeam. n.d. Forecasted Financial Data Analytics Growth Trends. Retrieved April 2, 2026 from
https://www.slideteam.net/forecasted-financial-data-analytics-growth-trends.html

Usage: Used to represent data growth and analytics trends in project section.
Local path: /assets/images/growth.jpg

Team Image
StockCake. n.d. Team Brainstorming Session. Retrieved April 2, 2026 from
https://stockcake.com/i/team-brainstorming-session_125624_13821

Usage: Used in the website to represent collaboration and teamwork concepts.
Local path: /assets/images/team.jpg 
