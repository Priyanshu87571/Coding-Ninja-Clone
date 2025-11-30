// Contact.jsx
import React from "react";
import PageContainer from "@/components/layout/PageContainer.jsx";
import SectionTitle from "@/components/common/SectionTitle.jsx";
import Button from "@/components/common/Button.jsx";

const Contact = () => (
  <PageContainer>
    <SectionTitle
      eyebrow="Contact"
      title="Talk to our team"
      subtitle="Let learners know how they can reach you for support, demo, or enrollment."
    />
    <form className="mt-6 max-w-md space-y-4 text-sm">
      <div>
        <label className="mb-1 block text-xs text-slate-300">
          Name
        </label>
        <input
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-primary"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs text-slate-300">
          Email
        </label>
        <input
          type="email"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-primary"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs text-slate-300">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-primary"
          placeholder="Tell us how we can help"
        />
      </div>
      <Button>Submit</Button>
    </form>
  </PageContainer>
);

export default Contact;
