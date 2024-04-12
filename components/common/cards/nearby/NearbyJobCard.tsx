import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { JobT } from '@/utils/types'
import { checkImageURL } from '@/utils'
type NearbyJobCardProps = {
  Job: JobT
  handleNavigation: () => void
}
const NearbyJobCard = ({ Job, handleNavigation }: NearbyJobCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(Job?.employer_logo)
              ? Job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{Job.employer_name}</Text>
        <Text style={styles.jobType}>{Job.job_employment_type}</Text>
      </View>
    </TouchableOpacity >
  )
}

export default NearbyJobCard