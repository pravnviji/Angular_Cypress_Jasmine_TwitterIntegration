export interface ITweetResponse {
    user: ITweetUserProfile;
    getHeadLines: ITweetUserHeadlines[];
    getUserTimeLines: ITweetUserHeadlines[]; 
}

export interface ITweetUserProfile {
    id: number;
    name: string;
    username: string;
    screen_name: string;
    location: string;
    profile_image_url: string;
    created_at: string;
}

export interface ITweetRecentTweets {
    id: number;
    full_text: string;
    created_at: string;
    retweat_count: number;
    favorite_count: number; 
    user: ITweetUser;
}

export interface ITweetUserHeadlines {
    id: number;
    full_text: string;
    created_at: string;
    retweat_count: number;
    favorite_count: number; 
    user: ITweetUser;
}

export interface ITweetUser {
    profile_image_url: string;
    profile_banner_url: string;
    name: string;
    screen_name: string;
    created_at: string;
}
