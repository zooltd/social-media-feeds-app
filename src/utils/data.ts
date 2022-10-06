import {Post, User, UserInfo} from "../constants/types";
import axios from "axios";

const USERS = "https://jsonplaceholder.typicode.com/users";
const USER_POSTS = "https://jsonplaceholder.typicode.com/posts";
const IMAGE = "https://picsum.photos/id";
const AVATAR = "https://i.pravatar.cc";

const getUserImageUrl = (userId: number | string, size: number | string) => {
    return `${AVATAR}/${size}?img=${userId}`;
}

const getPostImageUrl = (postId: number | string, width: number | string, height: number | string) => {
    return `${IMAGE}/${postId}/${width}/${height}`;
}

const getUsersByUserIds = async (userIds: string[] | number[]): Promise<User[]> => {
    const userUrls = userIds.map(userId => `${USERS}?id=${userId}`);
    const users = await Promise.all(userUrls.map(url => axios.get<User>(url).then(res => res.data)));

    const retUsers = users.flat();
    retUsers.forEach(u => {
        u.avatar = getUserImageUrl(u.id, 150);
        u.status = "No Status";
    });
    return retUsers;
}

export const getPostsByUserIds = async (userIds: string[] | number[]): Promise<Post[]> => {
    const postUrls = userIds.map(userId => `${USER_POSTS}?userId=${userId}`);
    const posts = await Promise.all(postUrls.map(url => axios.get<Post>(url).then(res => res.data)));

    const users = await getUsersByUserIds(userIds);
    const userId2Username = new Map(users.map(user => [user.id, user]));

    const retPosts = posts.flat();
    retPosts.forEach(p => {
        if (Math.random() < 0.4) p.image = getPostImageUrl(p.id, 400, 250);
        p.user = userId2Username.get(p.userId) ?? defaultUser;
    })
    return retPosts;
}

export const getFollowingUserIds = async (userId: string | number): Promise<string[]> => {
    const {data} = await axios.get<User[]>(USERS);
    const mod = data.length;
    return [0, 1, 2].map(offset => ((+userId + offset) % mod + 1).toString());
}

export const getFollowingUsers = async (userId: string | number): Promise<User[]> => {
    const followingUserIds = await getFollowingUserIds(userId);
    return await getUsersByUserIds(followingUserIds);
}

export const getFeedsByUser = async (user: User): Promise<Post[]> => {
    const followingUserIds = await getFollowingUserIds(user.id);
    return await getPostsByUserIds([user.id, ...followingUserIds]);
}

export const authenticateUser = async (email: string, password: string): Promise<User | null> => {
    const getUserByEmail = async (email: string) => {
        const {data} = await axios.get<UserInfo[]>(`${USERS}?email=${email}`);
        return data.length ? data[0] : null;
    }
    const returnUser = await getUserByEmail(email);
    if (returnUser && returnUser.address.street === password) {
        return {
            id: returnUser.id,
            avatar: getUserImageUrl(returnUser.id, 150),
            username: returnUser.username,
            status: "No Status"
        };
    } else {
        return null;
    }
}

export const defaultUser: User = {
    id: "0",
    avatar: "https://ui-avatars.com/api/?name=?",
    username: "Unknown",
    status: "No Status"
};


export const emptyPost: Post = {
    userId: "0",
    id: "0",
    title: "no user",
    body: "empty",
    user: defaultUser
};
