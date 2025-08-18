from dataclasses import fields

from rest_framework import serializers
from core.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(fields=['id', 'username'])
    class Meta:
        model = Post
        fields = ['id', 'author', 'content']

class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(fields=['id', 'username'])
    post_id = PostSerializer(fields=['id'])
    class Meta:
        model = Comment
        fields = ['id', 'post_id', 'author', 'content']

class FollowSerializer(serializers.ModelSerializer):
    user_id = UserSerializer(fields=['id'])
    following_id = UserSerializer(fields=['id'])
    class Meta:
        model = Follow
        fields = ['id', 'user_id', 'following_id']