from django.contrib import admin
from .models import Company, Vacancy

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'address') 
    search_fields = ('name', 'city')  
    list_filter = ('city',) 

class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name', 'salary', 'company')
    search_fields = ('name',)  # Поля для поиска
    list_filter = ('salary', 'company')  

admin.site.register(Company, CompanyAdmin)
admin.site.register(Vacancy, VacancyAdmin)
