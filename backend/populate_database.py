import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','backend.settings')
import django
django.setup()
import pandas as pd
import csv
from pathlib import Path
from swaprequests.models import Book, UserProfile, BookReview

# Import excel file data into a dataframe
df = pd.read_excel("BookSwap Data.xlsx", sheet_name=None)

def populate_books():
    try:
        # Read data from Excel file into a Pandas DataFrame
        df_books = df["Books"]
        Book.objects.all().delete()
        # Iterate through each row of the DataFrame
        for _, row in df_books.iterrows():
            # Create a new DataModel object and populate its fields from the Excel row
            book_object = Book(
                    title = row["Title"],
                    author = row["Author"],
                    publication_year = row["Year of Publication"],
                    description = row["Description"],
                    thumbnail_url = row["Thumbnail"],
                    rating = row["Rating"],
                    synopsis = row["synopsis"],
                    no_of_books_available = row["Books Available"]
            )

            # Save the DataModel object to the database
            book_object.save()

        print("Books been successfully imported to the database.")

    except Exception as e:
        print("An error occurred:", str(e))


def populate_users():
    try:
        # Read data from Excel file into a Pandas DataFrame
        df_users = df["Users"]
        UserProfile.objects.all().delete()
        # Iterate through each row of the DataFrame
        for _, row in df_users.iterrows():
            # Create a new DataModel object and populate its fields from the Excel row
            user_object = UserProfile(
                    name = row["Name"],
                    bio = row["Bio"],
                    location = row["Location"],
                    user_review = row["Book Swapper Reviews"],
                    miles_away = row["Miles Away"],
                    profile_photo_url = row["Photo Url"],
                    user_rating = row["User Rating"]
            )

            # Save the DataModel object to the database
            user_object.save()

        print("Users been successfully imported to the database.")

    except Exception as e:
        print("An error occurred:", str(e))


def populate_book_reviews():
    try:
        # Read data from Excel file into a Pandas DataFrame
        df_book_reviews = df["Reviews"]
        all_books = Book.objects.all()
        all_users = UserProfile.objects.all()
        BookReview.objects.all().delete()
        # Iterate through each row of the DataFrame
        for index, row in enumerate(df_book_reviews.iterrows()):
            # Create a new DataModel object and populate its fields from the Excel row
            book_review_object = BookReview(
                    user = all_users[index],
                    book = all_books[index],
                    rating = row[1]["Rating"],
                    quote = row[1]["Quote"],
                    review = row[1]["Review"]
            )

            # Save the DataModel object to the database
            book_review_object.save()

        print("Book reviews have been successfully imported to the database.")

    except Exception as e:
        print("An error occurred:", str(e))


if __name__ == "__main__":
    populate_books()
    populate_users()
    populate_book_reviews()