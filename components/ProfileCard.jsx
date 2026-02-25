import { useState } from "react";

export default function ProfileCard({ name, job, onSelect }) {
  const [visible, setVisible] = useState(false);
  const handler = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={() =>{ 
        handler(), onSelect(name)
    }
    }>show job</button>
      {visible && <p>Job : {job}</p>}
    </div>
  );
}
