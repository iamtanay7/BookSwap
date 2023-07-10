from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    publication_year = models.IntegerField()
    description = models.TextField()
    image_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()
    location = models.CharField(max_length=100)
    favorite_books = models.ManyToManyField(Book, related_name='fans')


class BookReview(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    review = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class BookExchange(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='exchanges')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_exchanges')
    borrower = models.ForeignKey(User, on_delete=models.CASCADE, related_name='borrowed_exchanges', null=True, blank=True)
    status = models.CharField(choices=(
        ('available', 'Available'),
        ('borrowed', 'Borrowed'),
        ('completed', 'Completed')
    ), max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)








