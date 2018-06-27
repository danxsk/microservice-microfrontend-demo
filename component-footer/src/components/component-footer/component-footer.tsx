import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'component-footer',
  styleUrl: 'component-footer.css',
  shadow: true
})
export class ComponentFooter {

  @Prop() first: string;
  @Prop() last: string;

  @Listen('body:userLoggedIn')  todoCompletedHandler(event: CustomEvent) {
    console.log('FooterReceived the custom todoCompleted event: ', event.detail);
  }

  render() {
    return (
      <div>
       footer component ...
      </div>
    );
  }
}
