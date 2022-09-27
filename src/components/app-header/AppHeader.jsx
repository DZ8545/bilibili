import React, { memo } from "react";
import styled from "styled-components";
import BigMember from "../../assets/svg/BigMember";
import BilibiliIcon from "../../assets/svg/BilibiliIcon";
import ChannelIcon from "../../assets/svg/ChannelIcon";
import CreationIcon from "../../assets/svg/CreationIcon";
import DownloadIcon from "../../assets/svg/DownloadIcon";
import DynamicIcon from "../../assets/svg/DynamicIcon";
import FavIcon from "../../assets/svg/FavIcon";
import HistoryIcon from "../../assets/svg/HistoryIcon";
import MessageIcon from "../../assets/svg/MessageIcon";
import PopularIcon from "../../assets/svg/PopularIcon";
import SearchIcon from "../../assets/svg/SearchIcon";
import UploadIcon from "../../assets/svg/UploadIcon";
import category from "@/assets/data/category";

const HeaderWrapper = styled.header`
  .cover {
    min-width: 1000px;
    min-height: 155px;
    height: 9.375vw;
    position: relative;
    .blackCover {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: linear-gradient(
        to top,
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.3)
      );
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .coverImg {
      position: absolute;
      left: 80px;
      bottom: 10px;
      cursor: pointer;
      .logoIcon {
        width: 162px;
        height: 78px;
      }
    }
    .popover {
      &:hover {
        animation: p 0.5s ease;
      }
      @keyframes p {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }
    .headerBar {
      box-sizing: border-box;
      color: white;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      width: 100%;
      height: 64px;
      .headerBarLeft {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        .item {
          flex-shrink: 0;
          margin-right: 15px;
          cursor: pointer;
        }
        .lol {
          width: 60px;
          height: 20px;
          .lolIconImg {
            width: 100%;
            height: 100%;
          }
        }
        .entryTitle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 50px;
        }
        .download {
          flex-shrink: 0;
          display: flex;
          width: 90px;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
      }
      .headerBarCenter {
        flex: 1;
        padding: 10px 15px;
        .centerContain {
          margin: 0 auto;
          min-width: 181px;
          max-width: 500px;
        }
        .searchContain {
          height: 40px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          .searchIcon {
            color: black;
          }
          &:hover {
            background-color: rgba(255, 255, 255, 1);
            .searchInputOuter {
              background-color: rgba(255, 255, 255, 1);
              .searchInput {
                background-color: rgba(255, 255, 255, 1);
              }
            }
          }
          .searchInputOuter {
            flex: 1;
            margin-right: 10px;
            background-color: #e3e5e7;
            opacity: 0.5;
            height: 32px;
            display: flex;
            align-items: center;
            color: #61666d;
            font-size: 14px;
            font-weight: 700;
            .searchInput {
              flex: 1;
              border: none;
              background-color: #e3e5e7;
              padding: 0 12px;
              height: 20px;
              &:focus {
                outline: none;
                background-color: #e3e5e7;
              }
            }
          }
        }
      }
      .headerBarRight {
        display: flex;
        .rightItem {
          font-size: 13px;
          display: flex;
          flex-shrink: 0;
          margin-right: 0;
          min-width: 50px;
          text-align: center;
          cursor: pointer;
          .upload {
            cursor: pointer;
            box-sizing: border-box;
            color: white;
            background-color: #fb7299;
            border: none;
            border-radius: 8px;
            width: 90px;
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            > span {
              margin-right: 5px;
            }
          }
          .login {
            font-size: 14px;
            border-radius: 50%;
            background-color: #00aeec;
            width: 36px;
            height: 36px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .rightItemInner {
          display: flex;
          flex-direction: column;
          align-items: center;
          span:last-child() {
            margin-top: 2px;
          }
        }
      }
    }
  }
  .header_channel {
    height: 120px;
    width: 1180px;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
    .channel_icons {
      height: 100%;
      display: flex;
      align-items: center;
      .icons_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 24px;
        > span {
          font-size: 13px;
          color: #18191c;
        }
        .icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          margin-bottom: 6px;
        }
        .icon1 {
          background-color: #ff9212;
        }
        .icon2 {
          background-color: #f07775;
        }
        .icon3 {
          background-color: #59ca73;
        }
      }
    }
    .right_channel_contain {
      display: flex;
      align-items: center;
      .channel_items_left {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: 30px;
        .categoryItem {
          letter-spacing: 2px;
          font-size: 14px;
          height: 30px;
          line-height: 30px;
          border-radius: 6px;
          color: #61666d;
          font-weight: 400;
          text-align: center;
          transition: background-color 0.3s, color 0.3s;
          border: 1px solid #f1f2f3;
          background-color: #f6f7f8;
          min-width: 80px;
          margin-right: 10px;
        }
      }
    }
  }
`;
const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className="cover">
        <img src={require("@/assets/img/appHeaderImg.webp")} alt="" />
        <div className="blackCover"></div>
        <div className="headerBar">
          <div className="headerBarLeft">
            <div className="item entryTitle">
              <BilibiliIcon />
              首页
            </div>
            <div className="item popover">番剧</div>
            <div className="item popover">直播</div>
            <div className="item popover">游戏中心</div>
            <div className="item popover">会员购</div>
            <div className="item popover">漫画</div>
            <div className="item popover">赛事</div>
            <div className="item lol">
              <img
                src={require("@/assets/img/lolIcon.png")}
                alt=""
                className="lolIconImg"
              />
            </div>
            <div className="download">
              <DownloadIcon />
              下载客户端
            </div>
          </div>
          <div className="headerBarCenter">
            <div className="centerContain">
              <div className="searchContain">
                <div className="searchInputOuter">
                  <input
                    type="text"
                    placeholder="爱卿平身（×）朕要宰了你（√）"
                    className="searchInput"
                    title="爱卿平身（x）朕宰了你（✓）"
                  />
                </div>
                <span className="searchIcon">
                  <SearchIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="headerBarRight">
            <div className="rightItem">
              <div className="login">登录</div>
            </div>
            <div className="rightItem rightItemInner">
              <span className="popover">
                <BigMember />
              </span>
              <span>大会员</span>
            </div>
            <div className="rightItem rightItemInner">
              <span className="popover">
                <MessageIcon />
              </span>
              <span>消息</span>
            </div>
            <div className="rightItem rightItemInner">
              <span className="popover">
                <DynamicIcon />
              </span>
              <span>动态</span>
            </div>
            <div className="rightItem rightItemInner">
              <span className="popover">
                <FavIcon />
              </span>
              <span>收藏</span>
            </div>
            <div className="rightItem rightItemInner">
              <span className="popover">
                <HistoryIcon />
              </span>

              <span>历史</span>
            </div>
            <div className="rightItem rightItemInner">
              <span className="popover">
                <CreationIcon />
              </span>

              <span>创作中心</span>
            </div>
            <div className="rightItem">
              <button className="upload">
                <span>
                  <UploadIcon />
                </span>
                投稿
              </button>
            </div>
          </div>
        </div>
        <div className="coverImg">
          <img
            src={require("@/assets/img/bilibiliQiu.png")}
            alt=""
            className="logoIcon"
          />
        </div>
      </div>
      <div className="header_channel">
        <div className="channel_icons">
          <div className="icons_item">
            <div className="icon icon1">
              <DynamicIcon />
            </div>
            <span>动态</span>
          </div>
          <div className="icons_item">
            <div className="icon icon2">
              <PopularIcon />
            </div>
            <span>热门</span>
          </div>
          <div className="icons_item">
            <div className="icon icon3">
              <ChannelIcon />
            </div>
            <span>频道</span>
          </div>
        </div>
        <div className="right_channel_contain">
          <div className="channel_items_left">
            {category.slice(0, 23).map((item) => {
              return (
                <div className="categoryItem" key={item.name}>
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className="channel_items_right">
              
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
});

export default AppHeader;
