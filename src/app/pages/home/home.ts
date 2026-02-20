import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Footer } from '../../components/footer/footer';
import { Contact } from '../../components/contact/contact';
import { Features } from '../../components/features/features';
import { About } from '../../components/about/about';
import { Testimonials } from '../../components/testimonials/testimonials';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, About, Features, Testimonials, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
