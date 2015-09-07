import Ember from 'ember';
import layout from '../templates/components/route-announcer';

export default Ember.Component.extend({
  layout: layout,
  announcer: Ember.inject.service('announcer'),
  tone: Ember.computed.alias('announcer.announceTone'),
  message: Ember.computed.alias('announcer.announceMessage')
});
