
export interface VillaState {
    villas: Items[],
    villa?: VillaDetail
}
export type Villa = {
    name: string;
    createdDate: string;
    items: VillaItem[];
    counts: Counts;
    live: boolean
}
export type VillaItem = {
    items: Items[]
}
export type Items = {
    title: string;
    url: string;
}
export type Counts = {
    home: number;
    type: number;
    feature: number;
    highlight: number;
    room: number;
    distance: number;
    price: number;
    image: number;
}

export type VillaDetail = {
    language: string;
    updateUrl: string;
    title: string;
    url: string;
    latitude: number;
    longitude: number;
    icerik: string;
    type: string;
    destination: string;
    room: number;
    people: number;
    bathroom: number;
    floor: number;
    currency: string;
    rate: number;
    deposit: number;
    damageDeposit: number;
    cleaning: number;
    electricity: number;
    pools: {name:string; value:string; depth:string; width:string; length:string }[];
    types: string[],
    features: string[],
    highlights: string[],
    included: string[],
    notincluded: string[],
    rooms: {title:string; values: { title:string; count:number; value:string }}[];
    distances: { type:string; title:string; value:string }[];
    prices: { startDate:string, endDate: string; price:number; minNight:number; cleaningNight:number; cleaningPrice: number }[];
    pictures: string[]
}

export interface TourState {
    tour: Tour | null;
    tours: Tour[]
}

export type Tour = {
    name: string,
    slug: string,
    duration: number;
    groupSize: number;
    tourCategory: string;
    overView: string;
    highlight: string;
    durationDesc: string;
    rating: number;
    questionAnswer: QuestionsAnswer[]
    tourDateTime: TourDateTime[]
    tripType: TripType;
    included: string;
    excluded: string;
    questions: string;
    images: string[];
    languages: string[];
    location: Location;
    extra: TourExtra;
    currency: TourPrices;
    id: string;
}

export type TourPrices = {
    code: string;
    price: number
}

export type TripType = {
    departure: string;
    turnaround: string;
}

export type TourDateTime = {
    days: string[],
    times: string[],
    hours: number
}

export type QuestionsAnswer = {
    question: string;
    answer: string;
}

export type Location = {
    country: string;
    city: string;
    state: string;
    map: Map
}

export type Map = {
    lat: string;
    lon: string;
}

export type TourExtra = {
    name: boolean;
    price: number;
}

export type Currency = {
    code: string;
    price: number
}

export type RequestOptions = {
    id?: string;
    controller: string;
    action?: string;
    params?: object;
  };