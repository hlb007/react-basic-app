import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';

import store from './store/store';
import { addUsers } from './actions/users';
import Header from './components/Header';
import UsersList from './components/UsersList';
import './css/styles.css';

class App extends React.Component {

    componentDidMount() {
        axios.get('/users')
            .then(response => {
                store.dispatch(addUsers(response.data.results));
            })
    }

    render() {
        return (
            <div>
                <Header />
                <UsersList />
            </div>
        )
    }
}
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));