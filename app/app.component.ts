import {Component, Compiler, ViewContainerRef, ViewChild, ComponentRef, ComponentFactory, ComponentFactoryResolver} from '@angular/core';
import {MyTextComponent} from './mytext.component';

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <h2>Dynamicaly Add Elements</h2>
      <button (click)="addItem()">add hello</button>
      <div #placeholder></div>
    </div>
  `,
  entryComponents: [MyTextComponent]
})
export class AppComponent {
  @ViewChild('placeholder', {read: ViewContainerRef}) viewContainerRef;
  private componentFactory: ComponentFactory<any>;
  
  constructor(componentFactoryResolver: ComponentFactoryResolver, compiler: Compiler) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(MyTextComponent);
  }
  
  addItem () {
    var cmpRef = this.viewContainerRef.createComponent(this.componentFactory, 0);
    
    //cmpRef.instance.someObservable.subscribe(val => this. = val);
    this.addProperty(cmpRef);
  }

  addProperty(component: ComponentRef<MyTextComponent>) {
    component.instance.Message = 'Injected Value';
  }
}


