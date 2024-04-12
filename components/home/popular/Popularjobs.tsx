import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './popularjobs.style'
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import { COLORS, SIZES } from '@/constants';
import useFetch from '@/hooks/useFetch';
// import { defaultJob } from '@/utils';
import { JobT, pathT } from '@/utils/types';
import { useRouter } from 'expo-router';
import { eActivityIndicatorSize } from '@/utils/enums';

const Popularjobs = () => {

  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState<JobT>();

  const handleCardPress = (item: JobT) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item);
  };
  // const data = [defaultJob]
  // const error = ""
  // const isLoading = false

  const {
    data,
    isLoading,
    error,
    // refetch
  } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity
          onPress={() => router.push(`/search/developer` as pathT)}
        >
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={eActivityIndicatorSize.Large} color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong Please Try Again!</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }: { item: JobT }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs