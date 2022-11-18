import styles from './UserCard.module.css';
import IconPhone from '~icons/mdi/phone';
import IconMail from '~icons/mdi/mail';
import IconMapMarker from '~icons/mdi/map-marker';
import GraphImage from '/area_graph.png';

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
            <div
                className={['space-children-inline-tight', styles.nameAndRole].join(' ')}
            >
                <h1 className='header-large'>{props.name}</h1>
                <h2 className='header-small'>({props.role})</h2>
            </div>
            <p>
                {props.userDescription}
            </p>
        </div>
        <dl className={styles.contactInfo}>
            <dt>
                <span className="screenreader-text">
                    Phone number:
                </span>
                <IconPhone aria-hidden="true" />
            </dt>
            <dd>
                <a href={`tel:${props.phone}`}>{props.phone}</a>
            </dd>
            <dt>
                <span className='screenreader-text'>Email Address:</span>
                <IconMail aria-hidden='true' />
            </dt>
            <dd>
                <a href={`mail:${props.email}`}>{props.email}</a>
            </dd>
            <dt>
                <span className='screenreader-text'>Address:</span>
                <IconMapMarker aria-hidden='true' />
            </dt>
            <dd>
                <p>{props.address.street}</p>
                <p>{props.address.city}</p>
                <p>{props.address.province}</p>
                <p>{props.address.country}</p>
            </dd>
        </dl>
        <img
            className={styles.data}
            src={GraphImage}
        />
    </div>;
};