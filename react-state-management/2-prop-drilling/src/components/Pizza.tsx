import { useEffect, useState } from "react";
import styles from "./pizza.module.css";
import Icon from '@mdi/react'
import { mdiHeart } from '@mdi/js'

export interface PizzaProps {
    id: number;
}

export interface Pizza {
    id: number;
    name: string;
    imageSrc: string;
    isLiked: boolean;
}

export const Pizza = ({ id }: PizzaProps): React.ReactElement => {
    const [pizza, setPizza] = useState<Pizza | null>(null);
    useEffect(() => {
        fetch(`http://localhost:3000/pizza/${id}`)
            .then(val => val.json())
            .then((json: Pizza) => {
                setPizza(json);
            });
    }, [id]);
    if (pizza === null) {
        return <div>Loading...</div>;
    }
    return <div className={styles.pizza}>
        <img src={pizza.imageSrc} />
        <p>
            {pizza.name}
            <Icon
                path={mdiHeart}
                size={1}
                color={pizza.isLiked ? "red" : "gray"}
            />
        </p>
    </div>;
};