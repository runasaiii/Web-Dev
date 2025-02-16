import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: "Парацетамол таблетки 500 мг 10 шт",
      description: "Обезболивающее и жаропонижающее средство.",
      price: 135,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/paratsetamol-tabletki-500-mg-10-sht-102018705/?c=750000000",
      gallery: ["assets/paracetamol.jpg","assets/pa2.jpg","assets/pa3.jpg"
      ]
    },
    {
      name: "Ибупрофен таблетки 400 мг 20 шт",
      description: "Противовоспалительное и жаропонижающее средство.",
      price: 838,
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/ibuprofen-tabletki-400-mg-20-sht-101375956/?c=750000000",
      gallery: ["assets/ibuprofen.jpg"]
    },
    {
      name: "Терафлю со вкусом лимона порошок 325 мг 10 шт",
      description: "Симптоматическое лечение простудных заболеваний, гриппа, ОРВИ",
      price: 2349,
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/teraflju-so-vkusom-limona-poroshok-325-mg-10-sht-101114328/?c=750000000",
      gallery: ["assets/teraflu.jpg"]
    },
    {
      name: "Спирт этиловый раствор 90% 90 мл",
      description: "Раствор для наружного применения.",
      price: 267,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/spirt-etilovyi-rastvor-90-90-ml-103974837/?c=750000000",
      gallery: ["assets/etil.jpg"]
    },
    {
      name: "NOW D-3 5000 IU капсулы 120 шт",
      description: "Oбщеукрепляющее средство.",
      price: 3577,
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/now-d-3-5000-iu-kapsuly-120-sht-108959948/?c=750000000",
      gallery: ["assets/d3.jpg"]
    },
    {
      name: "21st Century Calcium Magnesium Zinc + D3 таблетки 90 шт",
      description: "Для укрепления костей.",
      price: 3082,
      rating: 4.6,
      link: "https://kaspi.kz/shop/p/21st-century-calcium-magnesium-zinc-d3-tabletki-90-sht-100505310/?c=750000000",
      gallery: ["assets/ca.jpg"]
    },
    {
      name: "Nutri D-Day PORORO Витамин С + Цинк таблетки 50 шт",
      description: "Иммуностимулирующее, общеукрепляющее средство.",
      price: 1606,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/nutri-d-day-pororo-vitamin-s-tsink-tabletki-50-sht-117082132/?c=750000000",
      gallery: ["assets/mi.jpg"]
    },{
      name: "Азитромицин таблетки 500 мг 3 шт",
      description: "Антибиотики, противомикробные и противопаразитарные средства.",
      price: 950,
      rating: 4.8,
      link: "https://kaspi.kz/shop/p/azitromitsin-tabletki-500-mg-3-sht-103466770/?c=750000000",
      gallery: ["assets/az.jpg"]
    },{
      name: "Парацетамол таблетки 500 мг 10 шт",
      description: "Обезболивающее и жаропонижающее средство.",
      price: 135,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/paratsetamol-tabletki-500-mg-10-sht-102018705/?c=750000000",
      gallery: ["assets/paracetamol.jpg","assets/pa2.jpg",
      ]
    },{
      name: "Ибупрофен таблетки 400 мг 20 шт",
      description: "Противовоспалительное и жаропонижающее средство.",
      price: 838,
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/ibuprofen-tabletki-400-mg-20-sht-101375956/?c=750000000",
      gallery: ["assets/ibuprofen.jpg"]
    },
    {
      name: "21st Century Calcium Magnesium Zinc + D3 таблетки 90 шт",
      description: "Для укрепления костей.",
      price: 3082,
      rating: 4.6,
      link: "https://kaspi.kz/shop/p/21st-century-calcium-magnesium-zinc-d3-tabletki-90-sht-100505310/?c=750000000",
      gallery: ["assets/ca.jpg"]
    },
    {
      name: "NOW D-3 5000 IU капсулы 120 шт",
      description: "Oбщеукрепляющее средство.",
      price: 3577,
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/now-d-3-5000-iu-kapsuly-120-sht-108959948/?c=750000000",
      gallery: ["assets/d3.jpg"]
    },
  ];
  

  selectedImage: { [key: string]: number } = {};

  constructor() {
    this.products.forEach(product => {
      this.selectedImage[product.name] = 0; 
    });
  }

  nextImage(productName: string, length: number) {
    this.selectedImage[productName] = (this.selectedImage[productName] + 1) % length;
  }

  share(link: string, platform: string) {
    let url = '';
    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(url, '_blank');
  }
  
}
