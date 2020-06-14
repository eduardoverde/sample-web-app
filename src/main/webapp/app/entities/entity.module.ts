import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.SampleWebAppProductModule)
      },
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.SampleWebAppClientModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class SampleWebAppEntityModule {}
