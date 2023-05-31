import openai


def search(request):
    openai.api_key = "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"

    country = request.POST.get("country", "")
    city = request.POST.get("city", "")
    dates = request.POST.get("dates", "")
    days = dates #counting days from dates
    adults_num = request.POST.get("adults_num", "")
    teens_num = request.POST.get("teens_num", "")
    children_num = request.POST.get("children_num", "")
    trip_vibe = request.POST.get("trip_vibe", "")
    budget = request.POST.get("budget", "")

    prompt = create_prompt(country, city, days, adults_num, teens_num, children_num, trip_vibe, budget)
    responseAPI = create_requset_to_api(prompt=prompt)
    with open('response.json', 'w') as file:
        file.write(responseAPI)

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

    return response.choices[0].text.strip()


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


