#xolvio:stripe-stub

Overrides Stripes client and server methods to allow testing. The stub is based on `mrgalaxy:stripe` 
package and may work with others. 

#Get the Book
To learn more about testing with Meteor, consider purchasing our book [The Meteor Testing Manual](http://www.meteortesting.com/?utm_source=inbox-stub&utm_medium=banner&utm_campaign=stripe-stub).

[![](http://www.meteortesting.com/img/tmtm.gif)](http://www.meteortesting.com/?utm_source=inbox-stub&utm_medium=banner&utm_campaign=inbox-stub)

Your support helps us continue our work on Velocity and related frameworks.

###Installation

`meteor add xolvio:stripe-stub`

###Usage

This package expects you to expose a global `Stripe` object on the server like this:

```
Stripe = StripeAPI('your secret key');
```

TODO

If using in an end-to-end test like cucumber, you can use it this way:

```
// stub the client & server stubs
this.browser.executeAsync(function (done) {Meteor.call('stripeStub/stub', {email: 'me@example.com'}, done)}).
```

This will stub both the client and server portion of Stripe and allow you to exercise your code without needing a connection to Stripe.

See [Letterpress](https://github.com/xolvio/Letterpress/) for an example.

This package is a `debugOnly` package and will only be used when developing
locally.
