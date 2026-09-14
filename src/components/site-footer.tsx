import { Logo } from "@/components/logo";
import { footerLinks, siteConfig } from "@/content/site";
import { internalHref } from "@/lib/base-path";

const columns = [
  { heading: "Solutions", links: footerLinks.solutions },
  { heading: "Platform", links: footerLinks.platform },
  { heading: "Company", links: footerLinks.company },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand-wrap">
          <a href={internalHref("/")} className="footer-brand" aria-label="Gettao Home">
            <Logo />
          </a>
          <p>{siteConfig.tagline}</p>
          <ul className="footer-socials" aria-label="Gettao on social media">
            {siteConfig.socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} (opens in a new tab)`}
                  title={link.label}
                >
                  {link.icon === "linkedin" ? (
                    <LinkedInIcon />
                  ) : link.icon === "github" ? (
                    <GitHubIcon />
                  ) : (
                    <XIcon />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading} className="footer-nav">
            <p className="footer-heading">{column.heading}</p>
            {column.links.map((link) => (
              <a key={link.label} href={internalHref(link.href)}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}

        <div className="footer-meta">
          <p className="footer-heading">Get in touch</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>

        <div className="footer-legal">
          <span>&copy; {new Date().getFullYear()} Gettao. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.65H9.35V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.33 2.41 4.33 5.54v6.2ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V9H3.56v11.45Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.424-.012 2.752 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
      />
    </svg>
  );
}
