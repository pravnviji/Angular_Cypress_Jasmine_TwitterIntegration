export interface ITweetResponse {
    user: ITweetUserProfile;
    getTweets: ITweetRecentTweets[];
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
    text: string;
}
