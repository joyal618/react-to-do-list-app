import React from 'react';
import "./ListTodo.css";
import MaterialTable from "material-table";


function ListTodo(props) {

    const columns = [
        { title: 'Title', field: 'itemTitle' },
        { title: 'Description', field: 'itemDescription' },
        { title: 'Creation Time', field: 'itemCreateTime', editable: 'never' },
        { title: 'Completion Time', field: 'itemCompletionTime', editable: 'never' }];


    return (
        <div className="list-items-main-container">
            <MaterialTable
                title="ToDo Items"
                columns={columns}
                data={props.item.state.toDoListItems}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                props.item.addToDoListItems(newData);
                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const index = oldData.tableData.id;
                                props.item.updateToDoListItems(newData, index);
                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const index = oldData.tableData.id;
                                props.item.deleteToDoListItems(index);
                                resolve()
                            }, 1000)
                        }),
                }}
                
                actions={[
                    {
                        icon: 'doneall',
                        tooltip: 'Task Completed',
                        onClick: (event, rowData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const index = rowData.tableData.id;
                                    console.log("dasd",index);
                                    props.item.updateTime(index);
                                    resolve()
                                }, 1000)
                            }),
                    }
                ]}
            
            />
        </div>
    );
}

export default ListTodo;