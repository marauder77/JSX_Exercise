const App = () => {
    return (
        <div>
            <Person
                name="bob"
                age={25}
                hobbies={["hunting, bowling, drinking"]} />
            <Person
                name="Kevin"
                age={55}
                hobbies={["sleeping, bowling, drinking"]} />
            <Person
                name="Connor"
                age={16}
            hobbies={["hunting, video games, drinking"]} />
        </div>
        
 )
}
ReactDOM.render(<App />, document.getElementById("root"));