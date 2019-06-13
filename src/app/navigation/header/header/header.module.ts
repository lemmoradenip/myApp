import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      RouterModule.forChild([{ path: '', component: HeaderComponent }])
    ],
    exports:[RouterModule],
    declarations: [HeaderComponent]
  })
export class HeaderModule{}