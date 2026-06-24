// Luxe Mobile — single file with all mobile pages

const MHeader = ({ variant = 'bone', title }) => {
  const isNavy = variant === 'navy';
  const fg = isNavy ? LUXE.bone : LUXE.navy;
  const bg = isNavy ? LUXE.navy : LUXE.bone;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <header style={{ background: bg, color: fg, padding: '16px 24px', display: 'grid', gridTemplateColumns: '24px 1fr 24px', alignItems: 'center', borderBottom: `1px solid ${isNavy ? 'rgba(242,237,227,0.14)' : luxeRule(0.25)}`, position: 'sticky', top: 0, zIndex: 30 }}>
        <button onClick={() => setOpen(true)} style={{ background: 'none', border: 'none', padding: 0, color: fg, fontSize: 18, lineHeight: 1, cursor: 'pointer' }}>≡</button>
        <a href="#/home" style={{ textAlign: 'center', textDecoration: 'none', fontFamily: LUXE.display, fontSize: 18, color: fg, letterSpacing: '0.12em' }}>FINIXLAB</a>
        <a href="#/cart" aria-label="Bag" style={{ color: fg, textDecoration: 'none', fontSize: 11, letterSpacing: '0.14em', textAlign: 'right', position: 'relative' }}>
          Bag<span style={{ position: 'absolute', top: -2, right: -8, width: 5, height: 5, borderRadius: '50%', background: LUXE.champagne }}/>
        </a>
      </header>
      {title && <div style={{ background: bg, color: fg, padding: '12px 24px', borderBottom: `1px solid ${isNavy ? 'rgba(242,237,227,0.14)' : luxeRule(0.25)}`, ...LT.eyebrow, opacity: 0.6, letterSpacing: '0.16em' }}>{title}</div>}

      {open && (
        <div style={{ position: 'fixed', inset: 0, background: LUXE.navy, color: LUXE.bone, padding: 24, zIndex: 100, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ ...LT.mono, color: LUXE.champagne }}>MENU</div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: LUXE.bone, fontSize: 24, cursor: 'pointer' }}>×</button>
          </div>
          <nav style={{ marginTop: 56, display: 'grid', gap: 4, flex: 1 }}>
            {[
              ['Shop',    '#/shop'],
              ['About',   '#/about'],
              ['Science', '#/science'],
              ['Journal', '#/journal'],
            ].map(it => (
              <a key={it[0]} href={it[1]} onClick={() => setOpen(false)} style={{ fontFamily: LUXE.display, fontSize: 44, color: LUXE.bone, textDecoration: 'none', padding: '20px 0', borderBottom: '1px solid rgba(242,237,227,0.18)' }}>{it[0]}</a>
            ))}
          </nav>
          <div style={{ paddingTop: 28, borderTop: '1px solid rgba(242,237,227,0.18)', display: 'flex', justifyContent: 'space-between', ...LT.eyebrow, color: LUXE.ash }}>
            <a href="#/search" style={{ color: 'inherit', textDecoration: 'none' }}>Search</a>
            <a href="#/account" style={{ color: 'inherit', textDecoration: 'none' }}>Account</a>
            <a href="#/cart" style={{ color: 'inherit', textDecoration: 'none' }}>Bag</a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const MFooter = () => (
  <footer style={{ background: LUXE.navyDeep, color: LUXE.ash, padding: '40px 24px', fontFamily: LUXE.body, fontSize: 11, letterSpacing: '0.06em' }}>
    <div style={{ fontFamily: LUXE.display, fontSize: 20, color: LUXE.bone, letterSpacing: '0.12em', marginBottom: 18 }}>FINIXLAB</div>
    <div>Real Efficacy, Quietly Delivered.</div>
    <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: '8px 14px', fontSize: 11 }}>
      {['Shop','About','Science','Journal','Care','Account'].map(l =>
        <a key={l} href={`#/${l.toLowerCase()}`} style={{ color: LUXE.ash, textDecoration: 'none' }}>{l}</a>
      )}
    </div>
    <div style={{ marginTop: 18, paddingTop: 12, borderTop: '1px solid rgba(242,237,227,0.1)', fontSize: 10, opacity: 0.7 }}>
      © 2026 Finixlab Co., Ltd. · Paju, Gyeonggi · Ships globally
    </div>
  </footer>
);

const LuxeHomeMobile = () => (
  <div style={{ width: '100%', background: LUXE.bone, color: LUXE.navy, fontFamily: LUXE.body, fontWeight: 300, fontSize: 14 }}>
    <MHeader variant="navy" />

    <section style={{ background: LUXE.navy, color: LUXE.bone, padding: '60px 24px 56px', textAlign: 'center' }}>
      <LuxeEyebrow align="center" color={LUXE.champagne}>A Korean Peptide Heritage</LuxeEyebrow>
      <h1 style={{ fontFamily: LUXE.display, fontSize: 80, lineHeight: 0.95, color: LUXE.bone, letterSpacing: '-0.02em', margin: '32px 0 0' }}>Finixlab</h1>
      <div style={{ marginTop: 24 }}><LuxeSymbol color={LUXE.champagne} size={22} /></div>
      <p style={{ ...LT.body, color: LUXE.bone, opacity: 0.8, marginTop: 24, lineHeight: 1.85 }}>
        A skincare brand of clinical peptide composition — Korean dermal science, quietly delivered.
      </p>
      <div style={{ marginTop: 28, display: 'grid', gap: 10 }}>
        <LuxeBtn variant="gold" full size="lg">Explore the Collection →</LuxeBtn>
        <LuxeBtn variant="inverse" full size="md">Discover the Science</LuxeBtn>
      </div>
    </section>

    <section style={{ padding: 0 }}>
      <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
        <img src="assets/duo-on-stone.jpg" alt="Collection" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }} />
      </div>
    </section>

    <section style={{ background: LUXE.bone, padding: '56px 24px', textAlign: 'center' }}>
      <LuxeEyebrow align="center" color={LUXE.champagne}>The Two Threads</LuxeEyebrow>
      <h2 style={{ fontFamily: LUXE.display, fontSize: 36, lineHeight: 1.1, marginTop: 20, color: LUXE.navy }}>
        Clinical heritage meets peptide design.
      </h2>
      <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.7, marginTop: 20 }}>
        Korean dermatology distilled into daily skin. VAMTOXIN™ at 2.0% — a designed molecule held exclusively by Supadelixir.
      </p>
    </section>

    <section style={{ background: LUXE.navy, color: LUXE.bone, padding: '56px 24px' }}>
      <LuxeEyebrow color={LUXE.champagne}>Four Pillars</LuxeEyebrow>
      <h2 style={{ fontFamily: LUXE.display, fontSize: 36, color: LUXE.bone, marginTop: 18, lineHeight: 1.1 }}>The Identity.</h2>
      <div style={{ marginTop: 32 }}>
        {[
          { n:'01', t:'Identity', d:'A quietly disciplined ritual, made by science.' },
          { n:'02', t:'Quality',  d:'Standards that refuse to compromise.' },
          { n:'03', t:'Science',  d:'A precise engine of delivery, not surface.' },
          { n:'04', t:'Sensory',  d:'Composure that engages every sense.' },
        ].map((p, i) => (
          <div key={p.n} style={{ padding: '20px 0', borderTop: '1px solid rgba(242,237,227,0.18)', borderBottom: i === 3 ? '1px solid rgba(242,237,227,0.18)' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: LUXE.display, fontSize: 24 }}>{p.t}</span>
              <span style={{ ...LT.mono, color: LUXE.champagne }}>{p.n}</span>
            </div>
            <p style={{ ...LT.small, color: LUXE.ash, marginTop: 8 }}>{p.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section style={{ background: LUXE.bone, padding: '64px 24px', textAlign: 'center' }}>
      <LuxeSymbol color={LUXE.champagne} size={24} />
      <h2 style={{ fontFamily: LUXE.display, fontSize: 28, fontStyle: 'italic', marginTop: 24, lineHeight: 1.3 }}>
        Uniting Korean clinical heritage and global peptide design.
      </h2>
    </section>

    <MFooter />
  </div>
);

const LuxeAboutMobile = () => (
  <div style={{ width: '100%', background: LUXE.bone, color: LUXE.navy, fontFamily: LUXE.body, fontWeight: 300, fontSize: 14 }}>
    <MHeader title="About" />
    <section style={{ padding: '48px 24px', textAlign: 'center' }}>
      <LuxeEyebrow align="center" color={LUXE.champagne}>The Brand</LuxeEyebrow>
      <h1 style={{ fontFamily: LUXE.display, fontSize: 64, marginTop: 24 }}>Finixlab</h1>
      <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.72, marginTop: 20 }}>
        Korean clinical peptide composition, conceived as a quiet discipline.
      </p>
    </section>
    <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
      <img src="assets/peptosome-pair.jpg" alt="Still life" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <section style={{ padding: '48px 24px' }}>
      <LuxeEyebrow color={LUXE.champagne}>Brand Story</LuxeEyebrow>
      <h2 style={{ fontFamily: LUXE.display, fontSize: 32, marginTop: 16, lineHeight: 1.15 }}>A heritage quietly composed.</h2>
      <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.78, marginTop: 18 }}>
        Finixlab — 'FNX' in our wordmark — is the name we have given to a Korean tradition of clinical dermatology. It begins in the cabinet of a Seoul clinic, where physicians have been observing the same quiet truth: that lasting skin is the work of consistency, not intervention.
      </p>
      <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.66, marginTop: 18 }}>
        VAMTOXIN™ — held exclusively by Supadelixir, formulated by Finixlab at 2.0% concentration — is the molecular argument for that proposition.
      </p>
      <div style={{ margin: '32px 0', padding: '24px 0', borderTop: `1px solid ${luxeRule(0.4)}`, borderBottom: `1px solid ${luxeRule(0.4)}` }}>
        <p style={{ fontFamily: LUXE.display, fontStyle: 'italic', fontSize: 22, lineHeight: 1.3 }}>
          "What we prescribe is consistency, not efficacy."
        </p>
        <div style={{ ...LT.eyebrow, marginTop: 16, opacity: 0.5 }}>— Hyejin Yoon, Founder</div>
      </div>
    </section>
    <MFooter />
  </div>
);

const LuxeScienceMobile = () => (
  <div style={{ width: '100%', background: LUXE.bone, color: LUXE.navy, fontFamily: LUXE.body, fontWeight: 300, fontSize: 14 }}>
    <MHeader variant="navy" title="Science / VAMTOXIN™" />
    <section style={{ background: LUXE.navy, color: LUXE.bone, padding: '48px 24px', textAlign: 'center' }}>
      <LuxeEyebrow align="center" color={LUXE.champagne}>The Science</LuxeEyebrow>
      <h1 style={{ fontFamily: LUXE.display, fontSize: 64, color: LUXE.bone, marginTop: 24, lineHeight: 0.95 }}>VAMTOXIN™</h1>
      <div style={{ marginTop: 14, ...LT.eyebrow, color: LUXE.champagne }}>A 2.0% Hexapeptide</div>
      <p style={{ ...LT.body, color: LUXE.bone, opacity: 0.78, marginTop: 24 }}>
        A SNARE-mimicking hexapeptide designed to soften expression at the protein level.
      </p>
      <div style={{ marginTop: 28, display: 'grid', gap: 10 }}>
        <LuxeBtn variant="gold" full>Read the Patent Story →</LuxeBtn>
        <LuxeBtn variant="inverse" full size="sm">Download Whitepaper</LuxeBtn>
      </div>
    </section>
    <section style={{ padding: '48px 24px' }}>
      <LuxeEyebrow color={LUXE.champagne}>The Mechanism</LuxeEyebrow>
      <h2 style={{ fontFamily: LUXE.display, fontSize: 32, marginTop: 14, lineHeight: 1.1 }}>Quiet expression, at the protein level.</h2>
      {[
        { n:'01', t:'Receptor Bind',     d:"VAMTOXIN™'s hexapeptide residues bind to SNAP-25." },
        { n:'02', t:'SNARE Inhibit',     d:'SNARE complex formation is temporarily inhibited.' },
        { n:'03', t:'Expression Soften', d:'Micro-contractions settle.' },
        { n:'04', t:'Surface Compose',   d:'The surface returns to composure.' },
      ].map((s, i) => (
        <div key={s.n} style={{ padding: '18px 0', borderTop: `1px solid ${luxeRule(0.3)}` }}>
          <div style={{ ...LT.mono, color: LUXE.champagne }}>STEP {s.n}</div>
          <h3 style={{ fontFamily: LUXE.display, fontSize: 20, marginTop: 10 }}>{s.t}</h3>
          <p style={{ ...LT.small, color: LUXE.navy, opacity: 0.65, marginTop: 6 }}>{s.d}</p>
        </div>
      ))}
    </section>
    <MFooter />
  </div>
);

const LuxeShopMobile = () => (
  <div style={{ width: '100%', background: LUXE.bone, color: LUXE.navy, fontFamily: LUXE.body, fontWeight: 300, fontSize: 14 }}>
    <MHeader title="Shop" />
    <section style={{ padding: '40px 24px', textAlign: 'center' }}>
      <LuxeEyebrow align="center" color={LUXE.champagne}>The Collection · Vol. 01</LuxeEyebrow>
      <h1 style={{ fontFamily: LUXE.display, fontSize: 80, marginTop: 24 }}>Shop</h1>
      <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.72, marginTop: 18 }}>
        One booster, one serum, one closing cream.
      </p>
    </section>
    <section style={{ padding: '0 24px 48px', display: 'grid', gap: 24 }}>
      {[
        { n:'NO. 01', t:'Peptosome Skin Booster', price:'₩96,000', size:'50ml', img:'assets/booster-bottle-front.png', tag:'Hero' },
        { n:'NO. 02', t:'Spicule Glow Serum',     price:'₩58,000', size:'20ml', img:'assets/serum-quartet.png', tag:'New' },
        { n:'NO. 03', t:'Notox Cream',           price:'TBA',     size:'50ml', img:'assets/duo-on-stone.jpg', tag:'FW 26', muted: true },
      ].map(p => (
        <a key={p.n} href="#/shop/peptosome" style={{ display: 'block', textDecoration: 'none', color: 'inherit', opacity: p.muted ? 0.6 : 1 }}>
          <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: LUXE.mist, position: 'relative' }}>
            <img src={p.img} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 14, left: 14, ...LT.mono, color: LUXE.bone, background: 'rgba(15,27,42,0.85)', padding: '4px 8px' }}>{p.n}</div>
          </div>
          <div style={{ marginTop: 16 }}>
            <h3 style={{ fontFamily: LUXE.display, fontSize: 22 }}>{p.t}</h3>
            <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: LUXE.display, fontSize: 18 }}>{p.price}</span>
              <span style={{ ...LT.mono, color: LUXE.navy, opacity: 0.5 }}>{p.size.toUpperCase()}</span>
            </div>
          </div>
        </a>
      ))}
    </section>
    <MFooter />
  </div>
);

const LuxeProductMobile = () => (
  <div style={{ width: '100%', background: LUXE.bone, color: LUXE.navy, fontFamily: LUXE.body, fontWeight: 300, fontSize: 14, paddingBottom: 80 }}>
    <MHeader title="Shop / Peptosome" />

    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90, background: 'rgba(242,237,227,0.96)', borderTop: `1px solid ${luxeRule(0.3)}`, padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12, backdropFilter: 'blur(8px)' }}>
      <div style={{ flex: 1 }}>
        <div style={{ ...LT.eyebrow, color: LUXE.navy, opacity: 0.5 }}>Peptosome · 50ml</div>
        <div style={{ fontFamily: LUXE.display, fontSize: 18, marginTop: 2 }}>₩96,000</div>
      </div>
      <LuxeBtn variant="primary">Add to Bag</LuxeBtn>
    </div>

    <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
      <img src="assets/booster-hero.png" alt="Peptosome" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }} />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, padding: '10px 24px' }}>
      {['assets/booster-bottle-front.png', 'assets/booster-grid.png', 'assets/serum-pump.png', 'assets/serum-shadow.png'].map((s, i) => (
        <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', background: LUXE.mist }}>
          <img src={s} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ))}
    </div>
    <section style={{ padding: '32px 24px 56px' }}>
      <div style={{ ...LT.mono, color: LUXE.champagne, letterSpacing: '0.32em' }}>NO. 01 · BOOSTER</div>
      <h1 style={{ fontFamily: LUXE.display, fontSize: 40, marginTop: 14, lineHeight: 1 }}>Peptosome Skin Booster</h1>
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ color: LUXE.champagne, letterSpacing: '0.3em' }}>★★★★★</span>
        <span style={{ ...LT.small, color: LUXE.navy, opacity: 0.6 }}>4.92 / 612</span>
      </div>
      <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.75, marginTop: 18 }}>
        VAMTOXIN™ Peptide at 2.0% — Korean clinical essence carried into an eight-minute daily ritual.
      </p>
      <div style={{ marginTop: 24, paddingTop: 18, borderTop: `1px solid ${luxeRule(0.3)}` }}>
        <div style={{ fontFamily: LUXE.display, fontSize: 32 }}>₩96,000 <span style={{ fontSize: 14, opacity: 0.5 }}>/ ~$72</span></div>
        <div style={{ ...LT.mono, color: LUXE.navy, opacity: 0.5, marginTop: 4 }}>50ML · 1.7 FL.OZ</div>
      </div>
      <div style={{ marginTop: 20, display: 'grid', gap: 10 }}>
        <LuxeBtn variant="primary" full>Subscribe & Save 15%</LuxeBtn>
      </div>
    </section>
    <MFooter />
  </div>
);

Object.assign(window, { LuxeHomeMobile, LuxeAboutMobile, LuxeScienceMobile, LuxeShopMobile, LuxeProductMobile });
