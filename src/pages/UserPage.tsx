export default function UserPage({params}: { params: { user_login: string } }) {
    return (
        <div>
            <h1>User Page</h1>
            <h2>Login: {params.user_login}</h2>
        </div>
    )
}