interface getLikeNumber {
    (like : number) :number
}

interface Post {
    id: number;
    title: string;
    getLikeNumber :getLikeNumber
}


const post1 :Post={
    id: 1,
    title : 'post1',
    getLikeNumber(like : number){
        return like
    }
}

post1.getLikeNumber(1)