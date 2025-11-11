// lib/data.js
// Simple in-memory data store for demo/practical.
// NOTE: Not persistent across server restarts or serverless cold starts.

export const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 299, description: "Classic cheese pizza with tomato base." },
  { id: 2, name: "Paneer Burger", price: 199, description: "Grilled paneer patty with lettuce & sauce." },
  { id: 3, name: "Pasta Alfredo", price: 249, description: "Creamy white sauce pasta with herbs." }
];

// Start with a couple of demo orders
export const orders = [
  { id: 1, itemId: 1, itemName: "Margherita Pizza", quantity: 2, status: "received" },
  { id: 2, itemId: 2, itemName: "Paneer Burger", quantity: 1, status: "preparing" }
];

// helper to generate new id
export function nextOrderId() {
  return orders.length ? Math.max(...orders.map(o => o.id)) + 1 : 1;
}
