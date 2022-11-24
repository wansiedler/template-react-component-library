export interface OldTypes {
	id: number

	client_id: number

	experiment_id: number

	name: string

	type: string

	created_by: any

	created_at: string

	updated_at: string

	task_data: TaskData
}

export type TaskData = {
	contents: Contents[]
	results: PersonalityResults[]
}

export type PersonalityResults = {
	id?: string
	text?: string
	element?: string
	result?: string
	answerSubtext?: string
	backgroundImage?: string | null
	textPosition?: string
}

export interface Quiz {
	answersOptions?: AnswersOption[]

	question?: Question

	answersFontSize?: number

	answersHeight?: number

	id: string

	text: string

	answersFormat?: string

	element: string

	content?: string

	subContent?: string
}

export type Contents =
	| { id: string; element: string; text: string; content: string; subContent: string }
	| {
			id: string
			element: string
			text: string
			question: Question
			answersFormat: string
			answersHeight: number
			answersFontSize: number
			answersOptions: AnswersOption[]
	  }

export interface Question {
	id?: string

	value?: string

	height?: number

	fontSize?: number

	textPosition?: string

	color?: string

	backgroundColor?: string

	textStroke?: string

	imageCredit?: string

	backgroundImage?: string

	backgroundPosition?: string
}

export type Header = {
	heading: string
	subheading: string
	profileImage: string
}

export interface AnswersOption {
	id: string

	value: string

	result: any

	textPosition: string

	backgroundColor?: string

	color?: string

	textStroke?: string

	height?: number

	fontSize?: number

	imageCredit?: string

	backgroundImage?: string

	backgroundPosition?: string
}

export type Nullable = "" | null | undefined

export type QuizOld = {
	id?: number
	client_id?: number | undefined
	experiment_id?: string | undefined
	name?: string
	type?: string | number | undefined
	variant?: string | undefined

	created_by?: string | undefined
	created_at?: string | undefined
	updated_at?: string | undefined

	task_data?: TaskData
}
