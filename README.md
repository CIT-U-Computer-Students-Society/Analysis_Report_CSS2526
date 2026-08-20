# CSS 2526 Analysis Report

This repository contains the analysis report web document for CSS 2526 Members. It is designed to visualize and present data regarding member demographics, registration time series, and complete vs. incomplete registrations based on provided datasets.

**Important Security Note**: The data must be cleaned, and Personally Identifiable Information (PIIs like Name, Student ID, Emails) must be anonymized before presentation or saving the generated datasets to the public project directory.

## 🛠️ Tech Stack

- **Data Analytics / Processing:** Python (pandas) for analytics, cleaning, and anonymizing the dataset. Jupyter Notebooks for exploratory data analysis.
- **Frontend (TBD):** React (with Vite). Recharts or Chart.js for data visualization.
- **Hosting:** GitHub Pages.

## 📂 Project Structure

- `data/`: Raw datasets (Ensure no PII is committed to the repository).
- `data_clean/`: Cleaned and anonymized datasets ready for frontend consumption.
- `docs/`: Project documentation, AI commands, and task briefs.
- `notebooks/`: Jupyter notebooks for data analysis (e.g., exploratory data analysis).
- `scripts/`: Python scripts for automated data cleaning and processing.

## 🚀 Getting Started

### Prerequisites
Make sure you have Python installed on your system.

### Setup

1. **Install Python Dependencies**
   Navigate to the project root and install the required Python packages for data analysis:
   ```bash
   pip install -r requirements.txt
   ```

2. **Run Jupyter Notebooks**
   To explore the data analysis and view the insights, launch Jupyter Notebook:
   ```bash
   jupyter notebook
   ```
   This will open the Jupyter interface in your browser, where you can navigate to the `notebooks/` directory and open the analysis files.

## 📝 Workflow and Rules
- **No `any` in TypeScript**: When building the frontend, strictly type all variables.
- **Unit Testing**: Always write a unit test for new features.
- **Preserve Comments**: Never overwrite existing comments in the codebase.
- **Task Briefs**: Before writing code, ensure you read the active task brief located in `docs/tasks/`.
