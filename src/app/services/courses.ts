import axios from "axios";
import { Course } from "../../types";

export const getCourseById = async (id: string) => {
	const response = await axios.get<Course>(`http://localhost:3000/courses/${id}`);
	return response.data;
};

export const getCourses = async () => {
	const response = await axios.get<Course[]>("http://localhost:3000/courses");
	return response.data;
};

export const getCoursesByEmail = async (email:string) => {
	const response = await axios.get<Course[]>(`http://localhost:3000/courses/${email}`);
	return response.data;
};
