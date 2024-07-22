'use client';
import { useEffect, useState,useId, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

export default function Home() {

  const [img, setImg] = useState(null);
  const imageId:string = useId();
  let model : any;

  useEffect(() => {

    async function loadmodel() {
      console.log("loading model...");
      model = await mobilenet.load();
      console.log("model loaded...");
    }
    loadmodel();

  

  }, [])
  

  const classifyImage = (image:Blob | MediaSource)=>{
    const img = new Image();
    img.src = URL.createObjectURL(image);
    img.onload = async()=>{
      const predictions = await model.classify(img);
      document.getElementById('prediction').innerHTML = `Predicted: ${predictions.map((p:any)=>`${p.className} : ${p.probability.toFixed(2)}`).join("<br />")}`;
    };
  };
  const handleImageChange = (e) => { 
    const image = e.target.files(0);
    classifyImage(image);
    setImg(image);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><input type="file" onChange={handleImageChange} /></div>
      <p id='prediction'></p>
    </main>
  );
}
