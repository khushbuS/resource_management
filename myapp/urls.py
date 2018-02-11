from django.conf.urls import url
from myapp.views import sysmetric, home

urlpatterns = [
    url(r'^home/?$', home, name='home'),
    url(r'', sysmetric, name='sysmetric'),
]
