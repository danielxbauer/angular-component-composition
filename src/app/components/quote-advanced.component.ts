import { Component } from '@angular/core';

@Component({
    selector: 'app-quote-advanced',
    template: ` <figure class="text-center">
        <blockquote class="blockquote">
            <ng-content select="[slot=text]"></ng-content>
        </blockquote>
        <figcaption class="blockquote-footer">
            <ng-content select="[slot=author]"></ng-content>
        </figcaption>
    </figure>`,
})
export class QuoteAdvancedComponent {}
