# Angular material design named tabs
A tiny module that enables tab selection by id within Angular 2+ and Material Design. This module adds support of the directives with attribute selectors `selectedTabName` and `tabName`. You can also to listen to a `selectedTabNameChange`-event that will be triggered upon tab switch. Please see the example below.

## Example
Component file:
```
import { Component, Input } from "@angular/core";

@Component({
    selector: "example-tabs",
    templateUrl: "./example-tabs.component.html",
})
export class TableDetailsComponent {
    @Input()
    public tab = "integer-nec";

    public handleTabChange(tab: string): void {
        console.log(`Tab selected: ${tab}`);
    }
}
```

### In the HTML-file:

```
<div>Active tab: {{tab}}</div>

<div>Two-way binding</div>
<mat-tab-group [(selectedTabName)]="tab">
    <mat-tab
            label="Lorem ipsum"
            tabName="lorem-ipsum">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus orci. Quisque sodales imperdiet nisi lobortis interdum. Vivamus ullamcorper metus at justo mattis, nec venenatis leo condimentum. Maecenas tincidunt placerat dapibus. Phasellus iaculis eros eget magna tincidunt, vitae tincidunt velit finibus. Quisque porta luctus enim vitae auctor. Maecenas porttitor, arcu sit amet blandit placerat, nibh lorem convallis ex, vel condimentum lectus nibh eu dui. Nunc porttitor lobortis velit, et molestie risus venenatis quis. Mauris ornare pellentesque arcu nec interdum. Suspendisse nec felis magna. Pellentesque finibus ex eu egestas dapibus. Proin dictum ultricies metus at fringilla. Donec lacinia congue ipsum ut pulvinar. Mauris ac justo commodo, pretium sem vitae, cursus elit.</p>
    </mat-tab>
    <mat-tab
            label="Integer nec"
            tabName="integer-nec">
        <p>Integer nec hendrerit nulla. Nam eu lacus congue, malesuada metus et, suscipit velit. Nam eget nulla nec tellus eleifend efficitur sed et neque. Etiam venenatis orci felis, ut porttitor felis elementum sit amet. Etiam tempus leo sed tempor fermentum. Vestibulum ac sagittis tellus. Mauris vestibulum dolor finibus dolor sagittis, ut gravida arcu pretium. Cras egestas tristique aliquet. Sed vel augue finibus, egestas sapien non, rutrum neque. Sed tellus dui, imperdiet eget imperdiet molestie, tincidunt ut dolor. Quisque at efficitur mauris, in feugiat massa. Aenean blandit condimentum lobortis.</p>
    </mat-tab>
    <mat-tab
            label="Sed nisl diam"
            tabName="sed-nisl-diam">
        <p>Sed nisl diam, condimentum scelerisque sem nec, viverra interdum risus. Fusce vulputate enim ex, et dapibus erat posuere quis. Proin non rhoncus quam. Sed vestibulum purus sit amet tempor laoreet. Phasellus varius sollicitudin dictum. Donec sollicitudin efficitur nunc et varius. Nunc neque elit, ultrices at eros eu, ultrices imperdiet erat.</p>
    </mat-tab>
</mat-tab-group>

<div>One-way binding</div>
<mat-tab-group [selectedTabName]="tab" (selectedTabNameChange)="handleTabChange($event)">
    <mat-tab
            label="Lorem ipsum"
            tabName="lorem-ipsum">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus orci. Quisque sodales imperdiet nisi lobortis interdum. Vivamus ullamcorper metus at justo mattis, nec venenatis leo condimentum. Maecenas tincidunt placerat dapibus. Phasellus iaculis eros eget magna tincidunt, vitae tincidunt velit finibus. Quisque porta luctus enim vitae auctor. Maecenas porttitor, arcu sit amet blandit placerat, nibh lorem convallis ex, vel condimentum lectus nibh eu dui. Nunc porttitor lobortis velit, et molestie risus venenatis quis. Mauris ornare pellentesque arcu nec interdum. Suspendisse nec felis magna. Pellentesque finibus ex eu egestas dapibus. Proin dictum ultricies metus at fringilla. Donec lacinia congue ipsum ut pulvinar. Mauris ac justo commodo, pretium sem vitae, cursus elit.</p>
    </mat-tab>
    <mat-tab
            label="Integer nec"
            tabName="integer-nec">
        <p>Integer nec hendrerit nulla. Nam eu lacus congue, malesuada metus et, suscipit velit. Nam eget nulla nec tellus eleifend efficitur sed et neque. Etiam venenatis orci felis, ut porttitor felis elementum sit amet. Etiam tempus leo sed tempor fermentum. Vestibulum ac sagittis tellus. Mauris vestibulum dolor finibus dolor sagittis, ut gravida arcu pretium. Cras egestas tristique aliquet. Sed vel augue finibus, egestas sapien non, rutrum neque. Sed tellus dui, imperdiet eget imperdiet molestie, tincidunt ut dolor. Quisque at efficitur mauris, in feugiat massa. Aenean blandit condimentum lobortis.</p>
    </mat-tab>
    <mat-tab
            label="Sed nisl diam"
            tabName="sed-nisl-diam">
        <p>Sed nisl diam, condimentum scelerisque sem nec, viverra interdum risus. Fusce vulputate enim ex, et dapibus erat posuere quis. Proin non rhoncus quam. Sed vestibulum purus sit amet tempor laoreet. Phasellus varius sollicitudin dictum. Donec sollicitudin efficitur nunc et varius. Nunc neque elit, ultrices at eros eu, ultrices imperdiet erat.</p>
    </mat-tab>
</mat-tab-group>
```