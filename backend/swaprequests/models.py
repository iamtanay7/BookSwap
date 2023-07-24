from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    publication_year = models.IntegerField()
    description = models.TextField()
    thumbnail_url = models.URLField()
    rating = models.FloatField()
    synopsis = models.TextField()
    no_of_books_available = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class UserProfile(models.Model):
    name = models.TextField()
    bio = models.TextField()
    location = models.CharField(max_length=100)
    miles_away = models.FloatField()
    user_review = models.TextField()
    profile_photo_url = models.URLField()
    user_rating = models.FloatField()


class BookReview(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    rating = models.IntegerField()
    quote = models.TextField()
    review = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class BookExchange(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='exchanges')
    owner = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='owned_exchanges')
    borrower = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='borrowed_exchanges', null=True, blank=True)
    status = models.CharField(choices=(
        ('available', 'Available'),
        ('borrowed', 'Borrowed'),
        ('completed', 'Completed')
    ), max_length=20)
    book_condition_image_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)








