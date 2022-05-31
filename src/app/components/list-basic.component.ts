import {
    Component,
    ContentChild,
    Input,
    OnInit,
    TemplateRef,
} from '@angular/core';

@Component({
    selector: 'app-list-basic',
    template: `
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let item of items">
                <!-- NOTE: ng-content would not work here! -->
                <!-- <ng-content></ng-content> -->

                <ng-container
                    *ngTemplateOutlet="
                        itemTemplate;
                        context: { $implicit: item }
                    "
                ></ng-container>
            </li>
        </ul>
    `,
})
export class ListBasicComponent<Item> implements OnInit {
    @Input() items: Item[] = [];

    @ContentChild('item', { static: true })
    itemTemplate: TemplateRef<Item> | null = null;

    ngOnInit(): void {
        console.log(this.itemTemplate);
    }
}
