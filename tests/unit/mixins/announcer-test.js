import Ember from 'ember';
import AnnouncerMixin from '../../../mixins/announcer';
import { module, test } from 'qunit';

module('Unit | Mixin | announcer');

// Replace this with your real tests.
test('it works', function(assert) {
  var AnnouncerObject = Ember.Object.extend(AnnouncerMixin);
  var subject = AnnouncerObject.create();
  assert.ok(subject);
});
