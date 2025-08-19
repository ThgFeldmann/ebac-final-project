from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=40)
    email = models.EmailField(max_length=254)

class Author(models.Model):
    author_id = models.AutoField(primary_key=True)
    author = models.CharField(max_length=200)

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    author = Author
    content = models.TextField(max_length=2000)

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    post_id = Post.id
    author = Author
    content = Post.content

class Follow(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = User.id
    following_id = User.id