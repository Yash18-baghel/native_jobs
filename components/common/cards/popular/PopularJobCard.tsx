import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles, { jobNameStyle, logoContainerStyle } from './popularjobcard.style'
import { checkImageURL } from '@/utils'
import { JobT } from '@/utils/types'
type PopularJobCardProps = {
  item: JobT,
  selectedJob?: JobT,
  handleCardPress?: (item: JobT) => void
}
const PopularJobCard = ({ item, selectedJob, handleCardPress }: PopularJobCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress && handleCardPress(item)}
    >
      <TouchableOpacity style={[
        logoContainerStyle(selectedJob, item),
        {
          justifyContent: "center", alignItems: "center",
        }
      ]}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={[jobNameStyle(selectedJob, item)]} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default PopularJobCard;