import React from 'react';

function ExpenseItem(props) {
    return <div color={'red'}>
        {props.children}
    </div>;
}

export default ExpenseItem;