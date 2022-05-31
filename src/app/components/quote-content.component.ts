import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-quote-content',
    template: `
        <figure class="text-center">
            <blockquote class="blockquote">
                <ng-content></ng-content>
            </blockquote>
            <figcaption class="blockquote-footer">{{ author }}</figcaption>
        </figure>`,
})
export class QuoteContentComponent {
    @Input() author: string | null = null;
}
