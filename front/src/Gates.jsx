import { useEffect, useState } from 'react'
import Box from './Box'

export default function Gates() {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const dataFetch = async () => {
    const response = await fetch(`http://localhost:3000/gates/a`)
    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    dataFetch()
  }, []);

  if (loading) {
    return null
  }
  else {
    return (
      <>
        <group position={[0, 0, 0]}>
          {data.gate.map(m => <mesh key={m.id} position={[m.position.x,m.position.y,m.position.z]}><sphereGeometry args={[1, 4, 4]}/><meshStandardMaterial color={"blue"} /></mesh> )}
        </group>
      </>
    )
  }
}

/*
{data.gate.map(m => <mesh key={m.id} position={[m.position.x,m.position.y,m.position.z]}><sphereGeometry args={[5, 4, 4]}/><meshStandardMaterial color={"blue"} /></mesh> )}
*/