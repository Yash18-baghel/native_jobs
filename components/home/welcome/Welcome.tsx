import React, { Dispatch, SetStateAction, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleProp, ImageStyle } from 'react-native'

import styles, { tabStyle, tabTextStyle } from './welcome.style'
import { SIZES, icons } from '@/constants'
import { useRouter } from 'expo-router'
import { pathT } from '@/utils/types'
import { jobTypes } from '@/utils'

type welcomeProps = {
  searchTerm: string,
  setSearchTerm: Dispatch<SetStateAction<string>>,
  handleClick: () => void
}

const Welcome = ({
  searchTerm,
  setSearchTerm,
  handleClick
}: welcomeProps) => {

  const [activeJobType, setActiveJobType] = useState("full-time")
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello User</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => setSearchTerm(text)}
            value={searchTerm}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage as StyleProp<ImageStyle>}
          />

        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[tabStyle(activeJobType, item)]}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}` as pathT)
              }}
            >
              <Text style={[tabTextStyle(activeJobType, item)]}>{item}</Text>
            </TouchableOpacity>

          )}
          contentContainerStyle={{ columnGap: SIZES.small }}
          keyExtractor={item => item}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome