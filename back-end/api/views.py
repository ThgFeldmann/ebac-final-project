from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from core.models import *
from .serializers import *

# GET requests for data

@api_view(['GET'])
def GetUsersData(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True, read_only=True)
    return Response(serializer.data)

class GetUserDataById(RetrieveAPIView):
    # GET request for a specific user
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'pk'

@api_view(['GET'])
def GetPostsData(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True, read_only=True)
    return Response(serializer.data)

class GetPostDataById(RetrieveAPIView):
    # GET request for a specific Post
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'pk'

@api_view(['GET'])
def GetCommentsData(request):
    comments = Post.objects.all()
    serializer = CommentSerializer(comments, many=True, read_only=True)
    return Response(serializer.data)

@api_view(['GET'])
def GetFollowsData(request):
    follows = Post.objects.all()
    serializer = FollowSerializer(follows, many=True, read_only=True)
    return Response(serializer.data)

# POST requests for data creation

@api_view(['POST'])
def CreateUser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def CreatePost(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def CreateComment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def CreateFollow(request):
    serializer = FollowSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)