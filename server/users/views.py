from django.views import View
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
from .models import MyUser
import bcrypt
import json

class RegisterView(View):
    @csrf_exempt
    def post(self, request):
        if request.method == 'POST':
            try:
                body = json.loads(request.body)
                print(body)
                first_name = body.get('firstName')
                last_name = body.get('lastName')
                email = body.get('email')
                password = body.get('password')

                hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

                client = MongoClient('mongodb://localhost:27017/')
                db = client['wutt']
                users_collection = db['users']

                if users_collection.find_one({'email': email}):  # If email already exists
                    return JsonResponse({'error': 'Email already exists'}, status=400)

                # if MyUser.objects.filter(email=email).exists():
                #     return JsonResponse({'error': 'Email already exists'}, status=400)

                user_data = {
                    'first_name': first_name,
                    'last_name': last_name,
                    'email': email,
                    'password': hashed_password.decode('utf-8'),  # Store as a string
                }
                users_collection.insert_one(user_data)

                # user = MyUser(first_name=first_name, last_name=last_name, email=email, password=hashed_password)
                # user.save()

                # return redirect(reverse('login'))

                return JsonResponse({'message': 'Registration successful'}, status=200)
            except json.JSONDecodeError:
                return JsonResponse({'error': 'Invalid request body'}, status=400)
        
        return JsonResponse({'error': 'Invalid request method'}, status=405)

