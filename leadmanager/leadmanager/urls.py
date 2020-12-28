from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include('api.urls')),
]
