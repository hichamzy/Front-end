import axios from "axios";
import { create } from "zustand";
import { Professeur } from "../../types";

type ProfesseurStore = {
	professeur: Professeur | null;
	setProfesseur: (data: Professeur) => void;
};

export async function getProfesseurByEmail() {
	const response = await axios.get<Professeur>(
		//`${import.meta.env.VITE_APP_API_URL}/Professors?email=${email}'
		`http://localhost:5173/metronic8/react/demo1/json/professeur.json`
	);
	return response.data;
}

export const useProfesseurStore = create<ProfesseurStore>((set) => ({
	professeur: null,
	setProfesseur: (data) => set({ professeur: data }),
}));
