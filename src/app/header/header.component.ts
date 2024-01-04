import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  changeColor(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    const menuItems = document.querySelectorAll('.navbar-nav a');
    menuItems.forEach(item => item.classList.remove('color'));

    target.classList.add('color');
  }

  ngAfterViewInit(): void {
    const firstMenuItem = document.querySelector('.navbar-nav a') as HTMLElement;
    firstMenuItem.classList.add('color');
  }
}
