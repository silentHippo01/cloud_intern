export enum ISex{
    Man = "Man",
    Woman = "Woman"
}

export interface FormData{
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
}

export interface FormSchema {
    data: FormData,
    isLoading: boolean;
    error: boolean;
    success: boolean;
}