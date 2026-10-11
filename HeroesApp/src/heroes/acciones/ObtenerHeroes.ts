import { HeroeAPI } from "../api/HeroeAPI";

// const BASE_URL = import.meta.env.VITE_API_URL;

export async function ObtenerHeroes() {
  const { data } = await HeroeAPI().get(`/`);

  return data;
}

// export const ObtenerHeroesPagina = async (
//   pagina: number, // 1
//   limite: number = 6,
//   categoria: string = "all",
// ): Promise<HeroeResponse> => {
//   if (isNaN(pagina)) {
//     pagina = 1;
//   }

//   if (isNaN(limite)) {
//     limite = 6;
//   }

//   const { data } = await HeroeAPI().get<HeroeResponse>(`/`, {
//     params: {
//       limit: limite,
//       offset: (pagina - 1) * limite,
//       category: categoria,
//     },
//   });

//   const LstHeroes = data.heroes.map((item) => ({
//     ...item,
//     image: `${BASE_URL}/images/${item.image}`,
//   }));

//   return {
//     ...data,
//     heroes: LstHeroes,
//   };
// };
