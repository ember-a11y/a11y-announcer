import $ from 'jquery';
import { later, cancel } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Router from '../router';

export default {
  name: 'add-announcer-to-router',
  initialize: function() {
    Router.reopen({
      announcer: service('announcer'),
      didTransition: function() {
        this._super(...arguments);

        this._timerId = later(() => {
          if (this.isDestroying || this.isDestroyed) { return; }

          let pageTitle = $('title').html().trim();
          let serviceMessage = this.get('announcer.message');
          let message = `${pageTitle} ${serviceMessage}`;

          this.get('announcer').announce(message, 'polite');
        }, 100);
      },

      willDestroy() {
        cancel(this._timerId);
        this._super();
      }
    });
  }
};
