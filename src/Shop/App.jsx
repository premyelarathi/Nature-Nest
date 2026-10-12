import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Wel } from './nature'
import { Reg } from './Reg'
import { Sec } from './sec'
import { Log } from './Log'
import { Shop } from './Shop'
import { Flowers } from './flowers'
import { Fruits } from './fruits'
import { Veg } from './Veg'
import { Herbs } from './herbs'
import { Climbers } from './Climbers'
import { Med } from './Med'
import { Palm } from './Palm'
import { Seas } from './Seas'
import CategoryLayout from './CategoryLayout'
import { Products } from './Products'
const App = () => {
  return (
    <Routes>

      <Route index element={<Shop />} />

      <Route path="products" element={<Products />} />

      <Route element={<CategoryLayout />}>
        <Route path="flowers" element={<Flowers />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="vegetables" element={<Veg />} />
        <Route path="herbs" element={<Herbs />} />
        <Route path="climbers" element={<Climbers />} />
        <Route path="medical" element={<Med />} />
        <Route path="palm" element={<Palm />} />
        <Route path="seasonal" element={<Seas />} />
      </Route>

      <Route path="welcome" element={<Wel />} />
      <Route path="sec" element={<Sec />} />
      <Route path="Reg" element={<Reg />} />
      <Route path="Log" element={<Log />} />

    </Routes>
  )
}

export default App