import React, { useState } from 'react'
import { View, Text, Touchable, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '@/constants'

const Footer = ({ url }: { url: string }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsLiked(!isLiked)}
        style={styles.likeBtn}
      >
        <Image
          source={isLiked ? icons.heartLikedOutline : icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>
          Apply For Job
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer