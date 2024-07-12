import axios from "axios";
import { Course } from "../../types";
import { create } from "zustand";

type CourseStore = {
	course: Course | null;
	setCourse: (course: Course) => void;
};

export const getCourseById = async (id: string) => {
	const response = await axios.get<Course>(
		`http://localhost:5173/metronic8/react/demo1/json/data.json`
	);
	return response.data;
};

export const useCourseStore = create<CourseStore>((set) => ({
	course: null,
	setCourse: (course: Course) => set({ course }),
}));
