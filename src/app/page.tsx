'use client'

import { useEffect, useRef, useState } from 'react'

const features = [
  {
    icon: '📍',
    title: 'GPS & Location',
    desc: 'Real-time tracking, geofencing, maps integration and proximity-based features for field operations.',
    gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
  },
  {
    icon: '🔧',
    title: 'Field Operations',
    desc: 'Mobile tools for field teams: data collection, offline sync, inspections and real-time reporting.',
    gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
  },
  {
    icon: '⚡',
    title: 'Mobile Workflows',
    desc: 'Streamlined business processes with intuitive mobile interfaces, form builders and approval chains.',
    gradient: 'linear-gradient(135deg, #F43F5E, #FB923C)',
  },
  {
    icon: '🔗',
    title: 'API Integration',
    desc: 'RESTful API design, third-party services and seamless data synchronization.',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
  },
  {
    icon: '⚙️',
    title: 'Process Automation',
    desc: 'Automating repetitive tasks, intelligent routing, notifications and workflow optimization.',
    gradient: 'linear-gradient(135deg, #F97316, #F43F5E)',
  },
  {
    icon: '📱',
    title: 'Cross-Platform',
    desc: 'Single codebase to iOS and Android with React Native and Expo, maximizing reach and efficiency.',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
  },
]

const techs = [
  { icon: '⚛️', name: 'React Native', desc: 'Cross-platform UI', color: '#61DAFB' },
  { icon: '📦', name: 'Expo', desc: 'Dev platform', color: '#000000' },
  { icon: '🟦', name: 'TypeScript', desc: 'Type-safe', color: '#3178C6' },
  { icon: '🟨', name: 'JavaScript', desc: 'Core language', color: '#F7DF1E' },
  { icon: '🌐', name: 'REST APIs', desc: 'Backend', color: '#FF6B6B' },
  { icon: '🗺️', name: 'Maps & GPS', desc: 'Location', color: '#10B981' },
  { icon: '💾', name: 'Offline Storage', desc: 'SQLite & AsyncStorage', color: '#8B5CF6' },
  { icon: '🔔', name: 'Notifications', desc: 'Real-time alerts', color: '#F97316' },
  { icon: '📱', name: 'iOS & Android', desc: 'App Store / Play Store', color: '#06B6D4' },
  { icon: '🛠️', name: 'Node.js', desc: 'Tooling', color: '#339933' },
  { icon: '🐙', name: 'Git & GitHub', desc: 'Version control', color: '#F0F6FC' },
  { icon: '☁️', name: 'Vercel', desc: 'Deployment', color: '#FFFFFF' },
]

const projects = [
  {
    emoji: '📍',
    title: 'Field Operations Tracker',
    desc: 'GPS-based app for field teams with offline data collection, route optimization and real-time sync.',
    tags: ['React Native', 'GPS', 'Offline Sync'],
    gradient: 'linear-gradient(135deg, #6366F1, #00D9FF)',
  },
  {
    emoji: '📋',
    title: 'Digital Inspection App',
    desc: 'Mobile inspection workflows with photo capture, automated reports and approval chains for QA.',
    tags: ['Expo', 'Camera', 'Workflows'],
    gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
  },
  {
    emoji: '🚀',
    title: 'Delivery Management',
    desc: 'End-to-end delivery tracking with customer notifications, proof of delivery and analytics.',
    tags: ['TypeScript', 'REST API', 'Maps'],
    gradient: 'linear-gradient(135deg, #00FF94, #00D9FF)',
  },
  {
    emoji: '📊',
    title: 'Business Analytics',
    desc: 'Real-time business metrics and KPIs on mobile with customizable dashboards and reporting.',
    tags: ['React Native', 'Charts', 'Automation'],
    gradient: 'linear-gradient(135deg, #8B5CF6, #FF6B6B)',
  },
]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredTile, setHoveredTile] = useState<number | null>(null)
  const [morphed, setMorphed] = useState<number | null>(null)
  const counterRefs = useRef<(HTMLDivElement | null)[]>([])
  const [counters, setCounters] = useState([0, 0, 0, 0])
  const countersStart = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
      const sections = ['home', 'features', 'tech', 'projects', 'stats', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id)
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const targets = [15, 6, 12, 100]
    const duration = 2000
    let raf: number

    const animate = () => {
      if (!countersStart.current) return
      const start = performance.now()
      const step = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCounters(targets.map((t) => Math.round(t * eased)))
        if (progress < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countersStart.current = true
            animate()
            io.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    if (counterRefs.current[0]) io.observe(counterRefs.current[0])
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])

  return (
    <main style={{ background: '#05050a' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', top: '40%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.3), transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '20%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.25), transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: scrollY > 40 ? 'rgba(5,5,10,0.85)' : 'transparent', backdropFilter: scrollY > 40 ? 'blur(20px)' : 'none', borderBottom: scrollY > 40 ? '1px solid rgba(255,255,255,0.08)' : 'none', transition: 'all 0.3s' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0.8rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #6366F1, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800 }}>M</div>
            <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: -0.5 }}>Mobile<span style={{ background: 'linear-gradient(135deg,#6366F1,#00D9FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Digital</span></span>
          </div>
          <ul style={{ display: 'flex', gap: 32, listStyle: 'none' }}>
            {[['home', 'Home'], ['features', 'Features'], ['tech', 'Tech'], ['projects', 'Projects'], ['contact', 'Contact']].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  style={{
                    color: activeSection === id ? '#fff' : '#a0a0b0',
                    textDecoration: 'none', fontSize: 14, fontWeight: activeSection === id ? 600 : 500,
                    position: 'relative', transition: 'color 0.2s',
                  }}
                >
                  {label}
                  {activeSection === id && (
                    <span style={{ position: 'absolute', bottom: -6, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#6366F1,#00D9FF)', borderRadius: 2 }} />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="home" style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8rem 2rem 4rem' }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.5rem 1.2rem', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 50, fontSize: 13, color: '#a5b4fc', fontWeight: 500, marginBottom: 28 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 10px #00ff88' }} />
            Available for new projects
          </div>
          <h1 style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Crafting{' '}
            <span style={{ background: 'linear-gradient(135deg,#6366F1,#00D9FF,#EC4899)', backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradientShift 6s ease infinite' }}>
              Beautiful
            </span>{' '}
            Mobile<br />
            Applications
          </h1>
          <p style={{ fontSize: 'clamp(1.05rem, 2.4vw, 1.3rem)', color: '#a0a0b0', maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Experience designing and developing mobile applications using modern cross-platform technologies. GPS, digital field operations, API integration, and business process automation.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ padding: '0.95rem 2.2rem', background: 'linear-gradient(135deg,#6366F1,#8B5CF6)', color: '#fff', border: 'none', borderRadius: 14, fontSize: 15, fontWeight: 600, cursor: 'pointer', textDecoration: 'none', boxShadow: '0 8px 30px rgba(99,102,241,0.4)', transition: 'transform 0.2s, box-shadow 0.3s' }} onMouseOver={(e)=>{e.currentTarget.style.transform='translateY(-2px)'}} onMouseOut={(e)=>{e.currentTarget.style.transform='none'}}>
              View Projects →
            </a>
            <a href="https://github.com/abdoulrl2028-cloud-Dev" target="_blank" rel="noopener noreferrer" style={{ padding: '0.95rem 2.2rem', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 14, fontSize: 15, fontWeight: 600, cursor: 'pointer', textDecoration: 'none', backdropFilter: 'blur(10px)', transition: 'background 0.2s' }} onMouseOver={(e)=>{e.currentTarget.style.background='rgba(255,255,255,0.12)'}} onMouseOut={(e)=>{e.currentTarget.style.background='rgba(255,255,255,0.05)'}}>
              GitHub ↗
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 56, flexWrap: 'wrap' }}>
            {[
              { label: 'iOS & Android', icon: '📱' },
              { label: 'React Native', icon: '⚛️' },
              { label: 'Expo', icon: '📦' },
              { label: 'TypeScript', icon: '🟦' },
            ].map((t) => (
              <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#a0a0b0' }}>
                <span style={{ fontSize: 18 }}>{t.icon}</span> {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" style={{ position: 'relative', zIndex: 1, padding: '0 2rem 6rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#818cf8', marginBottom: 12 }}>Capabilities</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: -1, marginBottom: 12 }}>What I Build</h2>
          <p style={{ color: '#a0a0b0', maxWidth: 560, margin: '0 auto', fontSize: 16 }}>End-to-end mobile development with focus on performance, usability and real-world functionality.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              onMouseEnter={() => setHoveredTile(i)}
              onMouseLeave={() => setHoveredTile(null)}
              onClick={() => setMorphed(morphed === i ? null : i)}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: 28,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                transform: hoveredTile === i ? 'translateY(-6px)' : 'none',
                boxShadow: hoveredTile === i ? '0 20px 60px rgba(0,0,0,0.5)' : 'none',
              }}
            >
              <div style={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, borderRadius: '50%', background: f.gradient, opacity: hoveredTile === i ? 0.25 : 0.08, transition: 'opacity 0.4s', filter: 'blur(30px)' }} />
              <div style={{ width: 52, height: 52, borderRadius: 14, background: f.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 18, boxShadow: `0 8px 24px ${f.gradient.slice(0, -1)},0.35)` , transform: morphed === i ? 'rotate(12deg) scale(1.1)' : 'none', transition: 'transform 0.4s' }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ color: '#a0a0b0', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, height: 3, width: hoveredTile === i ? '100%' : '0%', background: f.gradient, transition: 'width 0.5s ease' }} />
            </div>
          ))}
        </div>
      </section>

      <section id="tech" style={{ position: 'relative', zIndex: 1, padding: '0 2rem 6rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#818cf8', marginBottom: 12 }}>Technology</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: -1, marginBottom: 12 }}>Tech Stack</h2>
          <p style={{ color: '#a0a0b0', maxWidth: 560, margin: '0 auto', fontSize: 16 }}>Modern tools and frameworks for building high-quality mobile applications.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          {techs.map((t, i) => (
            <div key={t.name} onMouseEnter={() => setHoveredTile(100 + i)} onMouseLeave={() => setHoveredTile(null)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, transition: 'all 0.3s', transform: hoveredTile === 100 + i ? 'translateX(6px)' : 'none', borderColor: hoveredTile === 100 + i ? t.color : 'rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: 28, filter: t.icon === '🟦' || t.icon === '📦' || t.icon === '☁️' ? 'grayscale(0) brightness(2)' : 'none' }}>{t.icon}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                <div style={{ color: '#80808f', fontSize: 12 }}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={{ position: 'relative', zIndex: 1, padding: '0 2rem 6rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#818cf8', marginBottom: 12 }}>Portfolio</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: -1, marginBottom: 12 }}>Featured Projects</h2>
          <p style={{ color: '#a0a0b0', maxWidth: 560, margin: '0 auto', fontSize: 16 }}>Real-world mobile applications solving practical business problems.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 22 }}>
          {projects.map((p, i) => (
            <div key={p.title} className="projectCard" onMouseEnter={() => setHoveredTile(200 + i)} onMouseLeave={() => setHoveredTile(null)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 22, overflow: 'hidden', transition: 'all 0.4s', transform: hoveredTile === 200 + i ? 'translateY(-8px)' : 'none', boxShadow: hoveredTile === 200 + i ? '0 25px 60px rgba(0,0,0,0.5)' : 'none' }}>
              <div style={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', background: p.gradient, fontSize: 60, position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64, transform: hoveredTile === 200 + i ? 'scale(1.15) rotate(-4deg)' : 'none', transition: 'transform 0.5s' }}>{p.emoji}</span>
                <div style={{ position: 'absolute', top: 16, right: 16, padding: '4px 12px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', borderRadius: 20, fontSize: 11, fontWeight: 600, color: '#fff' }}>2026</div>
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: '#a0a0b0', fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{ padding: '4px 12px', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 8, fontSize: 12, color: '#a5b4fc', fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="stats" style={{ position: 'relative', zIndex: 1, padding: '0 2rem 6rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 22, textAlign: 'center' }}>
          {[
            { value: counters[0], suffix: '+', label: 'Projects Delivered' },
            { value: counters[1], suffix: '+', label: 'Core Areas Explored' },
            { value: counters[2], suffix: '+', label: 'Technologies' },
            { value: counters[3], suffix: '%', label: 'Cross-Platform' },
          ].map((s, i) => (
            <div key={s.label} ref={(el) => { counterRefs.current[i] = el }} style={{ padding: 40, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20 }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg,#6366F1,#00D9FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: -2 }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ color: '#a0a0b0', fontSize: 14, marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ position: 'relative', zIndex: 1, padding: '0 2rem 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '4rem 2rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, backdropFilter: 'blur(20px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 400, height: 200, background: 'radial-gradient(ellipse, rgba(99,102,241,0.4), transparent 70%)', filter: 'blur(40px)' }} />
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: -1, marginBottom: 14 }}>Let&apos;s Build Something Amazing</h2>
          <p style={{ color: '#a0a0b0', maxWidth: 500, margin: '0 auto 32px', fontSize: 16, lineHeight: 1.7 }}>Ready to turn your mobile app idea into reality? Let&apos;s connect and discuss your next project.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/abdoulrl2028-cloud-Dev" target="_blank" rel="noopener noreferrer" style={{ padding: '0.9rem 2rem', background: 'linear-gradient(135deg,#6366F1,#8B5CF6)', color: '#fff', borderRadius: 14, fontSize: 15, fontWeight: 600, textDecoration: 'none', boxShadow: '0 8px 30px rgba(99,102,241,0.4)' }}>View GitHub</a>
            <a href="https://github.com/abdoulrl2028-cloud-Dev?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ padding: '0.9rem 2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: 14, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>All Repositories</a>
          </div>
        </div>
      </section>

      <footer style={{ position: 'relative', zIndex: 1, padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', color: '#80808f', fontSize: 13 }}>
        © 2026 Mobile Digital Products · Built with Next.js & deployed on Vercel · <a href="https://github.com/abdoulrl2028-cloud-Dev" target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', textDecoration: 'none' }}>GitHub</a>
      </footer>

      <style jsx global>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }
        body { background: #05050a; color: #fff; margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; overflow-x: hidden; }
        * { box-sizing: border-box; }
        ::selection { background: rgba(99,102,241,0.4); }
      `}</style>
    </main>
  )
}
