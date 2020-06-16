import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCircle,
  faArrowRight,
  faArrowUp,
  faHome,
  faMap,
  faSpa,
  faClipboardCheck,
  faUser,
  faTimes,
  faExpandAlt
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
// import profile from './profile.JPG';
import mapmakerEdit from './mapmakerEdit.png';
import mapmakerDisplay from './mapmakerDisplay.png';
import hardwareLayout from './hardwareLayout.jpg';
import conferenceDemo from './conferenceDemo.JPG';
// import altLogos from './altLogos.png';
import logo from './logo.png';
import otherLogo from './otherLogo.png';
import smallLogo from './smallLogo.png';
import packaging from './packaging.png';
import heritageFarmedBrandStandards from './heritageFarmedBrandStandards.pdf';
import addTask from './AddTask.gif';
import addHabit from './AddHabit.gif';
import completeHabit from './CompleteHabit.gif';
import headshot from './headshot.jpg';
import portrait from './portrait.gif';


library.add(faCircle,
  faArrowRight,
  faArrowUp,
  faHome,
  faMap,
  faSpa,
  faClipboardCheck,
  faUser,
  faTimes,
  faExpandAlt);

  const icons = {
    "intro": {
      icon: "home",
      label: "Intro",
      background: "#afa7d2"},
    "map": {
      icon: "map",
      label: "Map Maker",
      background: "#afa7d2"},
    "brand": {
      icon: "spa",
      label: "Heritage Farmed",
      background: "#f0e67a"}, //#F8EB5D
    "todo": {
      icon: "clipboard-check",
      label: "AchieveIt",
      background: "#8ae5ed"}, //#7BF1FC
    "about": {
      icon: "user",
      label: "About",
      background: "#cf7cc1"}
  }

  // const backgrounds = ["#e7e6f3", "#afa7d2", "#968abf"]
  // "#00FFDA" - green for achieve it
  // "#F8EB5D" - yellow for HF
  // "#968abf" - purple for about + Intro
  // "#afa7d2" - purple for mapmaker

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
    this.setState({selected: false});
  }
  handleActive() {
    this.setState({active: true});
  }
  handleInactive() {
    this.setState({active: false});
  }
  // selectIcon() {
  //   if(!this.state.selected) {
  //     return "circle";
  //   }
  //   else {
  //     return icons[this.props.name].icon;
  //   }
  // }
  render () {
    let elem;
    if(this.state.selected) {
      elem = <div className="label" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
              <FontAwesomeIcon
              icon={icons[this.props.name].icon} size="lg"/>
              <span>
                {icons[this.props.name].label}
              </span>
            </div>
    } else if (this.state.active) {
      elem = <div className="icon">
              <FontAwesomeIcon
              onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave}
              icon={icons[this.props.name].icon} size="lg"/>
            </div>
    }
    else {
      elem = <div className="icon">
              <FontAwesomeIcon
              onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave}
              icon="circle" size="xs"/>
            </div>
    }
    return (
      <Link to={this.props.name} spy={true} smooth={true} duration={500} onSetActive={this.handleActive} onSetInactive={this.handleInactive}>
        {elem}
      </Link>
    ); //TODO: func to select icon
  }
}

class PhoneWrapper extends React.Component {
  render() {
    return (<div className="fakePhone">
      <div className="cameraLine"></div>
      {this.props.screen}
      <div className="circleBtn"></div>
    </div>);
  }
}

class ImgExpansion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false, active: false};
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  handleEnter() {
    this.setState({active: true});
  }
  handleLeave() {
    this.setState({active: false});
  }
  open() {
    this.setState({open: true});
  }
  close() {
    this.setState({open: false});
  }
  render() {
    return (<>
      <div className="imgWrapper" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        {this.state.active &&
        <FontAwesomeIcon onClick={this.open} icon="expand-alt" size="lg" className={this.props.dark ? "light" : "dark"}/>}
        <img src={this.props.src} alt={this.props.alt}/>
      </div>
      {this.state.open &&
      <div className="imgPopup">
        <FontAwesomeIcon onClick={this.close} icon="times"/>
        <img src={this.props.src} alt={this.props.alt}/>
      </div>}
    </>);
  }
}

class SideImg extends React.Component {

  render() {
    return (
      <div className={'sideBySide ' + this.props.side}>
        <ImgExpansion src={this.props.img.src} alt={this.props.img.alt} dark={this.props.img.dark}/>
        <div className='textBox'>
        {this.props.text}
        </div>
      </div>
    );
  }
}

class ImgRow extends React.Component {
  render() {
    // let row = [];
    //
    // this.props.imgs.forEach((i) => {
    //   row.push(<img src={i.src} alt={i.alt}/>);
    // });

    return (
      <div className='imgRow'>
        {this.props.imgs.map(i => {
          return <ImgExpansion key={i.src} src={i.src} alt={i.alt}/>
        })}
      </div>
    );
  }
}

class TooltipBase extends React.Component {
  constructor(props) {
    super(props);
    this.tooltip = React.createRef();
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }
  handleEnter(evt) {
    let el = evt.currentTarget;

    if(el != null) {
      let rect = el.getBoundingClientRect();
      this.tooltip.current.show(rect);
    }
  }

  handleLeave() {
    this.tooltip.current.hide();
  }
  render() {
    return (<>
      <strong className="word" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>{this.props.word}</strong>
      <Tooltip ref={this.tooltip} def={this.props.def} word={this.props.word}/>
    </>)
  }
}

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {visible:false, x:0, y:0, type:"none"};
  }

  render () {
    let {state} = this;
    let visiblity = state.visible === true ? "on" : "off";

    let style = {
      left: ((state.x + window.scrollX) + 'px'),
      top: ((state.y + window.scrollY) + 'px')
    };

    let classNames = {tooltip: true};

    if(state.type !== null && state.type !== "none") {
      classNames[state.type] = true;
    }

    classNames[visiblity] = true;

    return (
      <div className={Object.keys(classNames).join(" ")} style={style}>
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">
        <h4>{this.props.word}: </h4>{this.props.def}</div>
      </div>
    );
  }

  pastShow(hoverRect) {
    let ttNode = ReactDOM.findDOMNode(this);
    if(ttNode != null) {
      let x = 0, y = 0, newState = {};
      // const docWidth = document.documentElement.clientWidth,
      // docHeight = document.documentElement.clientHeight;

      // let rx = hoverRect.x + hoverRect.width,
      let lx = hoverRect.x,
          ty = hoverRect.y;
          // by = hoverRect.y + hoverRect.height;

      let ttRect = ttNode.getBoundingClientRect();

      //top
      y = ty - ttRect.height;
      x = lx + ((hoverRect.width - ttRect.width) / 2);

      if(x < 0) {
        x = lx;
      }
      newState = {type:"top", x:x, y:y};
      this.setState(newState);
    }
  }

  show(hoverRect) {
    let {pastShow} = this;
    this.setState({visible:true}, pastShow.bind(this, hoverRect));
  }
  hide() {
    this.setState({visible:false});
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
      background: icons[this.props.name].background
    };
  }

  render() {
    let image, more;
    if (this.props.img) {
      image = <ImgExpansion src={this.props.img.src} alt={this.props.img.alt} dark={this.props.img.dark}/>;
    }
    else if (this.props.notImg) {
      image = this.props.notImg;
    }
    if (this.props.showMore && this.state.showing) {
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
          {this.props.intro}
          {(this.props.showMore && !this.state.showing) ? <button className="more" onClick={this.toggleContent}>Learn More <FontAwesomeIcon
          icon="arrow-right"/></button> : ''}
        </div>
      </div>
      {more}
      </Element>
    )
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
            <button className="more" onClick={this.props.onClick}>Close</button>
          </Element>);
  }
}

class Site extends React.Component {
  render() {
    return (<>
      <div className = "nav">
        <NavElem name="intro"/>
        <NavElem name="todo"/>
        <NavElem name="brand"/>
        <NavElem name="map"/>
        <NavElem name="about"/>
      </div>
      <ProjectPage
        i={0}
        name="intro"
        showMore={false}
        reverse={true}
        title="Hi, my name is Emily"
        notImg=<img src={portrait} alt="self portrait waving" id="portrait"/>
        intro=<p>I am a double major in computer science and design who just graduated from UC Davis. I am interested in UI/UX design and human computer interaction. Check out my work and get to know me a bit more!</p>
      />
      <ProjectPage
        i={1}
        name='todo'
        notImg=<PhoneWrapper screen=<img className="screenImg" src={taskPage} alt="task screen"/>/>
        title='AchieveIt'
        intro=<p>A productivity app designed for people with mental illness. Designed to be gentle, structured, and easy to use. This app can be a helpful tool for people with difficulty remembering tasks and executing them at the right time and place.</p>
      />
      <ProjectPage
        i={2}
        name='brand'
        reverse={true}
        img={{src: heritageFarmed, alt: 'heritage farmed logo', dark: true}}
        title='Heritage Farmed'
        intro=<p>Heritage Farmed creates handcrafted botanicals with an emphasis on the community, the environment, and ending the stigma against cannabis. They make medicinal healing products with an emphasis on local, sustainable ingredients. My job was to bring their vision to life and create a full brand material package.</p>
      />
      <ProjectPage
        i={1}
        name='map'
        img={{src: clickTile, alt: 'map maker screen'}}
        title='Map Maker'
        intro=<p>MapMaker fills a need in the <TooltipBase word='tabletop RPG' def='RPG stands for Role Play Game. Tabletop means the game is played by a group gathering in-person around a table, instead of virtually on a computer.'/> community by being an easy to use map creation web app that takes advantage of modern technology to enhance in-person game play.</p>
      />
      <ProjectPage
        i={2}
        name='about'
        reverse={true}
        img={{src: headshot, alt: 'portrait photo', dark: true}}
        title="More About Me"
        intro=<p>When I first came to UC Davis, I had a choice between pursuing the world of tech and the world of art. Instead of choosing one or the other, I chose to pursue both. I have a lot of technical aptitude, but I refuse to set my creative abilities aside. By double majoring, I can combine deep technical skills with creative inspiration that can spark new ideas and new ways of doing.</p>
      />
    </>
    );
  }
}

let moreContent = {
  map: <>
        <h2>How it works</h2>
        <ImgRow imgs={[
          {
          src: mapmakerEdit,
          alt: "map creation screen"
          }, {
            src: mapmakerDisplay,
            alt: "map display screen"
          }]}/>
        <p>
        The way it works is simple. The <TooltipBase word='game master' def='A person who organizes and oversees a role-playing game, in particular by narrating the details of the story that are not controlled by the players.'/> drags and drops tiles to create their map. Once finished, they switch to display mode, which opens a separate window where tiles can be revealed one by one as players explore the map.
        </p>
        <SideImg
          side='left'
          img={{src: hardwareLayout, alt: 'hardware layout diagram'}}
          text='One of the unique problems of this system is the need for private information that only the game master can access and public information that the players can see. This requires the use of two screens to display the different info. This system is flexible enough to allow users to have different hardware setups at home and still work smoothly.'
        />
        <h2>Knowing the Target Audience</h2>
        <p>
        In order to best understand the target audience, a survey was sent out to communities of game Masters and RPG game players to collect responses to see what features were most desired. This was collected early on in the process to inform the design of the system and plan for future added features.
        </p>
        {/*<svg id="graph"/>*/}
        <SideImg
          side='right'
          img={{src: conferenceDemo, alt: 'conference demo setup', dark: true}}
          text={<>
            <p>
              After that, the system was designed and revised multiple times, where it was presented at Creativity and Cognition 2019. The theme that year was transformational creativity. A paper describing the goals of the project in further detail is published in the <a href='https://dl.acm.org/doi/10.1145/3325480.3326548'>ACM Digital Library</a> and the project itself was demoed during the creative creativity and cognition demonstration event.
            </p>
            <p>
            The current version of the project can be viewed <a href='https://theacalix.github.io/mapmaker/'>here.</a>
            </p>
          </>}
        />
      </>,
  brand: <>
    <h2>It all starts with a logo </h2>
    <p>
    When I initially met with the leaders of heritage farmed, I immediately sensed just how important their ingredients were to their brand. They listed off a flurry of gorgeous botanicals when discussing their products, and I ran with that concept to design a logo system using iconography of these same plants that star in their products.
    </p>
    <ImgRow imgs={[
      {
        src: logo,
        alt: "primary logo"
      }, {
        src: otherLogo,
        alt: "alternate botanical logo"
      }, {
        src: smallLogo,
        alt: "small logo versions"
      }]}/>
      <SideImg
        side='left'
        img={{src: packaging, alt: 'advertisement with packaging'}}
        text={<>
          <h2>An emphasis on the natural</h2>
          <p>
            Heritage Farmed is all about natural, sustainable processes, and that includes their packaging. All of their packaging was designed to be compostable and biodegradable. I researched the best materials for their needs and decided on sturdy cardboard tubes that could be used across the board with all of their products.
          </p>
        </>}
      />
      <h2>The complete vision</h2>
      <p>
        To really flesh out their brand, a number of additional materials were designed to really give the complete picture of what the heritage farmed brand could look like.
      </p>
      <p>The full brand standards can be viewed <a href={heritageFarmedBrandStandards} target="_blank" rel="noopener noreferrer">here.</a></p>
      </>,
  todo: <>
    <p>
      This project was designed to help people with <TooltipBase word='executive functioning' def='the mental processes that enable us to plan, focus attention, remember instructions, and juggle multiple tasks successfully.'/> issues stemming from ADHD, Autism, or Anxiety/Depression achieve big and small goals. The three main features of the app are:
    </p>
    <ul>
      <li>Provide custom reminders to help users complete tasks and create routines</li>
      <li>Create projects and break tasks down to make them easier</li>
      <li>Easily track and record habits to build good routines</li>
    </ul>
    <h2>All About User Testing</h2>
    <p>
      User testing and feedback were an integral part of the design process of this project. Potential users in the target demographic were interviewed to get a sense of what they struggled with that a productivity app could help with. An initial version of the app was created for a UC Davis UI/UX class. This version was created with static screens that were mocked in illustrator, and functionality was added through inVision, creating hotspots to allow users to navigate through the mockup. User feedback was collected from 5 participants, which consisted of asking them to complete specific scenarios within the app while they were being observed. Afterward, each participant was asked open-ended questions to collect general feedback on the project.
    </p>
    <div className="flex">
      <PhoneWrapper
        screen=<div className="imgContainer">
          <img src = {addTask} alt ="new task screen"/>
        </div>
      />
      <PhoneWrapper
        screen=<div className="imgContainer">
          <img src = {addHabit} alt="new habit screen"/>
        </div>
      />
      <PhoneWrapper
        screen=<div className="imgContainer">
          <img src = {completeHabit} alt="check off habit screen"/>
        </div>
      />
    </div>
    <p>
      This research was used in the next iteration of the project, which continued after the UC Davis class concluded. In this phase, a fellow designer took over the design of the look and feel of the app, while I implemented the functionality. This version was implemented as a web app, using HTML, CSS, and javascript to implement functionality and design. Steps were taken to integrate the user feedback from the previous version into this one as we worked to improve the design.
    </p>
    <p>The full project in its current iteration can be viewed <a href="https://github.com/Theacalix/productiveapp/tree/master">here.</a></p>
      </>,
    about: <>
      <p>
        I’ve always been a quick learner and I’ve cultivated that skill while at university. Given any task, I will rise to the challenge, dive right in into figuring out the best way to do it, and get it done. I don’t need my handheld but I’m not afraid to ask for help when I don’t understand something. While employed at Zeeto, I worked with database technology I had never used before, but I took the opportunity to research the specs, experiment with it, and ultimately wrote tools that helped my team get the data they needed. My coworkers appreciated that I didn’t need to be told more than once how to do something and they got more work done when I was on their team.
      </p>
      <p>
        I do great in teams. I can help people hear and understand each other. Because I'm standing at the intersection of tech and design, I can bridge the gap between highly technical individuals and highly creative individuals and “translate” their perspectives from one to the other.
      </p>
    </>
}


ReactDOM.render(<Site/>, document.getElementById('root'));
