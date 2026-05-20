import random
import time

SIGNALS = [
    "Road flooded near G-10",
    "Heavy rainfall reported",
    "Traffic congestion increasing",
    "Heat emergency in low income area",
]

def generate_signal():

    return random.choice(SIGNALS)

while True:

    signal = generate_signal()

    print(signal)

    time.sleep(5)