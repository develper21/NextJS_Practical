    // app/api/orders/[orderId]/route.js
import { NextResponse } from "next/server";
import { orders } from "../../../../lib/data";

/**
 * GET /api/orders/[orderId]
 * Returns order JSON or 404
 */
export async function GET(request, { params }) {
  const orderId = params.orderId;
  const order = orders.find((o) => o.id.toString() === orderId);
  if (!order) {
    return NextResponse.json({ message: "Order not found" }, { status: 404 });
  }
  return NextResponse.json(order);
}

/**
 * PATCH /api/orders/[orderId]
 * Body: partial update e.g. { status: "delivered", quantity: 2 }
 */
export async function PATCH(request, { params }) {
  try {
    const orderId = params.orderId;
    const idx = orders.findIndex((o) => o.id.toString() === orderId);
    if (idx === -1) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    const updates = await request.json();
    // apply allowed updates
    const allowed = ["status", "quantity"];
    for (const key of Object.keys(updates || {})) {
      if (allowed.includes(key)) {
        if (key === "quantity") orders[idx][key] = Number(updates[key]);
        else orders[idx][key] = updates[key];
      }
    }

    return NextResponse.json({ message: "Order updated", order: orders[idx] });
  } catch (err) {
    console.error("PATCH /api/orders/[orderId] error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
