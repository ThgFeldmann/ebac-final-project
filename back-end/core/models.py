from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=40)
    email = models.EmailField(max_length=254)

class Post(models.Model):
    author_id = models.IntegerField(null=False, blank=False, unique=True)
    author = models.CharField(max_length=40)
    content = models.TextField(max_length=2000)

class Comment(models.Model):
    post_id = Post.id
    author_id = User.id
    author = User.username
    content = Post.content

class Follow(models.Model):
    user_id = User.id
    following_id = User.id