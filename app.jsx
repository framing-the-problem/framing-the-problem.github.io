// Framing the Problem — page components.
// Loaded via <script type="text/babel"> in each HTML entry point. Renders
// either the Hub or an Event page depending on which mount function is called.

const { useEffect, useRef, useState } = React;

function d6_initials(name) {
  return name.split(/\s+/).filter(Boolean).map((p) => p[0]).join("").slice(0, 2);
}

function d6_renderInline(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : p
  );
}

function d6_renderTitleLikeSeries(text) {
  const clean = String(text).replace(/\.$/, "");
  const [first, ...rest] = clean.split(/\s+/);
  return (
    <>
      <em>{first}</em>{rest.length ? ` ${rest.join(" ")}` : ""}.
    </>
  );
}

function D6Reveal({ children, className = "", as = "div" }) {
  const ref = useRef(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return undefined;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <Tag ref={ref} className={`reveal ${className}`.trim()}>{children}</Tag>;
}

function D6Nav({ links }) {
  return (
    <nav className="d6-nav">
      <div className="inner">
        <div className="brand">
          <a href="index.html">Framing the Problem</a>
          <span>· workshop series</span>
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.href}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function D6People({ people, layout = "boxes", showBio = true }) {
  const cls = `d6-people-${layout}`;
  return (
    <div className={cls}>
      {people.map((p, i) => {
        const PersonTag = p.url ? "a" : "div";
        const linkProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};
        return (
          <PersonTag key={i} className="d6-person" {...linkProps}>
            <div className="avatar">
              {p.photo ? <img src={p.photo} alt={p.name} /> : d6_initials(p.name)}
            </div>
            <div>
              <div className="nm">{p.name}</div>
              <div className="af">{p.aff}</div>
              {showBio && p.bio && <div className="bio">{p.bio}</div>}
            </div>
          </PersonTag>
        );
      })}
    </div>
  );
}

function D6EventCard({ ev, hoverMode = "linked" }) {
  const [hov, setHov] = React.useState(null);
  const linked = hoverMode === "linked";
  const title = ev.titleShort.replace(/\.$/, "");
  const descriptor = ev.id === "ccn2026" ? "Community event at CCN 2026" : "Workshop at CogSci 2026";
  return (
    <a className="d6-event-card" href={ev.id === "ccn2026" ? "ccn2026.html" : "cogsci2026.html"}>
      <div className="d6-event-meta">
        <div className="badge">{ev.badge}</div>
        <div>{ev.date}</div>
        <div>{ev.city}</div>
        <div className="fmt">{ev.format}</div>
      </div>
      <div className="d6-event-body">
        <h3 className="d6-event-title">
          <span><em>{title}</em> <span className="d6-title-sep">—</span> <em className="d6-event-title-tail">{descriptor}</em></span>
        </h3>
        <p className="d6-event-oneline">{ev.oneLine}</p>
        <div className="d6-event-speakers">
          <div className="lab">{ev.id === "ccn2026" ? "Panelists" : "Speakers"}</div>
          <div>
            <div className="d6-thumbstrip">
              {ev.speakers.map((s, i) => (
                <div
                  key={i}
                  className={`d6-thumb ${linked && hov === i ? "is-hov" : ""} ${linked && hov !== null && hov !== i ? "is-dim" : ""}`}
                  title={s.name}
                  onMouseEnter={linked ? () => setHov(i) : undefined}
                  onMouseLeave={linked ? () => setHov(null) : undefined}
                >
                  {s.photo ? <img src={s.photo} alt={s.name} /> : d6_initials(s.name)}
                </div>
              ))}
            </div>
            <div className="d6-namelist">
              {ev.speakers.map((s, i) => (
                <React.Fragment key={i}>
                  <span
                    className={`name ${linked && hov === i ? "is-hov" : ""} ${linked && hov !== null && hov !== i ? "is-dim" : ""}`}
                    onMouseEnter={linked ? () => setHov(i) : undefined}
                    onMouseLeave={linked ? () => setHov(null) : undefined}
                  >
                    {s.name}
                  </span>
                  {i < ev.speakers.length - 1 ? ", " : "."}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <span className="d6-event-link">View event <span className="arr">→</span></span>
      </div>
    </a>
  );
}

function D6Hub({ peopleLayout, hoverMode }) {
  return (
    <>
      <D6Nav links={[
        { href: "#about", label: "About" },
        { href: "#events", label: "Events" },
        { href: "#organisers", label: "Organisers" },
        { href: "#questions", label: "Questions" }
      ]} />
      <div className="d6-wrap">
        <header className="d6-hero">
          <div className="d6-eyebrow rise d1">Framing the Problem · workshop series · 2026</div>
          <h1 className="d6-title rise d2"><em>Framing</em> the Problem.</h1>
          <p className="d6-subtitle rise d3">{SITE.subtitle}.</p>
        </header>
      </div>

      <section id="about" className="d6-section">
        <div className="d6-wrap">
          <D6Reveal className="d6-grid-160 d6-about">
            <div className="d6-section-label">About</div>
            <div>
              {SITE.blurb.map((p, i) => <p key={i}>{d6_renderInline(p)}</p>)}
            </div>
          </D6Reveal>
        </div>
      </section>

      <section id="events" className="d6-section">
        <div className="d6-wrap">
          <D6Reveal className="d6-grid-160">
            <div className="d6-section-label">Events</div>
            <div className="d6-events">
              <D6EventCard ev={EVENTS.cogsci} hoverMode={hoverMode} />
              <D6EventCard ev={EVENTS.ccn} hoverMode={hoverMode} />
            </div>
          </D6Reveal>
        </div>
      </section>

      <section id="organisers" className="d6-section">
        <div className="d6-wrap">
          <D6Reveal className="d6-section-head">
            <div className="num">Organisers</div>
            <h2>Organisers</h2>
          </D6Reveal>
          <D6Reveal className="d6-grid-160">
            <div />
            <D6People people={ORGANISERS} layout={peopleLayout} showBio={false} />
          </D6Reveal>
        </div>
      </section>

      <section id="questions" className="d6-section">
        <div className="d6-wrap">
          <D6Reveal className="d6-section-head">
            <div className="num">Questions</div>
            <h2><em>Open</em> questions threaded through both events.</h2>
          </D6Reveal>
          <D6Reveal className="d6-grid-160 d6-qlist">
            <div />
            <ol>
              {QUESTIONS.map((q) =>
              <li key={q.n}>
                  <div>
                    <h3>{q.topic}</h3>
                    <p>{q.q}</p>
                  </div>
                </li>
              )}
            </ol>
          </D6Reveal>
        </div>
      </section>

      <footer style={{ background: "var(--ink)", color: "rgba(250,250,247,.45)", padding: "32px 0", fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: ".06em" }}>
        <div className="d6-wrap" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span>Framing the Problem · workshop series · 2026</span>
        </div>
      </footer>
    </>);

}

function D6EventPage({ ev, sibling, peopleLayout }) {
  return (
    <>
      <D6Nav links={[
        { href: "index.html", label: "Series" },
        { href: "#about", label: "About" },
        { href: "#speakers", label: ev.id === "ccn2026" ? "Panelists" : "Speakers" },
        { href: "#organisers", label: "Organisers" },
        { href: "#programme", label: ev.id === "ccn2026" ? "Programme" : "Schedule" }
      ]} />
      <div className="d6-wrap">
        <header className="d6-hero">
          <div className="d6-crumb rise d1">
            <a href="index.html">Framing the Problem</a> &nbsp; / &nbsp; <b>{ev.badge}</b>
          </div>
          <div className="d6-eyebrow rise d2">{ev.badge} · {ev.cityShort} · {ev.format}</div>
          <h1 className="d6-title rise d3">
            {d6_renderTitleLikeSeries(ev.titleShort)}
          </h1>
          <p className="d6-subtitle rise d4">{ev.pitch}</p>
          <dl className="d6-hero-meta rise d5">
            <div>
              <dt>Conference</dt>
              <dd>{ev.badge}<small>{ev.conferenceName}</small></dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{ev.cityShort}<small>{ev.venue}</small></dd>
            </div>
            <div>
              <dt>{ev.id === "ccn2026" ? "Event day" : "Workshop day"}</dt>
              <dd>{ev.date}<small>{ev.conferenceDates}</small></dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>In person<small>{ev.formatDetail}</small></dd>
            </div>
          </dl>
        </header>
      </div>

      <section id="about" className="d6-section">
        <div className="d6-wrap">
          <D6Reveal className="d6-section-head">
            <div className="num">About</div>
            <h2>{ev.aboutTitle || <>How do humans <em>construct</em> the representations that make the search for a solution possible?</>}</h2>
          </D6Reveal>
          <D6Reveal className="d6-grid-160 d6-about">
            <div />
            <div>
              {ev.description.map((p, i) => <p key={i}>{d6_renderInline(p)}</p>)}
            </div>
          </D6Reveal>
          <blockquote className="d6-pullquote" style={{ display: "none" }}>{ev.pullquote}</blockquote>
        </div>
      </section>

      <section id="speakers" className="d6-section">
        <div className="d6-wrap">
          <D6Reveal className="d6-section-head">
            <div className="num">{ev.id === "ccn2026" ? "Panelists" : "Invited speakers"}</div>
            <h2>{ev.id === "ccn2026" ? "Panelists" : "Invited speakers"}</h2>
          </D6Reveal>
          <D6Reveal className="d6-grid-160">
            <div />
            <D6People people={ev.speakers} layout={peopleLayout} showBio={true} />
          </D6Reveal>
        </div>
      </section>

      <section id="organisers" className="d6-section">
        <div className="d6-wrap">
          <D6Reveal className="d6-section-head">
            <div className="num">Organisers</div>
            <h2>Organisers</h2>
          </D6Reveal>
          <D6Reveal className="d6-grid-160">
            <div />
            <D6People people={ORGANISERS} layout={peopleLayout} showBio={false} />
          </D6Reveal>
        </div>
      </section>

      <section id="programme" className="d6-section">
        <div className="d6-wrap">
          <D6Reveal className="d6-section-head">
            <div className="num">{ev.id === "ccn2026" ? "Programme" : "Schedule"}</div>
            <h2>{ev.id === "ccn2026" ? <>Preliminary <em>programme</em></> : <>Preliminary <em>schedule</em></>}</h2>
          </D6Reveal>
          <D6Reveal className="d6-grid-160">
            <div />
            <div className="d6-timeline">
              {ev.programme.map((s, i) => {
                if (s.kind === "session") {
                  return (
                    <div key={i} className="d6-session-label">
                      <span className="kicker">{s.label} · {s.range}</span>
                      {s.title}
                    </div>);

                }
                if (s.kind === "break") {
                  return (
                    <div key={i} className="d6-block break">
                      <div className="time">{s.time}</div>
                      <div className="what"><h4>{s.title}</h4></div>
                    </div>);

                }
                return (
                  <div key={i} className="d6-block">
                    <div className="time">{s.time}</div>
                    <div className="what">
                      <h4>{s.title}</h4>
                      {s.who && <p style={{ marginBottom: 4, color: "var(--ink-mute)" }}>{s.who}</p>}
                      {s.note && <p>{s.note}</p>}
                    </div>
                  </div>);

              })}
            </div>
          </D6Reveal>
        </div>
      </section>

      <a className="d6-sibling" href={sibling.id === "ccn2026" ? "ccn2026.html" : "cogsci2026.html"} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
        <div className="inner">
          <div className="lab">Sibling event</div>
          <div>
            <h3>
              <em>{sibling.titleShort.replace(/\.$/, "")}</em>.
            </h3>
            <div className="meta">
              {sibling.badge} &nbsp; · &nbsp; {sibling.date} &nbsp; · &nbsp; {sibling.cityShort} &nbsp; · &nbsp; {sibling.format}
            </div>
          </div>
          <span className="d6-cta cta">View event <span className="arr">→</span></span>
        </div>
      </a>
    </>);

}


// ── Page mounts ─────────────────────────────────────────────────────────────
// Each HTML entry point calls one of these after the scripts have loaded.
// The .d6-root wrapper scopes every style rule and provides --accent (set in
// the inline <style> of each HTML page) — without it, the page renders
// unstyled.
function mountHub() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div className="d6-root">
      <D6Hub peopleLayout="roster" hoverMode="linked" />
    </div>
  );
}
function mountEvent(eventId) {
  const ev = EVENTS[eventId];
  const sibling = eventId === "cogsci" ? EVENTS.ccn : EVENTS.cogsci;
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div className="d6-root">
      <D6EventPage ev={ev} sibling={sibling} peopleLayout="roster" />
    </div>
  );
}

Object.assign(window, { mountHub, mountEvent });
