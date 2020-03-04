import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Project extends Component {
    constructor(props) {
        super();
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                    {/* project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png)center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/* project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png)center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/* project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png)center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                </div>

            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="project-grid">
                    {/* project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png)center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/* project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png)center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="project-grid">
                    {/* project 1 */}
                    <Card shadow={5} style={{ minWidth: '550', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png)center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/* project 2 */}
                    <Card shadow={5} style={{ minWidth: '550', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png)center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className="project-grid">
                    {/* project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png)center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/* project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png)center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/* project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png)center / cover' }}></CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                </div>

            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Reactjs</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                {/* <section className="project-grid"> */}
                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

                {/* </section> */}
            </div>
        );
    }
}
export default Project;