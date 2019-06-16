import React, { Component } from 'react';
import { IconContainer } from './Icon';

export default class DisplaySection extends Component {
    render() {
        return (
					<React.Fragment>
						<div className='container pt-5 icon-container'>
							<div className='row py-2 text-center'>
								<div className='col-6 col-sm-3 py-2'>
									<IconContainer className='fab fa-html5' />
								</div>
								<div className='col-6 col-sm-3 py-2'>
									<IconContainer className='fab fa-css3' />
								</div>
								<div className='col-6 col-sm-3 py-2'>
									<IconContainer className='fab fa-js' />
								</div>
								<div className='col-6 col-sm-3 py-2'>
									<IconContainer className='fab fa-bootstrap' />
								</div>
								<div className='col-6 col-sm-4 lg py-2'>
									<IconContainer className='fab fa-python' />
								</div>
								<div className='col-6 col-sm-4 py-2'>
									<IconContainer className='fab fa-react' />
								</div>
								<div className='col-sm-4 py-2'>
									<IconContainer className='fab fa-git' />
								</div>
							</div>
						</div>
					</React.Fragment>
				);
    }
}