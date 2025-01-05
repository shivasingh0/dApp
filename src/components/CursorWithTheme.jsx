// import React, { useState, useEffect } from "react";
// import AnimatedCursor from "react-animated-cursor";

// const CursorWithTheme = () => {
//   const [isDarkBackground, setIsDarkBackground] = useState(false);

//   useEffect(() => {
//     // Example: Detect background color by checking a theme class or a CSS property
//     const checkBackground = () => {
//       const bodyStyle = getComputedStyle(document.body);
//       const backgroundColor = bodyStyle.backgroundColor; // Get the background color
      
//       // Check if the background is dark using a simple luminance calculation
//       const rgb = backgroundColor
//         .replace("rgb(", "")
//         .replace(")", "")
//         .split(",")
//         .map(Number);

//       const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
//       setIsDarkBackground(luminance < 0.5);
//     };

//     // Initial check
//     checkBackground();

//     // Optionally, add an event listener for theme changes
//     const observer = new MutationObserver(checkBackground);
//     observer.observe(document.body, { attributes: true, attributeFilter: ["style", "class"] });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <AnimatedCursor
//       innerSize={10}
//       outerSize={25}
//       innerScale={1}
//       outerScale={2}
//       outerAlpha={0}
//       hasBlendMode={true}
//       innerStyle={{
//         backgroundColor: isDarkBackground ? "#fff" : "#000",
//       }}
//       outerStyle={{
//         border: `3px solid ${isDarkBackground ? "#fff" : "#000"}`,
//       }}
//     />
//   );
// };

// export default CursorWithTheme;
