import React, { Component } from 'react';
import styled from 'styled-components';

export default class Hero extends Component {
    render() {
        return (
					<HeroWrapper>
						<div
							className='jumbotron-fluid'
							style={{ backgroundColor: 'var(--mainWhite)' }}
						>
							<div className='container p-5'>
								<h1 className='display-4'>Ahmed Jahmi</h1>
								<p className='lead py-2'>Full-Stack Developer</p>
								<p>Brooklyn, by way of Buffalo.</p>
							</div>
						</div>
					</HeroWrapper>
				);
    }
}

const HeroWrapper = styled.div`
    height: 50vh;
`;