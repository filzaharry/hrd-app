import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import JabatanCreate from './Create'
import JabatanUpdate from './Edit'
import JabatanTable from './Table'

const Jabatan = () => {
  return (
    <Router>
      <Switch>
        <Route path="/jabatan/edit-jabatan/:id" component={JabatanUpdate} />
        <Route path="/jabatan/tambah-jabatan" component={JabatanCreate} />
        <Route path="/jabatan" component={JabatanTable} />
      </Switch>
    </Router>
  )
}

export default Jabatan
