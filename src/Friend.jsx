function Friend({friend}) {
    const {name, email} = friend
    return (
        <div className="friends">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    )
}

export default Friend