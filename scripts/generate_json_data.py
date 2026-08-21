import os
import pandas as pd
import json

def generate_json_data():
    print("Generating JSON data for frontend...")
    
    # Create the output directory
    output_dir = '../frontend/public/data/results'
    os.makedirs(output_dir, exist_ok=True)
    
    # Load cleaned datasets
    try:
        akwe_df = pd.read_csv('../data_clean/akwe_registrants_clean.csv')
        form_df = pd.read_csv('../data_clean/membership_form_clean.csv')
        actual_list_df = pd.read_csv('../data_clean/css_members_clean.csv')
    except FileNotFoundError as e:
        print(f"Error loading datasets: {e}. Make sure you are running from the scripts/ directory and data_clean/ exists.")
        return

    # 1. Program Distribution
    if 'Program' in form_df.columns:
        program_dist = form_df['Program'].value_counts().reset_index()
        program_dist.columns = ['program', 'count']
        program_dist.to_json(f'{output_dir}/program_distribution.json', orient='records')
        print(f"Generated {output_dir}/program_distribution.json")

    # 2. Year Level Distribution
    if 'Year Level' in form_df.columns:
        year_dist = form_df['Year Level'].value_counts().reset_index()
        year_dist.columns = ['year_level', 'count']
        year_dist.to_json(f'{output_dir}/year_level_distribution.json', orient='records')
        print(f"Generated {output_dir}/year_level_distribution.json")

    # 3. Daily Registrations (Time Series)
    if 'Completion time' in form_df.columns:
        form_df['Completion time'] = pd.to_datetime(form_df['Completion time'], errors='coerce')
        daily_reg = form_df['Completion time'].dt.date.value_counts().sort_index().reset_index()
        daily_reg.columns = ['date', 'count']
        daily_reg['date'] = daily_reg['date'].astype(str) # convert dates to strings for JSON
        daily_reg.to_json(f'{output_dir}/daily_registrations.json', orient='records')
        print(f"Generated {output_dir}/daily_registrations.json")

    # 4. Discrepancy Overview
    discrepancy_data = [
        {"category": "Forms (AKWE + Main)", "count": len(akwe_df) + len(form_df)},
        {"category": "Actual List", "count": len(actual_list_df)},
        {"category": "Discrepancy", "count": (len(akwe_df) + len(form_df)) - len(actual_list_df)}
    ]
    with open(f'{output_dir}/registration_discrepancy.json', 'w') as f:
        json.dump(discrepancy_data, f, indent=4)
    print(f"Generated {output_dir}/registration_discrepancy.json")

    # 5. Volunteer Interest
    if 'Do you want to be a CSS Volunteer?' in akwe_df.columns:
        vol = akwe_df['Do you want to be a CSS Volunteer?'].value_counts().reset_index()
        vol.columns = ['response', 'count']
        vol.to_json(f'{output_dir}/volunteer_interest.json', orient='records')
        print(f"Generated {output_dir}/volunteer_interest.json")

    # 6. Payment Method Preferences
    if 'Payment Method' in form_df.columns:
        pay = form_df['Payment Method'].value_counts().reset_index()
        pay.columns = ['method', 'count']
        pay.to_json(f'{output_dir}/payment_method_preferences.json', orient='records')
        print(f"Generated {output_dir}/payment_method_preferences.json")

if __name__ == "__main__":
    generate_json_data()
