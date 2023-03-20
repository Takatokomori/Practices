import React from 'react'
import IndexTable from '../components/indexTable';
import codeList from "../helpers/codeList";

export default function Index() {
  return (
    <>
        <IndexTable category={"CSS"} />
        <IndexTable category={"JS"} />
    </>
  )
}
