import { Component, OnInit, Input } from '@angular/core';
import {CartService} from '../cart.service';

export interface ShopItem {
  name: string;
  price: number;
  urlImg: string;
  category: string;
  description?: string;
  id: string;
  count?: number;
}

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  @Input() item: ShopItem;
  inCart = false;
  isFavorite = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    const cartItems = this.cartService.getCartItems();
    const favoriteItems = this.cartService.getFavoriteItems();

    this.inCart = !!cartItems.find(cartItem => cartItem.id === this.item.id);
    this.isFavorite = !!favoriteItems.find(favoriteItem => favoriteItem.id === this.item.id);
  }

  toggleAddToCart() {
    this.inCart ? this.cartService.removeCartItem(this.item) : this.cartService.saveCartItem({...this.item, count: 1});
    this.inCart = !this.inCart;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.cartService.toggleFavoriteItem(this.item);
  }
}
