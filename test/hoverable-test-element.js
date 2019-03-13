import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {AnypointHoverableMixin} from '../anypoint-hoverable-mixin.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @appliesMixin Anypoint.HoverableBehavior
 */
class TestElement extends AnypointHoverableMixin(PolymerElement) {
  static get template() {
    return html`
    <style>
    :host {
      display: block;
      height: 100px;
      width: 100px;
      background-color: red;
    }
    </style>
    <h1>Hoverable behavior</h1>
`;
  }

  static get is() {
    return 'test-element';
  }
}
window.customElements.define(TestElement.is, TestElement);
