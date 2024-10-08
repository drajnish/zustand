import { create } from 'zustand';

const useCounter = create((set) => {
  return {
    count: 0,
    listOfRecipes: [],
    actions: {
      handleIncrementCount: () =>
        set((state) => ({
          count: state.count + 1,
        })),

      fetchListOfRecipes: async () => {
        const fetchApi = await fetch('https://dummyjson.com/recipes');
        const apiRes = await fetchApi.json();

        set({
          listOfRecipes: apiRes?.recipes,
        });
      },
    },
  };
});

export const useActions = () => useCounter((state) => state.actions);

export default useCounter;
