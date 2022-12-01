import React from 'react';

import Lottie from 'react-lottie-player';

import lottieJson from '../../public/starBackground.json';

export default function Animation() {
  return <Lottie loop animationData={lottieJson} play style={{ width: '100%', height: 150 }} />;
}
