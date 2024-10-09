import { PropsWithChildren } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "./ReduxProvider";
import ApolloProvider from "./ApolloProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ApolloProvider>
        <ReduxProvider>
          <ToastContainer />
          {children}
        </ReduxProvider>
      </ApolloProvider>
    </>
  );
};

export default Providers;
