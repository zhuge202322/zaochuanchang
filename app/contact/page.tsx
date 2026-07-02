import Image from "next/image";
import { Boxes, Download, MapPin, Send, Ship, Wrench } from "lucide-react";
import { companyProfile } from "@/lib/site-data";

export const metadata = {
  title: "Contact & RFQ",
  description:
    "Send a product inquiry for marine instruments, level measurement, valves, detection devices and control alarm systems.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__image">
          <Image
            src="/images/factory/factory-01.jpg"
            alt="Jiabo factory workshop"
            fill
            preload
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="shell page-hero__content">
          <p className="eyebrow">Contact & RFQ</p>
          <h1>Send Your Marine Equipment Inquiry</h1>
          <p>
            Please share the product model, application, technical parameters, quantity, and
            available photos or drawings. Our team will help confirm the suitable product or
            project configuration.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell contact-grid">
          <aside className="contact-panel">
            <h2>Project desk</h2>
            <div className="contact-line">
              <MapPin size={20} />
              <span>{companyProfile.address}</span>
            </div>
            <div className="contact-line">
              <Ship size={20} />
              <span>Marine instruments, tank level products, valves and monitoring alarm systems</span>
            </div>
            <div className="contact-line">
              <Boxes size={20} />
              <span>Newbuild projects, replacement orders and export batch supply</span>
            </div>
            <div className="contact-line">
              <Wrench size={20} />
              <span>Recommended Attachments: nameplate photo, existing product photo, technical drawing, connection size, signal requirements, or project point list.</span>
            </div>
            <a className="btn btn--dark" href="/downloads/jiabo-you-want-product-profile.pdf" download>
              <Download size={18} /> Download Catalog
            </a>
          </aside>

          <form className="rfq-form">
            <h2>Marine product inquiry</h2>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" placeholder="Company name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="name@company.com" />
              </div>
              <div className="field">
                <label htmlFor="country">Country / Region</label>
                <input id="country" name="country" type="text" placeholder="Project market" />
              </div>
              <div className="field">
                <label htmlFor="product">Product Category</label>
                <select id="product" name="product" defaultValue="">
                  <option value="" disabled>
                    Select product family
                  </option>
                  <option>Pressure or temperature instrument</option>
                  <option>Level measurement or control</option>
                  <option>Valve or actuator</option>
                  <option>Detection, flow or safety device</option>
                  <option>Control cabinet or alarm system</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" name="quantity" type="text" placeholder="Pieces or sets" />
              </div>
              <div className="field field--full">
                <label htmlFor="details">Technical Requirements</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Model, medium, range, connection, signal output, voltage, tank height, valve size or cabinet point list"
                />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn--primary" type="button">
                <Send size={18} /> Submit Inquiry
              </button>
              <span className="form-note">
                Recommended Attachments: nameplate photo, existing product photo, technical drawing,
                connection size, signal requirements, or project point list.
              </span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
