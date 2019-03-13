/**
@license
Copyright 2016 Mulesoft.

All rights reserved.
*/
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {AnypointHoverableMixin} from '../anypoint-hoverable-mixin.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

class HoverableElement extends AnypointHoverableMixin(PolymerElement) {
  static get template() {
    return html`
    <style>
    :host {
      display: inline-block;;
      vertical-align: middle;
      width: 120px;
      height: 120px;
      margin: 20px;
      border: 1px #989A9B solid;
    }

    :host([hovered]) {
      background-color: #17BC65;
    }

    .hovered {
      display: none;
    }

    .not-hovered {
      display: block;
    }

    :host([hovered]) .hovered {
      display: block;
    }

    :host([hovered]) .not-hovered {
      display: none;
    }

    span {
      text-align: center;
    }
    </style>
    <span class="hovered">Hovered</span>
    <span class="not-hovered">Not hovered</span>
    <content></content>
`;
  }

  static get is() {
    return 'hoverable-element';
  }
}
window.customElements.define(HoverableElement.is, HoverableElement);
