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

const FlexDiv = styled.div`
display: flex;
gap: 5px;
`

const Folder = ({json}) => {
  const [expand, setExpand] = useState(false)
  
  const handleClick = () => {
    setExpand(!expand);
  }
    
    if (json.isFolder) {
        return (
          <Div>
            <FlexDiv>
              <FcOpenedFolder onClick={handleClick} />
              <P
                onClick={ handleClick }
              >
                {json.name}
              </P>
            </FlexDiv>
            {json.items.map((exp) => (
              <Div
                key={exp.name}
                style={{
                  display: expand ? "block" : "none",
                  paddingLeft: "10px",
                }}
              >
                <FlexDiv>
                  {!exp.isFolder ? <BsFileEarmarkRichtext /> : null}
                  <Folder json={exp} />
                </FlexDiv>
              </Div>
            ))}
          </Div>
        );
    } else {
        return <P>{json.name}</P>;
 }
}

export default Folder
