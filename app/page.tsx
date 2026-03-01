import { RIKBA } from "@/content/rikba-content";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h1>{RIKBA.hero.title}</h1>

      <p
        style={{
          color: "#555",
          marginTop: 20,
          fontSize: 18,
        }}
      >
        {RIKBA.hero.subtitle}
      </p>

      <button
        style={{
          marginTop: 30,
          padding: "14px 26px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
        }}
      >
        {RIKBA.hero.primaryCTA}
      </button>
    </main>
  );
}
