import Ember from 'ember';

export default Ember.Route.extend({
  title: "Index title",
  announcer: Ember.inject.service('announcer'),

  actions: {
    announceSomething() {
      this.get('announcer').announce('This is a test', 'assertive');
    }
  }
});
