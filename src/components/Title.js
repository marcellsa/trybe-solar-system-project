import React from 'react';

class Title extends React.Component {
  render() {
    const requirement3 = this.props.headline;
    // const { headline } = this.props;
    return (
      <div>
        <h2>{ requirement3 }</h2>
      </div>
    );
  }
}
export default Title;
