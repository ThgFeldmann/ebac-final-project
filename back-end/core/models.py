from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=40)
    email = models.EmailField(max_length=254)

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    author = User.username
    author_id = User.id
    content = models.TextField(max_length=2000)

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    post_id = Post.id
    author = User.username
    author_id = User.id
    content = Post.content

class Follow(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = User.id
    following_id = User.id