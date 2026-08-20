# Task: CSS 2526 Analysis Report Web Document

## Goal

Create an analysis report web document for CSS 2526 Members.

## Requirements

1. **Data Cleaning & Anonymization:**
   - Clean the provided dataset.
   - Anonymize PIIs: Name (First, Last, Middle), Student ID, Emails.
   - Save the cleaned/anonymized dataset for web consumption.

2. **Web Document Features:**
   - Demographics visualization.
   - Time Series of Registration.
   - Who Registered in the Forms not in Actual List (Complete vs Incomplete Registration).
3. **Deliverables:**
   - Cleaned & anonymized dataset/s.
   - Webpage hosted via Github Pages.
   - Upload the dataset and web document to the Github CSS organization.

## Context

**Data Location:** The raw datasets have been provided locally in the `data/` directory. Note: These raw files contain PII and MUST NOT be committed to version control.

**Transparency Note (Data Anonymization):** Before proceeding with any further analytics or web development, all datasets were processed through a Python script (`scripts/anonymize_data.py`). This script aggressively drops all Personal Identifiable Information (Names, Student IDs, Emails, Receipt Screenshots) from the raw data. To preserve data integrity while ensuring maximum privacy, the `CSS Member ID` (which originally contained surnames) is securely hashed into a randomized 8-character string. The fully anonymized datasets are exported to `data_clean/` for safe use in the project repository.


