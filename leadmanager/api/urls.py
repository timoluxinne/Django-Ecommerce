from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter
from .views import LeadViewSet

router = DefaultRouter();
router.register('leads', LeadViewSet, 'leads')

urlpatterns = router.urls