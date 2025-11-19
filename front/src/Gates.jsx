import { useEffect, useState } from 'react'

export default function Gates() {

  const [data, setData] = useState();

  const dataFetch = async () => {
    console.log('before fetch')
    const response = await fetch(`http://localhost:3000/gates/a`)
    console.log('after fetch')
    const data = await response.json()
    console.log('after json')
    console.log(data)
}


  useEffect(() => {
    dataFetch()
  }, []);
  
  console.log(data)
  const meshList = data.gate.map((k, v) => <mesh id={k} position={[v.position.x,v.position.y,v.position.z]}><sphereGeometry args={[5, 4, 4]}/><meshStandardMaterial color={"blue"} /></mesh> )
  return (
    <>
      <group position={[0, 0, 0]}>
        {meshList}
      </group>
    </>
  )
}