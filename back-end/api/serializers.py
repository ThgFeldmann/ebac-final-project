from dataclasses import fields

from rest_framework import serializers
from core.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'author_id', 'author', 'content']

class PostIDSerializer(serializers.ModelSerializer):
    # 'post id' serializer for 'comment' use
    class Meta:
        model = Post
        fields = ['id']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'post_id', 'author_id', 'author', 'content']

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ['id', 'user_id', 'following_id']