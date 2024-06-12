import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Welcome to Chirpus Pizza";
  menuItems:  MenuItem [] = [
    {
      name: "Buffalo Chicken Pizza",
      category: "Entree",
      price: 8.99,
      vegetarian: false,
      soldOut: true
    },
    {
      name: "Bacon Jalapeno Pizza",
      category: "Entree",
      price: 7.99,
      vegetarian: false,
      soldOut:  false
    },
    {
      name: "Margherita Pizza",
      category: "Entree",
      price: 6.99,
      vegetarian: true,
      soldOut:  false
    },
    {
      name: "Pepperoni Pizza",
      category: "Entree",
      price: 7.49,
      vegetarian: false,
      soldOut:  true
    },
    {
      name: "Cheese Pizza",
      category: "Entree",
      price: 5.99,
      vegetarian: false,
      soldOut:  false
    },
    {
      name: "Honey BBQ Wings",
      category: "Entree",
      price: 7.49,
      vegetarian: false,
      soldOut:  false
    },
    {
      name: "Garlic Knots",
      category: "Sides",
      price: 4.49,
      vegetarian: true,
      soldOut:  false
    },
    {
      name: "Pepperoni Stuffed Cheesy Bread",
      category: "Sides",
      price: 4.99,
      vegetarian: false,
      soldOut:  false
    },
    {
      name: "Cinnamon Bites",
      category: "Dessert",
      price: 5.49,
      vegetarian: true,
      soldOut:  false
    },
    {
      name: "Cookie Pizza",
      category: "Dessert",
      price: 5.99,
      vegetarian: true,
      soldOut:  true
    }
  ];
 
  /*
  function AddToCart():void {
    let total: number;
  }
  */
}
