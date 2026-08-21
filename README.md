# CSS 2526 Analysis Report

This repository contains the analysis report web document for CSS 2526 Members. It is designed to visualize and present data regarding member demographics, registration time series, and complete vs. incomplete registrations based on provided datasets.

**Strategic Focus:** The web dashboard frames the generated data as historical context (last year's data) and provides actionable strategies for the upcoming recruitment year based on these insights.

**Important Security Note**: The data must be cleaned, and Personally Identifiable Information (PIIs like Name, Student ID, Emails) must be anonymized before presentation or saving the generated datasets to the public project directory.

## 🛠️ Tech Stack

- **Data Analytics / Processing:** Python (pandas) for analytics, cleaning, and anonymizing the dataset. Jupyter Notebooks for exploratory data analysis.
- **Frontend:** React (with Vite, TypeScript). Recharts for data visualization and Framer Motion for scroll animations. Glassmorphism CSS design system.
- **Hosting:** GitHub Pages via GitHub Actions.

## 📂 Project Structure

- `data/`: Raw datasets (Ensure no PII is committed to the repository).
- `data_clean/`: Cleaned and anonymized datasets ready for frontend consumption.
- `docs/`: Project documentation, AI commands, and task briefs.
- `frontend/`: The Vite React application containing the UI, components, and static JSON data (`frontend/public/data/results/`).
- `notebooks/`: Jupyter notebooks for data analysis (e.g., exploratory data analysis).
- `scripts/`: Python scripts for automated data cleaning and processing (`anonymize_data.py`, `generate_json_data.py`).

## 🚀 Getting Started

### Prerequisites
Make sure you have Python (for data processing) and Node.js (for the frontend) installed on your system.

### Setup

1. **Process the Data (Python)**
   Navigate to the project root and install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
   Run the data generation script to output the static JSON files to the frontend:
   ```bash
   python scripts/generate_json_data.py
   ```

2. **Run the Dashboard (React)**
   Navigate to the `frontend/` directory, install dependencies, and start the Vite dev server:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Open `http://localhost:5173` to view the animated dashboard.

## 🌐 Deploying to GitHub Pages

This project is configured to deploy automatically via GitHub Actions whenever code is pushed or merged into the `main` branch. 

**IMPORTANT INSTRUCTIONS FOR REPOSITORY ADMINS:**
To enable the automatic deployment on GitHub:
1. Navigate to your repository on GitHub and click the **Settings** tab.
2. In the left sidebar, click on **Pages**.
3. Under the **Build and deployment** section, look for the **Source** dropdown.
4. Change the source from "Deploy from a branch" to **"GitHub Actions"**.

Once this is set, any merge to `main` will automatically build and publish the React dashboard.

## 📝 Workflow and Rules
- **No `any` in TypeScript**: When building the frontend, strictly type all variables.
- **Unit Testing**: Always write a unit test for new features.
- **Preserve Comments**: Never overwrite existing comments in the codebase.
- **Task Briefs**: Before writing code, ensure you read the active task brief located in `docs/tasks/`.
