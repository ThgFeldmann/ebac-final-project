from django.urls import path

from . import views

urlpatterns = [
    # GET requests for datas
    path('get/users/', views.get_users_data),
    path('get/users/<int:pk>/', views.GetUserDataById.as_view()),
    path('get/posts/', views.get_posts_data),
    path('get/users/<int:pk>/', views.GetPostDataById.as_view()),
    path('get/comments/', views.get_comments_data),
    path('get/follows/', views.get_follows_data),

    # POST request for data creation
    path('create/user/', views.create_user),
    path('create/post/', views.create_post),
    path('create/comment/', views.create_comment),
    path('create/follow/', views.create_follow),
]