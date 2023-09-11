import openai
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class OpenAIView(APIView):
    # Set your OpenAI API key here
    openai.api_key = 'YOUR_OPENAI_API_KEY'

    @csrf_exempt  # To disable CSRF protection for this view. Use with caution.
    def call_openai_api_view(self, request):
        if request.method == 'POST':
            try:
                data = json.loads(request.body)  # Parse the JSON data from the request body
                response = self.search(data)
                # Customize the 'engine' and 'max_tokens' parameters based on your needs
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
            response_data = {'generated_text': response['choices'][0]['text']}
            with open('response.json', 'w') as file:
              file.write(response_data)

            return Response({'response': response_data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


    def search(self, body_request):

        city = body_request.get("city", "")
        tripStyle = body_request.get("tripStyle", "")
        days = body_request.get("days", "")
        nature = body_request.get("nature", "")
        culture = body_request.get("culture", "")
        food = body_request.get("chifoodldren_num", "")


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
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=prompt,
            temperature=0.7,
            max_tokens=3800,
            top_p=1.0,
            frequency_penalty=0.0,
            presence_penalty=0.0
        )

        return response


    def create_prompt(city, tripStyle, days, nature, culture, food):
        

        prompt = '''As a tour guide, build me a {} days trip to {}
              Give me an answer in JSON format, divided by days, for each day order me by attractions(3-4),
              1 hotel and 2 restaurants, and give a short explanation and locations and also short summary for the day.
              I want the JSON to be no more than 800 words.
              The JSON looks like this:
              {{
                "day": "Day1",
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
                ]
              }}
              '''.format(days,city,)

        return prompt


