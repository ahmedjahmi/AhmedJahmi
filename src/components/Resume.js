import React, { Component } from 'react';
import Title from './Title';
import styled from 'styled-components';

export default class Resume extends Component {
    render() {
        return (
					<div className='py-5'>
						<div className='container'>
							<Title name='my' title='resume' />
							<div className='row'>
								<div className='col-12 mx-auto col-md-9 col-lg-9 my-3'>
									<div className='card'>
										<div className='img-container p-2'>
											<ResumeWrapper
												src='img/aj-resume-2019.png'
												alt='Resume'
												className='card-img-top'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
    }
}


const ResumeWrapper = styled.img`
	box-shadow: 0px 0px 10px;
`;