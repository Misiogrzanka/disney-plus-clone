import React from "react";
import styled from "styled-components";

function Login() {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/images/cta-logo-one.svg" alt="logoOne" />
				<SignUp>GET ALL THERE</SignUp>
				<Description>
					Get Premier Access to Raya and the Last Dragon for an additional fee
					with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
					The Disney Bundle will increase by $1.
				</Description>
				<CTALogoTwo src="/images/cta-logo-two.png" alt="logoTwo" />
			</CTA>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	height: calc(100vh - 70px);

	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	&:before {
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url("/images/login-background.jpg");
		content: "";
		opacity: 0.7;

		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		z-index: -1;
	}
`;

const CTA = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 80px 40px;
	width: 90%;
	max-width: 650px;
	margin-top: 100px;
`;
const CTALogoOne = styled.img``;

const SignUp = styled.a`
	background-color: #0063e5;
	border-radius: 4px;
	color: #f9f9f9;
	cursor: pointer;
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 1.5px;
	margin-top: 8px;
	margin-bottom: 12px;
	padding: 17px 0;
	text-align: center;
	transition: all 250ms;
	width: 100%;

	&:hover {
		background: #0483ee;
	}
`;

const Description = styled.p`
	font-size: 11px;
	letter-spacing: 1.5px;
	line-height: 1.5;
	text-align: center;
`;

const CTALogoTwo = styled.img`
	width: 90%;
`;
