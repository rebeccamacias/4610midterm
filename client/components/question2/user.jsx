
export const User = ({ user }) => {
    if (user.isAdmin == true) {
        return (
            <div key={user.id}>
            Name: <span style={{color: "green"}}>{user.name}</span>
            <br />
            Email: {user.email}
        </div>
        )
    } else {
        return (
            <div key={user.id}>
                Name: {user.name}
                <br />
                Email: {user.email}
            </div>
        )
    }
};