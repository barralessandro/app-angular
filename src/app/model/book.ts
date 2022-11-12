export class Book {
    id: any;
    title: any;
    price: any;
    releaseDate: any;
    quantity: number;

    public constructor(bookTitle: string, price: string, releaseDate: Date, quantity: number){
        this.title = bookTitle;
        this.price = price;
        this.releaseDate = releaseDate;
        this.quantity = quantity;
    }
}
