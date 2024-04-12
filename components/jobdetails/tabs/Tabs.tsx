import React, { Dispatch, SetStateAction } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles, { btnStyle, btnTextStyle } from './tabs.style'
import { SIZES } from '@/constants'

type jobTabsProps = {
  tabs: string[]
  activeTab: string
  setActiveTab: Dispatch<SetStateAction<string>>
}

type TabButtonProps = { name: string, activeTab: string, onHandleSearchType: () => void }

const TabButton = ({
  name,
  activeTab,
  onHandleSearchType
}: TabButtonProps) => (
  <TouchableOpacity
    style={[btnStyle(name, activeTab)]}
    onPress={() => onHandleSearchType()}
  >
    <Text style={[btnTextStyle(name, activeTab)]}>{name}</Text>
  </TouchableOpacity>
)

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
}: jobTabsProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

export default Tabs