/**
@license
Copyright 2017 Mulesoft.

All rights reserved.
*/
import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';
/**
 * **Note:** This is closed software and you can't use it in your projects unless
 * you are a Mulesoft employee working on internall project.
 *
 * Use `AnypointHoverableMixin` to implement an element that can be hovered.
 * The control will get a `hovered` attribute when it's hovered by the poiting devide.
 *
 * Be aware that mobile devices will not support hovering as desktop devices and behavior
 * may vary depending on platform. You should use this as little as possible.
 *
 * @polymer
 * @mixinFunction
 * @memberof Anypoint
 */
export const AnypointHoverableMixin = dedupingMixin((base) => {
  /**
   * @polymer
   * @mixinClass
   */
  class AnypointHoverableMixin extends base {
    static get properties() {
      return {
        /**
         * Set to `true` when the control is currently being hovered.
         */
        hovered: {
          type: Boolean,
          notify: true,
          reflectToAttribute: true
        }
      };
    }
    /**
     * @constructor
     */
    constructor() {
      super();
      this._hoverCallback = this._hoverCallback.bind(this);
      this._leaveCallback = this._leaveCallback.bind(this);
    }
    /**
     * Registers hover listeners
     */
    connectedCallback() {
      super.connectedCallback();
      afterNextRender(this, () => {
        this.addEventListener('mouseover', this._hoverCallback);
        this.addEventListener('mouseleave', this._leaveCallback);
      });
    }
    /**
     * Removes hover listeners
     */
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener('mouseover', this._hoverCallback);
      this.removeEventListener('mouseleave', this._leaveCallback);
    }
    /**
     * Set's the `hovered` attribute to true when handled.
     */
    _hoverCallback() {
      this.hovered = true;
    }
    /**
     * Updates `hovered` if the control is not hovered anymore.
     */
    _leaveCallback() {
      this.hovered = false;
    }
  }
  return AnypointHoverableMixin;
});
