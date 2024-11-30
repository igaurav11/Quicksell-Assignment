import React from 'react'
import { useState, useEffect } from 'react';
import  Header  from './components/Header/Header.jsx';
import { loadGridData } from './utils/gridUtils.jsx';
import Grid from './components/Grid/Grid.jsx';
import './App.css';


const App = () => {
    const [tickets, setTickets] = useState([]);
    const [userData, setUserData] = useState({});
    const [gridData, setGridData] = useState({});
    const [grouping, setGrouping] = useState("status");
    const [ordering, setOrdering] = useState("priority");

    useEffect(() => {
        load();
        fetchData();
    }, []);

    useEffect(() => {
        if (tickets.length === 0) {
            return;
        }
        // setGridData(loadGridData(tickets, grouping, ordering));
        setGridData(loadGridData(tickets, userData, grouping, ordering));
    }, [tickets, userData, grouping, ordering]);

    const onChangeOrder = (order) => {
        setOrdering(order);
        save({ ordering: order });
    }

    const onChangeGroup = (group) => {
        setGrouping(group);
        save({ grouping: group });
    }

    const save = (data) => {
        for (let key in data) {
            localStorage.setItem(key, data[key]);
        }
    }

    const load = () => {
        setGrouping(localStorage.getItem("grouping") || "status");
        setOrdering(localStorage.getItem("ordering") || "priority");
    };

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment/");
            const data = await response.json();
            const { tickets, users } = data;
            const tempUsers = users.reduce((acc, user) => {
                acc[user.id] = user;
                return acc;
            }, {});
            setTickets(tickets);
            setUserData(tempUsers);
        } catch (err) {
            console.log("Error occurred while fetching data");
        }
    }

    return (
        <>
            <Header
                grouping={grouping}
                ordering={ordering}
                setGrouping={onChangeGroup}
                setOrdering={onChangeOrder}
            />
            <div>
                <Grid gridData={gridData} userData={userData} grouping={grouping} />
            </div>
        </>
    )
}

export default App



