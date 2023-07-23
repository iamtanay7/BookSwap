from rest_framework import generics
from .models import Book, UserProfile, BookReview, BookExchange
from .serializers import (
    BookSerializer,
    UserProfileSerializer,
    BookReviewSerializer,
    BookExchangeSerializer
)

class BookListCreateAPIView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class UserProfileListCreateAPIView(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserProfileRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class BookReviewListCreateAPIView(generics.ListCreateAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer

class BookReviewRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer

class BookExchangeListCreateAPIView(generics.ListCreateAPIView):
    queryset = BookExchange.objects.all()
    serializer_class = BookExchangeSerializer

class BookExchangeRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BookExchange.objects.all()
    serializer_class = BookExchangeSerializer

class BookSearchAPIView(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        title = self.request.query_params.get('title', '')
        queryset = Book.objects.filter(title__icontains=title)
        return queryset
