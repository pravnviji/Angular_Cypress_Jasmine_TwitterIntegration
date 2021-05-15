import { of } from 'rxjs';

export class TwitterServiceStub {
    getUserProfile() {
        return of({
            data: {
                id: 851654519054364672,
                name: 'ABOUT YOU TECH',
                screen_name: 'ABOUT YOU TECH',
                location: 'Hamburg, Germany',
                profile_image_url:
                    'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                created_at: '2017-04-11T04:33:55.000Z',
                username: 'aboutyou_tech',
            },
        });
    }

    getHomeTimeLine() {
        return of({
            data: [
                {
                    id: 1,
                    full_text: 'sample test',
                    created_at: '2017-04-11T04:33:55.000Z',
                    retweat_count: 1,
                    favorite_count: 2,
                    user: {
                        profile_image_url:
                            'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                        profile_banner_url:
                            'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                        name: 'itsallwidgets',
                        screen_name: 'itsallwidgets',
                        created_at: '2017-04-11T04:33:55.000Z',
                    },
                },
            ],
        });
    }

    getUserTimeLine() {
        return of({
            data: [
                {
                    id: 1,
                    full_text: 'sample test',
                    created_at: '2017-04-11T04:33:55.000Z',
                    retweat_count: 1,
                    favorite_count: 2,
                    user: {
                        profile_image_url:
                            'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                        profile_banner_url:
                            'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                        name: 'itsallwidgets',
                        screen_name: 'itsallwidgets',
                        created_at: '2017-04-11T04:33:55.000Z',
                    },
                },
            ],
        });
    }

    getUserMentionsTimeLine() {
        return of({
            data: [
                {
                    id: 1,
                    full_text: 'sample test',
                    created_at: '2017-04-11T04:33:55.000Z',
                    retweat_count: 1,
                    favorite_count: 2,
                    user: {
                        profile_image_url:
                            'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                        profile_banner_url:
                            'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                        name: 'itsallwidgets',
                        screen_name: 'itsallwidgets',
                        created_at: '2017-04-11T04:33:55.000Z',
                    },
                },
            ],
        });
    }
}
