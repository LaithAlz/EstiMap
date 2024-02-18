from flask import Flask, request, jsonify
import pandas as pd
from joblib import load


app = Flask(__name__)

# Load the model and scaler
model = load('linear_regression_model.joblib')
scaler = load('scaler.joblib')

def predict_house_price(date, longitude, latitude):

    date = pd.to_datetime(date)
    year = date.year
    month = date.month
    day = date.day

    new_data = {
        'bedrooms': 3,
        'bathrooms': 1,
        'sqft_living': 1180,
        'sqft_lot': 5650,
        'floors': 1,
        'waterfront': 0,
        'view': 0,
        'condition': 3,
        'grade': 7,
        'sqft_above': 1180,
        'sqft_basement': 0,
        'yr_built': 1955,
        'yr_renovated': 0,
        'zipcode': 98178,
        'lat': latitude,
        'long': longitude,
        'sqft_living15': 1340,
        'sqft_lot15': 5650,
        'year': year,
        'month': month,
        'day': day,
    }

    new_data_df = pd.DataFrame([new_data])

    new_data_scaled = scaler.transform(new_data_df)

    predicted_price = model.predict(new_data_scaled)

    return predicted_price[0]

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    predicted_price = predict_house_price(data['date'], data['long'], data['lat'])
    return jsonify({'predicted_price': predicted_price})

if __name__ == '__main__':
    app.run(debug=True)
