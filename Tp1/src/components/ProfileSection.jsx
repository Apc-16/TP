import './ProfileSection.css'
import Image from './Tp1/src/components/Capture d’écran 2026-03-14 155556.png';

function ProfileSection() {
    return (
    <div className="profile">
                <NameProfile />
                <BioProfile />
                <StatsProfile />
            </div>

    );
}

function NameProfile() {
return (
   <div className="profile-name-image">
    <img src={profile.photoProfile} alt="Profile-image" />
       <h1 className="profile-user-name">
        {profile.prenom} {profile.nom}
        </h1> 
    </div> 
);
}

function BioProfile() {
    return <div className="profile-bio">
        <p>{profile.bio}</p>
    </div>
}

function StatsProfile () {
    return (
        <div className="profile-stats">
            <ul>
                <li>{profile.nbrPoste}</li>
                <li>{profile.nbrAbonnes}</li>
                <li>{profile.nbrAbonnement}</li>
            </ul>
        </div>

    );
}


const profile = {
    photoProfile: './Tp1/src/components/Capture d’écran 2026-03-14 155556.png',
    nom: "Doe",
    prenom: "Jane",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️", 
    nbrPoste: 4,
    nbrAbonnes: 188,
    nbrAbonnement: 206,
}


export default ProfileSection