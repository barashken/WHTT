import openai
import json
from django.views import View
from django.http import JsonResponse
from pymongo import MongoClient
from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv
import os

load_dotenv()

class OpenAIView(View):
    @csrf_exempt    
    def post(self, request):
        if request.method == 'POST':
            try:
              body = json.loads(request.body)
              print(body)                
              response = self.search(body)
              response_data = response['choices'][0]['text']
              with open('response1.json', 'w') as file:
                json.dump(response_data, file)

              # with open('response1.json', 'r') as file:
              #   print("file")
              #   json_response = file.read()

              json_response = json.loads(response_data)
              client = MongoClient(os.environ['MONGO_DB_URL'])
              db = client['wutt']
              trips_collection = db['trips']
              num_of_trips = trips_collection.count_documents({})
              print(num_of_trips)

              print(trips_collection)
              print(json_response)

              trip_data = {
                'trip-id': num_of_trips + 1,
                'trip-data': json_response, 
                'trip-req': body
              }
              print(trip_data)
              trips_collection.insert_one(trip_data)

              return JsonResponse({'response': trip_data}, status=200)
            except Exception as e:
              return JsonResponse({'error': str(e)}, status=400)            
        else:
            return JsonResponse({'error': 'Method not allowed'}, status=405)


    def search(self, body_request):

        city = body_request.get("city")
        tripStyle = body_request.get("style")
        days = body_request.get("days")
        nature = body_request.get("nature")
        culture = body_request.get("culture")
        food = body_request.get("food")


        print (city)
        print (tripStyle)
        print (days)
        print (nature)
        print (culture)
        print (food)


        prompt = self.create_prompt(city, tripStyle, days, nature, culture, food)
        responseAPI = self.create_requset_to_api(prompt=prompt)
        
        return responseAPI

    def create_requset_to_api(self, prompt):
        print("requst to api")
        openai.api_key = os.environ['OPENAI_API_KEY']
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=prompt,
            temperature=0.7,
            max_tokens=3800,
            top_p=1.0,
            frequency_penalty=0.0,
            presence_penalty=0.0
        )

        print(response)
        return response


    def create_prompt(self, city, tripStyle, days, nature, culture, food):
        prompt = '''As a tour guide, build me a 3 days trip to {}
              Give me an answer in JSON format, divided by days, for each day order me by attractions(3-4),
              1 hotel and 2 restaurants, and give a short explanation and locations and also short summary for the day.
              I want the JSON to be no more than 800 words.
              The JSON looks like this:
              [{{
                "day": "Day 1",
                "attractions": [
                  {{
                    "name": "",
                    "location": "",
                    "description": ""
                  }},
                  ...
                ],
                "hotel": {{
                  "name": "",
                  "location": "",
                  "description": ""
                }},
                "restaurants": [
                  {{
                    "name": "",
                    "location": "",
                    "description": ""
                  }},
                  ...
                ],
                "summary": ""
              }}]
              an array of days, each day is an object that has an array of attractions, an hotel and an array of restaurants.
              the attractions, hotel and restaurants are objects thats have name, location and description.
              '''.format(city)

        print(prompt)
        return prompt

    def parse_response(self, response_str):
      # Split the response string by newline characters to separate each day's JSON data
      response_parts = response_str.split('\n')

      # Initialize an empty list to store the structured JSON data
      result_json = []

      # Iterate through each separated JSON data string
      for part in response_parts:
          try:
              # Parse the JSON data into a dictionary
              day_data = json.loads(part.strip())  # Strip any leading/trailing whitespaces
              result_json.append(day_data)
          except json.JSONDecodeError:
              # If there's an issue with parsing, you can handle it here
              print(f"Failed to parse JSON: {part}")

      # Now, result_json contains an array of days, each with attractions, a hotel, and restaurants
      print(result_json)
      return result_json