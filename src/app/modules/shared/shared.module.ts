import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from '../users/users-routing.module';
import { ButtonComponent } from './button/button.component';
import { HoverDirective } from 'src/app/directives/hover.directive';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    LoaderComponent,
    ButtonComponent,
    InputComponent,
    CardComponent,
    HoverDirective,
  ],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
  exports: [
    NavBarComponent,
    FooterComponent,
    LoaderComponent,
    ButtonComponent,
    InputComponent,
    CardComponent,
  ],
})
export class SharedModule {}
