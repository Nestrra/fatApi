
export interface User {
    address:  Address;
    id:       number;
    email:    string;
    username: string;
    password: string;
    name:     Name;
    phone:    string;
    __v:      number;
}

export interface Address {
    geolocation: Geolocation;
    city:        string;
    street:      string;
    number:      number;
    zipcode:     string;
}

export interface Geolocation {
    lat:  string;
    long: string;
}

export interface Name {
    firstname: string;
    lastname:  string;
}



export interface LoginResponse {
    token: string | null;
}


export interface ProductsResponse {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}


export interface CartResponse {
    id:       number;
    userId:   number;
    date:     Date;
    products: Product[];
    __v:      number;
}

export interface Product {
    productId: number;
    quantity:  number;
}
export interface ProductCart {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
    quantity:  number;
}
export interface CartUser {

    id:       number;
    userId:   number;
    date:     Date;
    products: ProductCart[];
    __v:      number;

}


export interface NuewProductResponse {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    image:       string;
    category:    string;
}


