var Tweet = function({ username, name, date, message }) {
    return (
      <div className="tweet">
        <h3>{username} (@{name})</h3>
        <p>{message}</p>
        <small>{date}</small>
      </div>
    );
  }
  