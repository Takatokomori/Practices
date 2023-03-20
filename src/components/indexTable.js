import React from 'react'
import codeList from "../helpers/codeList";

export default function IndexTable(props) {
  return (
    <div>
        <table className="border-separate border-spacing-2 
                      border border-slate-800 table-auto">
            <thead>
                <tr>
                    <th className='border border-slate-800
                                    text-center'>Title</th>
                    <th className='border border-slate-800
                                    text-center'>Category</th>
                </tr>
            </thead>
            <tbody>
            {codeList.map((data, i) =>{
                if(props.category === data.category){
                    return(
                        <tr>
                        <td className='border border-slate-800
                                        text-center hover:text-purple
                                        p-1 font-bold'><a href={data.url}>{data.title}</a></td>
                        <td className='border border-slate-800
                                        text-center p-1'>{data.category}</td>
                    </tr>
                    )
                }
            })}
            </tbody>
        </table>
    </div>
  )
}
