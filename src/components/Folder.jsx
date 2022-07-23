import React, {useState} from 'react'

const Folder = ({json}) => {
    const [expand, setExpand] = useState(false)
    
    if (json.isFolder) {
        return (
          <div>
            <span
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {json.name}
            </span>

              {json.items.map((exp) => (
                <div
                  key={exp.name}
                  style={{
                    display: expand ? "block" : "none",
                    paddingLeft: "10px",
                  }}
                >
                  <Folder json={exp} />
                </div>
              ))}
          </div>
        );
    } else {
        return <span>{json.name}</span>;
 }
}

export default Folder
