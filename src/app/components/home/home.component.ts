import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HeaderComponent } from '../../shared/header/header.component';
import { ContactComponent } from "../contact/contact.component";
import { LastComponent } from '../last/last.component';
import { TeamComponent } from '../team/team.component';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeaderComponent, ContactComponent, LastComponent, TeamComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
