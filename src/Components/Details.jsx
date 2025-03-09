import { useParams } from 'react-router-dom';


const Details = () => {
  const { id, type } = useParams();
  const [entity, setEntity] = useState({});

  useEffect(() => {
    const fetchEntity = async () => {
      try {
        let response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
        let data = await response.json();
        setEntity(data.result.properties);
      } catch (error) {
        console.error('Failed to fetch entity details', error);
      }
    };
    fetchEntity();
  }, [id, type]);

  return (
    <div className="container">
      {entity ? (
        <>
          <h1>{entity.name}</h1>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Details;

