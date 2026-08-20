# Project Setup

## Project Context
This is an analysis report web document for CSS 2526 Members. It visualizes data regarding demographics, registration time series, and complete vs. incomplete registrations based on provided datasets. 
The data must be cleaned and PIIs (Name, Student ID, Emails) must be anonymized before presentation. The final output is a static webpage hosted via GitHub Pages for the Github CSS organization.

## Tech Stack
- **Data Analytics / Processing:** Python (pandas) for analytics, cleaning, and anonymizing the dataset.
- **Frontend:** React (with Vite). Recharts or Chart.js for data visualization.
- **Hosting:** GitHub Pages.

## Rules
- Never use `any` (if using TypeScript).
- Always write a unit test for new features.
- Never overwrite existing comments.
- **Security:** Do not expose any PII in the generated datasets or the frontend. Ensure data anonymization happens before being saved to the project directory.

## Workflow
Before writing code, read the active task brief in `docs/tasks/`.
