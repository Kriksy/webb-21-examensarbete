import { useContext } from "react";
import {
    Card,
    Comment,
    Item,
    Grid,
    Rating,
    Statistic,
    Button,
    Icon,
} from "semantic-ui-react";
import UserProfileImage from "../../components/UserProfileImage";
import { IPost, IUser } from "@snoutbook/shared";
import { getAuthHeaders } from "../../api";
import { AppContext } from "../../context/appContext";

export interface AdminPostCardOptionsProps {
    postId: string;
}

function AdminPostCardOptions({ postId }: AdminPostCardOptionsProps) {
    const postContext = useContext(AppContext);

    function onClickApprove(e: any, data: any) {
        fetch(
            `${process.env.REACT_APP_API_URL}/api/admin/pending_posts/${postId}/approve`,
            {
                method: "POST",
                headers: getAuthHeaders(),
            }
        )
            .then((res) => res.json())
            .then((res) => {
                postContext.fetchPosts();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function onClickDeny(e: any, data: any) {
        fetch(
            `${process.env.REACT_APP_API_URL}/api/admin/pending_posts/${postId}/deny`,
            {
                method: "POST",
                headers: getAuthHeaders(),
            }
        )
            .then((res) => res.json())
            .then((res) => {
                postContext.fetchPosts();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Card.Content>
            <Button.Group>
                <Button color="green" onClick={onClickApprove}>
                    <Icon name="delete" />
                    Approve
                </Button>
                <Button color="yellow" onClick={onClickDeny}>
                    <Icon name="x" />
                    Decline
                </Button>
                {/* <Button color="red" onClick={onClickDeny}>
                    <Icon name="delete" />
                    Delete
                </Button> */}
            </Button.Group>
        </Card.Content>
    );
}

export interface PostCardProps {
    post: IPost;
    role: IUser["role"];
}

export default function PostCard({ post, role }: PostCardProps) {
    const appContext = useContext(AppContext);
    const imgUrl = `${process.env.REACT_APP_API_URL}/api/${post.img}`;

    const onClickHeart = (e: any, data: any) => {
        const method = postLikedByUser ? "DELETE" : "POST";
        fetch(`${process.env.REACT_APP_API_URL}/api/like_posts/${post.id}`, {
            method: method,
            headers: getAuthHeaders(),
        })
            .then((res) => {
                //     return res.json()
                // }).then(res => {
                //     console.log(res)
            })
            .catch((error) => {
                console.error(error);
            });
        appContext.fetchPosts();
    };

    const postLikedByUser = post.likedBy.includes(appContext.user.id);

    return (
        <div className="card" key={"post-card-" + post.id}>
            <Card fluid color="olive">
                <Grid stackable columns={2} color="red">
                    <Grid.Column width={5}>
                        <Card centered>
                            <Item.Image src={imgUrl} wrapped ui={false} />
                        </Card>
                    </Grid.Column>

                    <Grid.Column width={11} className="cardText">
                        <UserProfileImage />
                        <div className="cardText">
                            <Grid.Column className="card1">
                                <Card.Content>
                                    <Comment.Group>
                                        <Comment>
                                            <Comment.Content>
                                                <Comment.Author as="a">
                                                    {post.user!.username}
                                                </Comment.Author>
                                            </Comment.Content>
                                        </Comment>
                                    </Comment.Group>
                                    <Card.Meta>Date: {post.createdAt} </Card.Meta>
                                    {/* <Comment.Metadata>
                                            I find: <p>{where}</p>
                                        </Comment.Metadata>
                                        <br /> */}
                                    { }
                                </Card.Content>
                                <Comment.Text>
                                    Story:<p>{post.text}</p>
                                </Comment.Text>
                            </Grid.Column>
                        </div>
                    </Grid.Column>
                </Grid>
                <Card.Content extra>
                    <Grid divided="vertically">
                        <Grid.Row columns={2}>
                            <Grid.Column className="text-align-left"></Grid.Column>
                            <Grid.Column className="text-align-right">
                                <Rating
                                    icon="heart"
                                    rating={postLikedByUser ? 1 : 0}
                                    se="huge"
                                    onRate={onClickHeart}
                                    disabled={!appContext.user.username}
                                />
                                <Statistic color="yellow" size="mini">
                                    <Statistic.Value>{post.likes} Likes</Statistic.Value>
                                </Statistic>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
                {role === "admin" && AdminPostCardOptions({ postId: post.id })}
            </Card>
        </div>
    );
}
