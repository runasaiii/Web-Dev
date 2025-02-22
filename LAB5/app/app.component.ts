import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[ProductListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    {
      name: 'Обезболивающие',
      products: [
        { name: 'Парацетамол таблетки 500 мг 10 шт', 
          description: 'Обезболивающее и жаропонижающее средство.', 
          price: 131, 
          rating: 4.5, 
          likes: 0, 
          gallery: ['assets/paracetamol.jpg','assets/pa2.jpg','asset/pa3.jpg'], 
          link: 'https://kaspi.kz/shop/p/paratsetamol-tabletki-500-mg-10-sht-102018705/?c=750000000' },
        { name: 'Ибупрофен таблетки 400 мг 20 шт', 
          description: 'Противовоспалительное и жаропонижающее средство.', 
          price: 810, 
          rating: 4.8, 
          likes: 0, 
          gallery: ['assets/ibuprofen.jpg'], 
          link: 'https://kaspi.kz/shop/p/ibuprofen-tabletki-400-mg-20-sht-101375956/?c=750000000' },
        { name: 'Темпалгин М таблетки 500 мг 20 шт', 
          description: 'Обезболивающее средство комбинированного действия.', 
          price: 854, 
          rating: 4.3, 
          likes: 0, 
          gallery: ['assets/te1.jpg','assets/te2.jpg'], 
          link: 'https://kaspi.kz/shop/p/tempalgin-m-tabletki-500-mg-20-sht-100979671/?c=750000000' },
        { name: 'Нурофен таблетки 200 мг 12 шт', 
          description: 'Обезболивающее и жаропонижающее средство.', 
          price: 479, 
          rating: 4.6, 
          likes: 0, 
          gallery: ['assets/nu.jpg'], 
          link: 'https://kaspi.kz/shop/p/nurofen-tabletki-200-mg-12-sht-102335482/?c=750000000' },
        { name: 'Анальгин таблетки 500 мг 10 шт', 
          description: 'Обезболивающее средство.', 
          price: 140, 
          rating: 4.1, 
          likes: 0, 
          gallery: ['assets/an.jpg'], 
          link: 'https://kaspi.kz/shop/p/anal-gin-tabletki-500-mg-10-sht-100974569/?c=750000000' }
      ]
    },
    {
      name: 'Антисептики',
      products: [
        { name: 'Спирт этиловый раствор 90% 90 мл', 
          description: 'Антисептическое средство для наружного применения.', 
          price: 258, rating: 4.7, likes: 0, gallery: ['assets/etil.jpg'], link: 'https://kaspi.kz/shop/p/spirt-etilovyi-rastvor-90-90-ml-103974837/?c=750000000' },
        { name: 'Хлоргексидин биглюконат раствор 0.05% 100 мл', 
          description: 'Антисептический раствор для обработки кожи.', 
          price: 90, rating: 4.4, likes: 0, gallery: ['assets/hl2.jpg'], link: 'https://kaspi.kz/shop/p/hlorgeksidin-bigljukonat-rastvor-0-05-100-ml-103489854/?c=750000000' },
        { name: 'Перекись Водорода-DF раствор 3% 100 мл', 
          description: 'Антисептическое средство для наружного применения.', 
          price: 100, rating: 4.2, likes: 0, gallery: ['assets/pe.jpg'], link: 'https://kaspi.kz/shop/p/perekis-vodoroda-df-rastvor-3-100-ml-101112037/?c=750000000' },
        { name: 'Йод раствор 5% 20 мл', 
          description: 'Антисептическое средство для обработки кожи.', 
          price: 283, rating: 4.5, likes: 0, gallery: ['assets/iod.jpg'], link: 'https://kaspi.kz/shop/p/iod-rastvor-5-20-ml-101167164/?c=750000000' },
        { name: 'Фурацилин раствор 0.02% 200 мл', 
          description: 'Антисептическое средство для обработки ран.', 
          price: 375, rating: 4.3, likes: 0, gallery: ['assets/fu.jpg'], link: 'https://kaspi.kz/shop/p/furatsilin-rastvor-0-02-200-ml-102184960/?c=750000000' }
      ]
    },
    {
      name: 'Витамины',
      products: [
        { name: 'Магне В6 Премиум таблетки 100 мг 60 шт', 
          description: 'Поддержка нервной системы.', 
          price: 4020, rating: 4.6, likes: 0, gallery: ['assets/b6.jpg'], link: 'https://kaspi.kz/shop/p/magne-v6-premium-tabletki-100-mg-60-sht-101326865/?c=750000000' },
        { name: 'Ферсинол раствор 50 мг/мл 30 мл', 
          description: 'Lля терапии и профилактики железодефицитной анемии и всех видов дефицита железа', 
          price: 3612, rating: 4.8, likes: 0, gallery: ['assets/fe.jpg'], link: 'https://kaspi.kz/shop/p/fersinol-rastvor-50-mg-ml-30-ml-103627082/?c=750000000' },
        { name: 'NOW Biotin 5000 мкг капсулы 60 шт', 
          description: 'Комплекс витаминов для общего здоровья.', 
          price: 3900, rating: 4.4, likes: 0, gallery: ['assets/bio.jpg'], link: 'https://kaspi.kz/shop/p/now-biotin-5000-mkg-kapsuly-60-sht-100568568/?c=750000000' },
        { name: 'Nutri D-Day PORORO Витамин С + Цинк таблетки 50 шт', 
          description: 'Мультивитаминный комплекс.', 
          price: 1550, rating: 4.7, likes: 0, gallery: ['assets/mi.jpg'], link: 'https://kaspi.kz/shop/p/nutri-d-day-pororo-vitamin-s-tsink-tabletki-50-sht-117082132/?c=750000000' },
        { name: 'Swiss Bork Multi Collagen Powder 1-2-3 tip порошок 330', 
          description: 'Для суставов, для укрепления костей, общеукрепляющее средство, для ногтей', 
          price: 7186, rating: 4.5, likes: 0, gallery: ['assets/col.jpg'], link: 'https://kaspi.kz/shop/p/swiss-bork-multi-collagen-powder-1-2-3-tip-poroshok-330-121213219/?c=750000000' }
      ]
    },
    {
      name: 'Антибиотики',
      products: [
        { name: 'Сумамед таблетки 500 мг 3 шт', 
          description: 'Антибиотик широкого спектра действия.', 
          price: 5000, rating: 4.6, likes: 0, gallery: ['assets/su.jpg'], link: 'https://kaspi.kz/shop/p/sumamed-tabletki-500-mg-3-sht-101781249/?c=750000000' },
        { name: 'Дазолик таблетки 500 мг 50 шт', 
          description: 'Антибактериальное средство.', 
          price: 13619, rating: 4.5, likes: 0, gallery: ['assets/da.jpg'], link: 'https://kaspi.kz/shop/p/dazolik-tabletki-500-mg-50-sht-101095811/?c=750000000' },
        { name: 'Супракс 100 мг/5 мл', 
          description: 'Антибиотик широкого спектра действия.', 
          price: 11545, rating: 4.7, likes: 0, gallery: ['assets/su2.jpg'], link: 'https://kaspi.kz/shop/p/supraks-100-mg-5-ml-104387272/?c=750000000' },
        { name: 'Авелокс таблетки 400 мг 5 шт', 
          description: 'Антибактериальное средство.', 
          price: 10000, rating: 4.4, likes: 0, gallery: ['assets/av.jpg'], link: 'https://kaspi.kz/shop/p/aveloks-tabletki-400-mg-5-sht-101111086/?c=750000000' },
        { name: 'Амоксиклав QT таблетки 875 мг/125 мг 14 шт', 
          description: 'Антибиотик широкого спектра действия.', 
          price: 7320, rating: 4.3, likes: 0, gallery: ['assets/amk.jpg'], link: 'https://kaspi.kz/shop/p/amoksiklav-qt-tabletki-875-mg-125-mg-14-sht-102386716/?c=750000000' }
      ]
    }
  ];

  selectedCategory: any = { name: 'Все товары', products: [] };

  allProducts: any = [];

  constructor() {
    this.allProducts = this.categories.flatMap(category => category.products);
    this.selectedCategory.products = this.allProducts; 
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
  }

  showAllProducts() {
    this.selectedCategory = { name: 'Все товары', products: this.allProducts };
  }
}