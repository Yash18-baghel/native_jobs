import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import useFetch from '@/hooks/useFetch';
import { COLORS } from '@/constants';
import { NearbyJobCard } from '@/components/jobdetails';
import { useRouter } from 'expo-router'
// import { defaultJob } from '@/utils';
import { eActivityIndicatorSize } from '@/utils/enums';
import { pathT } from '@/utils/types';

const Nearbyjobs = () => {

  const router = useRouter();

  // const data = [defaultJob]
  // const error = ""
  // const isLoading = false

  const {
    data,
    isLoading,
    error,
    // refetch
  } = useFetch('search', {
    query: 'Reach developer',
    num_pages: 1
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity
        onPress={() => router.push(`/search/web developer` as pathT)}
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
          data?.map((job) => (
            <NearbyJobCard
              Job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigation={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs;