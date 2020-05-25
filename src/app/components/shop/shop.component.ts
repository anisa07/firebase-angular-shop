import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShopItem} from './shop-list/shop-item/shop-item.component';
import {ShopItemsService} from '../../services/shop-items.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  items: ShopItem[] = [];
  length = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50];
  category = '';

  constructor(private shopItemsService: ShopItemsService, activateRoute: ActivatedRoute) {
    this.category = activateRoute.snapshot.params.category;
  }

  ngOnInit() {
    this.handleNextPage(0, this.pageSize);
  }

  onPaginateChange(event) {
    this.pageSize = event.pageSize;
    const start = event.pageIndex * this.pageSize;
    const end = event.pageIndex * this.pageSize + this.pageSize;
    this.items = [];
    this.handleNextPage(start, end);
  }

  handleNextPage(start, end) {
    let observable = this.shopItemsService.getItemsByCategory(start, end, this.category);

    if (!this.category) {
      observable = this.shopItemsService.getItems(start, end);
    }

    observable.subscribe(item => {
      this.items.push(item);
    });

    this.shopItemsService.getLengthOfItems(this.category).subscribe(num => this.length = num);
  }
}
