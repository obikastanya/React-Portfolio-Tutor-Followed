import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg" alt="avatar" style={{ height: '200px' }} />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Obi Kastanya</h2>
                        <h4 style={{ color: 'grey' }}> Programmer</h4>
                        <hr style={{ borderTop: ' 3px solid #833fb2', width: '50%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5> Phone</h5>
                        <p> (123) 567-7890</p>
                        <h5>Email</h5>
                        <p>Someone@example.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2002}
                            endYear={2006}
                            schoolName="my University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <Education
                            startYear={2012}
                            endYear={2016}
                            schoolName="my University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="Junior Programmer"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <Experience
                            startYear={2012}
                            endYear={2019}
                            jobName="Senior Programmer"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h2>Skills</h2>
                        <Skill
                            skill="Javascript"
                            progress={100}
                        />
                        <Skill
                            skill="Laravel"
                            progress={70}
                        />
                        <Skill
                            skill="Bootstrap"
                            progress={40}
                        />
                        <Skill
                            skill="React"
                            progress={60}
                        />
                    </Cell>
                </Grid>

            </div>
        );
    }

}
export default Resume;