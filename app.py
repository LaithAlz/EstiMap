

import pandas as pd
from joblib import load
import sys
import json


model = load('linear_regression_model.joblib')
scaler = load('scaler.joblib')

def predict_house_price(date, other):
    date = pd.to_datetime(date, dayfirst=True)

    year = date.year
    month = date.month
    day = date.day

    new_data = {
        'bedrooms': other['bedrooms'],
        'bathrooms': other['bathrooms'],
        'sqft_living': other['sqft_living'],
        'sqft_lot': other['sqft_lot'],
        'floors': other['floors'],
        'waterfront': other['waterfront'],
        'view': other['view'],
        'condition': other['condition'],
        'grade': other['grade'],
        'sqft_above': other['sqft_above'],
        'sqft_basement': other['sqft_basement'],
        'yr_built': other['yr_built'],
        'yr_renovated': other['yr_renovated'],
        'zipcode': other['zipcode'],
        'lat': other['lat'],
        'long': other['long'],
        'sqft_living15': other['sqft_living15'],
        'sqft_lot15': other['sqft_lot15'],
        'year': year,
        'month': month,
        'day': day,
    }


    new_data_df = pd.DataFrame([new_data])

    new_data_scaled = scaler.transform(new_data_df)

    predicted_price = model.predict(new_data_scaled)


    return predicted_price[0]

if __name__ == '__main__':
    input_data = sys.argv[1]
    parsed_data = json.loads(input_data)

    date = parsed_data.get('date')
    other = parsed_data.get('selected')

    prediction = predict_house_price(date, other)
    print(prediction)