from django.urls import path
from . import views
app_name = 'webapp'

urlpatterns = [
    path('detail', views.detail, name='detail'),
]
