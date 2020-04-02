import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import clickTile from './clickTile.PNG';

class ProjectPage extends React.Component {
  render() {
    return (
      <div className = "page">
      <img src={this.props.imgUrl} alt="test" />
      <div className = "text">
        <h2>{this.props.title}</h2>
        <p>{this.props.intro}</p>
      </div>
      </div>
    )
  }
}

class Site extends React.Component {
  render() {
    return (<> //react fragment
      // <Nav/>
      <ProjectPage
        id='map'
        imgUrl={clickTile}
        title='Map Maker'
        intro='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <ProjectPage
      id='brand'
      imgUrl={}
      title='Heritage Farmed'
      intro='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
    </>
    );
  }
}


ReactDOM.render(<Site/>, document.getElementById('root'));
