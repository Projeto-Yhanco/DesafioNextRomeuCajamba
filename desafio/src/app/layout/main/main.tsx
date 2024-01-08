"use client";

import { useReducer, useState } from "react";
import { User, dataYhanko } from "./data";

type Dados = {
  dataUsers: string;
  usersData: User[]
};

type ActionResult = "USERS" | "ABOUT" | "VIDEO";

const result = (state: Dados, action: ActionResult): Dados => {
  switch (action) {
    case "USERS":
      return { ...state, usersData: dataYhanko.Users};
    case "ABOUT":
      return { ...state, dataUsers: dataYhanko.about };
    case "VIDEO":
      return { ...state, dataUsers: dataYhanko.video };
  }
};

export function Main(){
    const initial: Dados = { dataUsers: "", usersData: []};
    const [state, dispach] = useReducer(result, initial);
    const [mouse, setMouse] = useState(false);
    const [controlState, setControLState] = useState("");
    const mouseActive = (action: ActionResult) => {
      dispach(`${action}`);
      setControLState(action);
      setMouse(true);
    };
  
    const mouseInative = () => {
      setMouse(false);
    };




    
    return(
        <main className="h-[400px]">
             <section className="w-[800px] h-[400px] ">
        <div className="flex gap-4 mb-[50px]">
          <button
            onMouseEnter={() => mouseActive("USERS")}
            onMouseLeave={mouseInative}
            className="px-[2rem] py-[0.5rem] rounded-sm bg-[#F76680] text-slate-100 font-semibold
         text-[14px] hover:bg-[#FF7EB6]"
          >
            Users
          </button>

          <button
            onMouseEnter={() => mouseActive("ABOUT")}
            onMouseLeave={mouseInative}
            className="px-[2rem] py-[0.5rem] rounded-sm bg-[#F76680] text-slate-100 font-semibold
         text-[14px] hover:bg-[#FF7EB6]"
          >
            About Yhanko
          </button>

          <button
            onMouseEnter={() => mouseActive("VIDEO")}
            onMouseLeave={mouseInative}
            className="px-[2rem] py-[0.5rem] rounded-sm bg-[#F76680] text-slate-100 font-semibold
         text-[14px] hover:bg-[#FF7EB6]"
          >
            History
          </button>
        </div>

        <div id="body">
          {controlState === "USERS" ? (
            <>
              <div>
                 {
                  state.usersData.map((user, key) => (
                    <div key={key} className="flex gap-5 mb-5">
                  <Image src={user.img} alt="foto perfil" width={50} height={50} />
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] text-slate-200">
                      {user.name}
                    </h2>
                    <p className="text-[12px] text-zinc-400">
                      {user.task}
                    </p>
                  </div>
                </div>
                  ))
                 }
              </div>
            </>
          ) : controlState === "ABOUT" ? (
            <>
              <p className="text-[20px] text-slate-100">{state.dataUsers}</p>
            </>
          ) : controlState === "VIDEO" ? (
            <>
            <div className="w-[900px] h-[300px] border-4 border-transparent rounded-lg overflow-hidden">
            <video
                src="/videoNew.mp4"
                className="object-cover"
                controls
                autoPlay
                loop
                muted
              >
                Your browser does not support the video tag.
              </video>
            </div>
             
            </>
          ) : (
            <>
            <p>Carregando</p>
            </>
          )}
        </div>
      </section>
        </main>
    )
}