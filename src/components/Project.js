import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProjectConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Project extends Component {
    render() {
        const {id, title, img, technologies, live} = this.props.project;
        return (
					<ProjectWrapper className='col-9 mx-auto col-md-9 col-lg-9 my-3'>
						<div className='card'>
							<ProjectConsumer>
								{value => (
									<div
										className='img-container p-4'
                                        onClick={()=>
                                        value.handleDetail(id)}
									>
										<Link to='/details'>
											<img
												src={img}
												alt='project'
												className='card-img-top'
											/>
										</Link>

										{/* this is a cart button that isn't needed
                            but maybe useful later */}

										{/* <button className="cart-btn" disabled={inCart ? true : false} onclick={()=>{console.log('added to cart');}}>
                                {inCart? (
                                    <p className="text-capitalize mb-0" disabled>
                                        {" "}
                                        in inCart
                                    </p>
                                ): (
                                    <i className="fas fa-cart-plus" />
                                )}
                            </button> */}
									</div>
								)}
							</ProjectConsumer>
							<div className='card-footer justify-content-between'>
								<h5 className='text-title'>{title}</h5>
								<p className='align-self-center text-capitalize'>
									{technologies}
								</p>
							</div>
						</div>
					</ProjectWrapper>
				);
    }
}

Project.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        technologies: PropTypes.string,
        info: PropTypes.string,
        inCart: PropTypes.bool,
        live: PropTypes.bool
    }).isRequired
}

const ProjectWrapper = styled.div`
	.card {
		border-color: transparent;
		transition: all 1s ease;
		h5 {
			color: var(--mainWhite);
		}
		p {
			color: var(--mainWhite);
		}
	}

	.card-footer {
		background: var(--lightJelly);
		border-top: transparent;
		transition: all 1s linear;
	}

	&:hover {
		.card {
			border: 0.04rem solid rgba(233, 128, 116, 0.2);
			box-shadow: 0px 2px 5px 0px rgba(233, 128, 116, 0.2);
			background: var(--lightJelly);
			h5 {
				color: var(--mainWhite);
			}
			p {
				color: var(--mainWhite);
			}
		}
		.card-footer {
			background: var(--mainJelly);
			border: 0.04rem solid rgba(233, 128, 116, 0.2);
			box-shadow: 0px 2px 5px 0px rgba(233, 128, 116, 0.2);
		}
	}

	.img-container {
		position: relative;
		overflow: hidden;
	}

	.card-img-top {
		transition: all 1s ease;
	}

    .img-container:hover .card-img-top {
        transform: scale(1.025);
    }
	// .cart-btn {
	// 	position: absolute;
	// 	bottom: 0;
	// 	right: 0;
	// 	padding: 0.2rem 0.4rem;
	// 	background: var(--lightJelly);
	// 	border: none;
	// 	color: var(--mainWhite);
	// 	font-size: 1.4rem;
	// 	border-radius: 0.5rem 0 0 0;
	// 	transform: translate(100%, 100%);
	// 	transition: all 1s linear;
	// }


	// .img-container:hover .cart-btn {
	// 	transform: translate(0, 0);
    // }
    
    // .cart-btn:hover {
    //     color: var(--mainJelly);
    //     cursor: pointer;
    // }
`;