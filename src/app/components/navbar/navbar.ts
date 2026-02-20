import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NavItem{
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  imports: [CommonModule, RouterLink]  
})

export class Navbar {

  navItems: NavItem[] = [
    {id: 'home', label: 'Home'},
    {id: 'about', label: 'About Us'},
    {id: 'services', label: 'Services'},
    {id: 'testimonial', label: 'Testimonials'},
    {id: 'contact', label: 'Contact'},
  ]

  isScrolled = false;

  activeSection: string | null = 'home';

  constructor(){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = id;
    }
  }

}
