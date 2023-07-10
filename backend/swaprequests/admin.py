from django.contrib import admin
from .models import Book, UserProfile, BookReview, BookExchange

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'publication_year']

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'location']

@admin.register(BookReview)
class BookReviewAdmin(admin.ModelAdmin):
    list_display = ['book', 'user', 'rating']

@admin.register(BookExchange)
class BookExchangeAdmin(admin.ModelAdmin):
    list_display = ['book', 'owner', 'borrower', 'status']
