import { Component, OnInit } from '@angular/core';
import { Company, Vacancy} from '../../interfaces';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'], 
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;
  vacancies: Vacancy[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onSelectCompany(companyId: number): void {
    this.selectedCompanyId = companyId;
    this.apiService.getVacanciesByCompany(companyId).subscribe(data => {
      this.vacancies = data;
    });
  }
}
