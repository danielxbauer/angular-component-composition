import {
    Component,
    ContentChild,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-list-advanced',
    template: `
        <ul class="list-group mb-3 mb-3">
            <li class="list-group-item" *ngFor="let item of items">
                <!-- NOTE: It's also possible to just check with a ngIf if the template is set. This sample is to illustrate how the ViewChild annotation could be used -->
                <ng-container
                    *ngTemplateOutlet="
                        itemTemplate ?? defaultItemTemplate;
                        context: { $implicit: item }
                    "
                ></ng-container>
            </li>
        </ul>

        <ng-template #defaultItemTemplate let-item>{{ item }}</ng-template>
    `,
})
export class ListAdvancedComponent<Item> {
    @Input() items: Item[] = [];

    @ContentChild('item', { static: true })
    itemTemplate: TemplateRef<Item> | null = null;

    @ViewChild('defaultItemTemplate', { static: true })
    defaultItemTemplate: TemplateRef<Item> | null = null;
}
