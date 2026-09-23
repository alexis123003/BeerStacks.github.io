import ThemeToggle from '../components/ThemeToggle';

const trending = [
  { publication: 'BeerStacks News', title: 'The quiet reshaping of power is happening in plain sight', author: 'Mara Voss', date: '9/21/2026', reads: '305' },
  { publication: 'The Common Room', title: 'Why everyone is suddenly making things by hand again', author: 'Ari Sol', date: '9/20/2026', reads: '188' },
  { publication: 'Field Notes', title: 'A field guide to being uncertain in public', author: 'Niko Reyes', date: '9/18/2026', reads: '142' },
];

const freshStories = [
  { publication: 'BeerStacks News', title: 'A map of the small decisions that move a city forward', author: 'Mara Voss', date: '9/23/2026', reads: '91' },
  { publication: 'The Common Room', title: 'The case for leaving some things unfinished', author: 'Jo Park', date: '9/22/2026', reads: '74' },
  { publication: 'Open Ledger', title: 'What we mean when we say “the public”', author: 'Tomas Bell', date: '9/21/2026', reads: '63' },
  { publication: 'Field Notes', title: 'A short history of paying attention', author: 'Niko Reyes', date: '9/20/2026', reads: '52' },
];

function ArticleRow({ story }: { story: typeof trending[number] }) {
  return <article className="article-row"><div className="article-tag">NEWS</div><div className="article-content"><p className="publication">{story.publication}</p><h3>{story.title}</h3><p className="article-meta">{story.author} <span>{story.date}</span> <span>{story.reads} reads</span></p></div><a className="article-arrow" href="#discover" aria-label={`Read ${story.title}`}>↗</a></article>;
}

export default function Page() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="BeerStacks home"><span className="brand-mark">BS</span><span>BeerStacks</span></a>
        <nav className="topnav" aria-label="Main navigation"><a href="#discover">Discover</a><a href="#posts">Posts</a><a href="#about">About</a><ThemeToggle /><a className="sign-in" href="#about">Sign in</a></nav>
      </header>

      <main id="top">
        <section className="discover" id="discover" aria-labelledby="page-title">
          <div className="discover-heading"><div><p className="eyebrow"><span className="live-dot" /> Independent news for a complicated world</p><h1 id="page-title">Discover</h1></div><p className="discover-note">Stories with a little more room to think. BeerStacks is a news company with absolutely nothing to do with beer.</p></div>
          <article className="featured-story"><div className="featured-art"><span className="art-word">BS</span><span className="art-label">BEERSTACKS / 001</span></div><div className="featured-copy"><p className="story-kicker">LEAD NEWS <span>BEERSTACKS NEWS</span></p><h2>The places building a future outside the spotlight</h2><p>Across overlooked cities and small communities, a different kind of progress is taking shape. Our correspondents went looking for the people making it happen.</p><p className="featured-meta">Mara Voss <span>9/23/2026</span> <span>12 min read</span></p><a className="text-link" href="#posts">Read this post <span>→</span></a></div></article>
        </section>

        <section className="feed-section" id="posts" aria-labelledby="trending-title">
          <div className="feed-heading"><h2 id="trending-title">Trending</h2><a href="#posts">See all <span>→</span></a></div>
          <div className="article-list">{trending.map((story) => <ArticleRow story={story} key={story.title} />)}</div>
        </section>

        <section className="feed-section fresh-section" aria-labelledby="fresh-title"><div className="feed-heading"><h2 id="fresh-title">Fresh off the press</h2><a href="#posts">See all <span>→</span></a></div><div className="article-list">{freshStories.map((story) => <ArticleRow story={story} key={story.title} />)}</div></section>

        <section className="newsletter" id="about" aria-labelledby="newsletter-title"><div><p className="eyebrow">The Sunday stack</p><h2 id="newsletter-title">Good stories.<br /><em>Once a week.</em></h2></div><div className="newsletter-action"><p>A considered briefing for your inbox, with the week's most useful ideas and least exhausting arguments.</p><form><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" /><button type="submit">Subscribe <span>→</span></button></form></div></section>
      </main>
      <footer className="footer"><span>BEERSTACKS © 2026</span><span>News for people who still want to know more</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}