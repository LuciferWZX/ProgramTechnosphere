import React from "react";
import yayJpg from "../assets/yay222.jpg";

export default function HomePage() {
  console.log(window.electron?.deskTop);
  return (
    <div>
      <h2>Yay! Welcome to umi4!</h2>
      <p>
        <img alt={"xx"} src={yayJpg} width="388" />
      </p>
      <a
        href={
          "https://img.yasuotu.com/uploads/2022/06/25/62b5ea51be6ee_preview.png"
        }
      >
        aaa
      </a>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
