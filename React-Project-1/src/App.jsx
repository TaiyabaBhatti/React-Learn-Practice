

import Lottery from './CustomComponents/Lottery'

import './index.css'
import { useEffect, useState } from 'react'




export default function App() {
 return (
<Lottery n={4} winningSum={14}/>
 )
}

