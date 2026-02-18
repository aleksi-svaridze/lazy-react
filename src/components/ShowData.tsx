import { useState } from "react";

import potos from "../data/Potos";
import type { IPotos } from "../interfaces/potos.interfece";

function ShowData() {
  const [potoData] = useState<IPotos[]>(potos);

  return (
    <>
      <input className="my-8 border outline-none w-full p-4" type="text" />
      <div>
        {potoData.map(({ title, thumbnailUrl, id }) => (
          <div className="border-b mb-4 flex" key={id}>
            <img src={thumbnailUrl} className="w-28 h-28" />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowData;
