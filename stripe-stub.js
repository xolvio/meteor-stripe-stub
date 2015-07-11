if (Meteor.isClient) {

  Meteor.methods({
    // these client side methods leverage latency compensation to call the server method as well.
    // So to stub stripe on both the client and server, you ony have to call the client side method.
    // It's a fancy shortcut that results in less test code
    'stripeStub/stub': function (customer) {
      StripeCheckout.__open = StripeCheckout.open;
      StripeCheckout.open = function (obj) {
        var testToken = {
          email: customer.email
        };
        obj.token(testToken);
      }
    },
    'stripeStub/restore': function () {
      StripeCheckout.open = StripeCheckout.__open;
    }
  });

} else {

  Meteor.methods({
    'stripeStub/stub': function (customer) {

      Stripe.customers.__create = Stripe.customers.create;
      Stripe.customers.create = function (options, callback) {
        callback(null, customer);
      };

      Stripe.charges.__create = Stripe.charges.create;
      Stripe.charges.create = function (options, callback) {
        callback(null, customer);
      };

    },
    'stripeStub/restore': function () {
      Stripe.customers.create = Stripe.customers.__create;
      Stripe.charges.create = Stripe.charges.__create;
    }
  });

}