import { Injectable } from '@angular/core';
import { ShopItem } from './shop-item/shop-item.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  toggleFavoriteItem(item: ShopItem): void {
    const arrayOfIds = this.getFavoriteItems();
    const updatedArray = arrayOfIds.find(savedItem => savedItem.id === item.id)
      ? arrayOfIds.filter(savedItem => savedItem.id !== item.id) : [...arrayOfIds, item];
    localStorage.setItem('__online_shop_favorite_items', JSON.stringify(updatedArray));
  }

  saveCartItem(item: ShopItem): void {
    const arrayOfIds = this.getCartItems();
    const updatedArray = arrayOfIds.filter(savedItem => savedItem.id !== item.id);
    localStorage.setItem('__online_shop_cart_items', JSON.stringify([...updatedArray, {...item}]));
  }

  removeCartItem(item: ShopItem): void {
    const arrayOfIds = this.getCartItems();
    const updatedArray = arrayOfIds.filter(savedItem => savedItem.id !== item.id);
    localStorage.setItem('__online_shop_cart_items', JSON.stringify(updatedArray));
  }

  getFavoriteItems(): ShopItem[] {
    const arrayOfIds = localStorage.getItem('__online_shop_favorite_items');
    return arrayOfIds ?  JSON.parse(arrayOfIds) : [];
  }
  getCartItems(): ShopItem[] {
    const arrayOfIds = localStorage.getItem('__online_shop_cart_items');
    return arrayOfIds ?  JSON.parse(arrayOfIds) : [];
  }
}
