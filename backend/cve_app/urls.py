from django.urls import path
from .views import top_cve, GetAllCve

urlpatterns = [
    path('top5/', top_cve, name='top_cve'),
    path('all/', GetAllCve, name='top_cve'),
]
