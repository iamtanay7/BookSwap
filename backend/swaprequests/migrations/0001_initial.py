# Generated by Django 4.2.2 on 2023-07-22 07:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('author', models.CharField(max_length=255)),
                ('publication_year', models.IntegerField()),
                ('description', models.TextField()),
                ('thumbnail_url', models.URLField()),
                ('rating', models.FloatField()),
                ('synopsis', models.TextField()),
                ('no_of_books_available', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('bio', models.TextField()),
                ('location', models.CharField(max_length=100)),
                ('miles_away', models.FloatField()),
                ('user_review', models.TextField()),
                ('profile_photo_url', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='BookReview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('quote', models.TextField()),
                ('review', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='swaprequests.book')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='swaprequests.userprofile')),
            ],
        ),
        migrations.CreateModel(
            name='BookExchange',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('available', 'Available'), ('borrowed', 'Borrowed'), ('completed', 'Completed')], max_length=20)),
                ('book_condition_image_url', models.URLField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='exchanges', to='swaprequests.book')),
                ('borrower', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='borrowed_exchanges', to='swaprequests.userprofile')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owned_exchanges', to='swaprequests.userprofile')),
            ],
        ),
    ]
