export type Class = {
	id: string;
	name: string;
	yearId: number;
	numberOfStudents: number;
};

export type Level = {
	id: string;
	nameAr: string;
	nameFr: string;
	classes: Class[];
};

export type Subject = {
	id: string;
	nameAr: string;
	nameFr: string;
	levels: Level[];
};

export type School = {
	code: string;
	nameAr: string;
	nameFr: string;
};

export type Professeur = {
	id: number;
	lastNameArabic: string;
	firstNameArabic: string;
	lastNameFrench: string | null;
	firstNameFrench: string | null;
	email: string;
	school: School;
	subjects: Subject[];
};
