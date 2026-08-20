import os
import pandas as pd
import hashlib

# Create output directory
os.makedirs('data_clean', exist_ok=True)

# Process the data
files_to_clean = [
    {
        'input': 'data/CIT-U CSS 2526 Membership Form for AKWE REGISTRANTS(1-98).csv',
        'output': 'data_clean/akwe_registrants_clean.csv',
        'drop_cols': ['Email', 'Name', 'Student ID Number (e.g. 12-3456-789 or 1234-56789)', 'First Name', 'Middle Name', 'Last Name', 'Personal Email', 'Institutional Email (@cit.edu)', 'Receipt Screenshot']
    },
    {
        'input': 'data/CIT-U CSS 2526 Membership Form(1-139).csv',
        'output': 'data_clean/membership_form_clean.csv',
        'drop_cols': ['Email', 'Name', 'Student ID Number (e.g. 12-3456-789 or 1234-56789)', 'First Name', 'Middle Name', 'Last Name', 'Personal Email', 'Institutional Email (@cit.edu)', 'Receipt Screenshot']
    },
    {
        'input': 'data/CSS Members 2526 (6).csv',
        'output': 'data_clean/css_members_clean.csv',
        'drop_cols': ['First Name', 'Middle Name', 'Last Name', 'Personal Email', 'Email', 'ID Number']
    }
]

for f in files_to_clean:
    df = pd.read_csv(f['input'], encoding='latin1')
    df = df.drop(columns=[col for col in f['drop_cols'] if col in df.columns], errors='ignore')
    
    # Hash the CSS Member ID to fully anonymize it if it exists
    if 'CSS Member ID' in df.columns:
        df['CSS Member ID'] = df['CSS Member ID'].apply(lambda x: hashlib.md5(str(x).encode()).hexdigest()[:8] if pd.notnull(x) else x)
        
    # Also handle the column if it was named 'ï»¿CSS Member ID' due to BOM
    for col in df.columns:
        if 'CSS Member ID' in col and col != 'CSS Member ID':
            df[col] = df[col].apply(lambda x: hashlib.md5(str(x).encode()).hexdigest()[:8] if pd.notnull(x) else x)
            
    df.to_csv(f['output'], index=False)
    print(f"Processed {f['input']} -> {f['output']}")
