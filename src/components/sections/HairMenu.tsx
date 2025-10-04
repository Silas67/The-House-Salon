import React from "react";
import { HairyAffairs } from "../constant";
import { ChemicalTreatment } from "../constant";
import { Specialist } from "../constant";
import Image from "next/image";

export const HairMenu = () => {
  return (
    <div className="min-h-[100vh] w-full py-8 text-primary px-4">
      {HairyAffairs.map((item, id) => (
        <div key={id} className="border-t border-primary w-full flex items-stretch justify-between gap-4">
          <div className="py-4 flex flex-col gap-2 pr-12 max-sm:pr-0">
            <h1 className="text-sm font-bold uppercase">{item.section}</h1>
            <div className="grid grid-cols-2 max-sm:grid-cols-1">
              <div className="min-w-[200px] max-sm:hidden"></div>
              <div>
              {item.menuItems.map((style, id) => (
              <ul key ={id} className="w-full grid grid-cols-3 items-center space-x-4">
                <li className="justify-self-start grid-cols-subgrid">{style.name}</li>
                <li className="border flex-1 justify-self-center grid-cols-subgrid lg:w-[200px] max-sm:max-w-[200px] border-dotted"></li>
                <li className="justify-self-end grid-cols-subgrid">{style.price}</li>
              </ul> 
              ))}
              </div>
              
            </div>
            
          </div>
          <div className=" relative w-[400px] h-[500px] my-8 max-sm:hidden"><Image src={"/assets/img8.jpg"} alt="/" fill className="w-full h-full object-cover"/></div>
        </div>
      ))}

      {ChemicalTreatment.map((item, id) => (
        <div key={id} className="border-t border-primary w-full flex items-stretch justify-between gap-4">
          <div className="py-4 flex flex-col gap-2 pr-12 max-sm:pr-0">
            <h1 className="text-sm font-bold uppercase">{item.section}</h1>
            <div className="grid grid-cols-2 max-sm:grid-cols-1">
              <div className="min-w-[200px] max-sm:hidden"></div>
              <div className="">
              {item.menuItems.map((style, id) => (
              <ul key ={id} className="w-full grid grid-cols-3 items-center space-x-4">
                <li className="justify-self-start grid-cols-subgrid">{style.name}</li>
                <li className="border flex-1 justify-self-center grid-cols-subgrid lg:w-[200px] max-sm:max-w-[200px] border-dotted"></li>
                <li className="justify-self-end grid-cols-subgrid">{style.price}</li>
              </ul> 
              ))}
              </div>
              
            </div>
            
          </div>
          <div className=" relative w-[600px] h-[300px] my-8 max-sm:hidden"><Image src={"/assets/img6.jpg"} alt="/" fill className="w-full h-full object-cover"/></div>
        </div>
      ))}

     {Specialist.map((item, id) => (
        <div key={id} className="border-t border-primary w-full flex items-stretch justify-between gap-4">
          <div className="py-4 flex flex-col gap-2 pr-12 max-sm:pr-0">
            <h1 className="text-sm font-bold uppercase">{item.section}</h1>
            <div className="grid grid-cols-2 max-sm:grid-cols-1">
              <div className="min-w-[200px] max-sm:hidden"></div>
              <div className="">
              {item.menuItems.map((style, id) => (
              <ul key ={id} className="w-full grid grid-cols-3 items-center space-x-4">
                <li className="justify-self-start grid-cols-subgrid">{style.name}</li>
                <li className="border flex-1 justify-self-center grid-cols-subgrid lg:w-[200px] max-sm:max-w-[200px] border-dotted"></li>
                <li className="justify-self-end grid-cols-subgrid">{style.price}</li>
              </ul> 
              ))}
              </div>
              
            </div>
            
          </div>
          <div className=" relative w-[600px] h-[300px] my-8 max-sm:hidden"><Image src={"/assets/img6.jpg"} alt="/" fill className="w-full h-full object-cover"/></div>
        </div>
      ))}
    </div>
  );
};
