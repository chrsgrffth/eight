import * as React from 'react';
import Helmet from 'react-helmet';
import { Header } from '../components/header';
import '../css/main.css';

interface Props {
  children: any; // tslint:disable-line no-any
}

const DefaultLayout = (props: Props) => {
  return (
    <div className="h-screen">
      <Helmet
        title="Chris Griffith"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div className="min-h-screen">{props.children()}</div>
    </div>
  );
};

export default DefaultLayout;
