from django.urls import path
from .views import login, register, testToken

urlpatterns = [
    #  User Api url
    path('auth/signin/', login, name='login'),
    path('auth/signup/', register, name='register'),
    path('auth/testToken/', testToken, name='testToken'),
]
