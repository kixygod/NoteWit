from django.urls import path
# from django.conf.urls import url
from . import views

urlpatterns = [
    path('users/', views.UserCreate.as_view(), name='account-create'),
    # path('api/users/', views.UserCreate.as_view(), name='account-create'),
]