export const checkImageURL = (url: string) => {
    if (!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url);
    }
};

export const defaultJob = {
    job_id: "string",
    job_employment_type: "Fullime",
    employer_logo: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
    employer_name: 'New Reach Solutions',
    job_title: 'Reach Comm dev',
    job_country: 'US',
    job_highlights: {
        Qualifications: ['Qual'],
        Responsibilities: ['Resp']
    },
    job_description: 'desccc....',
    job_google_link: 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
}

export const tabs = ["About", "Qualifications", "Responsibilities"]

export const jobTypes = ["full-time", "part-time", "Contractor"]