export enum ISex{
    Man = "Man",
    Woman = "Woman"
}

export interface FormSchema {
    data: {
        Phone?: string;
        Email?: string;
        Nickname?: string;
        Name?: string;
        Surname?: string;
        Sex?: ISex;
        advantage?: String[];
        checkbox1?: boolean;
        checkbox2?: boolean;
        checkbox3?: boolean;
        checkbox4?: boolean;
        radioGroup?: string;
        About?: string;
    },
    isLoading: boolean;
    error: boolean;
    success: string;
}