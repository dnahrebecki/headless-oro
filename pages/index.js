import Head from 'next/head'
import Link from 'next/link'
import Configuration from "./../components/Configuration";

export default function Home() {
  const final = Configuration().FINAL;

  return (
    <div className="container">
      <Head>
        <title>Oro Tech Talks #2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://oroinc.com/">Oro Tech Talks #2!</a>
        </h1>

        <p className="description">
          See the examples of the headless use cases below.<br />
          Code repository can be found <a className="link" href="https://github.com/dnahrebecki/headless-oro">here</a>
        </p>

        <div className="grid">
          <Link href={final ? '/final/landingpage' : '/landingpage'}>
            <a className="card">
              <h3>Landing Page &rarr;</h3>
              <p>Content Editors use external tool for synchronizing pages to ORO and data is available via LandingPage API for buyers.</p>
            </a>
          </Link>

          <Link href={final ? '/final/scanner' : '/scanner'}>
            <a className="card">
              <h3>Barcode Scan &rarr;</h3>
              <p>Grocery shops use barcode scanning app to scan products and automatically purchase them in recurring orders.</p>
            </a>
          </Link>

          <Link href={final ? '/final/profile' : '/profile'}>
            <a className="card">
              <h3>Profile &rarr;</h3>
              <p>Buyers are able to view and edit their profiles. We'll learn here how to use the oAuth2 authentication.</p>
            </a>
          </Link>

          <Link href={final ? '/final/profilestats' : '/profilestats'}>
            <a className="card">
              <h3>PageModel &rarr;</h3>
              <p>
                Learn how to facilitate API models to build endpoints exposing all the needed information for a page.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        
        .link {
          color: #0070f3;
          text-decoration: none;
        }

        .link:hover,
        .link:focus,
        .link:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
