import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  title: "Index title",
  announcer: service('announcer'),

  actions: {
    announceSomething() {
      this.get('announcer').announce('This is a test', 'assertive');
    }
  }
});
