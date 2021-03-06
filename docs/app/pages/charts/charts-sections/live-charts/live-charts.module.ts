import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColorServiceModule, HybridModule, TabsetModule } from '@ux-aspects/ux-aspects';
import { ChartsModule } from 'ng2-charts';
import { DocumentationComponentsModule } from '../../../../components/components.module';
import { DocumentationCategoryComponent } from '../../../../components/documentation-category/documentation-category.component';
import { DocumentationPage, ResolverService } from '../../../../services/resolver/resolver.service';
import { WrappersModule } from '../../../../wrappers/wrappers.module';
import { ChartsLiveChartNg1Component } from './live-chart-ng1/live-chart-ng1.component';


const SECTIONS = [
    ChartsLiveChartNg1Component,
];

const ROUTES = [
    {
        path: '**',
        component: DocumentationCategoryComponent,
        data: {
            category: ResolverService.resolveCategoryData(DocumentationPage.Charts, 'Live Chart')
        }
    }
];

@NgModule({
    imports: [
        TabsetModule,
        WrappersModule,
        HybridModule,
        ChartsModule,
        DocumentationComponentsModule,
        RouterModule.forChild(ROUTES),
        ColorServiceModule
    ],
    exports: SECTIONS,
    declarations: SECTIONS,
    entryComponents: SECTIONS
})
export class ChartsLiveChartsModule {
    constructor(componentFactoryResolver: ComponentFactoryResolver, resolverService: ResolverService) {
        resolverService.registerResolver(componentFactoryResolver);
    }
}
