
from django.urls import path
from app_criptografia import views

urlpatterns = [
    path('encrypt/', views.my_view, name='my_view'),
    path('decrypt/', views.testando, name='testando'),
]
