import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCircle,
  faArrowDown,
  faArrowUp,
  faHome,
  faMap,
  faSpa,
  faClipboardCheck,
  faUser
 } from '@fortawesome/free-solid-svg-icons';
import {
  Link,
  Element,
  scroller,
  animateScroll
} from "react-scroll";

import './index.css';
import clickTile from './clickTile.PNG';
import heritageFarmed from './heritageFarmed.png';
import taskPage from './taskPage.png';
import profile from './profile.JPG';
import mapCreate from './mapCreate.PNG';

library.add(faCircle,
  faArrowDown,
  faArrowUp,
  faHome,
  faMap,
  faSpa,
  faClipboardCheck,
  faUser);

  const icons = {
    "intro": "home",
    "map": "map",
    "brand": "spa",
    "todo": "clipboard-check",
    "about": "user"
  }

  const backgrounds = ["#e7e6f3", "#afa7d2", "#968abf"]

class NavElem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      selected: false
    }
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleActive = this.handleActive.bind(this);
    this.handleInactive = this.handleInactive.bind(this);
  }
  handleEnter() {
    this.setState({selected: true});
  }
  handleLeave() {
    this.setState({selected: this.state.active});
  }
  handleActive() {
    this.setState({selected: true, active: true});
  }
  handleInactive() {
    this.setState({selected: false, active: false});
  }
  selectIcon() {
    if(!this.state.selected) {
      return "circle";
    }
    else {
      return icons[this.props.name];
    }
  }
  render () {
    return (
      <Link to={this.props.name} spy={true} smooth={true} duration={500} onSetActive={this.handleActive} onSetInactive={this.handleInactive}>
        <FontAwesomeIcon
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        icon={this.selectIcon()} size={this.state.selected ? "lg" : "xs"}/>
      </Link>
    ); //TODO: func to select icon
  }
}

class Content extends React.Component {
  componentDidMount() {
    animateScroll.scrollTo(document.querySelector(`#${this.props.parentName}Content`).offsetTop - 100, {duration: 500, smooth: true});
  }
  render() {
    return (<Element
            id= {this.props.parentName + 'Content'}
            className="lower"
          >
            {moreContent[this.props.parentName]}
            <FontAwesomeIcon
              icon="arrow-up"
              size="2x" onClick={this.props.onClick}
            />
          </Element>);
  }
}

class ProjectPage extends React.Component {
  static defaultProps = {
    showMore: true
  }

  constructor(props) {
    super(props);
    this.state = {
      showing: false
    }
    this.toggleContent = this.toggleContent.bind(this);
    this.setBackground = this.setBackground.bind(this);
  }

  toggleContent() {
    if(this.state.showing) {
      scroller.scrollTo(this.props.name, {duration: 500, smooth: true});
    } 
    this.setState({showing: !this.state.showing});
  }

  setBackground() {
    return {
      background: backgrounds[this.props.i % backgrounds.length]
    };
  }

  render() {
    let image, more;
    if(this.props.imgUrl) {
      image = <img src={this.props.imgUrl} alt="test" />;
    }
    if(this.props.showMore && this.state.showing) {
      more = <Content
              parentName = {this.props.name}
              onClick = {this.toggleContent}
            />
    }
    return (
      <Element name = {this.props.name} className = {`page ${this.state.showing ? 'show':''}`} style={this.setBackground()}>
      <div className={`upper ${this.props.reverse ? 'reverse': ''}`}>
        {image}
        <div className = "text">
          <h2>{this.props.title}</h2>
          <p>{this.props.intro}</p>
          {(this.props.showMore && !this.state.showing) ? <FontAwesomeIcon
            icon="arrow-down"
            size="2x"
            onClick={this.toggleContent}
          /> : ''}
        </div>
      </div>
      {more}
      </Element>
    )
  }
}

class Site extends React.Component {
  render() {
    return (<>
      <div className = "nav">
        <NavElem name="intro"/>
        <NavElem name="map"/>
        <NavElem name="brand"/>
        <NavElem name="todo"/>
        <NavElem name="about"/>
      </div>
      <ProjectPage
        i={0}
        name="intro"
        showMore={false}
        title="Hi, my name is Emily"
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ProjectPage
        i={1}
        name='map'
        imgUrl={clickTile}
        title='Map Maker'
        intro='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <ProjectPage
        i={2}
        name='brand'
        reverse={true}
        imgUrl={heritageFarmed}
        title='Heritage Farmed'
        intro='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <ProjectPage
        i={1}
        name='todo'
        imgUrl={taskPage}
        title='AchieveIt'
        intro='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <ProjectPage
        i={2}
        name='about'
        reverse={true}
        imgUrl={profile}
        title="About Me"
        intro='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
    </>
    );
  }
}

let moreContent = {
  map: <>
        <img src={mapCreate} alt="map creation screen"/>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </>,
  brand: <>
      </>,
  todo: <>
      </>
}


ReactDOM.render(<Site/>, document.getElementById('root'));
