import React from 'react';

export default class UiComposition extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getSection(name) {
    for (const child of React.Children.toArray(this.props.children)) {
      if (child.props.name === name) {
        return child;
      }
    }
    return null;
  }
}

