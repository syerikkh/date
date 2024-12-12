import { useRouter } from "next/router";

export default function DessertSelection() {
  const router = useRouter();

  const desserts = [
    {
      name: "Ice Cream",
      image:
        "https://thebigmansworld.com/wp-content/uploads/2024/05/strawberry-ice-cream-recipe2.jpg",
      message: "Cool and sweet, just like you 🍦💕",
    },
    {
      name: "Cake",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zpbdhsHXkowa4LJmn4LXepBbOWhK3MFuJA&s",
      message: "Let’s share a slice of happiness 🎂💖",
    },
    {
      name: "Cupcakes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eaARpTwsewEXfERwMiG--GFBO549IdljiQ&s",
      message: "Cute little cupcakes for my cutie 🧁💞",
    },
    {
      name: "Ice cream sandwich",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPdYLhu-C4akQjycN3rIIZahrEEL2dvBLaw&s",
      message: "A sweet treat for my sweetest 🍩❤️",
    },
  ];

  const handleSelection = (dessert) => {
    localStorage.setItem("selectedDessert", dessert);
    router.push("/final"); // Redirect to a final message or summary page
  };

  return (
    <div className="bg-gradient-to-bl from-yellow-200 via-pink-100 to-purple-200 min-h-screen flex flex-col items-center text-center p-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-purple-600 mb-6">
        Which dessert do you want? 🍰💖
      </h1>
      <p className="text-lg md:text-xl text-gray-800 font-medium mb-8">
        Pick your favorite dessert, and I’ll make sure it’s the sweetest date
        ever 😘
      </p>
      <img
        src="https://tenor.com/view/puuung-kiss-puuung-puuung-couple-kiss-gif-5276916061692521740.gif"
        alt="sweet gif"
        className="w-52 h-60 mb-10 rounded-lg border-4 border-purple-300 shadow-lg"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {desserts.map((dessert) => (
          <div
            key={dessert.name}
            className="bg-white border-4 border-yellow-300 rounded-xl shadow-lg p-4 flex flex-col items-center hover:bg-yellow-100 hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
            onClick={() => handleSelection(dessert.name)}
          >
            <img
              src={dessert.image}
              alt={dessert.name}
              className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full mb-4"
            />
            <h2 className="text-xl md:text-2xl font-bold text-purple-600">
              {dessert.name}
            </h2>
            <p className="text-sm md:text-base text-gray-700 mt-2">
              {dessert.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
