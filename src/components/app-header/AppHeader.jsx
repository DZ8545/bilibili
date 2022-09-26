import React, { memo } from "react";
import styled from "styled-components";
import BilibiliIcon from "../../assets/svg/BilibiliIcon";
import DownloadIcon from "../../assets/svg/DownloadIcon";
import SearchIcon from "../../assets/svg/SearchIcon";

const HeaderWrapper = styled.header`
  .cover {
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
      height: 155px;
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
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
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
        .item {
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
          display: flex;
          width: 90px;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
      }
      .headerBarCenter {
        flex: 1;
        padding: 10px 30px;
        .centerContain {
          height: 40px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          display: flex;
          align-items: center;
        }
      }
      .headerBarRight {
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
              <input type="text" placeholder="" />
              <SearchIcon />
            </div>
          </div>
          <div className="headerBarRight"></div>
        </div>
      </div>
    </HeaderWrapper>
  );
});

export default AppHeader;
