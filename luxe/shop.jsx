// Luxe Shop

const LuxeShop = () => {
  const products = [
    { n:'NO. 01', t:'Peptosome Skin Booster', cat:'Booster', tagline:'A daily peptide composition.', price:'₩96,000', sub:'~$72', size:'50ml', img:'assets/booster-bottle-front.png', tag:'Hero' },
    { n:'NO. 02', t:'Spicule Wrinkle-Free Glow Serum', cat:'Serum', tagline:'Clarity that settles on fine lines.', price:'₩58,000', sub:'~$43', size:'20ml', img:'assets/serum-quartet.png', tag:'New' },
    { n:'NO. 03', t:'Notox Cream', cat:'Cream', tagline:'A final seal, the lightest finish.', price:'TBA', sub:'FW 26', size:'50ml', img:'assets/duo-on-stone.jpg', tag:'Coming', muted: true },
  ];

  return (
    <div style={{ width: '100%', background: LUXE.bone, color: LUXE.navy, fontFamily: LUXE.body, fontWeight: 300 }}>
      <LuxeHeader variant="bone" />

      <div style={{ padding: '20px 48px', borderBottom: `1px solid ${luxeRule(0.25)}`, ...LT.eyebrow, color: LUXE.navy, opacity: 0.5, display: 'flex', gap: 12 }}>
        <a href="#/home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <span>/</span>
        <span style={{ opacity: 1 }}>Shop</span>
      </div>

      {/* MASTHEAD */}
      <section style={{ background: LUXE.bone, padding: '88px 48px 56px', textAlign: 'center' }}>
        <LuxeEyebrow align="center" color={LUXE.champagne}>The Collection · Vol. 01</LuxeEyebrow>
        <h1 style={{ ...LT.hero, marginTop: 32, fontSize: 'clamp(72px, 11vw, 160px)' }}>Shop</h1>
        <p style={{ ...LT.bodyLg, marginTop: 28, color: LUXE.navy, opacity: 0.72, maxWidth: '50ch', marginLeft: 'auto', marginRight: 'auto' }}>
          A short composition — one booster, one serum, one closing cream.<br/>
          Every concentration stated on the label.
        </p>
      </section>

      {/* FILTER */}
      <div style={{ padding: '24px 48px', borderTop: `1px solid ${luxeRule(0.25)}`, borderBottom: `1px solid ${luxeRule(0.25)}`, background: LUXE.bone, display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
        {['All', 'Booster', 'Serum', 'Cream', 'Sets'].map((c, i) => (
          <a key={c} href="#" style={{
            ...LT.eyebrow, padding: '8px 0',
            color: i === 0 ? LUXE.champagne : LUXE.navy,
            borderBottom: i === 0 ? `1px solid ${LUXE.champagne}` : '1px solid transparent',
            textDecoration: 'none', cursor: 'pointer', letterSpacing: '0.18em',
          }}>{c}</a>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <LuxeSection bg={LUXE.bone} padding="100px 48px">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {products.map(p => (
            <a key={p.n} href="#/shop/peptosome" style={{ display: 'block', textDecoration: 'none', color: 'inherit', opacity: p.muted ? 0.65 : 1 }}>
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: LUXE.mist, position: 'relative' }}>
                <img src={p.img} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 18, left: 18, ...LT.mono, color: LUXE.bone, background: 'rgba(15,27,42,0.85)', padding: '5px 10px', letterSpacing: '0.24em' }}>{p.n}</div>
                {p.tag && (
                  <div style={{ position: 'absolute', top: 18, right: 18, ...LT.eyebrow, color: p.tag === 'Hero' ? LUXE.navy : LUXE.bone, background: p.tag === 'Hero' ? LUXE.champagne : LUXE.navy, padding: '5px 10px', letterSpacing: '0.20em' }}>{p.tag}</div>
                )}
              </div>
              <div style={{ marginTop: 24 }}>
                <div style={{ ...LT.eyebrow, color: LUXE.navy, opacity: 0.5 }}>{p.cat}</div>
                <h3 style={{ ...LT.h3, fontFamily: LUXE.display, marginTop: 12, fontSize: 28 }}>{p.t}</h3>
                <p style={{ ...LT.small, color: LUXE.navy, opacity: 0.6, marginTop: 8 }}>{p.tagline}</p>
                <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 14, borderTop: `1px solid ${luxeRule(0.3)}` }}>
                  <div>
                    <span style={{ fontFamily: LUXE.display, fontSize: 22 }}>{p.price}</span>
                    {p.sub && <span style={{ ...LT.caption, color: LUXE.navy, opacity: 0.5, marginLeft: 8 }}>/ {p.sub}</span>}
                  </div>
                  <span style={{ ...LT.mono, color: LUXE.navy, opacity: 0.5 }}>{p.size.toUpperCase()}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </LuxeSection>

      {/* SETS */}
      <LuxeSection bg={LUXE.navy} color={LUXE.bone} padding="120px 48px">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48, paddingBottom: 22, borderBottom: `1px solid ${LUXE.champagne}` }}>
          <div>
            <LuxeEyebrow color={LUXE.champagne}>Sets & Rituals</LuxeEyebrow>
            <h2 style={{ ...LT.h2, color: LUXE.bone, marginTop: 18, fontSize: 'clamp(32px, 4vw, 48px)' }}>Composed together.</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {[
            { n:'SET-01', t:'Peptosome — Couple Set', info:'50ml × 2', price:'₩172,800', save:'−10%', img:'assets/peptosome-pair.jpg' },
            { n:'SET-02', t:'The Collection — Duo',   info:'50ml + 20ml', price:'₩142,000', save:'−8%', img:'assets/duo-on-stone.jpg' },
            { n:'SET-03', t:'Sample Trial — Try All',   info:'5ml × 2', price:'₩12,000', img:'assets/serum-box-single.png' },
          ].map(s => (
            <article key={s.n} style={{ background: LUXE.navyMid, borderTop: `1px solid ${LUXE.champagne}` }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={s.img} alt={s.t} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.92 }} />
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ ...LT.mono, color: LUXE.champagne, letterSpacing: '0.24em' }}>{s.n}</span>
                  {s.save && <span style={{ ...LT.eyebrow, color: LUXE.champagne, letterSpacing: '0.20em' }}>{s.save}</span>}
                </div>
                <h3 style={{ ...LT.h3, fontFamily: LUXE.display, color: LUXE.bone, marginTop: 16, fontSize: 22 }}>{s.t}</h3>
                <div style={{ ...LT.small, color: LUXE.ash, marginTop: 10 }}>{s.info}</div>
                <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: LUXE.display, fontSize: 20, color: LUXE.bone }}>{s.price}</span>
                  <LuxeBtn variant="inverse" size="sm">Shop →</LuxeBtn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </LuxeSection>

      <LuxeFooter />
    </div>
  );
};

window.LuxeShop = LuxeShop;
