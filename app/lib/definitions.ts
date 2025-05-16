export type invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    status: 'pendind' | 'paid'
}