import React, {
  useEffect,
  useState
} from 'react'
import {
  useParams, Link
} from 'react-router-dom'
import api from '../../services/api'
import Loader from '../../component/Loader'
import './styles.css'

export default function RepositoriesList({ history }) {
  const [repositories, setRepositories] = useState([])
  const { language } = useParams()

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get(`repositories?language=${language}`)
      // console.log(response)
      setRepositories(response.data)
    }
    loadRepositories()
  }, [language])

  return (<>
    <p>
      List of the most popular <strong>{language}</strong> repositories!
    </p>
    {repositories.length > 0 ? (
      <ul className="repo-list">
        {repositories.map(repositorie => (
          <li key={repositorie.id}>
            <header style={{ backgroundImage: 'url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)' }} />
            <Link to={`/list/${language}/${repositorie.id}`}><button className='btn'>{repositorie.name}</button></Link>
          </li>
        ))}
      </ul>
    ) :
      (
        <Loader />
      )}
    <Link to='/'>
      <button className='btn'>Back</button>
    </Link>
  </>
  )
}
