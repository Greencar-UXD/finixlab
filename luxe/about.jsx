// Luxe About / Brand Story

const LuxeAbout = () => (
  <div style={{ width: '100%', background: LUXE.bone, color: LUXE.navy, fontFamily: LUXE.body, fontWeight: 300 }}>
    <LuxeHeader variant="bone" />

    {/* HERO masthead */}
    <section style={{ background: LUXE.bone, padding: '120px 48px 88px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', textAlign: 'center' }}>
        <LuxeEyebrow align="center" color={LUXE.champagne}>The Brand</LuxeEyebrow>
        <h1 style={{ ...LT.hero, marginTop: 32, fontSize: 'clamp(72px, 11vw, 160px)' }}>
          Finixlab
        </h1>
        <div style={{ marginTop: 28 }}>
          <LuxeSymbol color={LUXE.champagne} size={28} />
        </div>
        <p style={{ ...LT.bodyLg, marginTop: 36, color: LUXE.navy, opacity: 0.72, maxWidth: '52ch', marginLeft: 'auto', marginRight: 'auto' }}>
          A skincare brand of Korean clinical peptide composition, conceived as a quiet
          discipline — translating decades of dermal science into a single daily ritual.
        </p>
      </div>
    </section>

    {/* IMAGE BAND */}
    <section style={{ background: LUXE.navy, padding: 0 }}>
      <div style={{ position: 'relative', height: 600, overflow: 'hidden' }}>
        <img src="assets/peptosome-pair.jpg" alt="Finixlab still life" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
        <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32, display: 'flex', justifyContent: 'space-between', color: LUXE.bone }}>
          <div style={{ ...LT.mono, letterSpacing: '0.24em' }}>FIG. 01 — STILL LIFE, SEOUL STUDIO</div>
          <div style={{ ...LT.eyebrow, color: LUXE.bone, letterSpacing: '0.24em' }}>2025</div>
        </div>
      </div>
    </section>

    {/* HERITAGE NARRATIVE */}
    <LuxeSection bg={LUXE.bone} padding="160px 48px">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 96, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 96 }}>
          <LuxeEyebrow color={LUXE.champagne}>Brand Story</LuxeEyebrow>
          <h2 style={{ ...LT.h2, marginTop: 24, fontSize: 'clamp(36px, 4vw, 56px)' }}>
            A heritage<br/>quietly composed.
          </h2>
          <LuxeSymbol color={LUXE.champagne} size={20} />
        </div>

        <div>
          <p style={{ ...LT.bodyLg, color: LUXE.navy, opacity: 0.84 }}>
            Finixlab — 'FNX' in our wordmark — is the patient name we have given
            to a Korean tradition of clinical dermatology. It begins in the cabinet
            of a Seoul clinic, where physicians have been observing the same
            quiet truth for years: that lasting skin is the work of consistency,
            not intervention.
          </p>
          <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.72, marginTop: 28 }}>
            We were founded with a single proposition. The essence of clinical
            procedures — softening expression lines, returning the skin's quiet
            composure — does not have to remain in the clinic. It can be carried
            home as a daily prescription, formulated by science but received
            as ritual.
          </p>
          <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.72, marginTop: 22 }}>
            VAMTOXIN™ — held exclusively by Supadelixir, formulated by Finixlab
            at 2.0% concentration — is the molecular argument for that
            proposition. A SNARE-mimicking hexapeptide designed to do, at the
            protein level, what an injection does on the surface. Without the
            needle. Without the disruption.
          </p>

          {/* pull quote */}
          <div style={{ margin: '64px 0', padding: '36px 0', borderTop: `1px solid ${luxeRule(0.4)}`, borderBottom: `1px solid ${luxeRule(0.4)}` }}>
            <p style={{ ...LT.h3, fontStyle: 'italic', color: LUXE.navy, lineHeight: 1.3, fontSize: 'clamp(22px, 2.4vw, 32px)' }}>
              "What we prescribe is consistency, not efficacy. Eight minutes a day
              that keep expression from dulling — that single thing, as quietly as possible."
            </p>
            <div style={{ ...LT.eyebrow, marginTop: 24, color: LUXE.navy, opacity: 0.5 }}>
              — Hyejin Yoon, Founder
            </div>
          </div>

          <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.72 }}>
            Our composition is held to a single standard: concentration before
            narrative. The label states what is inside and what concentration
            it sits at. The clinical research is referenced, never claimed
            beyond what it can carry. We do not market what we have not measured.
          </p>
        </div>
      </div>
    </LuxeSection>

    {/* FOUR PRINCIPLES */}
    <LuxeSection bg={LUXE.navy} color={LUXE.bone} padding="140px 48px">
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
        <LuxeEyebrow align="center" color={LUXE.champagne}>Our Principles</LuxeEyebrow>
        <h2 style={{ ...LT.h2, color: LUXE.bone, marginTop: 28, fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
          Four standards we keep.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '64px 80px' }}>
        {[
          { n:'01', t:'Honesty in Concentration', d:'The active percentage is stated on the label, in the language of prescription rather than marketing. Every claim is grounded in what the formula can actually carry.' },
          { n:'02', t:'Clinic Made Everyday',     d:'The essence of clinical procedures — softening expression lines — moved out of the cabinet and into the morning routine. An eight-minute prescription, daily.' },
          { n:'03', t:'A Quiet Ritual',          d:'The lightest touch. Consistency is what shapes skin in the end, not aggression. We design for the rhythm of a daily eight minutes.' },
          { n:'04', t:'Slow Asia',                d:'Born in Seoul, refined across the studios of Shanghai, Tokyo, and Ho Chi Minh. The poetic restraint of Asian indie beauty placed alongside clinical rigor.' },
        ].map(p => (
          <div key={p.n} style={{ paddingTop: 32, borderTop: '1px solid rgba(242,237,227,0.18)' }}>
            <div style={{ ...LT.mono, color: LUXE.champagne, letterSpacing: '0.32em' }}>PRINCIPLE {p.n}</div>
            <h3 style={{ ...LT.h3, color: LUXE.bone, marginTop: 18, fontSize: 30 }}>{p.t}</h3>
            <p style={{ ...LT.body, color: LUXE.ash, marginTop: 18, lineHeight: 1.85 }}>{p.d}</p>
          </div>
        ))}
      </div>
    </LuxeSection>

    {/* LAB STUDIO */}
    <section style={{ background: LUXE.bone, padding: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 640 }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="assets/serum-trio.png" alt="Lab studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '120px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 600 }}>
          <LuxeEyebrow color={LUXE.champagne}>The Studio</LuxeEyebrow>
          <h2 style={{ ...LT.h2, marginTop: 24, fontSize: 'clamp(34px, 4vw, 52px)' }}>
            Made in Seoul, by hand and instrument.
          </h2>
          <p style={{ ...LT.body, color: LUXE.navy, opacity: 0.78, marginTop: 24, lineHeight: 1.95 }}>
            All formulations are produced in small batches at our Seoul lab and
            GMP-certified partner facilities. A new batch is composed every
            eight weeks, and the batch number is printed on every label —
            traceable, accountable, never anonymous.
          </p>
          <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {[
              ['CGMP', 'ISO 22716 certified'],
              ['IRB',  'Seoul clinical board'],
              ['PETA', 'Cruelty-free, vegan'],
              ['EWG',  'Green grade'],
            ].map((c, i) => (
              <div key={i} style={{ paddingTop: 14, borderTop: `1px solid ${luxeRule(0.3)}` }}>
                <div style={{ ...LT.h4, fontFamily: LUXE.display, fontSize: 20, color: LUXE.navy }}>{c[0]}</div>
                <div style={{ ...LT.caption, color: LUXE.navy, opacity: 0.6, marginTop: 6 }}>{c[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CLINIC PARTNERS */}
    <LuxeSection bg={LUXE.navyDeep} color={LUXE.bone} padding="140px 48px">
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
        <LuxeEyebrow align="center" color={LUXE.champagne}>Partners</LuxeEyebrow>
        <h2 style={{ ...LT.h2, color: LUXE.bone, marginTop: 28, fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
          A network of<br/>slow-thinking clinics.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {[
          { c:'Seoul', n:14 },
          { c:'Shanghai', n:6 },
          { c:'Tokyo', n:5 },
          { c:'Ho Chi Minh', n:3 },
        ].map((city, i) => (
          <div key={city.c} style={{ padding: '32px 24px', borderRight: i < 3 ? '1px solid rgba(242,237,227,0.14)' : 'none', textAlign: 'center' }}>
            <div style={{ ...LT.hero, fontFamily: LUXE.display, color: LUXE.champagne, fontSize: 64, lineHeight: 1 }}>{city.n}</div>
            <div style={{ ...LT.eyebrow, color: LUXE.bone, marginTop: 16, letterSpacing: '0.24em' }}>{city.c}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
        <LuxeBtn variant="inverse" size="lg">Find a Partner Clinic →</LuxeBtn>
      </div>
    </LuxeSection>

    <LuxeFooter />
  </div>
);

window.LuxeAbout = LuxeAbout;
