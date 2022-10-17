import axios from 'axios'
import {useEffect, useState} from 'react';

function Film() {
const [Film, setFilm] = useState("");
const [title, setTitle] = useState("Guardians of the Galaxy Vol. 2");
  useEffect(() => {
  console.log("Working");
  const getFilm = async () => {
    try{
      const res = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=d1a4de70" + title);
      console.log("Response:", res);
      setFilm(res.data);
    } catch(err) {
    }
  }
  getFilm();
}, [title]);

if (title) {
return (
  <>
<label htmlFor="filmName">Name:</label>
                <input type="text" id="filmName" value={title} onChange={e => setTitle(e.target.value)} />
                <h2>{Film.title}</h2>
                <section>
                    <p>Title: {Film.Title}</p>
                    <p>Genre: {Film.genre}</p>
                </section>
  </>
  );
} else {
  return (

        <div>
        <label htmlFor="filmName">Name:</label>
                <input type="text" id="filmName" value={title} onChange={e => setTitle(e.target.value)} />
                <h2>{Film.title}</h2>
                <section>
                    <p>Title: {Film.Title}</p>
                    <p>Genre: {Film.genre}</p>
                    </section>
        </div>
  
    );
}
}

export default Film;