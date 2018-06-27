import { Component, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'component-demoincdec',
  styleUrl: 'component-demoincdec.css',
  shadow: true
})
export class ComponentDemoincdec {

  @Prop() first: string;
  @Prop() last: string;


  @State() value: number;
  @Prop() start: number = 0;
  @Prop() max: number = 5;
  @Prop() min: number = -5;
  @Prop() step: number = 1;

  componentWillLoad() {
    this.value = this.start;
  }

  @Listen('body:userLoggedIn') todoCompletedHandler() {
    this.increment();
  }

  increment() {
    const newValue = this.value + this.step;
    if (newValue > this.max) {
      this.value = this.max;
    } else {
      this.value = newValue;
    }
  }

  decrement() {
    const newValue = this.value - this.step;
    if (newValue < this.min) {
      this.value = this.min;
    } else {
      this.value = newValue;
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, I'm {this.first}</h1>
        <h2> {this.last}</h2>

        <h3>Value: {this.value}</h3>
        <br /><br />
        <button type="button" onClick={() => this.increment()}>increment + </button>
        <span> </span>
        <button type="button" onClick={() => this.decrement()}>decrement - </button>
      </div>
    );
  }
}
