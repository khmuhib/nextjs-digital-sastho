import React from 'react'
import { useState } from 'react'

export default function AccordianSection() {
    const data = [
        {
            qus: 'One',
            ans: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
        },
        {
            qus: 'Two',
            ans: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
        },
        {
            qus: 'Three',
            ans: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
        },
        {
            qus: 'Four',
            ans: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
        },
        {
            qus: 'Five',
            ans: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
        }
    ]

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }




    return (
        <>
            <div className="row">
                <div className="container mx-auto">
                    <div className="accordian">
                        {
                            data.map((item, i) => (
                                <div className="bg-sky-200 item my-2" key={i}>
                                    <div className="bg-orange-200 title flex justify-between items-center cursor-pointer py-5" onClick={()=> toggle(i)}>
                                        <h2>{item.qus}</h2>
                                        <span>{selected === i ? '-':'+'}</span>
                                    </div>
                                    <div className={`bg-lime-200 content ${selected=== i ? 'show': ''} max-h-0 overflow-hidden transition-all`}>
                                        <p>{item.ans}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}


