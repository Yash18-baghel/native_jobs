import { NearbyJobCard, ScreenHeaderBtn } from '@/components/jobdetails'
import { COLORS, SIZES, icons } from '@/constants'
import styles from '@/styles/search'
import { eActivityIndicatorSize } from '@/utils/enums'
import { JobT } from '@/utils/types'
import axios from 'axios'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native'

const JobSearch = () => {

    const router = useRouter();
    const params = useLocalSearchParams();
    const [searchResult, setSearchResult] = useState<JobT[]>([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        handleSearch()
        setRefreshing(false)
    }, []);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": '4a1927789emshdbae6e7d27b18e1p185554jsn0fcfa5414847',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: params.id,
                    page: page.toString(),
                },
            };

            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error: any) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction: "left" | "right") => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])


    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <FlatList
                    data={searchResult}
                    renderItem={({ item }: { item: JobT }) => (
                        <NearbyJobCard
                            Job={item}
                            handleNavigation={() => router.push(`/job-details/${item.job_id}`)}
                        />

                    )}
                    ListHeaderComponent={() => (
                        <Fragment>
                            <View style={styles.container}>
                                <Text style={styles.searchTitle}>{params.id}</Text>
                                <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                            </View>
                            <View style={styles.loaderContainer}>
                                {searchLoader ? (
                                    <ActivityIndicator size={eActivityIndicatorSize.Large} color={COLORS.primary} />
                                ) : searchError && (
                                    <Text>Oops something went wrong</Text>
                                )}
                            </View>
                        </Fragment>
                    )}
                    ListFooterComponent={() => (
                        <View style={styles.footerContainer}>
                            <TouchableOpacity
                                style={styles.paginationButton}
                                onPress={() => handlePagination('left')}
                            >
                                <Image
                                    source={icons.chevronLeft}
                                    style={styles.paginationImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <View style={styles.paginationTextBox}>
                                <Text style={styles.paginationText}>{page}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.paginationButton}
                                onPress={() => handlePagination('right')}
                            >
                                <Image
                                    source={icons.chevronRight}
                                    style={styles.paginationImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                    contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                    keyExtractor={(job: JobT) => job.job_id}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default JobSearch