class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = { // setter les valeurs par défaut des state objects
            count: props.count
        };


    }

    componentDidMount() {
        try {
            
            const count = parseInt(localStorage.getItem('count'),10);
        
            if(count) 
                this.setState(() => ({count}));

        } catch (error) {

        }

    }

    componentDidUpdate(preProp, prevState) {
        if (prevState.count !== this.state.count) {
            
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        // ++this.state.count; // will not work
        this.setState((prevState) => { // prevState = this.state
            return {
                count: prevState.count + 1 // not overriding the object completly, change only the required state

            }
        });

    }

    handleMinusOne() {
        // --this.state.count; // will not work
        this.setState((prevState) => { // prevState = this.state
            return {
                count: prevState.count - 1
            }
        });

    }

    handleReset() {
        // this.state.count = 0; // will not work
        this.setState(() => {
            return {
                count: 0
            };
        });

    }
    render() {
        return ( <
            div >
            <
            h1 > Count: {
                this.state.count
            } < /h1> <
            button onClick = {
                this.handleAddOne
            } > +1 < /button> <
            button onClick = {
                this.handleMinusOne
            } > -1 < /button> <
            button onClick = {
                this.handleReset
            } > Reset < /button> <
            /div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render( < Counter / > , document.getElementById('app'));







// let count = 0;
// const addOne = () => {
//     console.log('addOne');
//     ++count;
//     renderCounterApp(); // si on  ne fait pas ça, pas de mise à jour

// }

// const minusOne = () => {
//     console.log('minusOne');
//     --count;
//     renderCounterApp();
// }

// const reset = () => {
//     console.log('reset');
//     count = 0;
//     renderCounterApp();
// }


// var appRoot = document.getElementById('app');

// // count restera à 0, car on ne fait que declarer des élements, tout se fera au render. Pas de data binding dans JSX


// const renderCounterApp = () => { // databiding
//     const templateTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>

//     );

//     ReactDOM.render(templateTwo, appRoot);

// }

// renderCounterApp();