from django.urls import path
from .views import *

urlpatterns = [
    path('', store, name='store'),
    path('cart/', cart, name='cart'),
    path('checkout/', checkout, name='checkout'),
    path('update-cart/', updateCart, name='update-cart'),
    path('process-order/', processOrder, name='process-order'),
]
