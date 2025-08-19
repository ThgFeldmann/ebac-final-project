from dataclasses import fields

from rest_framework import serializers
from core.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

class AuthorSerializer(serializers.ModelSerializer):
    # 'author' serializer for 'post' use
    class Meta:
        model = Author
        fields = ['author_id', 'author']

class PostSerializer(serializers.ModelSerializer):
    author_data = AuthorSerializer(read_only=True)
    class Meta:
        model = Post
        fields = ['id', 'author_data', 'content']

class PostIDSerializer(serializers.ModelSerializer):
    # 'post id' serializer for 'comment' use
    class Meta:
        model = Post
        fields = ['id']

class CommentSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    post_id = PostIDSerializer()
    class Meta:
        model = Comment
        fields = ['id', 'post_id', 'author', 'content']

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ['id', 'user_id', 'following_id']