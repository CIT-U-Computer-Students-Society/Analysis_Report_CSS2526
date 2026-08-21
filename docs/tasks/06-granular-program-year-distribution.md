# Task 6: Granular Program-Year Distribution

## Goal
Implement a granular data distribution to correlate the student's program enrolled (e.g., Computer Science, Information Technology) with their specific year level (e.g., 1, 2, 3) to create more targeted insights for the dashboard.

## Purpose
While the dashboard previously showed the distribution of Programs and the distribution of Year Levels separately, it lacked the cross-referenced depth necessary to understand exactly which year levels of which programs were driving the demographic metrics. By introducing this granular breakdown (e.g., BSCS-1 vs BSIT-1), the organization can target their recruitment and event planning strategies much more effectively. 

## Implementation Details
1. **Data Pipeline Update (`scripts/generate_json_data.py`):**
   - Mapped full program names ("Computer Science", "Information Technology") to standard acronyms ("BSCS", "BSIT").
   - Cast the `Year Level` column from floats/strings to integers and combined it with the program acronym to form a `Program_Year` key (e.g., `BSIT-1`).
   - Grouped, counted, and exported this data to a new static JSON file: `frontend/public/data/results/granular_program_year_distribution.json`.
2. **Frontend Component Update (`frontend/src/components/Demographics.tsx`):**
   - Added state management to fetch and hold the `granularData`.
   - Implemented a `Recharts` `BarChart` to visualize this new dataset below the original program and year-level distribution charts.
3. **Strategic Insights Re-framing:**
   - Updated the textual "Insight (Last Year)" block to explicitly mention that BSIT-1 is the largest single cohort driving the 1st-year demographics.
   - Updated the "Strategy for This Year" block to recommend tailoring beginner-friendly curriculum specifically for BSIT freshmen, while running targeted campaigns for upperclassmen CS students.

## Deliverables
- A new `granular_program_year_distribution.json` data file.
- A new Bar Chart visualization in the Demographics dashboard section.
- Refined strategic textual insights based on the new data granularity.
