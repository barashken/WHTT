from django.http import HttpResponse

def check_alive(request):
    return HttpResponse(status=200)
