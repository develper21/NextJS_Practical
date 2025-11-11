// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Welcome to the Food Delivery App</h2>
      <p>Practical demo: menu listing + dynamic item details + order APIs.</p>

      <div style={{ marginTop: 16 }}>
        <Link href="/menu">
          <button style={{ padding: '8px 14px', cursor: 'pointer' }}>View Menu 🍽️</button>
        </Link>
      </div>

      <section style={{ marginTop: 28 }}>
        <h3>API endpoints (for reference)</h3>
        <ul>
          <li><code>GET /api/orders</code> — list all orders</li>
          <li><code>POST /api/orders</code> — create an order</li>
          <li><code>GET /api/orders/[orderId]</code> — get single order</li>
          <li><code>PATCH /api/orders/[orderId]</code> — update order (e.g., status)</li>
        </ul>
      </section>
    </div>
  );
}
