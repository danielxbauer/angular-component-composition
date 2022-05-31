import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">
                    <ng-content select="[slot=head]"></ng-content>
                </h5>
                <ng-content select="[slot=body]"></ng-content>
            </div>
        </div>
    `,
})
export class CardComponent {}

@Component({
    selector: 'app-card-text',
    template: `
        <p class="card-text">
            <ng-content></ng-content>
        </p>
    `,
})
export class CardTextComponent {}
