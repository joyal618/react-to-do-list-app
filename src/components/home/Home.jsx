import React from 'react';
import "./Home.css";
import { addToDoListItems } from '../../redux';
import { deleteToDoListItems } from '../../redux';
import { updateToDoListItems } from '../../redux';
import { updateTime } from '../../redux';
import { connect } from 'react-redux';
import ListTodo from "../list-todo/ListTodo";

function Home(props) {
    return (
        <div className="home">
            <div className="title-container">
                <h1>To Do List Application</h1>
            </div>
            <ListTodo item={props}/>


        </div>
    );
}


const mapStateToProps = state => {
    return {
        state: state

    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToDoListItems: (payload) => dispatch(addToDoListItems(payload)),
        deleteToDoListItems: (payload,index) => dispatch(deleteToDoListItems(payload,index)),
        updateToDoListItems: (index) => dispatch(updateToDoListItems(index)),
        updateTime: (index) => dispatch(updateTime(index)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);