from distutils.command.upload import upload
from email.mime import image
from operator import truediv
from django.db import models

# Create your models here.
class Product(models.Model):
    image = models.ImageField(upload_to = 'upload/images', null=False , blank=False)
    name = models.CharField(max_length=140,null=False,blank=False)
    price = models.DecimalField(max_digits=7,decimal_places=2,null=False,blank=False)
    description = models.TextField()
    category = models.CharField(max_length=50,null=True , blank=True)

    def _str_(self):
        return self.name