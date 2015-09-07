import Ember from 'ember';
import layout from '../templates/components/route-announcer';

export default Ember.Component.extend({
  announcer: Ember.inject.service('announcer'),
  layout: layout,
  classNames: ['screen-reader'],
  attributeBindings: ['ariaLive:aria-live'],
  ariaLive: Ember.computed('tone', function() {
    return this.get('announcer').getWithDefault('announceTone', 'polite');
  }),
  tone: Ember.computed.alias('announcer.announceTone'),
  message: Ember.computed.alias('announcer.announceMessage')
});
