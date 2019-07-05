import React, { FC } from "react";
import MediaQuery from "react-responsive";
import Icon from "../Icon/Icon";
import "./Post.scss";

import { store } from "../../redux/store";
import { actionRepost, likePost } from "../../redux/actions/posts";

export interface IPosts {
  enlace?: string;
  price?: string;
  photo?: string;
  likes?: number;
  repost?: number;
  title?: string;
  author?: string;
  key?: any;
  liked: boolean;
  id: number;
  clipPath?: any;
}

const rePost = (id: number) => {
  store.dispatch(actionRepost(id));
};

const onLike = (id: number) => {
  store.dispatch(likePost(id));
};

const Post: FC<IPosts> = ({
  id,
  clipPath,
  enlace,
  price,
  photo,
  likes,
  liked,
  repost,
  title,
  author
}) => {
  let priceContent;

  if (price) {
    priceContent = (
      <div className="Post__corner">
        <div className="Post__corner__content">
          <span className="Post__corner__price">{price}</span>
          <span className="Post__corner__euro">€</span>
        </div>
      </div>
    );
  }
  return (
    <div className="Post">
      <div className="Post__image__container">
        {priceContent}
        <img className="Post__image" alt={title} src={photo}></img>
      </div>
      <div>
        <div className="Post__text--container">
          <span className="Post__title--text">{title}</span>
          <br></br>
          <span className="Post__title--by"> by </span>
          <span className="Post__title--author black">{author}</span>
        </div>
      </div>
      <div className="Post__links__container">
        <div className="Post__links__elements">
          <div className="Post__links__elements__like">
            <span className="Post__links__elements__icon">
              <MediaQuery query="(min-device-width: 576px)">
                <Icon
                  type={liked ? "liked" : "desktop"}
                  icon="like"
                  clipPath={clipPath}
                  onClick={onLike.bind(null, id)}
                />
              </MediaQuery>
              <MediaQuery query="(max-device-width: 575px)">
                <Icon
                  type={liked ? "liked" : "mobile"}
                  icon="like"
                  clipPath={clipPath}
                  onClick={onLike.bind(null, id)}
                />
              </MediaQuery>
            </span>
            <span className="Post__links__elements__texts">{likes}</span>
          </div>
          <div className="Post__links__elements__repost">
            <span className="Post__links__elements__icon">
              <MediaQuery query="(min-device-width: 576px)">
                <Icon
                  type="desktop"
                  icon="repost"
                  clipPath={clipPath}
                  onClick={rePost.bind(null, id)}
                />
              </MediaQuery>
              <MediaQuery query="(max-device-width: 575px)">
                <Icon
                  type="mobile"
                  icon="repost"
                  clipPath={clipPath}
                  onClick={rePost.bind(null, id)}
                />
              </MediaQuery>
            </span>
            <span className="Post__links__elements__texts">{repost}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
