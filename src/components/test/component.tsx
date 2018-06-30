import * as React from 'react';
import './styles.css';

interface Props {}
interface State {}

class TestComponent extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props);
  }

  public render () {
    return (
      <div />
    );
  }

}

export const Test = TestComponent;
