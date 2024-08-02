import React, { useState} from 'react'
import { Text, View } from 'react-native'

export const Clsifications = () => {
    
    const [ValorContador, setModificador] = useState<string>(' Vector: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14')
    


  return (
    <View>
        <Text>Evaluacion Semana 1</Text>
        <Text>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>
        <Text>BIENVENIDOS</Text>
        <Text>{ValorContador}</Text>
        <button>Clasificar</button>
    </View>
  )
}


