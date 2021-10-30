import { createContext, useState } from "react";


export const InfoContext = createContext(null);

InfoContext.displayName = "Info of the ocult friend"

export const InfoProvider = (props: any) => {

    const [infos, setInfos] = useState(

      {
          date: null,
          minPrice: null, 
          participants: null,
          names: [],
          emails: []
      }

    )

    return(
        <InfoContext.Provider value={{infos, setInfos}}>
            {props.children}
        </InfoContext.Provider>


    )
}