import {Injectable} from '@angular/core';
import {from, asyncScheduler} from 'rxjs';
import {count, filter} from 'rxjs/operators';
import {ShopItem} from '../components/shop/shop-list/shop-item/shop-item.component';

@Injectable({
  providedIn: 'root'
})
export class ShopItemsService {
  private fakeShopItems: ShopItem[] = [
    {
      name: 'cup',
      price: 15.5,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'dishes',
      id: 'abc1234'
    },
    {
      name: 'bag',
      price: 124.5,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'accessories',
      id: 'bvh2302'
    },
    {
      name: 'headphones',
      price: 109.8,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'tech',
      id: 'jkf8780',
    },
    {
      name: 'electronic piano',
      price: 200.1,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'tech',
      id: 'nbg1231',
    },
    {
      name: 't-shirt',
      price: 10.6,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'clothes',
      id: 'njh8790',
    },
    {
      name: 'lego robot',
      price: 345.9,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'toys',
      id: 'bkj8980',
    },
    {
      name: 'dress',
      price: 56,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'clothes',
      id: 'yug7890',
    },
    {
      name: 'Hobbit',
      price: 78,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'books',
      id: 'hfug287',
    },
    {
      name: 'sunglasses',
      price: 7.0,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'accessories',
      id: 'ybui8909'
    },
    {
      name: 'teapot',
      price: 124.5,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'dishes',
      id: 'kjnk4567'
    },
    {
      name: 'mobile phone',
      price: 247.8,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'tech',
      id: 'hjgh9023',
    },
    {
      name: 'laptop',
      price: 345,
      urlImg: '../../assets/hubble-unsplash.jpg',
      category: 'tech',
      id: 'bjho9089',
    },
  ];
  private fakeCategories: string[] = [
    'dishes', 'tech', 'accessories', 'books', 'clothes', 'toys'
  ];

  constructor() {
  }

  getLengthOfItems(category = '') {
    const filteredItems = category ? this.fakeShopItems.filter(item => item.category === category) : this.fakeShopItems;

    return from(filteredItems, asyncScheduler).pipe(count());
  }

  getItems(start, end, array = this.fakeShopItems) {
    if (end > array.length) {
      return from(array.slice(start), asyncScheduler);
    } else {
      return from(array.slice(start, end), asyncScheduler);
    }
  }

  getCategories() {
    return from(this.fakeCategories, asyncScheduler);
  }

  getItemsByCategory(start, end, category) {
    const filteredItems = this.fakeShopItems.filter(item => item.category === category);
    return this.getItems(start, end, filteredItems);
  }

  getItemById(id) {
    return from(this.fakeShopItems).pipe(filter(item => item.id === id));
  }
}

