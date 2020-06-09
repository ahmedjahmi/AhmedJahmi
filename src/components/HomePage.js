import React, { Component } from 'react'
import Hero from './Hero';
import DisplaySection from "./DisplaySection";
import { Container, Row, Col } from 'reactstrap';

export default class HomePage extends Component {
    render() {
        return (
					<React.Fragment>
						{/* <div className='container'> */}
						{/* <div className='row'> */}
						{/* <div className='col-12'> */}
						{/* <Hero /> */}

						{/* </div> */}
						{/* <div className='col-12'>
									<hr
										style={{ backgroundColor: 'var(--lightJelly)'}}
									/>
								</div> */}
						{/* <div className='col-12'><DisplaySection /></div> */}
						{/* </div> */}
						{/* </div> */}

						<Container>
							<Row>
								<Col sm='12' md={{ size: 6, offset: 3 }}>
									<code>
										let me = {'{'}"name": "Ahmed Jahmi"{'}'}
									</code><br />
									<code>me.title = "Software Engineer"</code><br />
									<code>me.projects = "https://github.com/ahmedjahmi"</code><br />
									<code>me.email = "amjahmi@gmail.com"</code><br />
									<code>me.twitter = "https://twitter.com/JahmiAmor"</code>
								</Col>

							</Row>
						</Container>
					</React.Fragment>
				);
    }
}




{/* <code>
										let me = {'{'}"name": "Ahmed Jahmi"{'}'}
									</code>
									<code>me.title = "Software Engineer"</code>
									<code>me.projects = "https://github.com/ahmedjahmi"</code>
									<code>me.email = "amjahmi@gmail.com"</code>
									<code>me.twitter = "https://twitter.com/JahmiAmor"</code>


									<code style={{ textTransform: 'none' }}>
										openResume(me.name)
									</code>
									<code style={{ textTransform: 'none' }}>
										openGithub(me.projects)
									</code>
									<code style={{ textTransform: 'none' }}>
										sendEmail(me.email)
									</code>
									<code style={{ textTransform: 'none' }}>
										openTwitter(me.twitter)
									</code> */}