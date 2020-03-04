import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './component/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }}>My Portofolio</Link>} scroll>
          <Navigation>
            < Link to="/resume">Resume</Link>
            < Link to="/project">Project</Link>
            {/* < Link to="/aboutme">About Me</Link> */}
            < Link to="/contact">Contact</Link>
          </Navigation >
        </Header >
        <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }}>My Portofolio</Link>}>
          <Navigation>
            < Link to="/resume">Resume</Link>
            < Link to="/project">Project</Link>
            {/* < Link to="/aboutme" > About Me</Link > */}
            < Link to="/contact" > Contact</Link >
          </Navigation >
        </Drawer >
        <Content>
          <Main />
          <div className="page-content" />
        </Content>
      </Layout >
    </div >
  );
}

export default App;
