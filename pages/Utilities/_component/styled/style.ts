import styled from "styled-components";
const UtilitiesWrapper = styled.div`
  #uti {
    margin-top: 108px;
    @media (max-width: 768px){
      margin-top: 74px;
    }
  }
  .utiMap {
    background: #f6f8fb;
    padding: 100px 0;
    .Title {
      margin-bottom: 40px;
    }
    .search {
      width: calc(100% - 780px);
      position: relative;
      input {
        width: 100%;
        height: 52px;
        border: 1px solid #dcdcdc;
        border-radius: 30px;
        padding-left: 46px;
        background: none;
        &:focus {
          outline: none;
          box-shadow: 0 0 0 1px var(--color-1);
        }
      }
      i {
        position: absolute;
        top: 50%;
        left: 16px;
        color: #9b9b9b;
        transform: translate(0, -50%);
      }
    }
    .filter {
      margin-bottom: 40px;
    }
    .--filter {
      font-size: 12px;
      .--item {
        margin-left: 50px;
      }
      span {
        display: flex;
        img {
          margin-right: 10px;
        }
      }
      select {
        height: 30px;
        padding: 0 10px;
        margin-left: 10px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        &:focus {
          outline: none;
        }
        &:focus-visible {
          outline: none;
        }
      }
    }
    .list_utiMap {
      max-height: 750px;
      overflow-y: auto;
      padding-right: 40px;
      .--item {
        background: #ffffff;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        padding: 20px 30px;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      h6 {
        font-weight: 600;
        margin-bottom: 10px;
        font-size: 18px;
      }
      ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 0;
      }
      .--txt {
        width: 70%;
      }
      li {
        display: flex;
        margin-bottom: 10px;
        align-items: flex-start;
        font-size: 14px;
        &:last-child {
          margin-bottom: 0;
        }
        .--icon {
          margin-right: 6px;
        }
      }
      a {
        width: 50px;
        height: 50px;
        display: flex;
        position: relative;
        align-items: center;
        border: 1px solid var(--color-1);
        justify-content: center;
        border-radius: 50%;
        &:hover {
          img {
            filter: brightness(100);
          }
        }
      }
    }
    .--map {
      width: 100%;
      height: 100%;
      iframe {
        width: 100%;
        height: 100%;
        min-height: 750px;
      }
    }
    @media (max-width: 768px){
      padding: 3rem 0;
      .Title{
        margin-bottom: 24px;
      }
      .search{
        width: 80%;
        margin-bottom: 12px;
        input{
          height: 40px;
        }
      }
      .filter{
        flex-flow: column;
      }
      .--filter{
        flex-flow: column;
        .--item{
          margin-left: 0;
          margin-bottom: 8px ;
          &:last-child{
            margin-bottom: 0;
          }
        }
      }
      .list_utiMap{
        padding-right: 0;
        margin-bottom: 24px;
      }
    }
  }
`;
export default UtilitiesWrapper;
