import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
    name: string;
    role: string;
    content: string;
    image: string;
}

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './testimonials.html',
    styleUrl: './testimonials.css'
})
export class Testimonials {
    testimonials: Testimonial[] = [
        {
            name: 'Alex Johnson',
            role: 'Student',
            content: 'Mentora changed my career trajectory. The direct access to senior dev mentors was exactly what I needed to break into the industry.',
            image: 'https://i.pravatar.cc/150?u=alex'
        },
        {
            name: 'Sarah Chen',
            role: 'Mentor',
            content: 'The interactive sessions and portfolio reviews helped me land my dream job at a top tech firm. Highly recommended!',
            image: 'https://i.pravatar.cc/150?u=sarah'
        },
        {
            name: 'Michael Boateng',
            role: 'Visitor',
            content: 'Unparalleled quality of mentorship. The community aspect and the structured curriculum are world-class.',
            image: 'https://i.pravatar.cc/150?u=michael'
        }
    ];
}
