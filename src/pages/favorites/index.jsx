import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4x1 text-xl text-center text-black font-extrabold">No favorites</p>
        </div>
      )}
    </div>
  );
}
