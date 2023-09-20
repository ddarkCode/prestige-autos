import React from 'react';
import { useState } from 'react';

import '../index.css'

function ExplorePage() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>This is The Explore Page {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add to ount</button>
    </div>
  )
}

export default {component:  ExplorePage}