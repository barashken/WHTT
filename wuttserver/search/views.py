import openai
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Set your OpenAI API key here
openai.api_key = 'YOUR_OPENAI_API_KEY'

@csrf_exempt  # To disable CSRF protection for this view. Use with caution.
def call_openai_api_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)  # Parse the JSON data from the request body
            response = search(data)
            # Customize the 'engine' and 'max_tokens' parameters based on your needs
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
        response_data = {'generated_text': response['choices'][0]['text']}
        with open('response.json', 'w') as file:
          file.write(response_data)

        return JsonResponse(response_data)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)


def search(body_request):
    country = body_request.get("country", "")
    city = body_request.get("city", "")
    dates = body_request.get("dates", "")
    days = dates #counting days from dates
    adults_num = body_request.get("adults_num", "")
    teens_num = body_request.get("teens_num", "")
    children_num = body_request.get("children_num", "")
    trip_vibe = body_request.get("trip_vibe", "")
    budget = body_request.get("budget", "")

    prompt = create_prompt(country, city, days, adults_num, teens_num, children_num, trip_vibe, budget)
    responseAPI = create_requset_to_api(prompt=prompt)
    
    return responseAPI

def create_requset_to_api(prompt):
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


def create_prompt(country, city, days, adults_num, teens_num, children_num, trip_vibe, budget):
    prompt = '''As a tour guide, build me a {} days trip to {}, {} for travelers {} adults, {} teens and {} childrens, the budget is {} for a {} trip. Give me an answer in JSON format, divided by days, for each day order me by attractions(3-4), 1 hotel and 2 restaurants, and give a short explanation and locations. I want the JSON to be no more than 800 words.
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
'''.format(days, city, country, adults_num, teens_num, children_num, budget, trip_vibe)

    return prompt


