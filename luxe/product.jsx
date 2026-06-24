// Luxe Product — Peptosome Skin Booster

const LuxeProduct = () => {
  const [tab, setTab] = React.useState('details');
  return (
    <div style={{ width: '100%', background: LUXE.bone, color: LUXE.navy, fontFamily: LUXE.body, fontWeight: 300 }}>
      <LuxeHeader variant="bone" />

      {/* Breadcrumb */}
      <div style={{ padding: '20px 48px', borderBottom: `1px solid ${luxeRule(0.25)}`, ...LT.eyebrow, color: LUXE.navy, opacity: 0.5, display: 'flex', gap: 12, letterSpacing: '0.16em' }}>
        <a href="#/home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <span>/</span>
        <a href="#/shop" style={{ color: 'inherit', textDecoration: 'none' }}>Shop</a>
        <span>/</span>
        <span style={{ opacity: 1, color: LUXE.navy }}>Peptosome Skin Booster</span>
      </div>

      {/* HERO — gallery + buy */}
      <section style={{ background: LUXE.bone, padding: '64px 48px 96px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: LUXE.mist, position: 'relative' }}>
              <img src="assets/booster-hero.png" alt="Peptosome Skin Booster" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }} />
              <div style={{ position: 'absolute', top: 24, left: 24, ...LT.mono, color: LUXE.bone, letterSpacing: '0.24em', background: 'rgba(15,27,42,0.85)', padding: '6px 12px' }}>FIG. 01 · PEPTOSOME · 50ML</div>
            </div>
            <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { src:'assets/booster-bottle-front.png', sel:false },
                { src:'assets/booster-grid.png',         sel:false },
                { src:'assets/booster-hero.png',         sel:true  },
                { src:'assets/serum-pump.png',           sel:false },
              ].map((t, i) => (
                <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', background: LUXE.mist, border: `1px solid ${t.sel ? LUXE.champagne : 'transparent'}`, cursor: 'pointer' }}>
                  <img src={t.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Buy block */}
          <aside style={{ position: 'sticky', top: 24 }}>
            <div style={{ ...LT.mono, color: LUXE.champagne, letterSpacing: '0.32em' }}>NO. 01 · BOOSTER</div>
            <h1 style={{ ...LT.h1, marginTop: 18, fontSize: 'clamp(40px, 5vw, 72px)' }}>
              Peptosome Skin Booster
            </h1>
            <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.72, marginTop: 18 }}>
              An all-in-one skin-boosting composition, revitalized by Peptosome.
            </p>

            {/* rating */}
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ color: LUXE.champagne, letterSpacing: '0.32em', fontSize: 13 }}>★★★★★</span>
              <span style={{ ...LT.small, color: LUXE.navy, opacity: 0.6 }}>4.92 / 612 reviews</span>
            </div>

            {/* price */}
            <div style={{ marginTop: 36, paddingTop: 28, borderTop: `1px solid ${luxeRule(0.3)}` }}>
              <div style={{ ...LT.h2, fontFamily: LUXE.display, fontSize: 'clamp(36px, 4vw, 52px)', color: LUXE.navy }}>
                ₩96,000 <span style={{ fontSize: '0.4em', opacity: 0.5, letterSpacing: '0.06em' }}>/ ~$72</span>
              </div>
              <div style={{ ...LT.mono, color: LUXE.navy, opacity: 0.5, marginTop: 8 }}>50ML · 1.7 FL.OZ</div>
            </div>

            {/* size */}
            <div style={{ marginTop: 32 }}>
              <div style={{ ...LT.eyebrow, color: LUXE.navy, opacity: 0.5, marginBottom: 12 }}>Size</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <button style={{ padding: '14px 16px', border: `1px solid ${LUXE.navy}`, background: LUXE.navy, color: LUXE.bone, fontFamily: LUXE.body, fontSize: 12, letterSpacing: '0.14em', textAlign: 'left', cursor: 'pointer' }}>50ml · Standard</button>
                <button style={{ padding: '14px 16px', border: `1px solid ${luxeRule(0.4)}`, background: 'transparent', color: LUXE.navy, fontFamily: LUXE.body, fontSize: 12, letterSpacing: '0.14em', textAlign: 'left', cursor: 'pointer' }}>5ml · Sample <span style={{ marginLeft: 6, opacity: 0.6 }}>+ ₩4,000</span></button>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ marginTop: 28, display: 'grid', gap: 10 }}>
              <LuxeBtn variant="primary" full size="lg">Add to Bag · ₩96,000</LuxeBtn>
              <LuxeBtn variant="ghost" full size="md" style={{ color: LUXE.navy, borderColor: LUXE.navy }}>Subscribe & Save 15%</LuxeBtn>
            </div>

            {/* highlights */}
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: `1px solid ${luxeRule(0.3)}` }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                {[
                  ['2.0%', 'VAMTOXIN™ Peptide — SNARE inhibitor'],
                  ['4.0%', 'Niacinamide — tone clarity'],
                  ['◯',    'Stainless roller applicator'],
                  ['KR',   'Made in Korea · Vegan · Cruelty-free'],
                ].map((h, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 14, alignItems: 'baseline' }}>
                    <span style={{ fontFamily: LUXE.display, fontSize: 16, color: LUXE.navy }}>{h[0]}</span>
                    <span style={{ ...LT.small, color: LUXE.navy }}>{h[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* TAB BAR */}
      <section style={{ background: LUXE.bone, padding: '0 48px', borderTop: `1px solid ${luxeRule(0.3)}`, borderBottom: `1px solid ${luxeRule(0.3)}`, position: 'sticky', top: 0, zIndex: 10, backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', gap: 48 }}>
          {[
            ['details', 'Details'],
            ['formula', 'Formulation'],
            ['ritual',  'Ritual'],
            ['reviews', 'Reviews'],
          ].map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} style={{
              padding: '20px 0', background: 'transparent', border: 'none', cursor: 'pointer',
              ...LT.eyebrow, color: tab === k ? LUXE.champagne : LUXE.navy, opacity: tab === k ? 1 : 0.5,
              borderBottom: tab === k ? `1px solid ${LUXE.champagne}` : '1px solid transparent',
              letterSpacing: '0.18em',
            }}>{l}</button>
          ))}
        </div>
      </section>

      {/* DESCRIPTION */}
      <LuxeSection bg={LUXE.bone} padding="120px 48px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 96 }}>
          <LuxeEyebrow color={LUXE.champagne}>The Booster</LuxeEyebrow>
          <div>
            <h2 style={{ ...LT.h2, fontSize: 'clamp(34px, 4vw, 52px)' }}>
              An all-in-one prescription, in a bottle that doesn't shout.
            </h2>
            <p style={{ ...LT.bodyLg, color: LUXE.navy, opacity: 0.82, marginTop: 36, lineHeight: 2 }}>
              Peptosome Skin Booster is built around VAMTOXIN™ Peptide at 2.0%.
              A SNARE-inhibiting hexapeptide quiets the micro-contractions of
              expression muscles, Niacinamide at 4% evens tone, and the
              Spicule Complex carries efficacy into the dermis.
            </p>
            <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.66, marginTop: 24 }}>
              Once daily, after toner. A lightweight composition that absorbs
              fully — never interfering with the next step in your routine.
              Quietest in feel, most honest in concentration.
            </p>
          </div>
        </div>
      </LuxeSection>

      {/* INGREDIENT TABLE */}
      <LuxeSection bg={LUXE.navy} color={LUXE.bone} padding="120px 48px">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40, paddingBottom: 24, borderBottom: `1px solid ${LUXE.champagne}` }}>
          <div>
            <LuxeEyebrow color={LUXE.champagne}>The Composition</LuxeEyebrow>
            <h2 style={{ ...LT.h2, color: LUXE.bone, marginTop: 16, fontSize: 'clamp(32px, 4vw, 52px)' }}>The full prescription.</h2>
          </div>
          <div style={{ ...LT.mono, color: LUXE.ash, letterSpacing: '0.16em' }}>06 ACTIVES · 23 INCI</div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ ...LT.eyebrow, color: LUXE.ash, textAlign: 'left', letterSpacing: '0.20em' }}>
              <th style={{ padding: '14px 0', borderBottom: '1px solid rgba(242,237,227,0.18)', width: 56 }}>No.</th>
              <th style={{ padding: '14px 0', borderBottom: '1px solid rgba(242,237,227,0.18)' }}>Ingredient</th>
              <th style={{ padding: '14px 0', borderBottom: '1px solid rgba(242,237,227,0.18)' }}>Function</th>
              <th style={{ padding: '14px 0', borderBottom: '1px solid rgba(242,237,227,0.18)', textAlign: 'right', width: 120 }}>%</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['01', 'VAMTOXIN™ Peptide',  'Acetyl Hexapeptide-8 derivative · SNARE inhibitor', '2.0%', true],
              ['02', 'Spicule Complex',    'Marine sponge micro-needles · delivery aid',        '0.5%'],
              ['03', 'Centella Asiatica',  'Madecassoside · TECA · soothing',                   '0.5%'],
              ['04', 'Niacinamide',        'Vitamin B3 · tone clarity',                          '4.0%'],
              ['05', 'Sodium Hyaluronate', 'Tri-weight · hydration matrix',                      '1.2%'],
              ['06', 'Panthenol',          'Pro-Vitamin B5 · barrier support',                   '2.0%'],
            ].map((r, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(242,237,227,0.10)' }}>
                <td style={{ padding: '22px 0', ...LT.mono, color: LUXE.champagne, letterSpacing: '0.22em' }}>{r[0]}</td>
                <td style={{ padding: '22px 0', fontFamily: LUXE.display, fontSize: 20, color: LUXE.bone }}>
                  {r[1]}
                  {r[4] && <span style={{ marginLeft: 14, ...LT.mono, color: LUXE.champagne, fontSize: 9, letterSpacing: '0.3em' }}>HERO</span>}
                </td>
                <td style={{ padding: '22px 0', ...LT.small, color: LUXE.ash }}>{r[2]}</td>
                <td style={{ padding: '22px 0', textAlign: 'right', fontFamily: LUXE.display, fontSize: 20, color: LUXE.bone }}>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </LuxeSection>

      {/* RITUAL */}
      <LuxeSection bg={LUXE.bone} padding="120px 48px">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <LuxeEyebrow align="center" color={LUXE.champagne}>The Ritual</LuxeEyebrow>
          <h2 style={{ ...LT.h2, marginTop: 28, fontSize: 'clamp(36px, 4.5vw, 56px)' }}>One step, in four motions.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { n:'01', t:'Cleanse',   d:'Morning and evening, a gentle cleanser.' },
            { n:'02', t:'Prep',      d:'One pass of pH-balanced toner.' },
            { n:'03', t:'Prescribe', d:'Two to three pumps of Peptosome along the grain.', active: true },
            { n:'04', t:'Seal',      d:'Finish with a light cream.' },
          ].map(s => (
            <div key={s.n} style={{
              padding: '36px 24px', background: s.active ? LUXE.navy : 'transparent',
              border: `1px solid ${s.active ? LUXE.navy : luxeRule(0.4)}`,
              color: s.active ? LUXE.bone : LUXE.navy,
            }}>
              <div style={{ ...LT.mono, color: s.active ? LUXE.champagne : LUXE.navy, opacity: s.active ? 1 : 0.5, letterSpacing: '0.32em' }}>STEP {s.n}</div>
              <h3 style={{ ...LT.h3, fontFamily: LUXE.display, marginTop: 22, fontSize: 28 }}>{s.t}</h3>
              <p style={{ ...LT.small, marginTop: 14, color: s.active ? LUXE.ash : LUXE.navy, opacity: s.active ? 1 : 0.6 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </LuxeSection>

      <LuxeFooter />
    </div>
  );
};

window.LuxeProduct = LuxeProduct;
