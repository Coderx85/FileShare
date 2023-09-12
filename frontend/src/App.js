// import logo from './logo.svg';
import { useEffect, useRef, useState } from 'react'
import './App.css';
import { uploadFile } from './services/api';

function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef(); 

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    } 
    getImage();
  }, [file])

  
  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  
  console.log(file);
  console.log(result);

  // const logo = 'https://i.pining.com/originals/16/46/24/1646243661201cc4b1a64fcbbacf.jpg';

  return (
    <div className="App">
      <div className="s1"></div>
      <div className="s2">
        <h2>Simple File Sharing</h2>
        <p>Upload and share the download file</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input type='file' 
          ref= {fileInputRef}
          style= {{display: 'none'}}
          onChange={(e) => setFile(e.target.files[0])}
        />
        {/* <a href="#" target="_blank" rel="noopener noreferrer">{result}</a> */}
        <a href={result} target="_blank" rel="noopener noreferrer">{result}</a>

      </div>
    </div>
  );
}

export default App;
