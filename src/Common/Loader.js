import React from "react";
import ReactLoading from "react-loading";

const list = [
    {
      prop: "bubbles",
      name: "Bubbles"
    },
]

const Loaders = () => (
    <>
        {list.map(l => (
            <div key={l.prop}>
                <ReactLoading type={l.prop} 
                color="#009999"
                />
            </div>
        ))}
    </>
);

export default Loaders;



