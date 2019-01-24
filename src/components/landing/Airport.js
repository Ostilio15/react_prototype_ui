// @flow
import React from 'react';

function getName(name: string) {
  return name + "!";
}

const Airport = () => (
  <div className="airports">
     <ul>
      <li>{getName("kakao")}</li>
      <li>Jomo Kakao</li>
      <li>Tambo</li>
      <li>Fancy</li>
      <li>Kakao</li>
      <li>Murtala Mohammed</li>
    </ul>
  </div>
);

export default Airport;
