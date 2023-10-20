import "./profileCard.css";

const ProfileCard = ({firstName, nickName, profilePic}) => {
    return(
        <div className="card">
            <div className="image">
                <img src={process.env.PUBLIC_URL + `${profilePic}`} alt="profile pic" className="profile-image" />
            </div>
            <h1>Hello {firstName}</h1>
            <h2>{nickName}</h2>
            <div className="profile-circle">

            </div>
        </div>
    )
}

export default ProfileCard;