# Task 5: Historical Context & Strategic Insights Update

## Goal
Update the analytical labels and text insights across the React dashboard to correctly frame the datasets as historical (last year's data) rather than current data.

## Purpose
The generated JSON data represents the previous academic year's recruitment numbers. Presenting it as "current" data can be misleading. By reframing the insights, we shift the dashboard's purpose from merely "reporting what is happening" to "strategizing for what we should do this year based on what happened last year."

## Implementation Details
1. **Chart Labels Formatting:** Updated the `Year Level Distribution` pie chart in `Demographics.tsx`. Raw numeric indices (`1.0`, `2.0`) from the JSON were dynamically mapped in React to human-readable labels (`1st Year`, `2nd Year`, etc.), making the tooltip clear and concise.
2. **Re-framing Insights:** Iterated through all 4 dashboard components (`Demographics`, `TimeSeries`, `Discrepancies`, `Operations`) and modified the text blocks:
   - Changed the header `Insight` to `Insight (Last Year)`.
   - Changed the header `Actionable Meaning` to `Strategy for This Year`.
3. **Content Re-write:** Rewrote the body paragraphs for every single insight block to explicitly mention "last year" and formulate concrete recommendations for the upcoming recruitment period (e.g., advising the Treasury to preemptively prepare digital payment setups based on last year's 50/50 split).

## Deliverables
- Clearer data visualizations via mapped labels.
- A forward-looking, strategically focused analytics dashboard.
