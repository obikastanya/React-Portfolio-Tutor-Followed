import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landingpage extends Component {
    render() {
        return (
            <div style={{ width: '100', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-7.png" alt="avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Developper</h1>
                            <hr />
                            <p>HTML/css | Bootstrap | JavaScript | React | React Native | Nodejs | Express | monggoDB</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://google.com" target="_blank " rel="noopener noreffer ">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/* Github */}
                                <a href="http://google.com" target="_blank " rel="noopener noreffer ">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/* Freecodecamp */}
                                <a href="http://google.com" target="_blank " rel="noopener noreffer ">
                                    <i class="fa fa-free-code-camp" aria-hidden="true"></i>
                                </a>
                                {/* Youtube*/}
                                <a href="http://google.com" target="_blank " rel="noopener noreffer ">
                                    <i class="fa fa-youtube-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        );
    }

}
export default Landingpage; 