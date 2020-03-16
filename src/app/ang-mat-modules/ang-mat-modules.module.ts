import { NgModule } from '@angular/core';
import {  MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

// import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [  MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule ],
    exports: [ MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule ]
})
export class AngularMaterialModule {

}