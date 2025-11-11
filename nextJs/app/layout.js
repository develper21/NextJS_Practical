// app/layout.js
export const metadata = {
  title: 'Online Ordering System',
  description: 'Food ordering flow using Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20 }}>
        <header style={{ marginBottom: 20 }}>
          <h1 style={{ margin: 0 }}>🍔 Online Ordering System</h1>
          <p style={{ marginTop: 6, color: '#444' }}>App Router demo — Menu, item detail and order APIs</p>
          <hr style={{ marginTop: 12 }} />
        </header>

        <main>{children}</main>

        <footer style={{ marginTop: 36, borderTop: '1px solid #eee', paddingTop: 12, color: '#666' }}>
          Demo for practical — in-memory data; for production connect DB.
        </footer>
      </body>
    </html>
  );
}
