from typing import Any
from django.db import models
import bcrypt

class MyUser(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Storing hashed passwords

    def __str__(self):
        return self.email

    def check_password(self, raw_password):
        return bcrypt.checkpw(raw_password.encode('utf-8'), self.password.encode('utf-8'))
    
    # class Meta:
    #     model = MyUser
    #     fields = ['first_name', 'last_name', 'email', 'password']

