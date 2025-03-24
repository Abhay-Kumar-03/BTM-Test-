from django.http import HttpResponse
from django.shortcuts import render

# products = [
#     {'id': 1, 'name': 'Laptop', 'image': '/Users/abhaychauhan/Desktop/test/BTM_TEST/static/Products/P1.jpg', 'price': 999, 'description': 'High-performance laptop.'},
#     {'id': 2, 'name': 'Smartphone', 'image': '/Users/abhaychauhan/Desktop/test/BTM_TEST/static/Products/P2.jpg', 'price': 499, 'description': 'Latest smartphone model.'},
#     {'id': 3, 'name': 'Headphones', 'image': '/Users/abhaychauhan/Desktop/test/BTM_TEST/static/Products/P3.jpg', 'price': 199, 'description': 'Noise-canceling headphones.'},
# ]



def home(request):
    return render(request, 'home.html', {'products': product})

def product(request):
    return render(request, 'product.html', {'products': product})


# def product_detail(request, product_id):
#     product = next((item for item in products if item["id"] == product_id), None)
#     if not product:
#         return render(request, '404.html', status=404)  
#     return render(request, 'product.html', {'product': product})