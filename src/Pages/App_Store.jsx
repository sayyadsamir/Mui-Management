import create from 'zustand'
import { persist } from 'zustand/middleware';

let App_Store = (set) => ({
    dopen: true,
    rows: [],
    setRows:(rows)=> set((state)=>({rows:rows})),
    updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
});

App_Store = persist(App_Store, { name: 'my_app_store' });
export const useAppStore = create(App_Store);

