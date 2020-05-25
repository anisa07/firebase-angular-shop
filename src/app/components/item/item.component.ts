import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopItem } from '../shop/shop-list/shop-item/shop-item.component';
import { ShopItemsService } from '../../services/shop-items.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: ShopItem;
  id = '';
  count = 0;
  inCart = false;

  constructor(activatedRoute: ActivatedRoute, private service: ShopItemsService, private cartService: CartService) {
    this.id = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.service.getItemById(this.id).subscribe(item => this.item = item);
    const cartItems = this.cartService.getCartItems();
    const itemInCart = cartItems.find(cartItem => cartItem.id === this.id);
    this.count = !!itemInCart ? itemInCart.count : 0;
    this.inCart = !!itemInCart;
  }

  addItem() {
    this.count = this.inCart ? 0 : this.count + 1;
    this.item.count = this.count;
    this.inCart ? this.cartService.removeCartItem(this.item) : this.cartService.saveCartItem(this.item);
    this.inCart = !this.inCart;
  }

  handleChangeCount() {
    this.item.count = this.count;
    this.cartService.saveCartItem(this.item);
  }
}
