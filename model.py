
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import StandardScaler

df = pd.read_csv('kc_house_data.csv')

df['date'] = pd.to_datetime(df['date'], format='%Y%m%dT%H%M%S')

df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day'] = df['date'].dt.day


X = df.drop(['price', 'id', 'date'], axis=1) # Dropping 'id' as it is a unique identifier and 'date' as we've extracted features
y = df['price']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model = LinearRegression()

model.fit(X_train_scaled, y_train)

predictions = model.predict(X_test_scaled)

mse = mean_squared_error(y_test, predictions)
print(f'Mean Squared Error: {mse}')

import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler


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

predicted_price = predict_house_price('2040-02-17', -122.257, 47.5112)
print(f"The predicted price for the house is: ${predicted_price:,.2f}")
