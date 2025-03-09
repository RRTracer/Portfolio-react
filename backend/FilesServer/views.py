from django.http import FileResponse, HttpResponse
import os
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def download_cv(request):
    cv_path = os.path.join(settings.MEDIA_ROOT, "cv.pdf")
    try:
        return FileResponse(open(cv_path, "rb"),
                            as_attachment=True, filename="cv.pdf")
    except FileNotFoundError:
        return HttpResponse("File not found", status=404)
