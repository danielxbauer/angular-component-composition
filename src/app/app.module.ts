import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
    CardComponent,
    CardTextComponent,
    ListAdvancedComponent,
    ListBasicComponent,
    QuoteAdvancedComponent,
    QuoteBasicComponent,
    QuoteContentComponent,
} from './components';

@NgModule({
    declarations: [
        AppComponent,
        QuoteBasicComponent,
        QuoteContentComponent,
        QuoteAdvancedComponent,
        CardComponent,
        CardTextComponent,
        ListAdvancedComponent,
    ListBasicComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
