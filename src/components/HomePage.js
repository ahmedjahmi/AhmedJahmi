import React, { Component } from 'react'
import Hero from './Hero';
import DisplaySection from "./DisplaySection";

export default class HomePage extends Component {
    render() {
        return (
					<React.Fragment>
						<div className='container'>
							<div className='row'>
								<div className='col-sm-12'>
									<Hero />
								</div>
								<div className='col-sm-12'>
									<hr
										style={{ backgroundColor: 'var(--lightJelly)'}}
									/>
								</div>
								<div className='col-sm-12'>
									<DisplaySection />
								</div>
							</div>
						</div>
					</React.Fragment>
				);
    }
}
