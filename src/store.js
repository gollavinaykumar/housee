import zustand from "zustand";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useGameStore = create(
  persist(
    (set, get) => ({
      noOfPlayers: 0,
      playersNames: [],
      addPlayers: (number, list) =>
        set({
          noOfPlayers: number,
          playersNames: [...list],
        }),
    }),
    {
      name: "noofplayers",
    }
  )
);

export const useWinnerList = create((set, get) => ({
  jaldi5: [],
  firstrow: "",
  secondrow: "",
  thirdrow: "",
  Fullhousee: "",
  addJaldi5: (name) =>
    set({
      jaldi5: [...get().jaldi5, `Congratulations ${name}`],
    }),
}));
