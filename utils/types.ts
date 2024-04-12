export type JobT = {
    job_id: string
    job_employment_type?: string
    employer_logo: string
    employer_name: string
    job_title: string
    job_country: string
    job_highlights: {
        Qualifications: string[]
        Responsibilities: string[]
    }
    job_description: string
    job_google_link: string
}

export type pathT = "/" | `${string}:${string}`