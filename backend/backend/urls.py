from django.urls import path
from swaprequests.views import (
    BookListCreateAPIView,
    BookRetrieveUpdateDestroyAPIView,
    UserProfileListCreateAPIView,
    UserProfileRetrieveUpdateDestroyAPIView,
    BookReviewListCreateAPIView,
    BookReviewRetrieveUpdateDestroyAPIView,
    BookExchangeListCreateAPIView,
    BookExchangeRetrieveUpdateDestroyAPIView,
    BookSearchAPIView
)

urlpatterns = [
    path('api/books/', BookListCreateAPIView.as_view(), name='book-list-create'),
    path('api/books/<int:pk>/', BookRetrieveUpdateDestroyAPIView.as_view(), name='book-retrieve-update-destroy'),
    path('api/user-profiles/', UserProfileListCreateAPIView.as_view(), name='user-profile-list-create'),
    path('api/user-profiles/<int:pk>/', UserProfileRetrieveUpdateDestroyAPIView.as_view(), name='user-profile-retrieve-update-destroy'),
    path('api/book-reviews/', BookReviewListCreateAPIView.as_view(), name='book-review-list-create'),
    path('api/book-reviews/<int:pk>/', BookReviewRetrieveUpdateDestroyAPIView.as_view(), name='book-review-retrieve-update-destroy'),
    path('api/book-exchanges/', BookExchangeListCreateAPIView.as_view(), name='book-exchange-list-create'),
    path('api/book-exchanges/<int:pk>/', BookExchangeRetrieveUpdateDestroyAPIView.as_view(), name='book-exchange-retrieve-update-destroy'),
    path('api/books/search/', BookSearchAPIView.as_view(), name='book-search'),
]
