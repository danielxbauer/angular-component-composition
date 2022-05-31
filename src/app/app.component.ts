import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <h1>Quotes</h1>

            <div class="mb-4">
                <h2>Basic Quote</h2>
                <p>Component with @Input and @Output</p>
                <app-quote-basic
                    text="Life is like riding a bicycle. To keep your balance you must keep moving."
                    author="Albert Einstein"
                ></app-quote-basic>
            </div>

            <div class="mb-4">
                <h2>Content Quote</h2>
                <p>Component with ng-content</p>
                <app-quote-content author="Albert Einstein">
                    Life is like riding a bicycle. To keep your balance you must
                    keep moving.
                </app-quote-content>

                <app-quote-content author="Albert Einstein">
                    <b>Life is like riding a bicycle.</b> To keep your balance
                    you must keep moving.
                </app-quote-content>
            </div>

            <div class="mb-4">
                <h2>Advanced Quote</h2>
                <p>Using multiple ng-content</p>
                <app-quote-advanced>
                    <div slot="text">
                        Life is like riding a bicycle. To keep your balance you
                        must keep moving.
                    </div>
                    <div slot="author">Albert Einstein</div>
                </app-quote-advanced>

                <app-quote-advanced>
                    <div slot="text">
                        <b>Life is like riding a bicycle.</b> To keep your
                        balance you must keep moving.
                    </div>
                    <div slot="author">
                        Albert Einstein in
                        <cite title="Source">a famous book</cite>
                    </div>
                </app-quote-advanced>
            </div>

            <div class="mb-4">
                <h2>Using ng-container</h2>
                <app-quote-advanced>
                    <ng-container slot="text">
                        <b>Life is like riding a bicycle.</b> To keep your
                        balance you must keep moving.
                    </ng-container>
                    <ng-container slot="author">
                        Albert Einstein in
                        <cite title="Source">a famous book</cite>
                    </ng-container>
                </app-quote-advanced>
            </div>

            <h1>Card</h1>
            <app-card>
                <ng-container slot="head"> Card Title </ng-container>
                <app-card-text slot="body">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </app-card-text>
            </app-card>

            <h1>List</h1>
            <h2>List with ng-template</h2>
            <app-list-basic [items]="persons">
                <!-- NOTE: item is any typed :/ -->
                <ng-template #item let-item>
                    {{ item.firstName }}
                    <b>{{ item.lastName }}</b>
                </ng-template>
            </app-list-basic>

            <h2>List with default template</h2>
            <app-list-advanced [items]="names"></app-list-advanced>

            <app-list-advanced [items]="names">
                <ng-template #item let-name>
                    <b>{{ name }}</b>
                </ng-template>
            </app-list-advanced>
        </div>
    `,
})
export class AppComponent {
    public persons = [
        { firstName: 'Bill', lastName: 'Gates' },
        { firstName: 'Steve', lastName: 'Jobs' },
        { firstName: 'Albert', lastName: 'Einstein' },
    ];

    public names = ['Tobias', 'Christoph', 'Daniel'];
}
