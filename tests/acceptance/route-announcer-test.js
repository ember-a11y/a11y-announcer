/* jshint expr:true */
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

describe('Acceptance: RouteAnnouncer', function() {
  var application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  describe("setting different aria properties", function() {
    beforeEach(function() {
      visit('/');
      return click('.spec-announce-btn');
    });

    it("sets aria-live to 'assertive'", function() {
      expect($('.spec-announcer').attr('aria-live')).to.equal('assertive');
    });

    it("sets the content of the div", function() {
      expect($('.spec-announcer').html().trim()).to.equal('This is a test');
    });
  });

  describe("visiting the 'another' route", function() {
    beforeEach(function() {
      return visit('/another');
    });

    it('pushes changes to the div', function() {
      expect($('.spec-announcer').html().trim()).to.equal('Another title has loaded');
    });
  });

  describe("visiting the 'index' route", function() {
    beforeEach(function() {
      return visit('/');
    });

    it('pushes changes to the div', function() {
      expect($('.spec-announcer').html().trim()).to.equal('Index title has loaded');
    });
  });

});
