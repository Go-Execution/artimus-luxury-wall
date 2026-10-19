"use client";

import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

const services = [
  { title: "Interior Painting", line: "Refined. Durable. Beautiful.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=88" },
  { title: "Exterior Painting", line: "Protection meets curb appeal.", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=88" },
  { title: "Limewash", line: "Natural texture. Timeless beauty.", image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1000&q=88" },
  { title: "Venetian Plaster", line: "Artistry in every detail.", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=88" },
  { title: "Cabinet Painting", line: "A fresh look. Lasting quality.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=88" },
];

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.75, ease } };
const revealLeft = { initial: { opacity: 0, x: -46 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.9, ease } };
const revealRight = { initial: { opacity: 0, x: 46 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.9, ease } };
const imageReveal = { initial: { opacity: 0, scale: 1.06, clipPath: "inset(8% 0 8% 0)" }, whileInView: { opacity: 1, scale: 1, clipPath: "inset(0% 0 0% 0)" }, viewport: { once: true, amount: 0.16 }, transition: { duration: 1.05, ease } };

const plasterBenefits = ["One-of-a-kind finish", "Natural depth & movement", "Durable & long lasting", "Natural lime materials"];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-lockup ${light ? "brand-lockup--light" : ""}`}>
      <strong>drip<span>.</span></strong>
      <small>ATX</small>
      <em>PAINTING & ARCHITECTURAL FINISHES</em>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
    <main>
      <header className="header">
        <a href="#top" aria-label="DRIP ATX home"><Brand light /></a>
        <nav aria-label="Main navigation">
          <a href="#top">Home</a><a href="#services">Services</a><a href="#specialty">Specialty finishes</a><a href="#work">Our work</a><a href="#about">About</a>
        </nav>
        <a className="consult-link" href="#contact">Get a consultation <ArrowRight size={14} /></a>
        <button className="mobile-trigger" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside className="mobile-nav" initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: .55, ease }}>
            <div><Brand light /><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button></div>
            {[['Services','#services'],['Specialty finishes','#specialty'],['Our work','#work'],['About','#about'],['Contact','#contact']].map(([label, href], i) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><small>0{i + 1}</small>{label}<ArrowUpRight /></a>)}
          </motion.aside>
        )}
      </AnimatePresence>

      <section className="hero-reference" id="top">
        <div className="hero-reference__image" />
        <div className="hero-reference__veil" />
        <motion.div className="hero-reference__copy" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .2, ease }}>
          <p className="overline">Luxury painting & architectural finishes</p>
          <h1>Elevated<br />Spaces. Lasting<br />Impressions.</h1>
          <p className="hero-deck">From fine finishes to full-home painting, DRIP ATX brings craftsmanship, artistry and precision to every space.</p>
          <a className="solid-button" href="#work">Explore our work <ArrowRight size={15} /></a>
        </motion.div>
        <div className="hero-reference__folio"><span>01</span><i /><span>02</span><i /><span>03</span></div>
        <p className="hero-reference__credit">Venetian plaster<br />Austin, TX</p>
      </section>

      <section className="service-strip" id="services">
        {services.map((service, i) => (
          <motion.a {...reveal} transition={{ duration: .75, delay: i * .08, ease }} href="#contact" className="service-card" key={service.title}>
            <div key="image" className="service-card__image" style={{ backgroundImage: `url(${service.image})` }}><span>0{i + 1}</span></div>
            <h2 key="title">{service.title}</h2><p key="line">{service.line}</p><ArrowRight key="arrow" size={14} />
          </motion.a>
        ))}
      </section>

      <section className="specialty" id="specialty">
        <motion.div {...imageReveal} className="specialty__visual">
          <div className="specialty__photo" role="img" aria-label="Warm hand-finished architectural interior" />
          <div className="specialty__material-note">
            <p>Material study / 01</p>
            <strong>Natural lime<br />and mineral finish</strong>
            <span>Soft movement that changes with the light</span>
          </div>
          <div className="specialty__specs" aria-label="Finish details">
            <span><b>Base</b>Natural minerals</span>
            <span><b>Method</b>Hand applied</span>
            <span><b>Character</b>Matte depth</span>
          </div>
        </motion.div>
        <div className="specialty__copy">
          <motion.p {...reveal} className="overline overline--dark">Specialty finishes</motion.p>
          <motion.h2 {...reveal}>Crafted surfaces<br />for inspired living.</motion.h2>
          <motion.p {...reveal}>We specialize in timeless, textured finishes including limewash, Venetian plaster, Roman clay and custom artisanal applications. Each surface is a work of art—designed to bring depth, character and warmth to your home or commercial space.</motion.p>
          <motion.a {...reveal} className="dark-button" href="#contact">Explore specialty finishes <ArrowRight size={15} /></motion.a>
        </div>
      </section>

      <section className="venetian-focus">
        <motion.div {...revealLeft} className="venetian-focus__title"><p className="overline overline--dark">Our signature craft</p><h2>Venetian<br /><em>plaster</em></h2></motion.div>
        <motion.div {...reveal} transition={{ duration: .85, delay: .12, ease }} className="venetian-focus__body">
          <p>Venetian plaster brings depth and character to walls that traditional paint simply cannot achieve. Each surface is individually handcrafted, making it ideal for feature walls, fireplaces, entryways and statement spaces.</p>
          <div className="benefit-grid">{plasterBenefits.map((benefit, i) => <motion.span initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .8 }} transition={{ duration: .55, delay: i * .08, ease }} key={benefit}><b>0{i + 1}</b>{benefit}</motion.span>)}</div>
        </motion.div>
        <motion.div {...imageReveal} className="venetian-focus__media">
          <div className="venetian-focus__caption">
            <span>Signature finish / 01</span>
            <strong>Polished depth.<br />Quiet movement.</strong>
            <dl><div><dt>Application</dt><dd>Multi-layer trowel</dd></div><div><dt>Sheen</dt><dd>Soft burnished</dd></div><div><dt>Best for</dt><dd>Feature walls & fireplaces</dd></div></dl>
          </div>
        </motion.div>
      </section>

      <section className="portfolio" id="work">
        <motion.div {...reveal} className="section-title"><div><p className="overline overline--dark">Our work</p><h2>Selected finishes</h2></div><p>Beautiful completed spaces, close-up textures and craftsmanship designed to be experienced in the light.</p></motion.div>
        <div className="portfolio-grid">
          <motion.figure {...reveal} className="project-card project-card--large"><div className="project-photo project-photo--one" /><figcaption><span>01 / Venetian plaster</span><strong>Warm mineral living</strong><p>Austin, Texas</p></figcaption></motion.figure>
          <motion.figure {...reveal} className="project-card"><div className="project-photo project-photo--two" /><figcaption><span>02 / Limewash</span><strong>Soft architectural volume</strong><p>Austin, Texas</p></figcaption></motion.figure>
          <motion.figure {...reveal} className="project-card"><div className="project-photo project-photo--three" /><figcaption><span>03 / Cabinet painting</span><strong>Refined tonal kitchen</strong><p>Austin, Texas</p></figcaption></motion.figure>
        </div>
      </section>

      <section className="trade" id="about">
        <motion.div {...imageReveal} className="trade__image" />
        <motion.div {...revealRight} className="trade__copy">
          <p className="overline">For the design community</p>
          <h2>Built to collaborate.</h2>
          <p>We work closely with custom home builders, architects, interior designers, developers and real-estate professionals throughout Austin—bringing material expertise and reliable execution to every phase.</p>
          <div className="trade-list"><span>Custom builders</span><span>Architects</span><span>Interior designers</span><span>Developers</span></div>
          <a href="mailto:info@drip-atx.com?subject=Trade%20collaboration">Discuss a project <ArrowUpRight size={15} /></a>
        </motion.div>
      </section>

      <section className="brand-source">
        <motion.div {...revealLeft} className="brand-source__identity">
          <Brand />
          <p>Material. Movement. Light.</p>
          <div><span>Austin, Texas</span><span>Residential + commercial</span></div>
        </motion.div>
        <motion.div {...revealRight}><p className="overline overline--dark">About DRIP ATX</p><h2>A finish studio<br />with an eye for architecture.</h2><p>Based in Austin, DRIP ATX creates expressive surfaces for homeowners and design professionals who care about material, atmosphere and lasting craftsmanship.</p></motion.div>
      </section>

      <section className="final-cta" id="contact">
        <motion.p {...reveal} className="overline">Ready to transform your space?</motion.p>
        <motion.h2 {...reveal} transition={{ duration: .9, delay: .08, ease }}>Let’s bring your<br />vision to life.</motion.h2>
        <motion.a {...reveal} transition={{ duration: .8, delay: .16, ease }} className="final-cta__link" href="mailto:info@drip-atx.com?subject=DRIP%20ATX%20consultation"><span><small>Start a project</small>Schedule a consultation</span><em>Tell us about your space, finish goals and timeline.</em><ArrowUpRight /></motion.a>
        <footer><Brand light /><div><small>Contact</small><a href="mailto:info@drip-atx.com">info@drip-atx.com</a><a href="tel:+17373841919">737 384 1919</a></div><div><small>Location</small><span>Austin, Texas</span><span>Residential & commercial</span></div><p>© 2026 DRIP ATX</p></footer>
      </section>
    </main>
    </MotionConfig>
  );
}
