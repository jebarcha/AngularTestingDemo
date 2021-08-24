import { Routes } from '@angular/router';
import { HospitalComponent } from '../../intermediate-integrations/hospital/hospital.component';
import { MedicoComponent } from '../../intermediate-integrations/medico/medico.component';
import { IncrementadorComponent } from '../../intermediate-integrations/increment/incrementador.component';

export const ROUTES: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'medico/:id', component: MedicoComponent },
    { path: '**', component: IncrementadorComponent }
];
