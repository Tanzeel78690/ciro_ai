import requests


class RealWeatherService:

    @staticmethod
    def fetch_weather_signal(
        latitude=24.8607,
        longitude=67.0011,
        location_name="Karachi"
    ):
        url = (
            "https://api.open-meteo.com/v1/forecast"
            f"?latitude={latitude}"
            f"&longitude={longitude}"
            "&current=temperature_2m,precipitation,rain,wind_speed_10m"
        )

        try:
            response = requests.get(url, timeout=10)
            data = response.json()
            current = data.get("current", {})

            rain = current.get("rain", 0)
            precipitation = current.get("precipitation", 0)
            temperature = current.get("temperature_2m", 0)
            wind_speed = current.get("wind_speed_10m", 0)

            signals = []

            if rain > 2 or precipitation > 2:
                signals.append({
                    "content": f"Heavy rainfall detected in {location_name}. Rain: {rain}mm, precipitation: {precipitation}mm",
                    "credibility_score": 0.95,
                    "urgency_score": 0.85,
                    "latitude": latitude,
                    "longitude": longitude,
                    "source_type": "weather_api",
                })

            if temperature >= 38:
                signals.append({
                    "content": f"Extreme heat detected in {location_name}. Temperature: {temperature}°C",
                    "credibility_score": 0.95,
                    "urgency_score": 0.9,
                    "latitude": latitude,
                    "longitude": longitude,
                    "source_type": "weather_api",
                })

            if wind_speed >= 45:
                signals.append({
                    "content": f"High wind risk detected in {location_name}. Wind speed: {wind_speed} km/h",
                    "credibility_score": 0.9,
                    "urgency_score": 0.75,
                    "latitude": latitude,
                    "longitude": longitude,
                    "source_type": "weather_api",
                })

            return signals

        except Exception as e:
            print(f"Weather API failed: {str(e)}")
            return []