import { module, test } from 'qunit';
import { click, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | route announcer', function(hooks) {
  setupApplicationTest(hooks);

  module('setting different aria properties', function(hooks) {

    hooks.beforeEach(async function() {
      await visit('/');
      return await click('.spec-announce-btn');
    });

    test(`sets aria-live to 'assertive'`, function(assert) {
      assert.dom('.spec-announcer').hasAttribute('aria-live', 'assertive');
    });

    test('sets the content of the div', function(assert) {
      assert.dom('.spec-announcer').hasText('This is a test');
    });

  });

  module('changing the route change message', function(hooks) {
    hooks.beforeEach(async function() {
      this.owner.lookup('service:announcer').set('message', 'has finished loading');
      return await visit('/');
    });

    test('updates the message', function(assert) {
      assert.dom('.spec-announcer').hasText( 'Index title has finished loading');
    });

  });

  module(`visiting the 'another' route`, function(hooks) {
    hooks.beforeEach(async function() {
      return await visit('/another');
    });

    test('pushes changes to the div', function(assert) {
      assert.dom('.spec-announcer').hasText('Another title has loaded');
    });
  });

  module(`visiting the 'index' route`, function(hooks) {
    hooks.beforeEach(async function() {
      return await visit('/');
    });

    test('pushes changes to the div', function(assert) {
      assert.dom('.spec-announcer').hasText('Index title has loaded');
    });
  });

});
