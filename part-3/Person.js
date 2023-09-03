function Person({ name, age, hobbies }) {
    const isOldEnoughToVote = age >= 18;
    const shortName = name.length > 8 ? name.substring(0, 6) : name;
  
    return (
      <div>
        <p>Learn some information about this person.</p>
        <h3>{isOldEnoughToVote ? "please go vote!" : "you must be 18"}</h3>
        <p>Name: {shortName}</p>
        <p>Age: {age}</p>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
  