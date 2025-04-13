from django.contrib import admin
from .models import Company, Vacancy

# Регистрация модели Company в админке
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'address')  # Поля для отображения в списке
    search_fields = ('name', 'city')  # Поля для поиска
    list_filter = ('city',)  # Фильтр по городу

# Регистрация модели Vacancy в админке
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name', 'salary', 'company')  # Поля для отображения в списке
    search_fields = ('name',)  # Поля для поиска
    list_filter = ('salary', 'company')  # Фильтр по зарплате и компании

# Регистрируем модели с их настройками
admin.site.register(Company, CompanyAdmin)
admin.site.register(Vacancy, VacancyAdmin)
