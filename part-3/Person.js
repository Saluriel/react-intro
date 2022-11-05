const Person = (props) => {
    let reply;
    if (props.age > 18) {
        reply = "Please go vote!"
    } else {
        reply = "You must be 18!"
    }


    return (<p>Learn some information about this person:<br />
        Name: {props.name}<br />
        Age: {props.age}<br />
        <h3>{reply}</h3><br /><br />
        <b>Hobbies</b><br />
        <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>


    </p>)


}