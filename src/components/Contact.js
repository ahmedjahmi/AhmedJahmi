import React, { Component } from 'react';
import { ButtonDark } from './Button';
import Title from './Title';

export default class Contact extends Component {
    render() {
        return (
					<React.Fragment>
						<div className='py-5'>
							<div className='container'>
								<Title name="let's" title='connect' />
								<div className='row'>
									<div className='col-sm-6 col-lg-10 mx-auto my-2'>
										<div className='card'>
											<div className='card-body'>
												<h5 className='card-title text-jelly'>
													<i className='fas fa-envelope' />
													<span className='ml-2 align-center'>
														Email
													</span>
												</h5>
												<p className='card-text'>
													If you're reading this, let's
                                                    chat!
												</p>
												<div className='text-center'>
													<a href={`mailto:${'amjahmi@gmail.com'}`}>
														<ButtonDark>
															<span className='mr-2 align-center'>
																message
															</span>
															<i className='far fa-paper-plane' />
														</ButtonDark>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className='col-sm-6 col-lg-10 mx-auto my-2'>
										<div className='card'>
											<div className='card-body'>
												<h5 className='card-title text-jelly'>
													<i className='fab fa-github' />
													<span className='ml-2 align-center'>
														Github
													</span>
												</h5>
												<p className='card-text'>
													Here are some of my projects.
												</p>
												<div className='text-center'>
													<a
														target='_blank'
														rel='noopener noreferrer'
														href='https://github.com/ahmedjahmi?tab=repositories'
													>
														<ButtonDark>
															<span className='mr-2 align-center'>
																repositories
															</span>
															<i className='fas fa-code-branch' />
														</ButtonDark>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</React.Fragment>
				);
    }
}



{/* <ButtonDark>
	<a href={`mailto:${'amjahmi@gmail.com'}`}>email</a>
</ButtonDark>; */}
