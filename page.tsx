import ThemeToggle from '../components/ThemeToggle';

const stories = [
  { category: 'World', title: 'The quiet reshaping of power is happening in plain sight', time: '8 min read', tone: 'story-blue' },
  { category: 'Culture', title: 'Why everyone is suddenly making things by hand again', time: '5 min read', tone: 'story-red' },
  { category: 'Ideas', title: 'A field guide to being uncertain in public', time: '6 min read', tone: 'story-gold' },
];

export default function Page() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="BeerStacks home"><span className="brand-mark">BS</span><span>BEERSTACKS</span></a>
        <nav className="topnav" aria-label="Main navigation"><a href="#latest">Latest</a><a href="#dispatches">Dispatches</a><a href="#about">About</a><ThemeToggle /></nav>
      </header>

      <main id="top">
        <section className="masthead" aria-labelledby="page-title">
          <div className="masthead-copy"><p className="eyebrow"><span className="live-dot" /> Independent news for a complicated world</p><h1 id="page-title">The news,<br /><em>stacked differently.</em></h1><p className="hero-intro">BeerStacks is a newsroom for the stories underneath the stories: clear-eyed reporting, curious people, and no connection to beer whatsoever.</p><a className="text-link" href="#latest">Explore the latest <span>↘</span></a></div>
          <div className="masthead-art" aria-label="Abstract editorial illustration"><span className="art-label">VOL. 04 / 2026</span><span className="art-word">BS</span><span className="art-caption">A different<br />point of view.</span></div>
        </section>

        <section className="ticker" aria-label="News ticker"><span className="ticker-label">Now</span><p>Markets are noisy. We are paying attention. <span>///</span> The week in context, without the shouting.</p><span className="ticker-date">23.09.26</span></section>

        <section className="latest-section" id="latest" aria-labelledby="latest-title">
          <div className="section-heading"><span className="section-number">01</span><h2 id="latest-title">The lead</h2><span className="section-rule" /></div>
          <article className="lead-story"><div className="lead-visual"><span className="visual-note">FIELD NOTES / 001</span><div className="visual-shape shape-one" /><div className="visual-shape shape-two" /><div className="visual-shape shape-three" /><span className="visual-caption">A new map<br />of the familiar.</span></div><div className="lead-copy"><p className="story-meta">World <span>•</span> 12 min read</p><h3>The places building a future outside the spotlight</h3><p>Across overlooked cities and small communities, a different kind of progress is taking shape. Our correspondents went looking for the people making it happen.</p><a className="text-link" href="#dispatches">Read the story <span>→</span></a></div></article>
        </section>

        <section className="dispatches-section" id="dispatches" aria-labelledby="dispatches-title"><div className="section-heading"><span className="section-number">02</span><h2 id="dispatches-title">More to read</h2><span className="section-rule" /></div><div className="story-grid">{stories.map((story) => <article className="story-card" key={story.title}><div className={`story-art ${story.tone}`}><span>BS</span></div><div className="story-card-copy"><p className="story-meta">{story.category} <span>•</span> {story.time}</p><h3>{story.title}</h3><a className="arrow-link" href="#top" aria-label={`Read ${story.title}`}>↗</a></div></article>)}</div></section>

        <section className="newsletter" id="about" aria-labelledby="newsletter-title"><div><p className="eyebrow">The Sunday stack</p><h2 id="newsletter-title">Good stories.<br /><em>Once a week.</em></h2></div><div className="newsletter-action"><p>A considered briefing for your inbox, with the week's most useful ideas and least exhausting arguments.</p><form><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" /><button type="submit">Subscribe <span>→</span></button></form></div></section>
      </main>
      <footer className="footer"><span>BEERSTACKS © 2026</span><span>News for people who still want to know more</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}