# A11y-announcer

This addon is to allow for accessible route changes inside of your ember application.
Currently when you change a route, nothing alerts a screen reader that the route
has changed. This is very bad, screen reader users just hear silence.

The goal for this addon is to fill the gaps in embers router. Thank you to
@patrickfox [for the idea!](https://vimeo.com/117614181)

### Getting Started

- `ember install a11y-announcer`
- In your `router.js`file import the mixin:
```js
import A11yAnnouncer from 'a11y-announcer/mixins/announcer';

var Router = Ember.Router.extend(A11yAnnouncer, {...});
```
- Add `{{route-announcer}}` to your `application.hbs` file.

#### Pushing updates to the announcer

Sometimes you want to push an announcement of some sort to the announcer.
To do that you need to inject the announcer service:

```js
export default Ember.Controller.exten({
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
