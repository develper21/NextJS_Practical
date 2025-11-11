// app/menu/page.js
import Link from "next/link";
import { menuItems } from "../../lib/data";

export default function MenuPage() {
  return (
    <div>
      <h2>Menu</h2>
      <p>Select an item to view details:</p>

      <ul>
        {menuItems.map((item) => (
          <li key={item.id} style={{ marginBottom: 10 }}>
            <Link href={`/menu/${item.id}`}>
              <strong>{item.name}</strong> — ₹{item.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
