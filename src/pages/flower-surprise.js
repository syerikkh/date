import React, { useEffect } from "react";

export default function FlowerSurprise() {
  useEffect(() => {
    const flowerAnimation = () => {
      const canvas = document.getElementById("flower-canvas");
      const ctx = canvas.getContext("2d");

      // Fullscreen canvas setup
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const flowers = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 10,
        color: `hsl(${Math.random() * 360}, 70%, 80%)`,
        speed: Math.random() * 2 + 1,
      }));

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        flowers.forEach((flower) => {
          flower.y -= flower.speed; // Animate the flower upward
          if (flower.y < 0) flower.y = canvas.height; // Reset the flower to the bottom

          ctx.beginPath();
          ctx.arc(flower.x, flower.y, flower.size, 0, Math.PI * 2);
          ctx.fillStyle = flower.color;
          ctx.fill();
          ctx.closePath();
        });

        requestAnimationFrame(draw); // Re-run the drawing function for animation
      }

      draw();
    };

    flowerAnimation();
  }, []);

  return (
    <div className="relative min-h-screen bg-purple-200 flex items-center justify-center">
      <canvas id="flower-canvas" className="absolute top-0 left-0"></canvas>
      <div className="flex flex-col">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-dancing-script font-extrabold text-pink-600 z-10 text-center">
          I Love You Forever 💖
        </h1>
        <p className="max-w-[500px] text-black mt-10 z-10">
          I still care and love you, maybe even more compared to 5 years ago,
          that's why today i started building this web started from 11pm, now
          it's 3:00am i just read all of your stories. I don't know if it's too
          late but remember i also loved you and will love you till the end of
          my breath, maybe i'm struggling to show you my feelings. I'm sorry for
          letting you down. But remember, you're my everything. I love you
          <br></br>
          <br></br>
          Storydarnd korp osny sted dep oilama bagana kelp ap com ustap othanda
          osny bastap stegem, storydarnd jane kordm 2 sagat burn hoipsn, sosn os
          sozderd hosp jazp otrm. Haita adem bolp ketemz dep umttenem, bugn
          ekemzge dal 4 jyl jarym bolpt, 6 aidan kein 5 jylymyz bolad talai
          hiyndyh tusnsbeushlkten ottik goy osganda totep bereik, menen umitindi
          uzbe. Ekemzdk jai gana dassan setgel emes ekenin ekemzde blemzgoy.
          Sondhtan hoimash
        </p>
      </div>
    </div>
  );
}
