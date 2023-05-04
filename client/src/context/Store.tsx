import  {create} from 'zustand'


interface MyStoreState {
  Identifier: string;
  setIdentifier: (newValue: string) => void;
}


export const useStore = create<MyStoreState>((set) => ({
  Identifier: '',
  setIdentifier: (newValue: string) => set({ Identifier: newValue }),
}))
