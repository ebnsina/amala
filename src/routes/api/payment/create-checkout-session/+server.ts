import { json, type RequestHandler } from '@sveltejs/kit';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2025-06-30.basil'
});

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { cartItems, shippingInfo } = await request.json();

    const line_items = cartItems.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100)
      },
      quantity: item.quantity
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `${request.headers.get('origin')}/success`,
      cancel_url: `${request.headers.get('origin')}/cancel`,
    });

    return json({ sessionId: session.id }, { status: 200 });
  } catch (error) {
    return json({ error: (error as Error).message }, { status: 500 });
  }
};
