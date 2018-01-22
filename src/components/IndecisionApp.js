import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options'
import AddOption from './AddOption';
import OptionModal from './OptionModal';



export default class IndecisionApp extends React.Component {

    // OLD SYNTAX
    // constructor(props) { // 
    //     super(props);

    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);

    //     this.state = {
    //         options: props.options //Default props
    //     }
    // }

    state = {
        options: [],
        selectedOption: undefined
    };


    handleDeleteOptions = () => { // nécessaire pour setter les props qui vont être changés par plusieurs components, parent => enfant mais pas inverse

        this.setState(() => ({
            options: []
        })); // paranthèse nécesasire pour retourner un objet, sinon il va croire que les accolades serviront à la fonciton
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    };

    handlePick = () => {

        let randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];

        this.setState(() => ({
            selectedOption: option
        }));

        // alert(this.state.options[randomNum]);
    };

    handleAddOption = (option) => {

        if (!option)
            return 'Enter valid value to add item';
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));

    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));

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





    render() {

        // const title = 'Indecision' // HEADER default props
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>

                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />

                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />

            </div>
        );
    }
}

// IndecisionApp.defaultProps = { // will be used if specifeid prop is not present
//     options: []
// }