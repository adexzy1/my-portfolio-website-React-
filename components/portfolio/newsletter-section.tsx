"use client";
import type { FormEvent } from "react";
import { toast } from "sonner";

export function NewsletterSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert("Subscription received!");
    toast("Subscription received!", {
      duration: 3000,
      description: "Thanks for signing up. I'll send updates soon.",
      action: { label: "Close", onClick: () => toast.dismiss() },
    });
    event.currentTarget.reset();
  };

  return (
    <section className="newsletter animate-on-scroll">
      <div className="container">
        <div className="newsletter-inner">
          <h2>Stay Updated</h2>
          <p>
            Get insights on design, development, and product thinking delivered
            to your inbox.
          </p>
          <form className="form-group" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button type="submit" className="btn-subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
