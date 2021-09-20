import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const data = [
    {
        id: 512,
        name: "Neil Rhodes",
        email: "rhodes@hmc.edu",
        phone: "(909) 555-1212"
    },
    {
        id: 787,
        name: "Barack Obama",
        email: "ex-prez@whitehouse.gov",
        phone: "(312) 555-1212"
    }
];

function render() {
    ReactDOM.render(
        <div>
            <h1>People</h1>
            <table>
                <tbody>
                {data.map(item => <tr key={item.id}>
                    <td className={'name'}>{item.name}</td>
                    <td className={'email'}>{item.email}</td>
                    <td className={'phone'}>{item.phone}</td>
                </tr>)}
                </tbody>
            </table>
        </div>,
        document.getElementById('root')
    );
}

setInterval(() => {
    render();
    data.splice(data.length - 1, 1);
}, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
