import Ember from 'ember';

export default Ember.Service.extend({
  announceMessage: null,
  announceTone: 'polite',
  announce: function(message, tone) {
    this.setProperties({
      announceMessage: message,
      announceTone: tone
    });
  }
});
