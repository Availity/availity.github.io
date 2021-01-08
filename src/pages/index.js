import React from 'react';
import { FaReact, FaPlayCircle, FaCss3, FaJs } from 'react-icons/fa';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const features = [
  {
    title: 'Availity Workflow',
    icon: FaPlayCircle,
    // linkStyle: 'reactIcon',
    description: <>Get started with our toolkit for web application development.</>,
    href: 'https://availity.github.io/availity-workflow',
    target: '_self',
  },
  {
    title: 'React Components',
    icon: FaReact,
    // linkStyle: 'reactIcon',
    description: <>React components built with the Availity UI Kit and Reactstrap</>,
    href: 'https://availity.github.io/availity-react',
    target: '_self',
  },
  {
    title: 'SDK Resources',
    icon: FaJs,
    // linkStyle: 'reactIcon',
    description: <>SDK containing packages for interacting with our APIs and systems.</>,
    href: 'https://availity.github.io/sdk-js',
    target: '_self',
  },
  {
    title: 'Availity UI Kit',
    icon: FaCss3,
    // linkStyle: 'reactIcon', styles[linkStyle] || styles.featureLink for <a />
    description: <>Our custom CSS kit that is built on top of Bootstrap 4</>,
    href: 'https://availity.github.io/availity-uikit',
    target: '_blank', // uikit does not link back to docs
  },
];

function Feature({ title, description, icon: Icon, href, target }) {
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {Icon && (
        <Link href={href} target={target} aria-label={title}>
          <div className="text--center">
            <Icon className={styles.featureImage} alt={title} />
          </div>
        </Link>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Homepage for Availity's Workflow, React, SDK-JS, and UI Kit documentation"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--secondary button--lg', styles.getStarted)}
              href="https://availity.github.io/availity-workflow"
              target="_self"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features?.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
