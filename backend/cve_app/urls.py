from django.urls import path
from .views import top_cve

urlpatterns = [
    path('top5/', top_cve, name='top_cve'),
]