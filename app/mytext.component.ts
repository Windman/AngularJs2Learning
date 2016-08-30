import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-text',
    template: `
        <p><input type = "text" value = "{{Message}}"></p>
    `
})
export class MyTextComponent { 
    @Input()
    Message: string;
}