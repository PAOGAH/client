import React, { Component, Fragment } from 'react';
import { View, Text, Alert } from 'react-native';
import { Provider } from 'react-redux'

import db from '../config'
import PieChart from '../components/PieChart'
import store from '../store/'

class Statistic extends Component {
    state = {
        plat: []
    }
    componentDidMount = () => {
        db.ref('/plat').on('value', snapshot => {
            let arr = []
            snapshot.forEach(platNomor => {
                arr.push({
                    id: platNomor.key,
                    ...platNomor.val()
                })
            })
            this.setState({
                plat: arr
            })
        })
    }
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <PieChart/>
                </Fragment>
            </Provider>
        );
    }
}

export default Statistic;
