import React from 'react';


export default class AddOption extends React.Component {

    // new clas properties syntax
    state = {
        error: undefined
    };

    //OLD SYNTAX
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     // this.state = {
    //     //     error: undefined
    //     // }
    // }

    handleAddOption = (e) => { // impossible d'avoir les props

        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option); //error specific to this form

        this.setState(() => ({ error }));// ES6 error: error

        if (!error)
            e.target.elements.option.value = ''; //reset le champ si la valeur ajoutée est correcte
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button" >Add option</button>
                </form>
            </div>
        );
    }
}