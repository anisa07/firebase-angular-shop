import { Component, OnInit } from '@angular/core';
import { ShopItemsService } from '../shop-items.service';

@Component({
  selector: 'app-shop-categories-list',
  templateUrl: './shop-categories-list.component.html',
  styleUrls: ['./shop-categories-list.component.scss']
})
export class ShopCategoriesListComponent implements OnInit {
  categories: string[] = [];

  constructor(private shopItemsService: ShopItemsService) { }

  ngOnInit() {
    this.shopItemsService.getCategories().subscribe(category => this.categories.push(category));
  }
}
