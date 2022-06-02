import React from "react";
import LatestNews from "./LatestNews";
import CompanyUpdate from "./CompanyUpdate";

function ContainerNews() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 bg-slate-50	ml-10">
        <LatestNews/>
        <CompanyUpdate/>

      </div>
      <br />
      <a href="#" class="capital font-medium text-left text-x pl-7 mt-9"></a>
    </div>
  );
}

export default ContainerNews;
