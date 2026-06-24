// Luxe shared tokens + components — Liaison de LOREN inspired
// Deep Navy authority · matte restraint · serif elegance

const LUXE = {
  // colors
  navy:      '#0F1B2A',   // deepest navy — primary surface
  navyMid:   '#1C2D40',
  navyDeep:  '#0A1320',   // even deeper for accents
  ash:       '#75839C',   // cool gray-blue
  champagne: '#BFA77A',   // gold accent (replaces Lab Red)
  champLight:'#D9C8A6',
  bone:      '#F2EDE3',   // off-white cream
  pearl:     '#FBF8F1',   // highest light
  mist:      '#DCD6CA',   // soft warm gray
  ink:       '#0F1B2A',
  paper:     '#FBF8F1',
  red:       '#C2433A',   // for signal only

  // type
  display:   '"Italiana", serif',
  serif:     '"Italiana", "Cormorant Garamond", serif',
  body:      '"Pretendard Variable", "Pretendard", system-ui, sans-serif',
  mono:      'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
};

// ============ TYPE SCALE ============
const LT = {
  // Display (Italiana) — for hero/h1
  hero:    { fontFamily: '"Italiana", serif', fontWeight: 400, fontSize: 'clamp(80px, 12vw, 180px)', lineHeight: 0.92, letterSpacing: '-0.02em' },
  h1:      { fontFamily: '"Italiana", serif', fontWeight: 400, fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 1.0, letterSpacing: '-0.015em' },
  h2:      { fontFamily: '"Italiana", serif', fontWeight: 400, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.1, letterSpacing: '-0.01em' },
  h3:      { fontFamily: '"Italiana", serif', fontWeight: 400, fontSize: 'clamp(28px, 3vw, 36px)', lineHeight: 1.2, letterSpacing: '-0.005em' },
  h4:      { fontFamily: '"Italiana", serif', fontWeight: 400, fontSize: 22, lineHeight: 1.25, letterSpacing: '0' },
  // Body Pretendard
  bodyLg:  { fontFamily: LUXE.body, fontWeight: 300, fontSize: 17, lineHeight: 1.85 },
  body:    { fontFamily: LUXE.body, fontWeight: 300, fontSize: 14, lineHeight: 1.85 },
  small:   { fontFamily: LUXE.body, fontWeight: 300, fontSize: 13, lineHeight: 1.7 },
  caption: { fontFamily: LUXE.body, fontWeight: 300, fontSize: 12, lineHeight: 1.6 },
  // Eyebrow
  eyebrow: { fontFamily: LUXE.body, fontWeight: 400, fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase' },
  mono:    { fontFamily: LUXE.mono, fontSize: 11, letterSpacing: '0.16em' },
};

const luxeRule = (a = 0.2) => `rgba(191,167,122,${a})`;
const navyRule = (a = 0.2) => `rgba(255,255,255,${a})`;

// ============ HEADER ============
function LuxeHeader({ variant = 'navy', transparent = false }) {
  const isNavy = variant === 'navy';
  const bg = transparent ? 'transparent' : (isNavy ? LUXE.navy : LUXE.bone);
  const fg = isNavy ? LUXE.bone : LUXE.navy;
  const rule = isNavy ? 'rgba(242,237,227,0.14)' : 'rgba(15,27,42,0.14)';

  return (
    <header style={{
      background: bg, color: fg, padding: '20px 48px',
      display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 32,
      borderBottom: transparent ? 'none' : `1px solid ${rule}`,
      fontFamily: LUXE.body, fontWeight: 300,
      position: 'relative', zIndex: 50,
    }}>
      <nav style={{ display: 'flex', gap: 36, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        <a href="#/shop" style={{ color: fg, textDecoration: 'none' }}>Shop</a>
        <a href="#/about" style={{ color: fg, textDecoration: 'none' }}>About</a>
        <a href="#/science" style={{ color: fg, textDecoration: 'none' }}>Science</a>
        <a href="#/journal" style={{ color: fg, textDecoration: 'none' }}>Journal</a>
      </nav>

      <a href="#/home" style={{ display: 'inline-block', textDecoration: 'none' }}>
        <div style={{ ...LT.h4, fontFamily: LUXE.display, fontSize: 26, color: fg, letterSpacing: '0.08em' }}>
          FINIXLAB
        </div>
      </a>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 18, fontSize: 11, letterSpacing: '0.16em' }}>
        <a href="#/search" aria-label="Search" style={{ color: fg, display: 'inline-flex', textDecoration: 'none', padding: 2 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>
        </a>
        <a href="#/account" style={{ color: fg, textDecoration: 'none' }}>EN ▾</a>
        <a href="#/account" style={{ color: fg, textDecoration: 'none' }}>Account</a>
        <a href="#/cart" style={{ color: fg, textDecoration: 'none', position: 'relative' }}>
          Bag
          <span style={{ position: 'absolute', top: -3, right: -10, width: 5, height: 5, borderRadius: '50%', background: LUXE.champagne }}/>
        </a>
      </div>
    </header>
  );
}

// ============ FOOTER ============
function LuxeFooter() {
  return (
    <footer style={{ background: LUXE.navyDeep, color: LUXE.bone, padding: '64px 48px 32px', fontFamily: LUXE.body, fontWeight: 300 }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 32, paddingBottom: 36, borderBottom: '1px solid rgba(242,237,227,0.14)' }}>
          <div>
            <div style={{ ...LT.h3, fontFamily: LUXE.display, color: LUXE.bone, marginBottom: 16, fontSize: 32 }}>Finixlab</div>
            <p style={{ ...LT.caption, color: LUXE.ash, maxWidth: '34ch' }}>
              Korean clinical peptide science,<br/>quietly delivered into daily skin.
            </p>
            <p style={{ ...LT.caption, color: LUXE.ash, marginTop: 14 }}>
              Finixlab Co., Ltd.<br/>Paju, Gyeonggi · Ships globally
            </p>
          </div>
          {[
            { t:'Shop',  items:['Peptosome Booster','Spicule Serum','Notox Cream · FW 26','Sample Trials'] },
            { t:'Care',  items:['Customer Care','Order & Shipping','Returns','Product FAQ'] },
            { t:'Brand', items:['Brand Story','Our Science','Clinic Partners','Press'] },
            { t:'Connect', items:['Instagram','YouTube','Newsletter','Store Locator'] },
          ].map(c => (
            <div key={c.t}>
              <div style={{ ...LT.eyebrow, color: LUXE.champagne, marginBottom: 18, letterSpacing: '0.24em' }}>{c.t}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
                {c.items.map(i => <li key={i} style={{ fontSize: 13, color: LUXE.bone, opacity: 0.85 }}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: LUXE.ash, letterSpacing: '0.14em' }}>
          <span>© 2026 Finixlab Co., Ltd.</span>
          <span style={{ display: 'flex', gap: 18 }}>
            <a href="#/privacy" style={{ color: LUXE.ash, textDecoration: 'none' }}>Privacy</a>
            <a href="#/terms" style={{ color: LUXE.ash, textDecoration: 'none' }}>Terms</a>
            <a href="#/cookies" style={{ color: LUXE.ash, textDecoration: 'none' }}>Cookies</a>
          </span>
          <span style={{ fontFamily: LUXE.display, letterSpacing: '0.16em' }}>Equilibrium of Science & Skin</span>
        </div>
      </div>
    </footer>
  );
}

// ============ ATOMS ============
function LuxeBtn({ children, variant = 'primary', size = 'md', style = {}, full = false, href = '#' }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    fontFamily: LUXE.body, fontWeight: 400, letterSpacing: '0.18em',
    textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none',
    transition: 'all 0.3s ease',
    padding: size === 'lg' ? '17px 32px' : size === 'sm' ? '10px 18px' : '14px 26px',
    fontSize: size === 'lg' ? 12 : 11,
    border: '1px solid currentColor',
    width: full ? '100%' : 'auto',
  };
  const variants = {
    primary:  { background: hover ? LUXE.champagne : LUXE.navy, color: hover ? LUXE.navy : LUXE.bone, borderColor: hover ? LUXE.champagne : LUXE.navy },
    inverse:  { background: hover ? LUXE.bone : 'transparent', color: hover ? LUXE.navy : LUXE.bone, borderColor: LUXE.bone },
    ghost:    { background: hover ? 'rgba(15,27,42,0.04)' : 'transparent', color: 'currentColor' },
    gold:     { background: hover ? LUXE.navy : LUXE.champagne, color: hover ? LUXE.champagne : LUXE.navy, borderColor: hover ? LUXE.navy : LUXE.champagne },
  };
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </a>
  );
}

function LuxeEyebrow({ children, color, align = 'left' }) {
  return (
    <div style={{ ...LT.eyebrow, color: color || LUXE.champagne, display: 'flex', alignItems: 'center', gap: 14, justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
      <span style={{ width: 28, height: 1, background: 'currentColor', opacity: 0.5 }}/>
      <span>{children}</span>
      {align === 'center' && <span style={{ width: 28, height: 1, background: 'currentColor', opacity: 0.5 }}/>}
    </div>
  );
}

function LuxeSection({ bg, padding, children, style = {}, contained = true, color = LUXE.navy }) {
  return (
    <section style={{
      background: bg || LUXE.bone,
      color,
      padding: padding || '140px 48px',
      fontFamily: LUXE.body, fontWeight: 300,
      ...style,
    }}>
      {contained ? <div style={{ maxWidth: 1320, margin: '0 auto' }}>{children}</div> : children}
    </section>
  );
}

// Symbol — small diamond/lozenge mark used between sections
function LuxeSymbol({ color, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || LUXE.champagne} strokeWidth="0.8" style={{ display: 'inline-block' }}>
      <path d="M12 2 L22 12 L12 22 L2 12 Z" />
      <circle cx="12" cy="12" r="3" fill={color || LUXE.champagne} stroke="none" />
    </svg>
  );
}

Object.assign(window, { LUXE, LT, luxeRule, navyRule, LuxeHeader, LuxeFooter, LuxeBtn, LuxeEyebrow, LuxeSection, LuxeSymbol });
