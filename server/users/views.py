from django.views import View
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
import bcrypt
import json
import jwt
from datetime import datetime, timedelta

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

                user_data = {
                    'first_name': first_name,
                    'last_name': last_name,
                    'email': email,
                    'password': hashed_password.decode('utf-8'),  # Store as a string
                }
                users_collection.insert_one(user_data)

                return JsonResponse({'message': 'Registration successful'}, status=200)
            except json.JSONDecodeError:
                return JsonResponse({'error': 'Invalid request body'}, status=400)
        
        return JsonResponse({'error': 'Invalid request method'}, status=405)


class LoginView(View):
    @csrf_exempt
    def post(self, request):
        if request.method == 'POST':
            try:
                body = json.loads(request.body)
                email = body.get('email')
                password = body.get('password')

                # Retrieve user data from MongoDB
                client = MongoClient('mongodb://localhost:27017/')
                db = client['wutt']
                users_collection = db['users']
                user_data = users_collection.find_one({'email': email})

                if not user_data:
                    return JsonResponse({'error': 'Invalid email'}, status=401)

                stored_password = user_data['password'].encode('utf-8')
                if bcrypt.checkpw(password.encode('utf-8'), stored_password):
                    # Generate JWT token
                    payload = {
                        'user_id': str(user_data['_id']),
                        'exp': datetime.utcnow() + timedelta(days=1)  # Token expiration time
                    }
                    token = jwt.encode(payload, 'your-secret-key', algorithm='HS256')

                    return JsonResponse({'token': token}, status=200)
                else:
                    return JsonResponse({'error': 'Invalid password'}, status=401)

            except json.JSONDecodeError:
                return JsonResponse({'error': 'Invalid request body'}, status=400)

        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
class LogoutView(View):
    @csrf_exempt
    def post(self, request):
        if request.method == 'POST':
            return JsonResponse({'message': 'Logout successful'}, status=200)

        return JsonResponse({'error': 'Invalid request method'}, status=405)
