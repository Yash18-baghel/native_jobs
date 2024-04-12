import { Company, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '@/components/jobdetails';
import About from '@/components/jobdetails/about/About';
import { COLORS, SIZES, icons } from '@/constants';
import useFetch from '@/hooks/useFetch';
import { eActivityIndicatorSize, eJOB_DETAIL_TABS } from '@/utils/enums';
import { Stack } from 'expo-router';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react'
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native';
import {
    // defaultJob,
    tabs
} from '@/utils';

const Jobdetails = () => {

    // const data = [defaultJob]
    // const error = ""
    // const isLoading = false
    // const refetch = () => { }

    const [refreshing, SetRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0])

    const params = useLocalSearchParams();
    const { data, error, isLoading, refetch } = useFetch("job-details", {
        job_id: params?.id?.toString()
    });

    const onRefresh = useCallback(() => {
        SetRefreshing(true);
        refetch()
        SetRefreshing(false)
    }, []);

    const router = useRouter();

    const displayTabContent = () => {
        switch (activeTab) {
            case eJOB_DETAIL_TABS.Qualifications:
                return <Specifics
                    title={eJOB_DETAIL_TABS.Qualifications}
                    points={data[0].job_highlights?.Qualifications ?? ['N/A']}
                />

            case eJOB_DETAIL_TABS.About:
                return <About
                    info={data[0].job_description ?? "No data provided"}
                />

            case eJOB_DETAIL_TABS.Responsibilities:
                return <Specifics
                    title={eJOB_DETAIL_TABS.Responsibilities}
                    points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
                />
            default:
                break;
        }

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
                    )
                }}

            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                {isLoading ? (
                    <ActivityIndicator size={eActivityIndicatorSize.Large} />
                ) : error ? (<Text>Something went Wrong, Please try again later!!</Text>) :
                    data.length === 0 ? <Text>No Data</Text> : (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                                companyLogo={data[0].employer_logo}
                                companyName={data[0].employer_name}
                                jobTitle={data[0].job_title}
                                location={data[0].job_country}
                            />
                            <JobTabs
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                            {
                                displayTabContent()
                            }
                        </View>
                    )}
            </ScrollView>
            <JobFooter
                url={data[0]?.job_google_link ??
                    'https://careers.google.com/jobs/results/'} />
        </SafeAreaView>
    )
}

export default Jobdetails;