import { NgModule } from '@angular/core';

import { WebappocmtSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WebappocmtSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WebappocmtSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WebappocmtSharedCommonModule {}
