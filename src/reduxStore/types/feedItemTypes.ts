export interface UserItemModel {
    id:string
    imageUrl:string
    name:string
    isFollowing:boolean
}
export interface CategoryItemModel {
    title:string
    tag:string
    icon?:string
}

export interface FeedItemModel {
    id:string
    eventDate:string
    eventTime:string
    categories:CategoryItemModel[]
    title:string,
    imageUrl:string,
    isFav:boolean,
    followUsers:UserItemModel[]
}