from django.urls import path, include
from rest_framework import routers
from items import views 
#versiones de api

router = routers.DefaultRouter()
router.register(r'items',  views.ItemView, 'items')

urlpatterns = [
    path('api/v1/', include(router.urls))
]
