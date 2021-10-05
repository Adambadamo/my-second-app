import React, { useState } from "react";
import Table from "./Table";
import { checkTable} from "../Functions"

const Game = () => {

    const [table,setTable] = useState(Array(9).fill(null));
    const [next,setNext] = useState(["X"]);
    const win = checkTable(table);

    const onClick = (index) => {
        const newTable = [...table];
        if( win || newTable[index]) return;
        newTable[index] = next;
        setNext((next === "X") ? "O" : "X");
        setTable(newTable);
    };

    return(
        <div className="container">
            <Table squares = {table} onClick = {onClick}/>
            <p> Next : {next}</p>
        </div>
    )
}

export default Game;