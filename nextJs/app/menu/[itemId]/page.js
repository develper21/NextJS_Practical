// app/menu/[itemId]/page.js
import { menuItems } from "../../../lib/data";
import Link from "next/link";

export default function ItemDetails({ params }) {
  const itemId = params.itemId;
  const item = menuItems.find((i) => i.id.toString() === itemId);

  if (!item) {
    return (
      <div>
        <h3>Item not found</h3>
        <p>The item id <code>{itemId}</code> does not exist.</p>
        <Link href="/menu">Back to menu</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p><strong>Price:</strong> ₹{item.price}</p>
      <p>{item.description}</p>

      {/* Simple order form that calls the orders API (client-side) */}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const qty = Number(form.quantity.value || 1);

          try {
            const res = await fetch('/api/orders', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                itemId: item.id,
                itemName: item.name,
                quantity: qty
              })
            });

            const data = await res.json();
            if (res.ok) {
              alert('Order placed! Order id: ' + data.newOrder.id);
              form.reset();
            } else {
              alert('Error: ' + (data?.message || 'unknown'));
            }
          } catch (err) {
            console.error(err);
            alert('Network error');
          }
        }}
        style={{ marginTop: 12 }}
      >
        <label>
          Quantity:
          <input name="quantity" type="number" defaultValue={1} min={1} style={{ width: 60, marginLeft: 8 }} />
        </label>

        <div style={{ marginTop: 10 }}>
          <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>Order Now 🛒</button>
          <Link href="/menu" style={{ marginLeft: 12 }}>
            <button type="button" style={{ padding: '8px 12px', marginLeft: 12 }}>Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
