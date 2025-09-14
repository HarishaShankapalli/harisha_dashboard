Harisha Shankapalli Dashboard

The original Mazer template (MIT-licensed) has been forked and customized to:

Apply soft pastel gradients and subtle colors for better UI aesthetics.

Remove default Mazer branding/logo from the sidebar.

Add dynamic dashboard components powered by data.json.

Implement charts and tables using JSON data.

Ensure full responsiveness with Bootstrap 5.

Features Implemented
1. Dashboard Cards (Dynamic)

Profile Views, Followers, Following, Saved Posts

Cards dynamically populated (sample values or from JSON in future)

Includes progress bars with gradient fills for visual feedback

2. Profile Visit Chart

Bar chart showing profile visit trends

Populated dynamically using data.json

3. Regional Visits

Line charts for Europe, America, India, Indonesia

Trends displayed with sparkline area charts

Pastel colors for professional appearance

Labels above each chart for clarity

4. Visitors Profile

Donut chart showing Male vs Female distribution

Pastel colors for consistency with theme

5. Latest Comments & Messages

Avatar + comment bubbles for users

Rounded comment bubbles with soft backgrounds

Messages section with avatars, names, and usernames

6. UI/UX Customizations

Gradient welcome heading

Gradient icons in stats cards

Smooth hover effects for cards and buttons

Avatar glow effect

Rounded buttons and badges

Clean typography (Poppins font)

Fully responsive layout

Technologies Used

HTML5 / Nunjucks – templating engine

CSS3 / SCSS – custom styles and Bootstrap overrides

Bootstrap 5 – responsive layout & components

JavaScript (ES6) – dynamic chart rendering and JSON binding

ApexCharts – line, bar, and donut charts

Open index.html in your browser (no backend needed for static version).

Optionally, you can use a local dev server like VS Code Live Server.

Data Binding

All dynamic components use assets/static/data/data.json:

profileVisits → Profile Visit Bar Chart

regionalVisits → Regional Line Charts

visitorsProfile → Donut chart for Male/Female distribution

JavaScript (dashboard.js) reads this JSON and updates HTML elements dynamically.

Notes / Customizations

Removed Mazer logo from sidebar

Updated color theme to soft pastel gradients

Added hover effects for cards and buttons

Added gradient heading for welcome message

Rounded progress bars and avatars

Sparkline charts for regional trends

Labels added for clarity on regional charts

Fully integrated JSON-driven data, no hard-coded values

Responsive design ensured across all components

This README covers the full customization journey, from layout changes and CSS enhancements to chart implementation and JSON-driven dynamic content.