import { memo, Suspense, type ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import logo from "../shared/assets/LOGOTYPE.svg";
import { Skeleton } from "antd";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Suspense
            fallback={
              <div>
                <div className="h-screen flex justify-center items-center">
                  <img src={logo} alt="" />
                </div>
                <div>
                  <Skeleton style={{width:400}} />
                </div>
              </div>
            }
          >
            {children}
          </Suspense>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default memo(AppProvider);
