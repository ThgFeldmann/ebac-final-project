from django.urls import path

from . import views

urlpatterns = [
    # GET requests for datas
    path('get/users/', views.GetUsersData),
    path('get/users/<int:pk>/', views.GetUserDataById.as_view()),
    path('get/posts/', views.GetPostsData),
    path('get/users/<int:pk>/', views.GetPostDataById.as_view()),
    path('get/comments/', views.GetCommentsData),
    path('get/follows/', views.GetFollowsData),

    # POST request for data creation
    path('create/user/', views.CreateUser),
    path('create/post/', views.CreatePost),
    path('create/comment/', views.CreateComment),
    path('create/follow/', views.CreateFollow),
]