import { Routes } from '@angular/router';
import { CartinhaComponent } from './components/cartinha/cartinha.component';
import { FotosComponent } from './components/fotos/fotos.component';



export const routes: Routes = [
    {path:'cartinha', component: CartinhaComponent},
    {path:'fotos', component: FotosComponent},
];
