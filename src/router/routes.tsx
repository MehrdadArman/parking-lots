import { lazy } from "react";

// ** Pages
import ErrorPage from "@/pages/Error/ErrorPage";

// ** Routes packages
import { RouteObject } from "react-router-dom";
import SummaryView from "@/pages/summaryView/SummaryView";

// ** render components as a lazy load component
const App = lazy(() => import("../App"));

// **orders
const ParkingLotsPage = lazy(
  () => import("../pages/parkingLots/ParkingLotsPage")
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ParkingLotsPage /> },
      { path: "summary-view", element: <SummaryView /> },
    ],
  },
];

export default routes;
