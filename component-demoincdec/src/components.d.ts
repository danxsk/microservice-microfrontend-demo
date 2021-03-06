/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface ComponentDemoincdec {
      'first': string;
      'last': string;
      'max': number;
      'min': number;
      'start': number;
      'step': number;
    }
  }

  interface HTMLComponentDemoincdecElement extends StencilComponents.ComponentDemoincdec, HTMLStencilElement {}

  var HTMLComponentDemoincdecElement: {
    prototype: HTMLComponentDemoincdecElement;
    new (): HTMLComponentDemoincdecElement;
  };
  interface HTMLElementTagNameMap {
    'component-demoincdec': HTMLComponentDemoincdecElement;
  }
  interface ElementTagNameMap {
    'component-demoincdec': HTMLComponentDemoincdecElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'component-demoincdec': JSXElements.ComponentDemoincdecAttributes;
    }
  }
  namespace JSXElements {
    export interface ComponentDemoincdecAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
      'max'?: number;
      'min'?: number;
      'start'?: number;
      'step'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;