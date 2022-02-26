export declare class TransactionsController {
    index(): {
        transactions: {
            id: number;
            amount: number;
            fromUser: {
                id: number;
                name: string;
            };
            toUser: {
                id: number;
                name: string;
            };
        }[];
    };
}
