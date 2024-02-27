import Banner from "./components/Banner";
import CategoriesList from "./components/CategoriesList";
import TopSellingProducts from "./components/TopSellingProducts";
import DailyStaples from "./components/subcategories/DailyStaples";
import FruitsVegetables from "./components/subcategories/FruitsVegetables";
import SnacksStore from "./components/subcategories/SnacksStore";


function Home() {
  return (
    <section className="w-full flex-center flex-col mt-3 gap-4 ">
        <CategoriesList/>   
        <Banner/>   
        <TopSellingProducts/>
        <FruitsVegetables/>
        <SnacksStore/>
        <DailyStaples/>
    </section>
  )
}

export default Home;