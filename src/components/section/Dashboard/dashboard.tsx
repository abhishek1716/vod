import { PlusCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import Header from "../../other/header/header";
import CardCarouselComponent from "../../card-carousel/cardCarousel";

function DashboardComponent() {
  return (
    <div>
      <Header />
      <div className="flex">
        <button
          type="button"
          className="px-3 py-2 text-sm text-center inline-flex items-center text-white bg-secondary-dark rounded-lg"
        >
          <PlusCircleIcon className="w-4 h-3 me-2" />
          Create Project
        </button>
        <CardCarouselComponent />
      </div>
    </div>
  );
}

export default DashboardComponent;
