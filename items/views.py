from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ItemSerializer
from .models import Item

# Create your views here.
class ItemView(viewsets.ModelViewSet):
      serializer_class = ItemSerializer
      queryset = Item.objects.all()