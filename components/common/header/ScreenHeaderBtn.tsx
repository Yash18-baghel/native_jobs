import React from 'react'
import { TouchableOpacity, Image, ImageSourcePropType, ImageStyle } from 'react-native'

import styles, { btnImgStyle } from './screenheader.style'

type ScreenHeaderBtnProps = {
  iconUrl: ImageSourcePropType
  dimension: number | string
  handlePress?: () => void
}

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: ScreenHeaderBtnProps) => {

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={[btnImgStyle(dimension) as ImageStyle]}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn