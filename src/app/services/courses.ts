import axios from "axios";
import { Course } from "../../types";
import { create } from "zustand";

type CourseStore = {
	course: Course | null;
    courses: Course[]; // Ajoutez cet état
    setCourse: (course: Course) => void;
    setCourses: (courses: Course[]) => void; // Ajoutez cette fonction
};

export const getCourseById = async (id: string) => {
	const response = await axios.get<Course>(
		//"http://localhost:5189/api/Courses"
		//`${import.meta.env.VITE_APP_API_URL_COURSES}/Courses'

		`http://localhost:5173/metronic8/react/demo1/json/data.json`
	);
	return response.data;
};

export const useCourseStore = create<CourseStore>((set) => ({
	course: null,
    courses: [], // Initialisez la liste des cours
    setCourse: (course: Course) => set({ course }),
    setCourses: (courses: Course[]) => set({ courses }), // Ajoutez cette fonction
}));

export const getAllCourses = async () => {
    const response = await axios.get<Course[]>(
        `http://localhost:5173/metronic8/react/demo1/json/data.json`
    );
    return response.data;
};