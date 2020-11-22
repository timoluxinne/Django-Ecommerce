from django.shortcuts import render

# Create your views here.
def store(request):
    context = {}
    return render(request, 'ecom/store.html', context)

def cart(request):
    context = {}
    return render(request, 'ecom/cart.html', context)
    
def checkout(request):
    context = {}
    return render(request, 'ecom/checkout.html', context)
    