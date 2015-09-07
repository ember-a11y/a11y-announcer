import Ember from 'ember';

export default Ember.Mixin.create({
  announcer: Ember.inject.service('announcer'),
  didTransition() {
    this._super(...arguments);

    Ember.run.later(this, () => {
      let pageTitle = Ember.$('title').html().trim();
      let message = `${pageTitle} has loaded`;

      this.get('announcer').announce(message, 'polite');
    }, 100);
  }
});
