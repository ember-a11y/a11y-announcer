# A11y-announcer
[![Build Status](https://travis-ci.org/ember-a11y/a11y-announcer.svg?branch=master)](https://travis-ci.org/ember-a11y/a11y-announcer)
[![npm version](https://badge.fury.io/js/a11y-announcer.svg)](http://badge.fury.io/js/a11y-announcer)

This addon is to allow for accessible route changes inside of your ember application.
Currently when you change a route in ember nothing alerts a screen reader that the route
has changed. This is very bad and screen reader users hear nothing but silence.

The goal for this addon is to fill the gaps in embers router. Thank you to
@patrickfox [for the idea!](https://vimeo.com/117614181)

## How does it work?
The basic idea of this addon is to announce the new page title on every route
change. This means the page title _needs_ to change on every route. If it's
routable, it's different enough to warrant a title change.

I use [ember-cli-document-title](https://github.com/kimroen/ember-cli-document-title) to help me with manging the title of each route.

### Getting Started

- `ember install a11y-announcer`
- Add `{{route-announcer}}` to your `application.hbs` file.

#### Pushing updates to the announcer

Sometimes you want to push an announcement of some sort to the announcer.
To do that you need to inject the announcer service:

```js
export default Ember.Controller.extend({
  announcer: Ember.inject.service('announcer')
})
```

Now that the service has been injected you can call the `announce` method:
`this.get('announcer').announce('Your Message', 'polite');`

It takes two arguments. The first argument is the message that you want to be
read off by the screen reader. The second argument is how aggressively the message
will be read off. There are three different strings you can pass here:

- _off_ which means nothing will be read
- _polite_ which will not interrupt the screen reader
- _assertive_ which will immediately interrupt the screen reader

#### Changing the route change message

To change the route has changes message from `${pageTitle} has loaded` to
something custom (for example `${pageTitle} has finished loading`) you will
need to edit your `Router` in `router.js`:

```js
var Router = Ember.Router.extend({
  location: config.locationType
  announcer: Ember.inject.service('announcer'),

<<<<<<< HEAD
  init() {
    this.super(...arguments);

    this.set('announcer.message', 'has finished loading');
  }
});
```
---
### Installation

* `git clone` this repository
* `npm install` or `yarn`

### Linting

* `ember server`
* Visit your app at http://localhost:4200.

### Running tests

* `ember test`
* `ember test --server`

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
=======
License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
>>>>>>> dbd8b6e... v3.0.2...v3.6.0
