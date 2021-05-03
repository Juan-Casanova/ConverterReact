import { useState } from 'react'

const Converter = () => {

    const [grade,setGrade] = useState ('')
    const [radian, setRadian] = useState ('')

    const convertToGadre = (grade) => {
        
        setRadian(grade*0.01745)
        setGrade(grade)
        
    }

    const convertToRadian = (radian) => {
        
        setGrade(radian*57.296)
        setRadian(radian)
        
    }

    return (
        <div id="container-Main">
            <div>
                <p className="text-div">
                    Radianes:
                </p>
                <input className="input-number" onChange={evento => convertToGadre(evento.target.value)} value={grade} />
            </div>
            <div>
                <p className="text-div">
                    Grados:
                </p>
                <input className="input-number" onChange={evento => convertToRadian(evento.target.value)} value={radian}/>
            </div>
        </div>
    )
}

export default Converter