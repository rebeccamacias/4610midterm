export const Transaction = ({ transaction }) => {
    return (
        <div key={transaction.id}>
            Amount: {transaction.amount}
            <br />
            From: {transaction.fromUser.name}
            <br />
            To: {transaction.toUser.name}
        </div>
    )
};