import { useState } from "react";

export function XFollowCard({ userName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = `tw-followCard-button ${isFollowing ? 'is-following' : ''}`;

    const handleClick = () => setIsFollowing(!isFollowing);

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img
                className="tw-followCard-avatar"
                alt={`Avatar of ${name}`}
                src={`https://unavatar.io/${userName}`}
            />
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-unfollow">Unfollow</span> 
            </button>
        </aside>
        </article>
    );
}