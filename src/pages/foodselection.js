import { useRouter } from "next/router";

export default function FoodSelection() {
  const router = useRouter();

  const foods = [
    {
      name: "Pizza",
      image:
        "https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg",
      message: "Maybe at Gusto or Albero 🍕❤️",
    },
    {
      name: "Steak",
      image:
        "https://media.istockphoto.com/id/1397536730/photo/grilled-bbq-t-bone-steak-with-fresh-rosemary.jpg?s=612x612&w=0&k=20&c=dnaQG4THgVAAAoW7WVTvhtGCCk4KfgIkU3MYDi2ouKk=",
      message: "At fancy restaurant 🥩💕",
    },
    {
      name: "Burger",
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2024/09/Cook-Burgers-on-the-Stove-FT24_277152_EC_0904_1-vert-social.jpg",
      message: "At Better or anywhere you like 🍔💖",
    },
    {
      name: "Pasta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4Li5Wb0mNQ09_l21fZp9ATm7TBsS7cxQ6w&s",
      message: "Some cozy restaurant 🍝💞",
    },
  ];

  const handleSelection = (food) => {
    localStorage.setItem("food", food);
    router.push("/desert"); // Redirect to the dessert page after selection
  };

  return (
    <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 min-h-screen p-6 flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-500">
        What would you like to eat? 🍽️💖
      </h1>
      <p className="text-lg md:text-xl text-gray-700 font-medium mb-8">
        Choose anything you love, and I’ll make sure it’s perfect for you 😘
      </p>
      <img
        src="https://tenor.com/view/acciddental-kiss-ramyun-kiss-puuung-gif-11142587358811061555.gif"
        alt="cute gif"
        className="w-52 h-60 mb-10 rounded-lg border-4 border-pink-300"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {foods.map((food) => (
          <div
            key={food.name}
            className="flex flex-col items-center border-4 border-pink-300 rounded-lg shadow-lg p-4 bg-white hover:bg-pink-100 transition-all duration-200 cursor-pointer"
            onClick={() => handleSelection(food.name)}
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-pink-600">{food.name}</h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              {food.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
