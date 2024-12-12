import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const moveButton = () => {
    const randomX = Math.random() * 200 - 100; // Random X offset
    const randomY = Math.random() * 200 - 100; // Random Y offset
    setNoButtonStyle({
      transform: `translate(${randomX}px, ${randomY}px)`,
      transition: "transform 0.3s ease",
    });
  };

  return (
    <div className="bg-gradient-to-br from-pastelPink via-pastelYellow to-pastelBlue min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-6 text-pink-600">
        Will you forgive me? 🙏
      </h1>
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/thankyou")}
          className="bg-green-400 px-6 py-3 text-white rounded-full shadow-lg hover:bg-green-500"
        >
          Yes ❤️
        </button>
        <button
          style={noButtonStyle}
          onMouseEnter={moveButton}
          onClick={moveButton}
          className="bg-red-400 px-6 py-3 text-white rounded-full shadow-lg"
        >
          No 😢
        </button>
      </div>
      <img
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN25penQxMjZ1eDhjNHp2MWFpd3F4M2oyMG5uMTRpYTJudTBjd25kMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lqTp5c1mI423u/giphy.gif" // Replace with your GIF URL
        alt="apology gif"
        className="w-52 h-52 mt-6 rounded-full border-4 border-pink-300"
      />
    </div>
  );
}
