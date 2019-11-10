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

export default function RepositoryDetail() {
  const [repository, setRepository] = useState(null)
  const { language, id } = useParams()

  useEffect(() => {
    async function loadRepository() {
      const response = await api.get(`repositories/${id}`)
      setRepository(response.data)
    }
    loadRepository()
  }, [id])

  return (
    <>
      {repository ? (
        <div className='repo-details'>
          <header>
            <h1><strong>DETAILS</strong></h1>
            <strong>{repository.name}</strong> - {repository.full_name} <br />
            <strong>Description</strong>: {repository.description}<br />
            <br />
          </header>
          <section>
            <strong>Homepage: </strong> {repository.homepage}<br />
            <strong>Repository URL:</strong>  <a href={repository.html_url}> {repository.html_url} </a><br />
            <strong>User: </strong> {repository.owner_login}<br />
            <strong>Language: </strong> {repository.language}<br />
            <strong>Forks Count:</strong>  {repository.forks_count}<br />
            <strong>Watchers: </strong> {repository.watchers}<br />
          </section>
        </div>
      ) : (repository === '' ? <p>Nenhum repositorio encontrado.</p> : <Loader />)}
      <Link to={`/list/${language}`}><button className='btn'>Back</button></Link>
    </>
  )
}
