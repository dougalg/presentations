import React, { useCallback, useEffect, useState } from "react";
import { AddPizzaButton } from "./AddPizza";
import { Pizza } from "./Pizza";
import styles from "./pizzalist.module.css";

export const PizzaList = (): React.ReactElement => {
    const [allPizzas, setAllPizzas] = useState<number[]>([]);
    useEffect(() => {
        fetch('http://localhost:3000/allPizzas')
            .then(val => val.json())
            .then((json: number[]) => {
                setAllPizzas(json.slice(0,2));
            });
    }, []);
    const addPizza = useCallback(() => {
        const next = (Math.max.apply(allPizzas) || 0) + 1;
        setAllPizzas([...allPizzas, next]);
    }, [allPizzas]);
    return <div>
        <AddPizzaButton addPizza={addPizza} />
        <div className={styles.allPizzas}>
            {allPizzas.map((id) => <Pizza key={id} id={id} />)}
        </div>
    </div>;
};
