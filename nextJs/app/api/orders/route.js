// app/api/orders/route.js
import { NextResponse } from "next/server";
import { orders, nextOrderId } from "../../../lib/data";

/**
 * GET /api/orders
 * Returns the list of orders (JSON)
 */
export async function GET() {
  // Return current orders
  return NextResponse.json(orders);
}

/**
 * POST /api/orders
 * Body: { itemId, itemName, quantity }
 * Creates a new order and returns it.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    if (!body || !body.itemId || !body.itemName) {
      return NextResponse.json({ message: "Invalid request: itemId and itemName are required" }, { status: 400 });
    }

    const newOrder = {
      id: nextOrderId(),
      itemId: body.itemId,
      itemName: body.itemName,
      quantity: Number(body.quantity || 1),
      status: "received",
      createdAt: new Date().toISOString()
    };

    orders.push(newOrder);

    return NextResponse.json({ message: "Order created successfully", newOrder }, { status: 201 });
  } catch (err) {
    console.error("POST /api/orders error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
