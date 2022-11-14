import styles from './UserCard.module.css';
import IconPhone from '~icons/mdi/phone';
import IconMail from '~icons/mdi/mail';
import IconMapMarker from '~icons/mdi/map-marker';

export type UserCardProps = {
    name: string;
    role: string;
    userDescription: string;
    phone: string;
    email: string;
    address: {
        street: string;
        city: string;
        province: string;
        country: string;
    };
};

export const UserCard = (props: UserCardProps): JSX.Element => {
    return <div className={styles.userCard}>
        <img
            className={styles.avatar}
            src="https://placebear.com/200/200"
            alt={`An image of ${props.name}`}
        />
        <div className={styles.baseInfo}>
            <h1>{props.name}</h1>
            <h2>{props.role}</h2>
            <p>
                {props.userDescription}
            </p>
        </div>
        <dl className={styles.contactInfo}>
            <dt><IconPhone /></dt>
            <dd>
                <a href={`tel:${props.phone}`}>{props.phone}</a>
            </dd>
            <dt><IconMail /></dt>
            <dd>
                <a href={`mail:${props.email}`}>{props.email}</a>
            </dd>
            <dt><IconMapMarker /></dt>
            <dd>
                <p>{props.address.street}</p>
                <p>{props.address.city}</p>
                <p>{props.address.province}</p>
                <p>{props.address.country}</p>
            </dd>
        </dl>
    </div>;
};