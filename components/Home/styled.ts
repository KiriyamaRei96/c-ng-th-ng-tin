import styled from "styled-components";

const HomeWrapper=styled.div` 
.homeBanner {
  .--background {
    width: 100%;
    height: 100vh;
    position: relative;

    &::after {
      background: linear-gradient(0deg,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2));
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .--txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    width: 80%;
    text-align: center;

    .--name {
      font-size: 88px;
      font-family: var(--font-utm);
      line-height: 120px;
    }

    .--des {
      font-size: 80px;
      line-height: 90px;
      font-family: var(--font-Canela);
    }

    span {
      display: flex;
      justify-content: center;
      list-style: none;
      margin-bottom: 3rem;
      padding-left: 0;
      font-size: 14px;

      // li {
      //   position: relative;

      //   &:nth-child(n + 2) {
      //     margin-left: 24px;

      //     &::before {
      //       content: "";
      //       position: absolute;
      //       top: 50%;
      //       border-left: 1px solid #fff;
      //       height: 12px;
      //       opacity: 0.5;
      //       right: calc(100% + 12px);
      //       transform: translate(0, -50%);
      //     }
      //   }
      // }
    }

    a {
      color: #fff;
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.11);
      border: 1px solid rgba(255, 255, 255, 0.48);
      backdrop-filter: blur(2px);
      border-radius: 100px;
      text-decoration: none;
      font-size: 14px;

      i {
        margin-left: 8px;
      }
    }
  }
  .filter {
    display: flex;
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.05));
    margin-top: -37px;

    .form-group {
      width: calc(100% / 3 - 74px);
      position: relative;
      border-right: 1px solid #e9e9e9;
      height: 74px;
      background: #fff;
      padding: 0 28px;
      display: flex;
      align-items: center;

      input {
        border: none;

        &::placeholder {
          color: #d1d1d1;
        }

        &:focus {
          outline: none;
        }

        &:focus-visible {
          outline: none;
        }
      }

      .--icon {
        height: max-content;
        margin-right: 18px;
      }

      .--txtform {
        height: max-content;
        display: flex;
        flex-flow: column;
        width: calc(100% - 44px);
      }

      &:nth-child(4) {
        width: 222px;
        padding: 0;
        border-right: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      label {
        font-size: 14px;
        color: #5c626a;
        margin-bottom: 4px;
      }

      select {
        width: 100%;
        background: #fff;
        border: none;
        font-size: 16px;
        font-weight: 600;
        margin-left: -5px;

        &:focus {
          box-shadow: none;
          outline: none;
        }

        &:focus-visible {
          outline: none;
        }
      }

      i {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 12px;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 768px){
    position: relative;
    margin-top:74px ;
    padding: 60px 0 0;
    .--background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 148px);
    }
    .--txt{
      position: relative;
      top: unset;
      left: unset;
      transform: none;
      margin-bottom: 3rem;
      width: 100%;
      .--name{
        font-size: 48px;
        line-height: 1;
      }
      .--des{
        font-size: 36px;
        line-height: 1.2;
        margin: 1rem 0 .5rem;
      }
      span{
        margin-bottom: 1.5rem;
      }
    }
    .filter{
      flex-flow: column;
      margin-top: 0;
      .form-group{
        width: 100% !important;
        border-bottom:1px solid #e9e9e9 ;
        border-right:unset ;
        padding: 0 16px;
        &:last-child{
          border: none;
        }
      }
    }
  }
}

.homeIntro {
  padding: 100px 0;

  .--left {
    width: 100%;
    height: 350px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .--right {
    padding-left: 3.5rem;

    .--des {
      padding-left: 108px;
      margin-top: 36px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        border-bottom: 1px solid var(--color-1);
        width: 84px;
        top: 10px;
        left: 0;
      }
    }

    ul {
      padding-left: 108px;
      margin-bottom: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5rem;

      li {
        margin-right: 20px;
        display: flex;
        margin-bottom: 10px;
      }

      span {
        font-size: 18px;
        font-weight: 600;

        &:nth-child(2) {
          color: var(--color-1);
          margin-left: 4px;
        }
      }
    }

    a {
      margin-left: 108px;
      margin-top: 42px;
    }
  }

  .list_homeIntro {
    padding-top: 100px;

    .--item {
      width: calc(100% / 3);
      padding: 0 60px;
      text-align: center;
      border-right: 1px dashed #dcdcdc;

      &:nth-child(3n + 3) {
        border: none;
      }

      &:nth-child(n + 4) {
        margin-top: 32px;
      }

      .--icon {
        width: max-content;
        margin-bottom: 20px;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;

        img {
          max-width: 100px;
          max-height: 100px;
        }
      }

      h4 {
        margin-bottom: 14px;
        font-family: var(--font-Canela);
        font-weight: 600;
      }

      article {
        font-size: 14px;
        color: #5c626a;
        line-height: 20px;
      }
    }
  }
  @media (max-width: 768px){
    padding: 3rem 0;
    .--left{
      height: 220px;
    }
    .--right{
      padding-left: 0;
      padding-top: 16px;
      .--des{
        padding-left: 0;
        margin-top: 0;
        &::before{
          display: none;
        }
      }
      ul{
        padding-left: 0;
      }
      a{
        margin-left: 0;
        margin-top: 1.5rem;
      }
    }
    .list_homeIntro {
      padding-top: 3rem; 
      flex-flow: column; 
      .--item{
        width: 100%;
        padding: 0;
        margin-top: 0 !important;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom:1px solid #e9e9e9 !important ;
        border-right:unset ;
        &:last-child{
          border-bottom:none!important;
          margin-bottom: 0;
          padding-bottom: 0;
        }
      }
    }
  }
}

.homeDiscover {
  background: #f6f8fb;
  padding: 100px 0;
  .list_homeDiscover {
    margin-top: 60px;

    .--item {
      width: 40vw;
      margin-right: 24px;
      position: relative;

      &:hover {
        .--bot {
          max-height: 300px;
          opacity: 1;
        }

        .--name {
          margin-bottom: 20px;

        }
      }

      .--name {

        color: #fff;
      }

      .--img {
        width: 100%;
        height: 400px;
        position: relative;

        &::after {
          background: linear-gradient(0deg,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5));
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .--bot {
        max-height: 0;
        opacity: 0;
        transition: all 0.5s ease;
      }

      .--txt {
        position: absolute;
        color: #fff;
        bottom: 0;
        width: 100%;
        padding: 0 24px 18px;
      }

      .--subtitle {
        text-transform: uppercase;
        margin-bottom: 6px;
        font-weight: 500;
        font-size: 12px;
      }

      .--name {
        font-family: var(--font-Canela);

        position: relative;

        &::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          border-bottom: 1px solid #fff;
        }
      }

      .--location {
        font-size: 14px;
        margin-bottom: 12px;
      }

      article {
        font-size: 14px;
        opacity: 0.8;
        width: 85%;
      }

      .--viewdetail {
        text-decoration: none;

        &:hover {
          &::after {
            z-index: 1;
          }

          i {
            color: var(--color-1);
            position: relative;
            z-index: 2;
            background: none;
          }
        }

        i {
          color: #fff;
          background: var(--color-1);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .--viewall {
    margin: 60px auto 0;
  }
  @media (max-width: 768px){
    padding: 3rem 0;
    .list_homeDiscover{
      margin-top: 2rem;
      .--item{
        width: 85vw;
        margin-right: 12px;
        .--name{
          margin-bottom: 20px;
          font-size: 20px;
        }
        .--txt{
          padding: 1rem;
        }
        .--bot{
          max-height: unset !important;
          opacity: 1 !important;
          flex-flow: column;
        }
        article{
          width: 100%;
          font-size: 12px;
          line-height: 16px;
        }
        .--des{
          margin-bottom: 12px;
          width: 100%;
        }
      }
    }
    .--viewall{
      margin: 2rem auto 0;
    }
  }
}

.homeMap {
  padding: 100px 0;
  .Title {
    margin-bottom: 60px;
  }
  iframe {
    width: 100%;
    height: 80vh;
  }
  @media (max-width: 768px){
    padding: 3rem 0;
    .Title{
      margin-bottom: 2rem;
    }
  }
}

.homeNews {
  padding-bottom: 100px;
  .Title {
    margin-bottom: 112px;
  }
  .--left {
    width: 50%;
    position: relative;
    padding: 120px 8%;
    height: max-content;
    color: #fff;

    .--img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;

      &::after {
        background: linear-gradient(0deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5));
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .--txt {
      position: relative;
      z-index: 1;
    }

    .--cate {
      background: #fb0000;
      border-radius: 100px;
      padding: 6px 16px;
      width: max-content;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 3.5rem;
    }

    .--subtitle {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 6px;
      font-family: var(--font-lato);
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    a {
      text-decoration: none;
    }

    h1 {
      color: #fff;
      margin-bottom: 28px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 65px;
        border-bottom: 1px solid #fff;
      }

      p {
        font-family: var(--font-Canela);
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;

        &:nth-child(1) {
          font-size: 58px;
          color: var(--color-1);
          line-height: 70px;
        }

        &:nth-child(2) {
          font-size: 44px;
          line-height: 46px;

        }
      }
    }

    .--time {
      margin-bottom: 12px;
      font-size: 14px;

      .--icon {
        margin-right: 10px;
        filter: brightness(100);
      }
    }

    .--location {
      font-size: 14px;
      margin-bottom: 40px;

      .--icon {
        margin-right: 10px;
      }
    }

    .--viewdetail {
      color: #fff;
      height: 44px;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      padding: 0 24px;
      border-radius: 100px;
      background: rgba(255, 255, 255, 0.11);
      border: 1px solid rgba(255, 255, 255, 0.48);
      backdrop-filter: blur(2px);
      width: max-content;
    }
  }
  .--right {
    width: calc(50% + 57px);
    margin-left: -57px;
    background: #fff;
    margin-top: -52px;
    height: max-content;
    position: relative;
    z-index: 1;
    border-width: 20px 0px 20px 20px;
    border-style: solid;
    border-color: #f6f8fb;
    padding: 32px 8% 18px 32px;

    .slick-dots {
      list-style: none;
      display: flex;
      padding-left: 0;
      margin-bottom: 0;


      button {
        border: none;
        background-color: transparent;
        color: transparent;
      }



      li,
      label {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 8px;
        background: #d9d9d9;
        border-radius: 50%;
        cursor: pointer;



        &.slick-active {
          background: var(--color-1);
        }


      }

      .test {
        display: none;
      }

      .test:checked+label {
        background: var(--color-1);

      }
    }

    .--botnews {
      display: flex;

      align-items: center;
      margin-top: 18px;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: var(--color-1);
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
  .list_homeNews {
    .--img {
      width: 40%;
      margin-right: 24px;
      height: 150px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .--itemNews {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #dcdcdc;

      &:last-child {
        margin-bottom: 0;
      }

      .--txt {
        width: calc(60% - 24px);
      }

      .--cate {
        color: #40b8ea;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
      }

      a {
        text-decoration: none;
      }

      h6 {
        font-size: 18px;
        line-height: 24px;
        overflow: hidden;
        color: #181818;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        font-weight: 600;
        transition: all 0.15s ease;
        -webkit-box-orient: vertical;

        &:hover {
          color: var(--color-1);
        }
      }

      .--time,
      .--view {
        font-size: 14px;

        .--icon {
          margin-right: 6px;
        }
      }

      .--view {
        position: relative;
        margin-left: 28px;

        &::before {
          content: "";
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translate(0, -50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #2c2c2c;
        }
      }
    }
  }
  @media (max-width: 768px){
    padding-bottom:0 ;
    .Title{
      margin-bottom: 2rem;
    }
    .--content{
      flex-flow:column ;
    }
    .--left{
      width: 100%;
      padding: 3rem 16px;
      .--cate{
        margin-bottom: 12px;
        font-size: 10px;
        padding: 2px 8px;
      }
      .--location{
        margin-bottom: 1.5rem;
      }
      h1{
        p{
          &:nth-child(1){
            font-size: 36px;
            line-height: 40px;
          }
          &:nth-child(2){
            font-size: 32px;
            line-height: 36px;
          }
        }
      }
    }
    .--right{
      margin-left: 0;
      width: 100%;
      margin-top: 0;
      padding:1rem;
      border-width:12px ;
    }
    .list_homeNews {
      .--cate{
        font-size: 10px;
      }
      .--img{
        margin-right: 12px;
        height: 100px;
      }
      .--view,.--time{
        font-size: 12px !important;
      }
      .--txt{
        width: calc(60% - 12px);
      }
      h6{
        font-size: 14px !important;
        line-height: 20px !important;
      }
    }
  }
}

.homeDiscover1 {
  position: relative;
  padding: 100px 0;
  .partent {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .container-fluid {
    position: relative;
    z-index: 1;
  }
  .Title {
    margin-bottom: 60px;
  }
  .list_homeDiscover1 {
    .col-md-3 {
      padding-right: calc(var(--bs-gutter-x) * 0.5);
      padding-left: calc(var(--bs-gutter-x) * 0.5);
      margin-top: var(--bs-gutter-y);
    }

    .--item {
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
      height: 100%;
    }

    .--img {
      width: 100%;
      height: 210px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .--txt {
      padding: 24px 16px 16px;
      background: #fff;
      height: calc(100% - 210px);
    }

    h4 {
      font-family: var(--font-Canela);
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 30px;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      margin-bottom: 6px;
      color: #181818;
      font-weight: bold;
      transition: all 0.15s ease;

      &:hover {
        color: var(--color-1);
      }
    }

    a {
      text-decoration: none;
    }

    article {
      font-size: 14px;
      color: #5c626a;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 20px;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      margin-bottom: 6px;
    }

    .--bot {
      display: flex;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #dcdcdc;
    }

    .--time,
    .--location {
      display: flex;
      align-items: center;
      font-size: 14px;

      .--icon {
        margin-right: 6px;
      }
    }

    .--location {
      position: relative;
      margin-left: 28px;

      &::before {
        content: "";
        position: absolute;
        right: calc(100% + 12px);
        border-radius: 50%;
        width: 4px;
        height: 4px;
        background: #2c2c2c;
        border-radius: 50%;
      }
    }
  }
  .slider_homeDiscover1 {
    position: relative;

    .arrow_homeDiscover1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;

      .arrow {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        border-radius: 50%;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
        background: #fff;
        pointer-events: auto;

        &.nextarrow {
          left: calc(100% + 16px);
        }

        &.prevarrow {
          right: calc(100% + 16px);
        }
      }
    }

    .slick-track,
    .slick-list {
      display: flex;
      justify-content: center;
    
    }
    .slick-slide{
      >div{
        height: 100%;
      }
      .col-md-3{
        height: 100%;
      }
    }
    .slick-dots {
      margin-top: 40px;
    }
  }
  @media (max-width: 768px){
    padding: 3rem 0;
    .Title{
      margin-bottom:2rem;
    }
    .arrow{
      top: 83px !important; 
      transform: none;
    }
    .slider_homeDiscover1{
      .slick-dots{
        margin-top: 1.5rem;
      }
    }
  }
}

`;
export default HomeWrapper;