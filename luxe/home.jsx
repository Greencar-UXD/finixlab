// Luxe Home — full editorial hero with 4 pillars

const LuxeHome = () => {
  const pillars = [
    {
      n: '01', t: 'Identity',
      h: 'A quietly disciplined ritual, made by science.',
      d: 'Beyond the noise of layered routines and shallow absorption, Finixlab proposes a single composition of meaningful density. Not heaviness — but the structural trust skin remembers.',
      img: 'assets/booster-hero.png', pos: '50% 38%',
    },
    {
      n: '02', t: 'Quality',
      h: 'Standards that refuse to compromise.',
      d: "Built on Korean clinical peptide research and held to GMP-grade rigor. Premium bioactive ingredients composed not as a list but as a foundation — designed from the moment of formulation, never after.",
      img: 'assets/serum-trio.png', pos: '50% center',
    },
    {
      n: '03', t: 'Science',
      h: 'A precise engine of delivery, not surface.',
      d: 'VAMTOXIN™ is a SNARE-mimicking hexapeptide that doesn\'t stay on the surface — it settles structurally where expression begins. Carried by a spicule micro-needle complex into the dermis layer.',
      img: 'assets/serum-roller-green.png', pos: '50% center',
    },
    {
      n: '04', t: 'Sensory',
      h: 'Composure that engages every sense.',
      d: 'Deep Navy authority, matte restraint, and a silky-matte finish that lays flat without weight. The bottle\'s quiet click, the texture\'s viscous first impression — every touchpoint composed.',
      img: 'assets/peptosome-pair.jpg', pos: '50% 30%',
    },
  ];

  return (
    <div style={{ width: '100%', background: LUXE.bone, color: LUXE.navy, fontFamily: LUXE.body, fontWeight: 300 }}>
      <LuxeHeader variant="navy" transparent={true} />

      {/* HERO — full bleed dark with massive Italiana */}
      <section style={{ background: LUXE.navy, color: LUXE.bone, padding: '120px 48px 88px', position: 'relative', marginTop: -65, paddingTop: 200 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <LuxeEyebrow color={LUXE.champagne} align="center">A Korean Peptide Heritage</LuxeEyebrow>

            <h1 style={{ ...LT.hero, color: LUXE.bone, margin: '36px 0 0' }}>
              Finixlab
            </h1>
            <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center' }}>
              <LuxeSymbol color={LUXE.champagne} size={28} />
            </div>
            <p style={{ ...LT.bodyLg, color: LUXE.bone, opacity: 0.78, marginTop: 36, maxWidth: '52ch', marginLeft: 'auto', marginRight: 'auto' }}>
              A skincare brand of clinical peptide composition — built on
              the heritage of Korean dermal science, formulated for the
              quiet ritual of slow aging.
            </p>

            <div style={{ marginTop: 56, display: 'flex', gap: 16, justifyContent: 'center' }}>
              <LuxeBtn variant="gold" size="lg" href="#/shop">Explore the Collection →</LuxeBtn>
              <LuxeBtn variant="inverse" size="lg" href="#/science">Discover the Science</LuxeBtn>
            </div>
          </div>

          {/* hero product still */}
          <div style={{ marginTop: 96, position: 'relative', height: 560, overflow: 'hidden', background: LUXE.navyMid }}>
            <img src="assets/duo-on-stone.jpg" alt="Finixlab Collection" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%', opacity: 0.95 }} />
            <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
              <div style={{ ...LT.eyebrow, color: LUXE.bone, letterSpacing: '0.24em' }}>The Finixlab Collection</div>
              <div style={{ ...LT.mono, color: LUXE.bone }}>No. 02 / FW 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT HERITAGE — Korean clinic + global peptide bio */}
      <LuxeSection bg={LUXE.bone} padding="140px 48px">
        <div style={{ textAlign: 'center', marginBottom: 88 }}>
          <LuxeEyebrow align="center" color={LUXE.champagne}>The Two Threads</LuxeEyebrow>
          <h2 style={{ ...LT.h2, marginTop: 28, fontSize: 'clamp(36px, 4vw, 56px)' }}>
            Where clinical heritage<br/>meets peptide design.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: LUXE.mist }}>
              <img src="assets/booster-grid.png" alt="Korean clinic heritage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div>
            <LuxeEyebrow color={LUXE.champagne}>Korean Clinical Roots</LuxeEyebrow>
            <h3 style={{ ...LT.h3, marginTop: 22 }}>
              The dermatology of Seoul,<br/>distilled into daily skin.
            </h3>
            <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.78, marginTop: 22 }}>
              Decades of Korean clinical dermatology — the practice of softening expression
              lines without injection — translated into a single bottle. Born from the quiet
              cabinet of a Seoul clinic, refined through years of physician consultation.
            </p>
          </div>

          <div style={{ order: 1 }}>
            <LuxeEyebrow color={LUXE.champagne}>Global Peptide Science</LuxeEyebrow>
            <h3 style={{ ...LT.h3, marginTop: 22 }}>
              VAMTOXIN™ —<br/>a designed molecule.
            </h3>
            <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.78, marginTop: 22 }}>
              A hexapeptide engineered to mimic the SNARE-inhibiting mechanism of botulinum
              toxin, held exclusively by Supadelixir, and formulated by Finixlab at a precise
              2.0% concentration. An injection-free prescription for everyday rituals.
            </p>
          </div>
          <div style={{ order: 2 }}>
            <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: LUXE.mist }}>
              <img src="assets/serum-grid.png" alt="Peptide bio-tech" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 88, display: 'flex', justifyContent: 'center' }}>
          <LuxeSymbol color={LUXE.champagne} size={32} />
        </div>
      </LuxeSection>

      {/* PILLAR INDEX — 01 02 03 04 */}
      <LuxeSection bg={LUXE.navy} color={LUXE.bone} padding="120px 48px 32px">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <LuxeEyebrow align="center" color={LUXE.champagne}>The Finixlab Identity</LuxeEyebrow>
          <h2 style={{ ...LT.h2, color: LUXE.bone, marginTop: 28, fontSize: 'clamp(40px, 4.5vw, 64px)' }}>
            Four Pillars.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, paddingTop: 32, borderTop: '1px solid rgba(242,237,227,0.18)' }}>
          {pillars.map((p) => (
            <a key={p.n} href={`#/${p.t.toLowerCase()}`} style={{ display: 'block', color: 'inherit', textDecoration: 'none', padding: '32px 24px 64px', borderRight: '1px solid rgba(242,237,227,0.18)', borderLeft: p.n === '01' ? '1px solid rgba(242,237,227,0.18)' : 'none' }}>
              <div style={{ ...LT.mono, color: LUXE.champagne, letterSpacing: '0.32em' }}>{p.n}</div>
              <h3 style={{ ...LT.h3, color: LUXE.bone, marginTop: 18, fontSize: 26 }}>{p.t}</h3>
              <p style={{ ...LT.small, color: LUXE.ash, marginTop: 14, lineHeight: 1.7 }}>{p.d.split('.')[0]}.</p>
            </a>
          ))}
        </div>
      </LuxeSection>

      {/* PILLAR DETAILS — alternating */}
      {pillars.map((p, i) => (
        <LuxeSection key={p.n} bg={i % 2 === 0 ? LUXE.bone : LUXE.pearl} padding="120px 48px">
          <div style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr', gap: 72, alignItems: 'center' }}>
            <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: LUXE.mist }}>
                <img src={p.img} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
            </div>

            <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
              <div style={{ ...LT.mono, color: LUXE.champagne, letterSpacing: '0.32em' }}>FIG. {p.n}</div>
              <div style={{ ...LT.eyebrow, color: LUXE.navy, marginTop: 14, opacity: 0.5 }}>{p.t}</div>
              <h2 style={{ ...LT.h2, marginTop: 24, fontSize: 'clamp(34px, 4vw, 52px)' }}>
                {p.h}
              </h2>
              <p style={{ ...LT.bodyLg, color: LUXE.navy, opacity: 0.78, marginTop: 28, maxWidth: '50ch' }}>
                {p.d}
              </p>
            </div>
          </div>
        </LuxeSection>
      ))}

      {/* INGREDIENT DUO — VAMTOXIN + Spicule */}
      <LuxeSection bg={LUXE.navy} color={LUXE.bone} padding="140px 48px">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <LuxeEyebrow align="center" color={LUXE.champagne}>Our Composition</LuxeEyebrow>
          <h2 style={{ ...LT.h2, color: LUXE.bone, marginTop: 28, fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
            Two compounds, one architecture.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          {[
            {
              tag: 'VAMTOXIN™',
              sub: 'A fundamental peptide solution.',
              h: 'For the structural balance of expression skin.',
              d: 'Finixlab\'s exclusive complex — a designed hexapeptide that orchestrates the structural balance across every layer of expression skin. Not a number on a list, but a careful optimization of concentration and the rate skin accepts it.',
              img: 'assets/booster-box-front.png',
              cta: 'View Our Solution',
            },
            {
              tag: 'SPICULE COMPLEX',
              sub: 'A scientifically refined delivery system.',
              h: 'A precise vehicle for active compounds.',
              d: 'A marine sponge-derived micro-needle complex that escorts VAMTOXIN™ past the surface, into the depth where expression begins. The science of delivery that doesn\'t leave actives stranded at the skin\'s edge.',
              img: 'assets/serum-pump.png',
              cta: 'Discover the Mechanism',
            },
          ].map((ing, i) => (
            <article key={i} style={{ padding: 40, background: LUXE.navyMid, borderTop: `1px solid ${LUXE.champagne}` }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: LUXE.navyDeep, marginBottom: 32 }}>
                <img src={ing.img} alt={ing.tag} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ ...LT.eyebrow, color: LUXE.champagne, letterSpacing: '0.24em' }}>{ing.tag}</div>
              <h3 style={{ ...LT.h3, color: LUXE.bone, marginTop: 18, fontSize: 28 }}>{ing.h}</h3>
              <p style={{ ...LT.small, color: LUXE.ash, marginTop: 12 }}>{ing.sub}</p>
              <p style={{ ...LT.body, color: LUXE.bone, opacity: 0.78, marginTop: 22 }}>{ing.d}</p>
              <div style={{ marginTop: 32 }}>
                <LuxeBtn variant="inverse" size="sm" href="#/science">{ing.cta} →</LuxeBtn>
              </div>
            </article>
          ))}
        </div>
      </LuxeSection>

      {/* CLOSING STATEMENT */}
      <LuxeSection bg={LUXE.bone} padding="160px 48px">
        <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
          <div style={{ marginBottom: 36 }}>
            <LuxeSymbol color={LUXE.champagne} size={28} />
          </div>
          <h2 style={{ ...LT.h2, fontSize: 'clamp(34px, 4vw, 52px)', lineHeight: 1.2, fontStyle: 'italic' }}>
            Uniting Korean clinical heritage and global peptide design — Finixlab realizes a bold vision of timeless equilibrium.
          </h2>
          <p style={{ ...LT.bodyLg, color: LUXE.navy, opacity: 0.7, marginTop: 36, maxWidth: '60ch', marginLeft: 'auto', marginRight: 'auto' }}>
            We bring together the cabinet-shelf rigor of Seoul dermatology with
            world-class peptide architecture, where artistic restraint meets
            technological trust — the equilibrium of science and skin.
          </p>
        </div>
      </LuxeSection>

      <LuxeFooter />
    </div>
  );
};

window.LuxeHome = LuxeHome;
