import React from 'react';
import yayJpg from '../assets/yay222.jpg';

export default function HomePage() {
    console.log(window.electron?.deskTop)
  return (
    <div>
      <h2>Yay! Welcome to umi4!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
