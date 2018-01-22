console.log('App.js is running');

const app = {
    title: 'This is a title',
    subtitle: 'This is a subtitle',
    options: []
}
// JSX - JavaScript XML
const onFormSubmit = (e) => {
    e.preventDefault(); // empecher la page de se rafraichir quand on submit
    const option = e.target.elements.option.value; // target = form elements = input, button, option = nom de l'input, value = sa valeur

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    render();
};

const onRemoveAll = () => {
    app.options = [];
    render();

};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); 
    const option = app.options[randomNum];
    alert(option);
    
};

const appRoot = document.getElementById('app');


const render = () => {

    const template = (
        <div>
            <h1>{app.title} </h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options :</p> : <p>No options</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Sould I do ?</button>
            <button onClick={onRemoveAll}>Remove all options</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();

// const user = {
//     name: 'Daivy',
//     age: '26',
//     location: 'Saint-Nicolas'
// };

// function getLocation(location) {
//     if (location)
//         return <p> User Location : {location}</p>;
//     // else
//     //     return undefined;
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age : {user.age}</p>} {/* retournera la dernière valeur truthy */}
//         {getLocation(user.location)}
//         {<h3>my h3</h3>}
//     </div>

// );

