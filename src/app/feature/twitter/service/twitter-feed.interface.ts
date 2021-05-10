export interface ITweetResponse {
    user: ITweetUserProfile;
}

export interface ITweetUserProfile {
    id: number;
    name: string;
    screen_name: string;
    location: string;
    profile_image_url: string;
    created_at: string;
}
