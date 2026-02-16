import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Education Lane, Knowledge City, KN 45678" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email", value: "info@brightmindsacademy.edu" },
  { icon: Clock, label: "Office Hours", value: "Mon–Fri: 8:00 AM – 4:00 PM" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    // Simulated submission — replace with edge function call for SMTP
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);

    toast({
      title: "Enquiry Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground gold-underline-center">
            Contact Us
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Send us an enquiry and we'll respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-foreground font-serif mb-6 gold-underline">Get in Touch</h3>
            <div className="space-y-6 mt-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-sm border border-border space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Your full name"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                placeholder="How can we help you?"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-secondary text-secondary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {submitting ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
