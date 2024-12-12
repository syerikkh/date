import confetti from "canvas-confetti";
import { useRouter } from "next/router";

export default function FinalMessage() {
  const router = useRouter();
  // Confetti Animation Trigger
  const goToFlowerSurprise = () => {
    router.push("/flower-surprise");
  };

  return (
    <div className="bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-6">
        Date Confirmed! 💕
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Thank you for picking everything! I’m so excited to spend this day with
        you. You're my everything! 😘
      </p>
      <img
        src="https://tenor.com/view/mewdi-moni-puuung-my-love-whiskey-gif-23305133.gif"
        alt="happy couple gif"
        className="w-52 h-60 mb-8 rounded-lg shadow-lg border-4 border-pink-300"
      />
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        I'm so sorry for letting you down 🥹
      </p>
      <img
        src="https://tenor.com/view/mewdi-it-will-be-okay-puuung-it-will-be-alright-alright-gif-24301372
.gif"
        alt="happy couple gif"
        className="w-60 h-32 mb-8 rounded-lg shadow-lg border-4 border-pink-300"
      />
      <button
        onClick={goToFlowerSurprise}
        className="mt-10 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-200 text-lg font-semibold"
      >
        Click to see one last surprise
      </button>
    </div>
  );
}
