export type ProductRequest = {
    dateOfOrder?:string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    name?: string;
    totalAmount?: number;
    quantity?: number;
    street?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country?: string;
}