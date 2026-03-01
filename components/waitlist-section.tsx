export default function WaitlistSection() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2>Waitlist Section</h2>

      <p>
        Waitlist placeholder content.
      </p>

      <form>
        <input
          type="email"
          placeholder="your@email.com"
          style={{
            padding: "12px",
            marginTop: "20px",
            width: "260px",
          }}
        />

        <br />

        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Join Waitlist
        </button>
      </form>
    </section>
  );
}
