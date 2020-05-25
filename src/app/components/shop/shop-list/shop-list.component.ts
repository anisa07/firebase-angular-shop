import { Component, OnInit, Input } from '@angular/core';
import { ShopItem } from './shop-item/shop-item.component';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  @Input() items: ShopItem[];

  constructor() { }

  ngOnInit() {}
}
