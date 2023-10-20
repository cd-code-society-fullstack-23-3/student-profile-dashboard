import './App.css';
import ProfileCard from './components/profileCard/profileCard';

function App() {
  return (
    <div className="App">
      <ProfileCard firstName="Ruth" nickName="Ruthy The Great" profilePic="ruthy.jpg"/>
      <ProfileCard firstName="Asata" nickName="WooTang Is The Greatest"  profilePic="asata.jpg"/>
      <ProfileCard firstName="Darius" nickName="Rickiiiiiieeeee" profilePic="darius.jpg"/>
    </div>
  );
}

export default App;
