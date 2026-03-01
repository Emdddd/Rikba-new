import { RIKBA } from "@/content/rikba-content";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "20px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        background: "#fff",
        zIndex: 10,
      }}
    >
      <strong>{RIKBA.brand.name}</strong>

      <div style={{ display: "flex", gap: 20 }}>
        <a href="#why">Why</a>
        <a href="#waitlist">Waitlist</a>
        <a href="#faq">FAQ</a>
      </div>
    </nav>
  );
}
