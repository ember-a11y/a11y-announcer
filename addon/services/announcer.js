import Service from '@ember/service';

export default Service.extend({
  message: 'has loaded',
  announceMessage: null,
  announceTone: 'polite',

  announce: function(message, tone) {
    this.setProperties({
      announceMessage: message,
      announceTone: tone
    });
  }
});
