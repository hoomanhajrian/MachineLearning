import { useState } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

export default function Home() {

  const [img,setImg] = useState(null);

  const handleChange = ()=>{};
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><input type="file" onChange={handleChange} /></div>
      <p id="prediction"></p>
    </main>
  );
}
