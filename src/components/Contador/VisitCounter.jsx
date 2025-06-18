import { useEffect, useState } from 'react';
import axios from 'axios';

function GlobalVisitCounter() {
  const [count, setCount] = useState(46);

  useEffect(() => {
    axios
      .get('https://api.countapi.xyz/hit/my-portafolio/visitas')
      .then((res) => setCount(res.data.value))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <p>Total de visitas: {count}</p>
    </div>
  );
}

export default GlobalVisitCounter;
