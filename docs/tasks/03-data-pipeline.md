# Task 3: Python to React Data Pipeline (Static Site)

## Goal
Establish a static data pipeline to bridge the gap between Python analytics and the React frontend.

## Purpose
Because this project is hosted on GitHub Pages (a static file host), there is no backend server to process data on the fly or connect to a live database.

Instead, we use a **Pre-calculated Static JSON Approach**:
1. **Python** handles all the heavy lifting (data cleaning, anonymization, and exploratory data analysis).
2. The Python scripts export the final, summarized results as static JSON files.
3. **React** (the frontend) simply fetches these small JSON files and passes them directly to visualization libraries like Recharts.

## Workflow

1. **Raw Data:** The original CSV files containing PII are placed in `data/`. (These are `.gitignore`d).
2. **Anonymization:** `scripts/anonymize_data.py` cleans the data and saves it to `data_clean/`.
3. **Analysis & JSON Export:** `scripts/generate_json_data.py` reads the cleaned datasets and calculates statistics (counts, distributions, timelines). It exports these final numbers as `.json` files directly into the frontend's public directory: `public/data/results/`.
4. **Frontend Rendering:** When the React app loads, it fetches these static JSON files asynchronously (e.g., `fetch('/data/results/program_distribution.json')`) and displays the charts.

## Structure

```text
c:\Dev\Analysis_Report_CSS_2526\
├── data/                         # Raw, uncleaned data (ignored)
├── data_clean/                   # Cleaned, anonymized CSVs
├── scripts/
│   ├── anonymize_data.py         # Cleans data
│   └── generate_json_data.py     # Generates JSON summaries
└── public/
    └── data/
        └── results/              # Final JSON outputs for React
            ├── program_distribution.json
            ├── year_level_distribution.json
            ├── daily_registrations.json
            ├── registration_discrepancy.json
            ├── volunteer_interest.json
            └── payment_method_preferences.json
```

## Why this approach?
- **Speed:** The frontend doesn't need to compute anything, it just displays data.
- **Security:** No PII or raw datasets are ever exposed to the web frontend; only aggregated statistics are deployed.
- **Compatibility:** Perfect for GitHub Pages static hosting.
