from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils import timezone
from django.db.models.signals import post_save
from django.conf import settings
from autoslug import AutoSlugField
# Create your models here.

class Profile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  image = models.ImageField(default='default.png', upload_to='profile_pics')
  slug = AutoSlugField(populate_from='user')
  bio = models.CharField(max_length=255, blank=True)
  friends = models.ManyToManyField("Profile", blank=True)

  def __str__(self):
    return str(self.user.username)

  def get_absolute_url(self):
    return f"/users/{self.slug}"


class FriendRequest(models.Model):
  to_user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='to_user', on_delete=models.CASCADE)
  from_user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='from_user', on_delete=models.CASCADE)
  timestamp = models.DataTimeField(auto_now_add=True)

  def __str__(self):
    return f"From {self.from_user} to {self.to_user}"
