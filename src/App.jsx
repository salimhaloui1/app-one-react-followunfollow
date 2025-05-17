// src/App.jsx
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <UserCard
        name="Lamine Yamal"
        avatarUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Lamine_Yamal%2C_S%C3%A1nchez_se_reuni%C3%B3_con_los_futbolistas_de_la_selecci%C3%B3n_espa%C3%B1ola_tras_ganar_la_Eurocopa_2024_%283%29_%28cropped%29.jpg/250px-Lamine_Yamal%2C_S%C3%A1nchez_se_reuni%C3%B3_con_los_futbolistas_de_la_selecci%C3%B3n_espa%C3%B1ola_tras_ganar_la_Eurocopa_2024_%283%29_%28cropped%29.jpg"
      />
    </div>
  );
}

export default App;