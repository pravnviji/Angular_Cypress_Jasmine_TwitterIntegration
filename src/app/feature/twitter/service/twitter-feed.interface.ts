
export type ITweetResponse = {
    user: TtweetUserProfile;
    getHeadLines: TtweetUserHeadlines;
    getUserTimeLines: TtweetUserHeadlines;
    getMentionTimeLines: TtweetUserHeadlines;  
};

export type TtweetUserProfile = ITweetUserProfile;
export type TtweetUserHeadlines = Array<ITweetUserHeadlines>;

export type TpostTweet = {
    status: string;
};


export type ITweetUserProfile = {
    id: number;
    name: string;
    username: string;
    screen_name: string;
    location: string;
    profile_image_url: string;
    created_at: string;
};

export type ITweetRecentTweets = {
    id: number;
    full_text: string;
    created_at: string;
    retweat_count: number;
    favorite_count: number; 
    user: ITweetUser;
};

export type ITweetUserHeadlines = {
    id: number;
    full_text: string;
    created_at: string;
    retweat_count: number;
    favorite_count: number; 
    user: ITweetUser;
};

export type ITweetUser = {
    profile_image_url: string;
    profile_banner_url: string;
    name: string;
    screen_name: string;
    created_at: string;
};
