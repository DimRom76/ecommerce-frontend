import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// here we received a callback from payment provider
export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get("Stripe-Signature") as string;

    // тут процесс обработки ответа от платежной системы
    // и меняем ордеру статус на оплаченный
}
