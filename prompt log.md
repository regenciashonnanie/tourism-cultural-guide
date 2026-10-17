
# Standardized Prompt Documentation and Output Record

## Task #1: Sector Selection

**Objective:**
To select a project sector and identify a local challenge, target users, proposed project, and key features.

**Actual Output:**

- Sector: Tourism and Cultural Innovation
- Local Challenge: Tourists need an accessible and engaging way to discover local tourist attractions, cultural traditions, and historical landmarks.
- Target Users: Tourists, local residents, tourism students, and local cultural communities
- Proposed Project: Local Tourist Spots and Cultural Heritage of Marinduque
- Key Features: Interactive tourist map, cultural heritage information, local attraction guides, traditional food recommendations, and festival schedules

---

## Task #2: Zero-Shot Prompting

**Objective:**
Observe what Copilot generates from a basic prompt without examples.

**Exact Prompt:**

> Create a single-page frontend interface that helps tourists discover local tourist spots, explore cultural heritage, and learn about the traditions, festivals, historical landmarks, and natural attractions of Marinduque, Philippines.

**Copilot Output:**

Copilot created a responsive Marinduque tourism landing page in index.html. The webpage includes destination cards with category filters and a search feature, a culture and heritage section featuring the Moriones Festival and local traditions, and responsive navigation.

**Observation:**

The generated webpage provided information about Marinduque’s tourist attractions, but the content was not well-structured. Although some destinations had pictures, the images did not accurately represent their actual appearance in real life.

---

## Task #3 Improve: Anatomy of a Prompt

**Exact Prompt:**

> Act as a frontend web developer. Create a responsive single-page Local Tourist Spots and Cultural Heritage Guide for Marinduque, Philippines. Include an interactive directory of tourist attractions, information about historical landmarks, local traditions, cultural festivals such as the Moriones Festival, and the island's natural attractions across its municipalities. Add sections for recommended destinations, cultural heritage highlights, local delicacies, and responsible tourism reminders. Use semantic HTML, CSS, and vanilla JavaScript. Do not use external frameworks, backend services, or live data. Provide the required frontend files and implement interactive features such as clickable destination cards, category filters, and a checklist of places visitors want to explore. The interface must remain visually appealing, accessible, and readable on mobile screens, and all interactive elements must work through both mouse and keyboard interaction. Use a clean, tourism-inspired design that reflects Marinduque's island scenery, local culture, and Filipino heritage.

**Copilot Output:**

Copilot implemented a responsive Marinduque tourism guide using plain HTML, CSS, and vanilla JavaScript. The project consists of three files: index.html for the semantic page structure, styles.css for responsive styling and locally drawn island artwork, and app.js for the interactive features.

**Observation:**

The interface presents a visually appealing and organized guide to Marinduque’s tourist spots and cultural heritage, featuring destination cards, category filters, a personal travel list, and cultural highlights. However, I still need to test the interactive features, keyboard accessibility, and mobile responsiveness. Compared to the Zero-Shot result, this design includes a more complete list of places, has a well-structured layout, provides more detailed information, and is more organized overall.

---

## Task #4: Few-Shot and Role Assignment

### Experiment A: Few-Shot Prompting

**Objective:**

To improve the consistency and organization of tourist spot and cultural heritage information on the Local Tourist Spots and Cultural Heritage of Marinduque website by following the Item / Category / Description format.

**Exact Prompt:**

Create local tourist spot and cultural heritage information items using this format:

Example 1:

Item: Poctoy Beach

Category: Local Tourist Spot

Description: Visit the beautiful white-sand beach in Torrijos, Marinduque, known for its clear waters and relaxing seaside views.

Example 2:

Item: Moriones Festival

Category: Cultural Festival

Description: Experience Marinduque's famous Holy Week tradition of colorful Morion mask and community reenactments; check with local organizers for current schedules.

**Copilot Output:**

Copilot added a Local Guide Notes section to the webpage containing eight entries in the requested Item / Category / Description format. The entries included the provided Poctoy Beach and Moriones Festival description and additional tourist attractions and cultural heritage highlights.

The implementation updated index.html and styles.css. Copilot reported that all eight entries rendered correctly and that the section fit on a mobile-width screen without horizontal overflow.

**What Worked:**

The examples helped establish a consistent structure for presenting tourist attractions and cultural heritage information. The new section organized the eight entries into a readable format, and the mobile-width layout was reported to display without horizontal overflow.

**What Needs Improvement:**

The factual accuracy of the additional descriptions still needs to be checked. The section should also be tested at different screen sizes to confirm readability and consistent spacing.

**Verification:**

Inspect the Local Guide Notes section in the browser. Confirm that all eight entries display the correct item names, categories, and descriptions. Test the section at mobile and desktop widths and check for horizontal scrolling or overlapping content. Record the actual test results.

### Experiment B: Role Assignment

**Exact Prompt:**

> Act as a frontend accessibility reviewer. Examine the generated Local Tourist Spots and Cultural Heritage of Marinduque website. Identify problems involving HTML semantics, keyboard accessibility, labels, navigation, and visual clarity. Recommend targeted improvements to make the website more accessible, user-friendly, and informative without changing the project's scope.

**Output:**

Copilot reported that the website already had a good accessibility foundation, including semantic page landmarks, a skip link, labeled search and filter controls, visible keyboard focus styles, and a native modal dialog with a named close button.

---

## Task #5: Analyze Structured Reasoning and Refinement

**Objective:**

To evaluate the functionality, semantic HTML structure, and mobile usability of the Local Tourist Spots and Cultural Heritage of Marinduque website, identify important implementation issues, and apply and verify appropriate corrections.

**Exact Prompt:**

> Review my Local Tourist Spots and Cultural Heritage of Marinduque website. Check whether the interactive features work correctly, whether the HTML uses appropriate semantic elements, and whether the interface is usable on mobile screens. Identify the two most important implementation issues based on the provided code. Recommend the smallest appropriate corrections and explain how I can test them.

**Output:**

Copilot's accessibility review identified several areas for improvement. The highest-priority issue was visual clarity: some text was only 8–11px, and muted gray and orange text on light backgrounds could be difficult to read.

**Observation:**

The analysis identified specific accessibility and usability concerns instead of recommending a complete website redesign. The recommendations provided a practical order for making targeted corrections while preserving the website's existing features and layout.

**Selected Correction:**

Applied Improvement 1 in styles.css by increasing small text sizes and darkening muted metadata and accent text to improve readability.

**Verification Result:**

Verified the updated website at a mobile viewport width of 390px. Filter buttons, attraction descriptions, guide descriptions, and responsible-travel text now render at 12px, with no horizontal overflow.

This confirms the reported text-size and layout checks at the tested viewport. Color contrast should still be measured with a contrast checker to confirm that the relevant text meets WCAG contrast requirements.

**What Worked:**

The targeted CSS changes improved text readability while maintaining the existing page layout. The website remained usable at the tested mobile width without horizontal scrolling.

**What Needs Improvement:**

The other recommendations remain to be addressed or verified, particularly directory semantics, screen-reader announcements for checklist updates, and keyboard focus management in mobile navigation.
