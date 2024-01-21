import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This dictionary was coded by Lindis Jørgensen. It's{" "}
        <a
          href="https://github.com/lindijor/dictionary"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on Netlify.
      </p>
    </div>
  );
}
