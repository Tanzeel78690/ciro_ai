import random


class LocationService:

    LOCATIONS = [

        {
            "name": "G-10 Islamabad",
            "lat": 33.6844,
            "lng": 73.0479
        },

        {
            "name": "F-8 Islamabad",
            "lat": 33.7070,
            "lng": 73.0511
        },

        {
            "name": "Blue Area Islamabad",
            "lat": 33.7159,
            "lng": 73.0601
        },

        {
            "name": "Rawalpindi Saddar",
            "lat": 33.5973,
            "lng": 73.0479
        },

        {
            "name": "DHA Lahore",
            "lat": 31.4697,
            "lng": 74.2728
        },

        {
            "name": "Clifton Karachi",
            "lat": 24.8138,
            "lng": 67.0305
        },

        {
            "name": "Gulshan Karachi",
            "lat": 24.9200,
            "lng": 67.0900
        }
    ]

    @staticmethod
    def generate_location():

        return random.choice(
            LocationService.LOCATIONS
        )