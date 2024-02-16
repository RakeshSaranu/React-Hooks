import React, { useEffect, useState } from 'react';

function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchitems=getItems();
        setItems(fetchitems);
        console.log("UPDATED");
    }, [getItems]);

    return items.map((item,index) => <div key={index}>{item}</div>); // *
}

export default List;
