import React, { Component } from 'react' ;

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    // increaseAge(){
    //     console.log("clicked" + name);
    //         this.setState({age: this.state.age+1})
    // }


    render (){
        let {name, age, hair, children} = this.props;

        const increaseAge = ()=>{
            this.setState({age: this.state.age+1})
        }

        // function increaseAge(){
        //     // console.log(`clicked ${name}`)
        //     console.log("clicked" + name);
        //     this.setState({age: this.state.age+1})
        // }

        return (
            <>
                <div>
                    <h1>Name: {name}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hair}</p>
                    {children}
                    <button onClick={increaseAge}>BerfDay 1-Up!!</button>
                    {/* <button onClick={()=>this.setState({age: this.state.age+1})}>BerfDay</button> */}
                </div>
            <hr />
            </>
        )
    }
}

export default Person;