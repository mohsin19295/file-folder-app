import React, { useState } from 'react'
import styled from "styled-components"
import { FcOpenedFolder } from "react-icons/fc";
import { BsFileEarmarkRichtext } from "react-icons/bs";


const Div = styled.div`
  background-color: #313133;
  color: #fff;
  cursor: pointer;
  max-width: 200px;
`;

const P = styled.p`
    margin: 0;
    padding: 0.3px;
  &:hover {
    background-color: #969696;
  }
`;

const Folder = ({json}) => {
    const [expand, setExpand] = useState(false)
    
    if (json.isFolder) {
        return (
          <Div>
            <div style={{display: 'flex', gap: '5px'}}>
              <FcOpenedFolder />
                <P
                  onClick={() => {
                    setExpand(!expand);
                  }}
                >
                  {json.name}
                </P>
            </div>
            {json.items.map((exp) => (
              <Div
                key={exp.name}
                style={{
                  display: expand ? "block" : "none",
                  paddingLeft: "10px",
                }}
              >
                <Folder json={exp} />
              </Div>
            ))}
          </Div>
        );
    } else {
        return <P>{json.name}</P>;
 }
}

export default Folder
