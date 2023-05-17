from django.db import models

# Create your models here.
class User(models.Model):
    # title = models.TextField(null=True, blank=True)
    # body = models.TextField(null=True, blank=True)
    # updated = models.DateTimeField(auto_now=True)
    # created = models.DateTimeField(auto_now_add=True)
    id = models.TextField(null=False, blank=False, primary_key=True)
    username = models.TextField(null=False, blank=False)
    password = models.TextField(null=False, blank=False)
    email = models.TextField(null=False, blank=False)
    def __str__(self):
        return self.body[0:50]