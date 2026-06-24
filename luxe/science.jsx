// Luxe Science — VAMTOXIN deep dive

const LuxeScience = () => (
  <div style={{ width: '100%', background: LUXE.bone, color: LUXE.navy, fontFamily: LUXE.body, fontWeight: 300 }}>
    <LuxeHeader variant="navy" transparent />

    {/* HERO dark */}
    <section style={{ background: LUXE.navy, color: LUXE.bone, padding: '200px 48px 88px', marginTop: -65 }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', textAlign: 'center' }}>
        <LuxeEyebrow align="center" color={LUXE.champagne}>The Science</LuxeEyebrow>
        <h1 style={{ ...LT.hero, color: LUXE.bone, marginTop: 32, fontSize: 'clamp(64px, 10vw, 140px)' }}>
          VAMTOXIN™
        </h1>
        <div style={{ marginTop: 24, color: LUXE.champagne, ...LT.eyebrow, letterSpacing: '0.32em' }}>
          A 2.0% Hexapeptide Composition
        </div>
        <div style={{ marginTop: 28 }}>
          <LuxeSymbol color={LUXE.champagne} size={28} />
        </div>
        <p style={{ ...LT.bodyLg, color: LUXE.bone, opacity: 0.78, marginTop: 36, maxWidth: '50ch', marginLeft: 'auto', marginRight: 'auto' }}>
          A SNARE-mimicking hexapeptide designed to soften expression at the
          protein level — exclusive to Finixlab, held under license from Supadelixir.
        </p>
      </div>
    </section>

    {/* MECHANISM 4-step */}
    <LuxeSection bg={LUXE.bone} padding="160px 48px">
      <div style={{ textAlign: 'center', marginBottom: 88 }}>
        <LuxeEyebrow align="center" color={LUXE.champagne}>The Mechanism</LuxeEyebrow>
        <h2 style={{ ...LT.h2, marginTop: 28, fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
          Quiet expression,<br/>at the protein level.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: `1px solid ${luxeRule(0.4)}` }}>
        {[
          { n:'01', t:'Receptor Bind',    d:"VAMTOXIN™'s hexapeptide residues bind selectively to SNAP-25." },
          { n:'02', t:'SNARE Inhibit',    d:'The SNARE complex formation is temporarily inhibited at the synaptic membrane.' },
          { n:'03', t:'Expression Soften',d:'Micro-contractions in expression muscles settle into a quieter rhythm.' },
          { n:'04', t:'Surface Compose',  d:'Wrinkle depth softens measurably; the skin\'s surface returns to its composed state.' },
        ].map((s, i) => (
          <div key={s.n} style={{ padding: '32px 28px', borderRight: i < 3 ? `1px solid ${luxeRule(0.4)}` : 'none' }}>
            <div style={{ ...LT.mono, color: LUXE.champagne, letterSpacing: '0.32em' }}>STEP {s.n}</div>
            <h3 style={{ ...LT.h4, fontFamily: LUXE.display, marginTop: 18, fontSize: 22 }}>{s.t}</h3>
            <p style={{ ...LT.small, color: LUXE.navy, opacity: 0.7, marginTop: 14, lineHeight: 1.7 }}>{s.d}</p>
          </div>
        ))}
      </div>

      {/* big diagram */}
      <div style={{ marginTop: 88, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div style={{ aspectRatio: '1/1', background: LUXE.navy, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 320 320" style={{ width: '90%', height: '90%' }}>
              <circle cx="160" cy="160" r="130" fill="none" stroke={LUXE.champagne} strokeWidth="0.6" opacity="0.4" />
              <circle cx="160" cy="160" r="90"  fill="none" stroke={LUXE.champagne} strokeWidth="0.6" opacity="0.5" />
              <circle cx="160" cy="160" r="50"  fill="none" stroke={LUXE.champagne} strokeWidth="0.8" opacity="0.7" />
              <circle cx="160" cy="160" r="12"  fill={LUXE.champagne} />
              <line x1="30" y1="160" x2="290" y2="160" stroke={LUXE.bone} strokeWidth="0.4" opacity="0.3" />
              <line x1="160" y1="30" x2="160" y2="290" stroke={LUXE.bone} strokeWidth="0.4" opacity="0.3" />
              <text x="180" y="158" fontFamily="ui-monospace" fontSize="7" fill={LUXE.bone} opacity="0.7">VAMTOXIN™</text>
              <text x="40" y="305" fontFamily="ui-monospace" fontSize="7" fill={LUXE.bone} opacity="0.55">Synaptic Membrane</text>
              <text x="40" y="80" fontFamily="ui-monospace" fontSize="7" fill={LUXE.bone} opacity="0.55">Synaptic Vesicle</text>
              <text x="210" y="80" fontFamily="ui-monospace" fontSize="7" fill={LUXE.bone} opacity="0.55">SNAP-25</text>
            </svg>
          </div>
          <div style={{ position: 'absolute', top: 24, left: 24, ...LT.mono, color: LUXE.champagne, letterSpacing: '0.24em' }}>FIG. 02 — SNARE COMPLEX</div>
          <div style={{ position: 'absolute', bottom: 24, right: 24, ...LT.mono, color: LUXE.bone, opacity: 0.5 }}>Schematic · not to scale</div>
        </div>

        <div>
          <LuxeEyebrow color={LUXE.champagne}>The Molecule</LuxeEyebrow>
          <h3 style={{ ...LT.h3, marginTop: 22, fontSize: 'clamp(28px, 3vw, 40px)' }}>
            A peptide designed,<br/>not borrowed.
          </h3>
          <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.78, marginTop: 24, lineHeight: 1.95 }}>
            VAMTOXIN™ is a hexapeptide architected to mimic the mechanism of
            botulinum toxin without the injection. Supadelixir holds the
            ingredient exclusively; Finixlab implements it as a formulation
            at 2.0% — paired with a marine-derived spicule complex that
            carries the peptide past the surface, where expression begins.
          </p>
          <div style={{ marginTop: 36, display: 'grid', gap: 0 }}>
            {[
              ['Class',         'SNARE-mimicking hexapeptide'],
              ['INCI Name',     'Acetyl Hexapeptide-8 derivative'],
              ['Concentration', '2.0% (20,000 ppm)'],
              ['Sole Holder',   'Supadelixir, exclusive license'],
              ['Carrier',       'Spicule Complex 0.5%'],
              ['Stability',     '24 months sealed at 25°C'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, padding: '14px 0', borderTop: `1px solid ${luxeRule(0.3)}` }}>
                <span style={{ ...LT.eyebrow, color: LUXE.navy, opacity: 0.5, letterSpacing: '0.20em' }}>{r[0]}</span>
                <span style={{ ...LT.body, color: LUXE.navy, fontFamily: LUXE.display, fontSize: 16 }}>{r[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LuxeSection>

    {/* PATENT — exclusivity highlight */}
    <LuxeSection bg={LUXE.navy} color={LUXE.bone} padding="140px 48px">
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <LuxeEyebrow align="center" color={LUXE.champagne}>Sole Patent</LuxeEyebrow>
        <h2 style={{ ...LT.h2, color: LUXE.bone, marginTop: 28, fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
          A single source.<br/>One molecule, one license.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ aspectRatio: '3/4', background: LUXE.navyDeep, overflow: 'hidden', position: 'relative' }}>
            <img src="assets/booster-box-front.png" alt="VAMTOXIN raw ingredient" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 24, left: 24, ...LT.mono, color: LUXE.champagne, letterSpacing: '0.24em' }}>RAW INGREDIENT</div>
          </div>
        </div>
        <div>
          <p style={{ ...LT.bodyLg, color: LUXE.bone, opacity: 0.85, lineHeight: 1.95 }}>
            VAMTOXIN™ is an ingredient held exclusively by Supadelixir. It is not
            available to any other brand, not licensed in any other formulation
            on the market. Finixlab is its sole skincare implementation —
            a 2.0% concentration that nothing else carries.
          </p>
          <p style={{ ...LT.body, color: LUXE.ash, marginTop: 28 }}>
            * Efficacy certification is in preparation. The ingredient design and
            concentration are stated transparently on every label. Where we
            reference clinical heritage, we reference the practice, never the
            metric beyond what we have measured.
          </p>
          <div style={{ marginTop: 36, paddingTop: 24, borderTop: '1px solid rgba(242,237,227,0.18)', display: 'flex', gap: 16 }}>
            <LuxeBtn variant="gold" size="md">Read the Patent Story →</LuxeBtn>
            <LuxeBtn variant="inverse" size="md">Download Whitepaper (PDF)</LuxeBtn>
          </div>
        </div>
      </div>
    </LuxeSection>

    {/* NOTOX METHOD */}
    <LuxeSection bg={LUXE.bone} padding="160px 48px">
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
        <LuxeEyebrow align="center" color={LUXE.champagne}>The Notox Method</LuxeEyebrow>
        <h2 style={{ ...LT.h2, marginTop: 28, fontSize: 'clamp(36px, 4.5vw, 60px)', fontStyle: 'italic' }}>
          A verb, not a substitute.
        </h2>
        <p style={{ ...LT.bodyLg, marginTop: 32, color: LUXE.navy, opacity: 0.72, maxWidth: '54ch', marginLeft: 'auto', marginRight: 'auto' }}>
          We never claim to replace clinical procedures. We fill the days between
          them with a daily prescription — clinically composed, quietly applied.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          { t:'In-Clinic',  d:'A post-procedure prescription that accelerates recovery composure.', tag:'AFTER' },
          { t:'At-Home',    d:'Between procedures, an eight-minute daily ritual.', tag:'DAILY' },
          { t:'Layered',    d:'Concentrated peptide paired with hydration and soothing layers.', tag:'LAYERING' },
          { t:'Quiet',      d:'Lightweight enough to never interfere with the next step.', tag:'LIGHT' },
        ].map((c, i) => (
          <div key={i} style={{ padding: '32px 24px', background: LUXE.navy, color: LUXE.bone, aspectRatio: '3/4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ ...LT.mono, color: LUXE.champagne, letterSpacing: '0.32em' }}>{c.tag}</div>
              <h3 style={{ ...LT.h3, fontFamily: LUXE.display, marginTop: 18, fontSize: 30 }}>{c.t}</h3>
            </div>
            <p style={{ ...LT.small, color: LUXE.ash, lineHeight: 1.7 }}>{c.d}</p>
          </div>
        ))}
      </div>
    </LuxeSection>

    <LuxeFooter />
  </div>
);

window.LuxeScience = LuxeScience;
