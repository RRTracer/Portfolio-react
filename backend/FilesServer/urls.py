from django.urls import path
from .views import download_cv

urlpatterns = [
    path("download-cv/", download_cv, name="download_cv"),
]
