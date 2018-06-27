import { TestWindow } from '@stencil/core/testing';
import { ComponentDemoincdec } from './component-demoincdec';

describe('component-demoincdec', () => {
  it('should build', () => {
    expect(new ComponentDemoincdec()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLComponentDemoincdecElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ComponentDemoincdec],
        html: '<component-demoincdec></component-demoincdec>'
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
