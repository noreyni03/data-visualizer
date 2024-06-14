import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/publications');
        setPublications(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPublications();
  }, []);

  return (
    <div>
      <h1>Liste des Publications DBLP</h1>
      <ul>
        {publications.map(publication => (
          <li key={publication._id}>
            <strong>{publication.title}</strong> ({publication.year})
            <br />
            <em>{publication.authors.join(', ')}</em>
            <br />
            {publication.booktitle}, pages {publication.pages.start}-{publication.pages.end}
            <br />
            <a href={publication.url} target="_blank" rel="noopener noreferrer">Voir l'article</a>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
