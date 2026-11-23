import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router";

import { MainPage } from "./MainPage";
import { PageNotFound } from "./PageNotFound";
import { Report } from "./Report";

export const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<MainPage />} />
          <Route path="/report/*" element={<Report />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
