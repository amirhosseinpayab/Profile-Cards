import { useState } from "react";
import ProfileCard from "../components/ProfileCard";

function App() {
  const profiles = [
    { name: "Amir", job: "Web developer" },
    { name: "Hamid", job: "Ai" },
    { name: "k1", job: "drug" },
  ];
  const [selectedName, setSelectedName] = useState("");
  return (
    <div>
      <h2>Selected: {selectedName}</h2>
      {profiles.map((profile) => (
        <ProfileCard
          name={profile.name}
          job={profile.job}
          onSelect={setSelectedName}
        />
      ))}
    </div>
  );
}

export default App;
