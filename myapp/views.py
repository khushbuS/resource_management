from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.http import JsonResponse
import psutil 


# Create your views here.
def sysmetric(request):
    cur_cpu = psutil.cpu_percent()
    cur_mem = psutil.virtual_memory()[2]
    return JsonResponse({"cur_cpu": cur_cpu, "cur_mem": cur_mem})

def home(request):
    return render(request,"index.html")