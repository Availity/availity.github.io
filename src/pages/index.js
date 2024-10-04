import React from 'react';
import { FaReact, FaPlayCircle, FaJs, FaCss3 } from 'react-icons/fa';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ThemeProvider } from '@availity/theme-provider';
import { Card, CardActionArea, CardHeader, CardContent } from '@availity/mui-card';
import { Grid, Container } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import { Alert } from '@availity/mui-alert';
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
    title: 'Element',
    icon: FaReact,
    // linkStyle: 'reactIcon',
    description: <>React components built with Material UI using Availity&apos;s Element Design System.</>,
    href: 'https://availity.github.io/element',
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
    title: 'Availity React',
    icon: FaReact,
    // linkStyle: 'reactIcon',
    description: <>React components and hooks. React components are built with the Availity UI Kit and Reactstrap 8.</>,
    href: 'https://availity.github.io/availity-react',
    target: '_self',
  },
  {
    title: 'Legacy Availity UI Kit',
    icon: FaCss3,
    // linkStyle: 'reactIcon', styles[linkStyle] || styles.featureLink for <a />
    description: (
      <>
        Our custom CSS kit that is built on top of Bootstrap 4.{' '}
        <Alert severity="error">This library will be retired 01/01/26</Alert>
      </>
    ),
    href: 'https://availity.github.io/availity-uikit',
    target: '_blank', // uikit does not link back to docs
  },
];

function Feature({ title, description, icon: Icon, href, target }) {
  return (
    <Card sx={{ marginBottom: 2, marginRight: 2 }}>
      <CardActionArea href={href} target={target} sx={{ height: '100%' }}>
        <CardHeader
          title={
            <Grid container alignItems="center">
              <Icon className={styles.featureImage} alt={title} />
              <span>{title}</span>
            </Grid>
          }
        />
        {Icon && <CardContent>{description}</CardContent>}
      </CardActionArea>
    </Card>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <ThemeProvider>
      <Layout
        title={`${siteConfig.title}`}
        description="Homepage for Availity's Workflow, React, SDK-JS, and UI Kit documentation"
      >
        <Container>
          <header>
            <Typography variant="h1" marginTop={2}>
              {siteConfig.title}
            </Typography>
            <Typography variant="subtitle1">{siteConfig.tagline}</Typography>
          </header>
          <main>
            {features?.length > 0 && (
              <Grid margin={2} container marginTop={4}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </Grid>
            )}
          </main>
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default Home;
