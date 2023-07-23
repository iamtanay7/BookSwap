from rest_framework import serializers
from .models import Book, UserProfile, BookReview, BookExchange

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class BookReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = BookReview
        fields = '__all__'

class BookExchangeSerializer(serializers.ModelSerializer):
    book = BookSerializer()
    owner = UserSerializer()
    borrower = UserSerializer()

    class Meta:
        model = BookExchange
        fields = '__all__'
