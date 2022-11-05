const App = () => (
    <div>
        <Person name="Kit" age={19} hobbies={["outdoors", "gym", "gardening"]} /><hr></hr>
        <Person name="Rand" age={9} hobbies={["trains", "dinosaurs", "Pokemon"]} /><hr></hr>
        <Person name="Handsome Gerald" age={33} hobbies={["being handsome", "staring into the mirror", "eating buckets of glue"]} />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))