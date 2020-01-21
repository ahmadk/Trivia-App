export interface IFormState {
    value: OpentdbResult | null;
    submitSuccess: boolean;
    loading: boolean;
}

export interface OpentdbResult {
    response_code: number;
    results: QuestionModel[];
}

export interface QuestionModel {
    category: Category;
    type: Type;
    difficulty: Difficulty;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export enum Category {
    GeneralKnowledge = "General Knowledge",
}

export enum Difficulty {
    Easy = "easy",
}

export enum Type {
    Multiple = "multiple",
}
