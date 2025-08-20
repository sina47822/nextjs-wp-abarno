import { useEffect } from "react";
import { gsap } from "gsap";

export default function SvgAnimation() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.from("#text1", { duration: 1, opacity: 0, delay: 0 })
      .from("#rect1", { duration: 1, opacity: 0 }, "<")
      .from("#line1", { duration: 1, opacity: 0, delay: 0 })
      .from("#text2", { duration: 1, opacity: 0 })
      .from("#rect2", { duration: 1, opacity: 0 }, "<")
      .from("#line2", { duration: 1, opacity: 0, delay: 0 })
      .from("#text3", { duration: 1, opacity: 0 })
      .from("#rect3", { duration: 1, opacity: 0 }, "<")
      .from("#line3", { duration: 1, opacity: 0, delay: 0 })
      .from("#text4", { duration: 1, opacity: 0 })
      .from("#rect4", { duration: 1, opacity: 0 }, "<")
      .to(["#text1", "#rect1", "#line1","#text2", "#rect2", "#line2","#text3", "#rect3", "#line3","#text4", "#rect4"], { duration: 1, opacity: 0, delay: 1 })
  }, []);

  return (
    <svg width="600px" height="500px" direction="ltr" className="absolute top-12 left-12">
      <text id="text1" x="40" y="200" fontSize="24" fill="white" className="font-dana font-bold">
        حسابداری
      </text>
      <rect id="rect1" x="30" y="160" width="115" height="60" fill="#7a663f25" />

      <line id="line1" x1="150" y1="195" x2="250" y2="100" stroke="#8a8a8a" strokeWidth="3" />
      <text id="text2" x="250" y="100" fontSize="24" fill="white" className="font-dana font-bold">
        سیستماتیک
      </text>
      <rect id="rect2" x="250" y="60" width="120" height="60" fill="#7a663f25" />

      <line id="line2" x1="150" y1="195" x2="250" y2="200" stroke="#8a8a8a" strokeWidth="3" />
      <text id="text3" x="290" y="200" fontSize="24" fill="white" className="font-dana font-bold">
        امن
      </text>
      <rect id="rect3" x="250" y="160" width="120" height="60" fill="#7a663f25" />

      <line id="line3" x1="150" y1="195" x2="250" y2="300" stroke="#8a8a8a" strokeWidth="3" />
      <text id="text4" x="270" y="300" fontSize="24" fill="white" className="font-dana font-bold">
        تطبیقی
      </text>
      <rect id="rect4" x="250" y="260" width="120" height="60" fill="#7a663f25" />
    </svg>
  );
}
