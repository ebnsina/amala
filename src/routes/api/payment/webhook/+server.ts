import stripe from '$lib/server/stripe';
import { json, type RequestHandler } from '@sveltejs/kit';
import type Stripe from 'stripe';

export const POST: RequestHandler = async ({ request }) => {
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET!;
  const payload = await request.arrayBuffer();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      Buffer.from(payload),
      signature,
      webhookSecret
    );
  } catch (err) {
    return json({ error: (err as Error).message }, { status: 400 });
  }

  // Handle event types
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('PaymentIntent succeeded:', paymentIntent.id);
      // TODO: fulfill order, update DB
      break;

    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('Checkout session completed:', session.id);
      // TODO: fulfill order, update DB
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return json({ received: true }, { status: 200 });
};
