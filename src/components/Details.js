import React, { Component } from 'react';
import { ProjectConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer, ButtonDark} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProjectConsumer>
                {(value)=>{
                    const {id, title, img, technologies, info, live, gitLink, liveLink} = value.detailProject;
                    return (
											<div className='container py-5'>
												{/* title */}
												<div className='col-10 mx-auto text-title text-center text-jelly my-5'>
													<h1>{title}</h1>
												</div>
												{/* end title */}

												{/* project info */}
												<div className='row'>
													<div className='col-10 mx-auto col-md-6 my-3'>
														<img
															src={img}
															alt='project'
															className='img-fluid'
														/>
													</div>
													<div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
														<h2 className='text-light-jelly'>
															<span className='text-jelly'>
																Technologies:{' '}
															</span>
															{technologies}
														</h2>
														<p>{info}</p>
														<Link to='/projectlist'>
															<ButtonDark>
																back to projects
															</ButtonDark>
														</Link>
														<a
															href={gitLink}
															target='_blank'
															rel='noopener noreferrer'
														>
															<ButtonDark>
																github
															</ButtonDark>
														</a>
														<a
															href={liveLink}
															target='_blank'
															rel='noopener noreferrer'
															disabled={
																live ? true : false
															}
														>
															<ButtonDark>
																live
															</ButtonDark>
														</a>
													</div>
													{/* buttons */}
												</div>
												{/* end project info */}
											</div>
										);
                }}
            </ProjectConsumer>
        )
    }
}