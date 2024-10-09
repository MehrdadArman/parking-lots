import SummaryViewTable from "./components/SummaryViewTable";
import { useSummaryViewLots } from "./hooks/useLots";

const SummaryView = () => {
  const { summaryViewList } = useSummaryViewLots();
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-5 ">
        <div className="col-start-1 col-span-1 sm:col-span-2 md:col-start-1 md:col-span-4 lg:col-start-1 lg:col-span-4">
          <SummaryViewTable data={summaryViewList} />
        </div>
      </div>
    </div>
  );
};

export default SummaryView;
