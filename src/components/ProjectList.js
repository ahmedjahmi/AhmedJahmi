import React, { Component } from 'react';
import Project from './Project';
import Title from './Title';
import { ProjectConsumer } from "../context";

export default class ProjectList extends Component {
    render() {
        return (
					<React.Fragment>
						<div className='py-5'>
							<div className='container'>
								<Title name='my' title='projects' />

								<div className='row'>
									<ProjectConsumer>
										{value => {
											return value.projects.map(project => {
												return (
													<Project key={project.id} project={project} />
												);
											});
										}}
									</ProjectConsumer>
								</div>
							</div>
						</div>
					</React.Fragment>
				);
    }
}
