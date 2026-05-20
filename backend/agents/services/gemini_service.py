# #             response = cls.model.generate_content( # type: ignore
# #                 prompt
# #             )

import os
import google.generativeai as genai

from dotenv import load_dotenv

# =====================================
# LOAD ENV VARIABLES
# =====================================

load_dotenv()

# =====================================
# GET GEMINI API KEY
# =====================================

GEMINI_API_KEY = os.getenv(
    "GEMINI_API_KEY"
)

# =====================================
# CONFIGURE GEMINI
# =====================================

if GEMINI_API_KEY:

    genai.configure(
        api_key=GEMINI_API_KEY
    )

else:

    print(
        "Gemini fallback triggered: "
        "GEMINI_API_KEY missing"
    )


class GeminiService:

    @staticmethod
    def generate(prompt):

        try:

            if not GEMINI_API_KEY:

                return None

            model = genai.GenerativeModel(
                "gemini-1.5-flash"
            )

            response = model.generate_content(
                prompt
            )

            return response.text

        except Exception as e:

            print(
                f"Gemini generation failed: {e}"
            )

            return None