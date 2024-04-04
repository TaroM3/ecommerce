import { Router } from 'express';
import Stripe from 'stripe';
import config from '../config.js';

const router = new Router();

const stripe = Stripe(
  'sk_test_51NnLTWGHs0Uv1JKU9jMmDpAEHzd96aNoK4TjAc2uAzQZBLMOwVhQpYjua8CWeoFfd79LKuu45jdHC0vXwn1zRU9I00NO1u2kqR'
);

router.post('/intent', async (req, res) => {
  const customer = await stripe.customers.create();

  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2023-08-16' }
  );

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
      customer: customer.id,
      payment_method_types: ['card'],
      // automatic_payment_methods: {
      //   enabled: true,
      // },
    });

    console.log('pending...');
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    });
  } catch (error) {
    console.log('Error...');
    res.status(400).json({
      error: error.message,
    });
  }
});

export default router;
