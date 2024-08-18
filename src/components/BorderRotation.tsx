import { ReactNode } from "react";

type props = {
    children: ReactNode;
  };
const BorderRotation: React.FC<props> = ({ children }) => {
    return (
        <div className="flex-1 max-w-lg">
        <div className="relative flex  flex-col justify-center overflow-hidden  font-sans ">
          <div className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="mx-auto flex w-full max-w-lg items-center justify-center">
            <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden p-[1.5px]">
              <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#e11d48_20deg,transparent_120deg)]"></div>
              <div className="relative z-20 flex w-full rounded-[0.60rem] p-2">
              { children }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BorderRotation;