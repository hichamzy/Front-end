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

export type Content = {
	ContentName: string;
	Type: string;
	FilesUrls: string[];
};

export type Element = {
	ElementName: string;
	CourseId: string;
	IconBody: string;
	Link?: string;
	Body?: string;
	Status: string;
	contents: Content[];
};

export type Course = {
	CourseName: string;
	Description: string;
	CourseId: string;
	Photo: string;
	ProfessorId: string;
	Progession: string;
	Status: string;
	NiveauId: string;
	MatiereId: string;
	Elements: Element[];
	id: string;
	_rid: string;
	_self: string;
	_etag: string;
	_attachments: string;
	_ts: string;
};
