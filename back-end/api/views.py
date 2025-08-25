from rest_framework.generics import RetrieveAPIView, DestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from core.models import *
from .serializers import *

# GET requests for data

@api_view(['GET'])
def get_users_data(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True, read_only=True)
    return Response(serializer.data)

class GetUserDataById(RetrieveAPIView):
    # GET request for a specific user
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'pk'

@api_view(['GET'])
def get_posts_data(request):
    # error in this function
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

class GetPostDataById(RetrieveAPIView):
    # GET request for a specific Post
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'pk'

@api_view(['GET'])
def get_comments_data(request):
    comments = Post.objects.all()
    serializer = CommentSerializer(comments, many=True, read_only=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_follows_data(request):
    follows = Post.objects.all()
    serializer = FollowSerializer(follows, many=True, read_only=True)
    return Response(serializer.data)

# POST requests for data creation

@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def create_post(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def create_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def create_follow(request):
    serializer = FollowSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

# DELETE requests

class RemoveUser(DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'pk'

## Creating the delete requests for posts
class RemovePost(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'pk'

class PostDelete(APIView):
    def delete(self, request, post_id):
        try:
            # Retrieve Post by ID
            post = Post.objects.get(id=post_id)

        except Post.DoesNotExist:

            return Response(
                {"error": "Post not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        # Delete the post from the database
        post.delete()

        # Return a 204 response
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['DELETE', 'GET'])
def delete_post(self, request, pk=None):
    queryset = Post.objects.all().filter(pk=pk)
    post = queryset[0]
    post.delete()
    return Response("Post deleted", status=status.HTTP_204_NO_CONTENT)