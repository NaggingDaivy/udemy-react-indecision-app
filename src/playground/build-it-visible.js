class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.onToggleVisibility = this.onToggleVisibility.bind(this);
        this.state = {
            visibility : false

        };
    }

    onToggleVisibility() {
        this.setState((previousState) => {
            return {
                visibility: !previousState.visibility

            }
            
        });
    }

    render() {
        return (<div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.onToggleVisibility}>
                {this.state.visibility ? 'Hide Details' : 'Show details'}
            </button>
            {this.state.visibility && (
                <div>
                    <p>Hey these are some details you can now see !</p>
                </div>
            )}
        </div>
        );
    }
}

ReactDOM.render(<Toggle />,document.getElementById('app'));





// var appRoot = document.getElementById('app');

// let visibility = false;


// const onToggleVisibility = () => {
//     visibility = !visibility;

//     render();

// }
// var render = () => {

//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggleVisibility}>
//                 {visibility ? 'Hide Details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey these are some details you can now see !</p>
//                 </div>
//             )}
//         </div>


//     );


//     ReactDOM.render(template, appRoot);

// };

// render();




