from django.views import View
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
import json
from dotenv import load_dotenv
import os

load_dotenv()

class GetTripView(View):
    @csrf_exempt
    def get(self, request, id):
        if request.method == 'GET':
            try:
                print("ID: ", id)
                print(os.environ['MONGO_DB_URL'])

                client = MongoClient(os.environ['MONGO_DB_URL'])
                db = client['wutt']
                users_collection = db['trips']
                trip_data = users_collection.find_one({'trip-id': id})

                if not trip_data:
                    return JsonResponse({'error': 'Invalid id'}, status=401)
                else:
                    trip_data['_id'] = str(trip_data['_id'])
                    return JsonResponse({'response': trip_data}, status=200)
            except json.JSONDecodeError:
                return JsonResponse({'error': 'Invalid request body'}, status=400)

