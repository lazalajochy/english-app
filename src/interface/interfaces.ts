export interface IUserToken {
    sub: string;
    email: string;
    picture: string;
    family_name: string;
    given_name: string;
}

export interface IData{
    data: Data[]
}
export interface Data {
     word: string;
    definition: string;
    example: string;
    partOfSpeech: string;
    image?: File | null;
    
}

export interface IWord {
    word: string;
    definition: string;
    example: string;
    partOfSpeech: string;
    image?: File | null;
}