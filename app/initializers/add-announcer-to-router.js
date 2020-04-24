
import { later, cancel } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Router from '../router';

export default {
  name: 'add-announcer-to-router',

  initialize() {

    Router.reopen({
      announcer: service('announcer'),

      init() {
        this._super(...arguments);

        this.on('routeDidChange', () => {
          this._timerId = later(() => {

            if (this.isDestroying || this.isDestroyed) { return; }

            let pageTitle = document.title.trim();
            let serviceMessage = this.get('announcer.message');
            let message = `${pageTitle} ${serviceMessage}`;

            this.get('announcer').announce(message, 'polite');
          }, 100);
        });
      },

      willDestroy() {
        cancel(this._timerId);
        this._super();
      }
    });

  }
};
