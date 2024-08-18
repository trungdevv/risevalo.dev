"use client";
import React from "react";
import Typed from "typed.js";

export function Typeing() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Valorant ", "Rust ", "Fortnite", "CS2"],
      typeSpeed: 50,
      backSpeed: 50, // Typing speed when backspacing
      loop: true, // Loop the animation
      showCursor: false
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}
