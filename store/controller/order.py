from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import redirect, render
from store.models import *
import random
from django.contrib.auth.models import User

def index(request):
    orders= Order.objects.filter(user= request.user)
    context = {'orders':orders}
    return render(request,'store/order/index.html',context)

def vieworder(request,t_no):
    order = Order.objects.filter(tracking_no=t_no).filter(user=request.user).first()
    orderitems = OrderItem.objects.filter(order=order)
    context = {'order':order,'orderitems':orderitems}
    return render(request,'store/order/view.html',context)
