// const obj = {
//     name: 'Vikram',
//     getName() {
//         return this.name;
//     }
// }

// // const getName = obj.getName.bind(obj); // wiil not work with console.log, comme une anonymous function
// const getName = obj.getName.bind({name: 'Andrew'});

// console.log(getName());



class IndecisionApp extends React.Component {
    constructor(props) { // 
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: props.options //Default props
        }
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options)
                this.setState(() => ({ options }));

        } catch (error) {

            // Do nothing at all

        }

    }

    componentDidUpdate(prevProps, prevState) { // afeter state change or prop change
        if (prevState.options.length !== this.state.options.length) { // object will we saved when add or removing
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');

        }


    }

    componentWillUnmount() { // when component disapear from screeen
        console.log('component will unmount');
    }

    handleDeleteOptions() { // nécessaire pour setter les props qui vont être changés par plusieurs components, parent => enfant mais pas inverse
      
        this.setState(() => ({
            options: []
        })); // paranthèse nécesasire pour retourner un objet, sinon il va croire que les accolades serviront à la fonciton

    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    handlePick() {

        let randomNum = Math.floor(Math.random() * this.state.options.length);

        alert(this.state.options[randomNum]);

    }

    handleAddOption(option) {

        if (!option)
            return 'Enter valid value to add item';
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));

    }


    render() {

        // const title = 'Indecision' // HEADER default props
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = { // will be used if specifeid prop is not present
    options: []
}


const Header = (props) => { // state
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );

}

Header.defaultProps = {
    title: 'Indecision app'
};

const Action = (props) => {

    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do
                </button>
        </div>
    );
}





const Options = (props) => { //stateless component

    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started !</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))

            }
        </div>
    );

}

const Option = (props) => { // stateless component
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );

}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) { // impossible d'avoir les props

        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option); //error specific to this form

        this.setState(() => ({ error }));// ES6 error: error

        if(!error)
            e.target.elements.option.value = ''; //reset le champ si la valeur ajoutée est correcte
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button >Add option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => { // stateless component
//     return(
//         <div>
//             <p>Name : {props.name} </p>
//             <p>Age : {props.age} </p>
//         </div>

//     );

// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));