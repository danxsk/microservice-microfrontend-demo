import { Component, Prop , Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'component-header',
  styleUrl: 'component-header.css',
  shadow: true
})
export class ComponentHeader {

  @Prop() title: string;

  @Event() userLoggedIn: EventEmitter;

  userLoggedInHandler() {
    this.userLoggedIn.emit("Daniel logged in");
  }


  render() {
    return (
      <div>
        <h3>{this.title}</h3>
        <br />        
        <button onClick={() => this.userLoggedInHandler()}>Test Custom event</button>
      </div>
    );
  }
}
