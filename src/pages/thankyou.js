import { useRouter } from "next/router";
import { useEffect } from "react";
import confetti from "canvas-confetti"; // Install this library: npm install canvas-confetti

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-br from-pastelPink via-pastelYellow to-pastelBlue min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600">
        Thank you! 💖
      </h1>
      <p className="text-lg md:text-xl text-gray-700 font-semibold mb-8">
        I have never ever laid my eyes on anyone since I've been with you. You
        are my only one and will be forever 😭<br></br>
      </p>
      <div className="flex flex-col items-center gap-6">
        <img
          src="https://tenor.com/view/puuung-bad-mood-gif-5413699287440894502.gif"
          alt="happy gif"
          className="w-40 h-40 md:w-52 md:h-52 border-4 border-pink-300 shadow-lg"
        />
        <div>
          <div className="text-2xl md:text-3xl text-pink-600 font-bold mt-4">
            How about we go on a date? 💕
          </div>
          <button
            onClick={() => router.push("/foodselection")}
            className="bg-pink-500 px-6 py-3 text-white rounded-full shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-200 mt-6 text-lg font-semibold"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
