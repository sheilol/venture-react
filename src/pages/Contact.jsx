import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      // simple local demo: send to your API endpoint here, or fallback to mailto
      // Replace with real API call if available.
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
      console.log("Contact form submit:", form);
      setTimeout(() => setStatus("sent"), 600); // simulate network
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <>
      <div className="home_div">
        <h2>Contact Us</h2>
        <p>
          For enquiries, please use the form or the contact panel below. We will respond as soon as possible.
        </p>
      </div>

      <footer className="contact-footer" role="contentinfo">
        <div className="contact-panel">
          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            <label>
              Name
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-label="Name"
              />
            </label>

            <label>
              Email *
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                aria-required="true"
                aria-label="Email"
              />
            </label>

            <label>
              Message *
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                rows={4}
                required
                aria-required="true"
                aria-label="Message"
              />
            </label>

            <div className="form-row">
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              <div className="form-status" aria-live="polite">
                {status === "sent" && <span className="ok">Message sent. Thank you.</span>}
                {status === "error" && <span className="err">Please fill required fields or try again.</span>}
              </div>
            </div>
          </form>

          <aside className="contact-info" aria-label="Contact information">
            <h3>Contact Info</h3>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:+919821860220">+91 9821 860 220</a>
              <br />
              <a href="tel:+911098765432">+91 1098 765 432</a>
            </p>

            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:suchir.pathare@gmail.com">suchir.pathare@gmail.com</a>
            </p>

            <p>
              <strong>Office:</strong>
              <br />
              Mumbai, India
            </p>

            
          </aside>
        </div>
      </footer>

      <style>{`
        .contact-footer {
          background: #1f1f1f;
          color: #fff;
          padding: 28px 18px;
        }

        .contact-panel {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          gap: 28px;
          align-items: flex-start;
        }

        .contact-form {
          flex: 1 1 60%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-form label {
          display: flex;
          flex-direction: column;
          font-size: 0.95rem;
          color: #ddd;
        }

        .contact-form input,
        .contact-form textarea {
          margin-top: 8px;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
          color: #fff;
          font: inherit;
          outline: none;
        }
        .contact-form input::placeholder,
        .contact-form textarea::placeholder { color: rgba(255,255,255,0.4); }

        .form-row {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .contact-form button {
          background: #84c125;
          color: #0b0b0b;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: transform .12s ease, box-shadow .12s ease;
        }
        .contact-form button:disabled { opacity: 0.6; cursor: default; transform: none; }
        .contact-form button:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(132,193,37,0.18); }

        .form-status { font-size: 0.9rem; color: #fff; }
        .form-status .err { color: #ff6b6b; }
        .form-status .ok { color: #b6f08e; }

        .contact-info {
          flex: 0 0 300px;
          background: rgba(255,255,255,0.02);
          padding: 14px;
          border-radius: 10px;
          color: #e8e8e8;
          font-size: 0.95rem;
          line-height: 1.45;
        }
        .contact-info h3 { margin-top: 0; color: #84c125; }

        .contact-info a { color: #cfeab0; text-decoration: none; }
        .contact-info a:hover { text-decoration: underline; }

        /* responsive: stack on small screens */
        @media (max-width: 880px) {
          .contact-panel { flex-direction: column; padding: 0 6px; }
          .contact-info { width: 100%; flex: none; }
        }
      `}</style>
    </>
  );
}