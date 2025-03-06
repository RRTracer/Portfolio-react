import jwt
import datetime
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
import json
import hashlib
from dotenv import load_dotenv
import os

load_dotenv()

AUTH_TOKEN_BASE = os.getenv('AUTH_TOKEN_BASE')
secretKey = hashlib.sha256(AUTH_TOKEN_BASE.encode('utf-8')).hexdigest()

def token(user):
    payload = {
        'username': user.username,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=3),
    }
    authToken = jwt.encode(payload, secretKey, algorithm='HS256')
    return authToken

def verify_token(authToken):
    if authToken is None:
        return None
    try:
        payload = jwt.decode(authToken, secretKey, algorithms=['HS256'])
        return User.objects.filter(username=payload['username']).exists()
    except jwt.ExpiredSignatureError:
        return None
    except Exception as e:
        print(f"Error decoding token: {e}")
        return None


@csrf_exempt
def testToken(request):
    if request.method == 'GET':
        authToken = request.headers.get('authToken')
        if not authToken:
            return JsonResponse({'error': 'Missing authToken'}, status=400)
        is_valid = verify_token(authToken)
        if not is_valid:
            return JsonResponse({'error': 'Invalid or expired token'}, status=401)
        return JsonResponse({'message': 'Token is valid'}, status=200)
    return HttpResponse(status=405)

@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')
            hashedTestPwd = hashlib.sha512(password.encode('utf_8')).hexdigest()
            hashedStoragePwd = User.objects.get(username=username).password
            if hashedTestPwd == hashedStoragePwd:
                authToken = token(User.objects.get(username=username))
                return JsonResponse({'message': 'Login successful', 'authToken': authToken}, status=200)
            else:
                return JsonResponse({'error': 'Invalid credentials'}, status=401)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except AttributeError as e:
            return JsonResponse({'error': str(e)}, status=400)
    return HttpResponse(status=405)

@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')
            email = data.get('email')
            enterprise = data.get('enterprise')
            if User.objects.filter(username=username).exists():
                return JsonResponse({'error': 'Username already exists'}, status=409)
            if User.objects.filter(email=email).exists():
                return JsonResponse({'error': 'Email already exists'}, status=409)
            UserHashedPwd = hashlib.sha512(password.encode('utf_8')).hexdigest()
            user = User.objects.create(username=username, password=UserHashedPwd, email=email, enterprise=enterprise)
            authToken = token(user)
            return JsonResponse({
                'username': user.username,
                'email': user.email,
                'authToken': authToken,
                'message': 'Registration successful'}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except AttributeError as e:
            return JsonResponse({'error': str(e)}, status=400)
    return HttpResponse(status=405)
