import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
            }
        };
    
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);
    
        document.addEventListener("mousemove", moveCursor);
        document.body.style.cursor = "none";
    
        const elements = document.querySelectorAll("a, button");
        elements.forEach((el) => {
            el.style.cursor = "none";
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });
    
        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.body.style.cursor = "default";
    
            elements.forEach((el) => {
                el.style.cursor = "";
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);  

    return (
        <div
            ref={cursorRef}
            className="fixed pointer-events-none rounded-full z-[9999] transition-transform duration-200 ease-out"
            style={{
                width: isHovering ? "50px" : "25px",
                height: isHovering ? "50px" : "25px",
                background: "radial-gradient(circle, rgba(255, 69, 0, 0.5) 0%, rgba(255, 140, 0, 0.2) 70%)",
                border: "none",
                boxShadow: "0 0 15px 5px rgba(255, 69, 0, 0.7), 0 0 30px 10px rgba(255, 140, 0, 0.5)",
                borderRadius: "50%",
                transition: "transform 0.1s ease-out, width 0.2s ease-out, height 0.2s ease-out, background 0.2s ease-out",
                transformOrigin: "center",
                animation: "flicker 0.2s infinite alternate"
            }}
        />
    );
};

export default CustomCursor;