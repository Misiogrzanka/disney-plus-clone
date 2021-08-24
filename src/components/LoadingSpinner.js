import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
	return <Spinner />;
};

export default LoadingSpinner;

const spinMotion = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	:after {
		content: " ";
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid white;
		border-color: white transparent white transparent;
		animation: ${spinMotion} 1.2s linear infinite;
	}
`;
