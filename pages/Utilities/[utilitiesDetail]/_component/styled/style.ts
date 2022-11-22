import styled from "styled-components";

const UtilitiesDetailWrapper=styled.div` .detailutiContent {
  margin-top: 40px;
  padding: 100px 0;

  .Title {
    font-size: 40px;
    margin-bottom: 24px;
  }

  .--backshare {
    margin-top: 40px;

    a {
      text-decoration: none;
    }

    .--back {
      padding: 10px 24px;
      background: #ffffff;
      height: max-content;
      border: 1px solid #e7e7e7;
      border-radius: 30px;
      display: flex;
      align-items: center;
      font-weight: 600;
      color: #6f7378;

      img {
        margin-right: 8px;
      }
    }

  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;

    li {
      display: flex;
      flex-flow: column;
      margin-bottom: 1rem;

      &:last-child {
        span {
          &:nth-child(2) {
            margin-bottom: 0;
            font-size: 24px;
            font-family: var(--font-Canela);
            color: var(--color-1);
            display: flex;
            align-items: center;
          }
        }
      }
    }

    a {
      display: flex;
      flex-flow: column;
      text-decoration: none;
    }

    i {
      color: var(--color-1);
      margin-right: 12px;
      font-size: 16px !important;
      width: 18px;
      flex: 0 0 auto;
    }

    span {
      color: #181818;

      &:nth-child(1) {
        margin-bottom: 8px;
        font-weight: 600;
      }

      &:nth-child(2) {
        display: flex;
      }
    }
  }

  .--left {
    padding-right: 40px;
    border-right: 1px solid #e7e7e7;
    width: calc(100% - 1rem);
  }

  iframe {
    width: 100%;
  }

  article {
    font-size: 14px;

    img {
      width: 100% !important;
      height: auto !important;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 0;

    .--left {
      padding-right: 0;
      border-right: 0;
      width: 100%;
    }

    .--backshare {
      flex-flow: column;

      .--back {
        width: max-content;
        margin-bottom: 12px;
      }
    }
  }
}

`;
export default UtilitiesDetailWrapper;