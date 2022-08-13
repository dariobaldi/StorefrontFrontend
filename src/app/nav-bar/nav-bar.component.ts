import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public totalCart: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.getCartProducts().subscribe(res => {
      this.totalCart = res.length;
    });
  }

  ngOnInit(): void {
  }

}
