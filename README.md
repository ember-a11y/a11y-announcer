# A11y-announcer

### Getting Started

- `ember install a11y-announcer`
- In your `router.js` import the mixin:
```js
import A11yAnnouncer from 'a11y-announcer/mixins/announcer';

var Router = Ember.Router.extend(A11yAnnouncer, {...});
```
- Add `{{route-announcer}}` to your `application.hbs` file

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
