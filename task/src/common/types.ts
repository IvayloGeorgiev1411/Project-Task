export interface newPost {
    title: string;
    body: string;
    userId: string;
}

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export interface SmallPostProps {
    id: number,
    title: string,
    body: string,
}

export interface ContainerProps {
    children: React.ReactNode
}

export interface PostsGrid {
    posts: Post[],
    filterQuery: string,
}
