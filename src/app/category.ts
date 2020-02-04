export class subCategory {
    id: number;
    name: string;
}


export class Category {
    id: number;
    name: string;
    subCategory: subCategory[];
}

