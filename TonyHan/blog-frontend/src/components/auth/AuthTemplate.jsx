import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AuthTemplateBlock = styled.div`
	/*위치 설정*/
	position: absoulte;
	left: 0;
	top : 0;
	bottom : 0;
	right : 0;
	background:${palette.gray[2]};
	/*내용물 설정*/
	display: flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
`;

const WhiteBox = styled.div`
	.logo-area {
		display:block;
		padding-bottom:2em;
		text-align:center;
		font-weight:bold;
		letter-spacing:2px;
	}
	box-shadow:0 0 8px rgba(0,0,0,0.025);
	padding:2rem;
	width:360px;
	background:white;
	border-radius:2px;
`;

const AuthTemplate = ({children}) => {
		return (
				<AuthTemplateBlock>
					<WhiteBox>
						<div className="logo-area">
							<Link to = "/">REACTS</Link>
						</div>
						{children}
					</WhiteBox>
				</AuthTemplateBlock>
		);
};

export default AuthTemplate;