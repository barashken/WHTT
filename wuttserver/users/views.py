from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
import bcrypt

class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        user = User(username=username, email=email, password=hashed_password)
        user.save()

        return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)

