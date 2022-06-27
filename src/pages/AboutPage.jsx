import Card from '../components/shared/Card'
import {Link} from  'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>Acerca de este Sitio</h1>
        <p>Este Sitio es una pagina de internet creada por Bandera Musical S.A de C.V</p>
      </div>
      <p>Version: 1.0.0</p>
      <p>
      <Link to='/'>Back to Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage