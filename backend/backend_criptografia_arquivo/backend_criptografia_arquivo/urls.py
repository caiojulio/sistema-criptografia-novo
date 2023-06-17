
from django.urls import path
from app_criptografia import views

urlpatterns = [
    path('', views.my_view, name='my_view' ),
]
