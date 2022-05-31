import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-quote-basic',
    template: `
        <figure class="text-center">
            <blockquote class="blockquote">{{ text }}</blockquote>
            <figcaption class="blockquote-footer">{{ author }}</figcaption>
        </figure>
    `,
})
export class QuoteBasicComponent {
    @Input() text: string | null = null;
    @Input() author: string | null = null;
}

