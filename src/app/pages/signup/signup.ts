import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-signup',
  imports: [RouterLink, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})

export class Signup {
    role: "student" | "mentor" = "student";

    setRole(selectedRole: "student" | "mentor" ){
      this.role = selectedRole;
    }
}
