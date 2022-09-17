import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(255, 224, 102)" }}>
      <div className="text-light ">
        <div
          className="d-flex align-items-center mx-auto vstack"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-flex gsap-3 mt-3 mb-3" style={{ fontSize: "30px" }}>
            <Link href="/">
              <a target="_self" button className="btn btn-outline-Dark">
                Home
              </a>
            </Link>

            <Link href="/exper">
              <a target="_self" button className="btn btn-outline-Dark ">
                Experience
              </a>
            </Link>

            <Link href="/contact">
              <a target="_self" button className="btn btn-outline-Dark ">
                Contact
              </a>
            </Link>

            <Link href="/lab-07">
              <a target="_self" button className="btn btn-outline-Dark ">
                Lap-07
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
