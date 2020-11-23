import json
from django.http.response import JsonResponse
from django.shortcuts import render
from .models import *
# Create your views here.
def store(request):
    products = Product.objects.all()
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
        cartItems = order.get_cart_items
    else:
        order = {'get_cart_items': 0, 'get_cart_total':0}
        items = []
        cartItems = order['get_cart_items']
    context = {'items':items, 'products':products, 'cartItems':cartItems}
    return render(request, 'ecom/store.html', context)

def cart(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
        cartItems = order.get_cart_items
    else:
        order = {'get_cart_items': 0, 'get_cart_total':0}
        items = []
        cartItems = order['get_cart_items']
    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'ecom/cart.html', context)
    
def checkout(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
        cartItems = order.get_cart_items
    else:
        order = {'get_cart_items': 0, 'get_cart_total':0}
        items = []
        cartItems = order['get_cart_items']
    context = {'items':items, 'order':order,}
    return render(request, 'ecom/checkout.html', context)

def updateCart(request):
    data = json.loads(request.body)
    productId = data['productId']
    action = data['action']

    product = Product.objects.get(id=productId)
    customer = request.user.customer
    order, created = Order.objects.get_or_create(customer=customer, complete=False)
    orderItem, created = OrderItem.objects.get_or_create(product=product, order=order)
    if action == 'add':
        orderItem.quantity += 1
    elif action == 'remove':
        orderItem.quantity -= 1
    orderItem.save()
    if orderItem.quantity <= 0:
        orderItem.delete()

    return JsonResponse('cart updated', safe=False)    