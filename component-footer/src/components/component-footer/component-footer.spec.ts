import { TestWindow } from '@stencil/core/testing';
import { ComponentFooter } from './component-footer';

describe('component-footer', () => {
  it('should build', () => {
    expect(new ComponentFooter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLComponentFooterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ComponentFooter],
        html: '<component-footer></component-footer>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    });

    it('should work with a first name', async () => {
      element.first = 'Peter';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    });

    it('should work with a last name', async () => {
      element.last = 'Parker';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    });

    it('should work with both a first and a last name', async () => {
      element.first = 'Peter';
      element.last = 'Parker';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    });
  });
});
