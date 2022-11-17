import styled from "styled-components";

const DiscoverWarpper = styled.div`
  .discoverBanner {
    position: relative;

    .--background {
      width: 100%;
      height: 100vh;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        );
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .slick-current {
      z-index: 10;
    }

    .container-fluid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .--content {
      position: relative;
      height: 100%;
      width: 100%;

      .--top {
        position: absolute;
        top: 130px;
        left: 0;
        color: #fff;
        width: 500px;

        span {
          text-transform: uppercase;
          font-size: 18px;
        }

        .Title {
          color: #fff;
          font-size: 80px;
          line-height: 90px;
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* number of lines to show */
          line-clamp: 3;
          -webkit-box-orient: vertical;
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -60px;
            border-bottom: 6px solid #fff;
            width: 100px;
          }
        }
      }

      .--bot {
        width: 100%;
        bottom: 3rem;
        position: absolute;
        left: 0;
        color: #fff;
        padding-right: 42px;

        .--txt {
          width: 390px;
        }

        article {
          margin-bottom: 80px;
        }

        a {
          display: flex;
          color: #fff;
          text-decoration: none;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
          transition: all 0.15s ease;

          i {
            width: 38px;
            height: 38px;
            display: flex;
            transition: all 0.15s ease;
            align-items: center;
            border-radius: 50%;
            border: 1px solid #fff;
            font-size: 14px;
            justify-content: center;
            margin-right: 1rem;
          }

          &:hover {
            color: var(--color-1);

            i {
              border: 1px solid var(--color-1);
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      margin-top: 74px;

      .--background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }

      .container-fluid {
        position: relative;
        top: unset;
        left: unset;
      }

      .--item {
        padding: 3rem 0 5rem;
      }

      .--content {
        .--top {
          width: 100%;
          position: relative;
          top: unset;
          left: unset;

          .Title {
            font-size: 42px;
            line-height: 48px;

            &::after {
              display: none;
            }
          }
        }

        .--bot {
          position: relative;
          bottom: unset;
          left: unset;
          align-items: flex-start !important;
          flex-flow: column-reverse;

          .--txt {
            width: 100%;
          }

          article {
            margin-bottom: 2rem;
          }
        }
      }
    }
  }

  .Slider-action {
    position: absolute;
    color: #fff;
    bottom: 54px;
    right: 108px;
    width: 390px;

    .--number {
      font-size: 18px;
      font-weight: 600;

      .line {
        width: 132px;
        height: 2px;
        background: #fff;
        margin: 0 10px;
      }
    }

    .--arrow {
      display: flex;
      color: #fff;

      i {
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #fff;
        cursor: pointer;
        border-radius: 50%;

        &.nextarrow {
          margin-left: 24px;
        }

        &:hover {
          color: var(--color-1);
          border: 1px solid var(--color-1);
        }
      }
    }

    @media (min-width: 769px) and (max-width: 1279px) {
      right: 5%;
    }

    @media (max-width: 768px) {
      left: 0;
      bottom: 25px;
      width: 100%;
      padding: 0 16px;
    }
  }

  .discoverBlock {
    padding: 100px 0;

    .--title {
      width: 50%;
      text-align: center;
      margin: 0 auto 60px;
    }

    .list_discoverBlock {
      .--img {
        height: 330px;
      }

      .slick-track {
        display: flex !important;
      }

      .slick-slide {
        width: 80vw;
        margin-right: 12px;
      }
    }

    .slider_discoverBlock {
      position: relative;

      .arrow_discoverBlock {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;

        .arrow {
          position: absolute;
          pointer-events: auto;
          top: 50%;
          transform: translate(0, -50%);
          width: 44px;
          height: 44px;
          cursor: pointer;
          display: flex;
          align-items: center;
          background: #fff;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);

          &.nextarrow {
            right: -60px;
          }

          &.prevarrow {
            left: -60px;
          }
        }
      }
    }

    @media (max-width: 768px) {
      padding: 3rem 0;

      .--title {
        width: 100%;
        margin-bottom: 2rem;
      }

      .list_discoverBlock {
        .slick-slide {
          padding: 0;
        }

        .arrow {
          display: none;
        }
      }
    }
  }

  .list_discover {
    .--wrapper {
      padding-right: calc(var(--bs-gutter-x) * 0.5);
      padding-left: calc(var(--bs-gutter-x) * 0.5);
      margin-top: var(--bs-gutter-y);
    }

    .--item {
      position: relative;

      &:hover {
        .--location {
          max-height: 200px;
          margin-top: 24px;
          opacity: 1;
        }
      }
    }

    .--img {
      width: 100%;
      position: relative;

      &::after {
        background: linear-gradient(
          0deg,
          rgba(28, 28, 28, 0.2),
          rgba(28, 28, 28, 0.2)
        );
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
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0 28px 16px;
      color: #fff;

      .--type {
        font-size: 12px;
        text-transform: uppercase;
        margin-bottom: 6px;
      }

      h4 {
        font-family: var(--font-Canela);
        position: relative;
        color: #fff;

        &::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          border-bottom: 1px solid #fff;
          width: 60px;
        }
      }

      .--location {
        opacity: 0;
        display: flex;
        max-height: 0;
        transition: all 0.3s ease;

        img {
          transform: scale(1);
        }
      }

      span {
        font-size: 14px;

        &:nth-child(2) {
          margin-left: 8px;
        }
      }
    }

    @media (max-width: 768px) {
      .--location {
        max-height: unset !important;
        opacity: 1 !important;
        margin-top: 24px !important;
      }

      .--txt {
        padding: 0 1rem 1rem;
      }
    }
  }

  .discoverBlock1 {
    .row {
      --bs-gutter-x: 0;
    }

    .--left {
      width: 100%;
      padding-right: 3.5rem;
      height: 800px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .--right {
      padding-top: 3.5rem;

      .--title {
        margin-bottom: 100px;
        position: relative;

        .Title {
          width: 55%;
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3rem;
          width: 84px;
          border-bottom: 1px solid var(--color-1);
        }
      }

      .list_discoverBlock1 {
        width: calc(100% + 160px);
        margin-left: -160px;

        .--wrapper {
          padding: 0 12px;
        }

        .--img {
          height: 400px;
        }

        .--location {
          max-height: unset;
          opacity: 1;
          margin-top: 24px;
        }

        .slick-dots {
          margin-top: 40px;
        }
      }
    }

    @media (max-width: 768px) {
      .--left {
        display: none;
      }

      .--right {
        .--title {
          margin-bottom: 2rem;
          padding: 0 16px;

          &::after {
            display: none;
          }

          .Title {
            width: 100%;
          }
        }

        .list_discoverBlock1 {
          width: 100%;
          margin-left: 0;
          padding-left: 16px;

          .--img {
            height: 300px;
          }

          .--wrapper {
            padding: 0;
          }

          .slick-slide {
            width: 80vw;
            margin-right: 12px;
          }
        }
      }
    }
  }

  .discoverSearch {
    padding: 100px 0;

    .Title {
      margin-bottom: 40px;
    }

    .filter {
      margin-bottom: 30px;

      .search {
        width: 50%;
        position: relative;

        input {
          width: 100%;
          height: 45px;
          border: 1px solid #dcdcdc;
          border-radius: 30px;
          padding-left: 46px;
        }

        i {
          position: absolute;
          top: 50%;
          left: 16px;
          color: #9b9b9b;
          transform: translate(0, -50%);
        }
      }

      .--tabtop {
        button {
          border: 1px dashed #dcdcdc;
          border-radius: 30px;
          background: none;
          height: 45px;
          display: flex;
          align-items: center;
          padding: 0 30px;
          margin-left: 1rem;

          i {
            margin-right: 8px;

            font-size: 18px;
            line-height: 18px;
          }

          &.active {
            background: var(--color-1);
            border: 1px solid var(--color-1);
            color: #fff;

            img {
              filter: brightness(100);
            }
          }
        }
      }

      .--filter {
        margin-top: 20px;
        margin-bottom: 20px;

        span {
          margin-right: 20px;
          font-size: 12px;

          i {
            margin-right: 8px;

            font-size: 12px;
            line-height: 16px;

            color: #023047;
          }
        }
      }

      .--select {
        select {
          height: 30px;
          border: 1px solid #dcdcdc;
          border-radius: 4px;
          padding: 0 10px;
          margin-right: 10px;
          font-size: 12px;
        }
      }

      .--tabbot {
        button {
          background: none;
          border: none;
          padding: 0;
          margin-right: 24px;

          span {
            color: #d1d1d1;
          }

          &.active {
            color: var(--color-1);
            border-bottom: 1px solid var(--color-1);

            span {
              color: var(--color-1);
              margin-left: 4px;
            }
          }
        }
      }
    }

    .list_discoverSearch {
      .--img {
        height: 330px;
      }

      .col-md-4 {
        padding: 0 1rem;

        &:nth-child(n + 4) {
          margin-top: 2rem;
        }
      }
    }

    .--tab1 {
      .--pagination {
        margin-top: 60px;
      }
    }

    .--tab2 {
      .--map {
        width: 100%;
        height: 100%;

        iframe {
          width: 100%;
          height: 100%;
        }
      }

      .--viewall {
        padding: 0 20px;
        margin-top: 30px;
        text-transform: uppercase;
      }
    }

    .--tab3 {
      .--map {
        iframe {
          width: 100%;
          height: 500px;
        }
      }
    }

    .list_discoverSearch2 {
      height: 700px;
      padding-right: 40px;
      overflow-y: auto;

      .--item {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
        background: #fff;
        padding: 16px;
        margin-bottom: 20px;
        cursor: pointer;
      }

      .--img {
        width: 160px;
        height: 130px;
        margin-right: 20px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .--txt {
        width: calc(100% - 180px);
      }

      h4 {
        font-family: var(--font-Canela);
        margin-bottom: 10px;
        font-weight: 600;
      }

      article {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }

    @media (max-width: 768px) {
      padding: 3rem 0;

      .filter {
        .--top {
          flex-flow: column;

          .search {
            width: 80%;
            margin-bottom: 8px;
          }

          button {
            padding: 0 16px;
            height: 32px;

            &:first-child {
              margin-left: 0;
            }
          }
        }

        .--bot {
          .--filter {
            flex-flow: column;
            align-items: flex-start !important;
            margin: 1rem 0;

            span {
              margin-bottom: 8px;
            }
          }

          .--select {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 16px;
          }

          .--tabbot {
            width: 100%;
            overflow-x: auto;
            display: flex;
            padding-bottom: 1rem;

            button {
              flex: 0 0 auto;
            }
          }
        }
      }

      .list_discoverSearch {
        .--img {
          height: 240px;
        }

        .row {
          margin-top: unset;
          margin: 0;
        }

        .col-md-4 {
          padding: 0;
          margin-top: 0 !important;
          margin-bottom: 1rem;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .--tab1 {
        .--pagination {
          margin-top: 2rem;
        }
      }

      .list_discoverSearch2 {
        height: max-content;
        overflow-y: unset;
        padding-right: 0;

        .--img {
          width: 40%;
          height: 100px;
          margin-right: 12px;
        }

        .--item {
          margin-bottom: 1rem;
        }

        .--txt {
          width: calc(60% - 12px);

          h4 {
            font-size: 20px;
          }
        }
      }
    }
  }

  .discoverVideo {
    position: relative;

    .--img {
      width: 100%;
      height: 550px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          0deg,
          rgba(56, 56, 56, 0.4),
          rgba(56, 56, 56, 0.4)
        );
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
      width: 75%;

      h1 {
        color: #fff;
        margin-bottom: 2rem;
        text-align: center;
      }

      .play {
        position: relative;
      }
    }

    @media (max-width: 768px) {
      padding: 4rem 0;

      .--img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .--txt {
        position: relative;
        transform: none;
        top: unset;
        left: unset;
        width: 100%;
      }
    }
  }

  #detaildiscover,
  #detailservice {
    margin-top: 108px;
    background: #f6f8fb;

    @media (max-width: 768px) {
      margin-top: 74px;
    }
  }

  .detailAll {
    padding: 100px 0;

    .col-md-9 {
      width: 72%;
    }

    .col-md-3 {
      width: 28%;
    }

    .--left {
      padding-right: 1rem;
    }

    .--titlepost {
      font-size: 30px;
      font-family: var(--font-Canela);
      margin-bottom: 20px;
    }

    .--interactive {
      margin-bottom: 40px;

      .--star {
        color: #ffc122;
        margin-right: 32px;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          left: calc(100% + 16px);
          border-left: 1px solid #d1d1d1;
          height: 26px;
          top: 50%;
          transform: translate(0, -50%);
        }

        span {
          font-size: 14px;
          margin-right: 6px;
        }
      }

      .--sharecmt {
        a {
          text-decoration: none;
          color: #6f7378;
          font-size: 14px;
          margin-right: 32px;

          &:nth-child(1) {
            position: relative;

            &::after {
              content: "";
              position: absolute;
              left: calc(100% + 16px);
              border-left: 1px solid #d1d1d1;
              height: 26px;
              top: 50%;
              transform: translate(0, -50%);
            }
          }

          i {
            margin-right: 12px;
          }
        }

        button {
          font-size: 14px;
          height: 32px;
          padding: 0 1rem;
          border-radius: 6px;

          &::after {
            border-radius: 6px;
          }
        }
      }
    }

    .list_img {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 44px;

      .--img {
        width: calc(25% - 9px);
        height: 130px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &:nth-child(1) {
          width: 100%;
          height: 500px;
        }

        &:nth-child(n + 2) {
          margin-top: 12px;
          margin-right: 12px;
        }

        &:nth-child(4n + 1) {
          margin-right: 0;
        }

        &:nth-child(5) {
          &::after {
            background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.2)
            );
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }

        a {
          text-decoration: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          font-family: var(--font-Canela);
          color: #fff;
          z-index: 1;
        }
      }
    }

    .list_content {
      .--tab {
        display: flex;
        margin-bottom: 3rem;

        .--item {
          height: 50px;
          padding: 0 25px;
          margin-right: 1rem;
          border: 1px dashed #dcdcdc;
          border-radius: 3px;
          display: flex;
          cursor: pointer;
          align-items: center;

          &.active {
            background: var(--color-1);
            border: 1px solid var(--color-1);
            color: #fff;
            position: relative;

            &::after {
              content: "";
              width: 20px;
              height: 10px;
              clip-path: polygon(0 0, 50% 100%, 100% 0);
              background: var(--color-1);
              top: 100%;
              left: 50%;
              transform: translate(-50%, 0);
              position: absolute;
            }
          }
        }
      }

      .--content {
        .--title {
          font-family: var(--font-Canela);
          font-size: 30px;
        }

        article {
          p {
            &:nth-child(n + 2) {
              display: none;
            }
          }

          &.active {
            p {
              &:nth-child(n + 2) {
                display: block;
              }
            }
          }
        }

        .button_2 {
          margin: auto;
          height: 40px;
          padding: 0 20px;
          text-transform: uppercase;
          font-size: 14px;
        }
      }

      .--card {
        border: 1px dashed #dcdcdc;
        border-radius: 6px;
        padding: 40px 100px;
        margin-top: 40px;
        background: #fff;
        display: flex;

        .--icon {
          margin-right: 40px;

          img {
            max-width: 100px;
            max-height: 100px;
          }
        }

        .--title {
          font-size: 30px;
          font-family: var(--font-Canela);
          margin-bottom: 30px;
        }

        ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 0;

          li {
            display: flex;
            margin-bottom: 10px;
          }

          .--check {
            margin-right: 14px;
            flex: 0 0 auto;

            img {
              width: 20px;
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      padding: 3rem 0;

      .row {
        flex-flow: column;
      }

      .--left {
        padding-right: 0;
      }

      .col-md-3,
      .col-md-9 {
        width: 100%;
      }

      .--interactive {
        flex-flow: column;
        align-items: flex-start !important;

        .--sharecmt {
          flex-flow: column;
          margin-top: 12px;
          align-items: flex-start !important;

          .--link {
            margin-bottom: 12px;
          }
        }
      }

      .list_content {
        .--tab {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 1rem;
          margin-bottom: 1rem;

          .--item {
            flex: 0 0 auto;
            height: 40px;
          }
        }

        .--card {
          padding: 1rem;
          flex-flow: column;

          .--icon {
            margin-right: 0;
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
          }

          .--title {
            margin-bottom: 1rem;
          }
        }
      }

      .list_img {
        .--img {
          &:first-child {
            height: 220px !important;
          }

          &:nth-child(n + 2) {
            width: calc(50% - 6px);
          }

          &:nth-child(2n + 1) {
            margin-right: 0;
          }
        }
      }
    }
  }

  .detaildiscoverLocation {
    padding-bottom: 100px;

    .Title {
      margin-bottom: 60px;
    }

    .slider_listLocation {
      position: relative;

      .--warrper {
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        margin-top: var(--bs-gutter-y);
      }

      .list_discover {
        .--img {
          height: 330px;
        }
      }

      .arrow_detaildiscoverLocation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 78px);
        pointer-events: none;

        .arrow {
          position: absolute;
          pointer-events: auto;
          top: 50%;
          transform: translate(0, -50%);
          cursor: pointer;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          background: #fff;
          justify-content: center;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);

          &.nextarrow {
            right: -60px;
          }

          &.prevarrow {
            left: -60px;
          }
        }
      }

      .slick-dots {
        margin-top: 45px;
      }

      .slick-dots {
        margin: 60px 0 0 0;
      }
    }

    @media (max-width: 768px) {
      padding-bottom: 3rem;

      .Title {
        margin-bottom: 2rem;
      }

      .slider_listLocation {
        .slick-list {
          padding: 0;
        }

        .slick-slide {
          width: 80vw;
          margin-right: 12px;
        }

        .--warrper {
          padding: 0;
        }

        .arrow {
          display: none;
        }

        .slick-dots {
          margin-top: 1.5rem;
        }

        .list_discover {
          padding-left: 1rem;
        }
      }
    }
  }

  .detailservicediscover {
    padding-bottom: 100px;

    .--title {
      margin-bottom: 60px;
    }

    .list_servicediscover {
      .col-md-3 {
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        margin-top: var(--bs-gutter-y);
      }

      .slick-dots {
        margin-top: 60px;
      }

      .--item {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
        background: #fff;
        position: relative;
      }

      a {
        text-decoration: none;
      }

      .--top {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px;
        width: 100%;

        .--left {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          display: flex;
          color: #fff;
          padding: 6px 10px;
          font-size: 12px;

          img {
            margin-right: 6px;
          }
        }

        .--right {
          i {
            width: 32px;
            height: 32px;
            color: var(--color-1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            background: #fff;
            justify-content: center;
            font-size: 14px;
          }
        }
      }

      h6 {
        font-weight: 600;
        margin-bottom: 10px;
        color: #1c1c1c;

        &:hover {
          color: var(--color-1);
        }
      }

      .--location {
        font-size: 12px;
        margin-bottom: 10px;
        line-height: 16px;

        img {
          margin-right: 10px;
        }
      }

      .--img {
        width: 100%;
        height: 160px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .--txt {
        padding: 24px 24px 16px;
      }

      .--star {
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        padding: 4px;
        font-size: 12px;
        margin-right: 10px;
        height: 24px;

        span {
          margin-left: 10px;
        }
      }

      .--view {
        font-size: 12px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        padding: 0 4px;
        height: 24px;

        span {
          margin-left: 10px;
        }
      }
    }

    .slider {
      position: relative;

      .arrow_servicediscover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 78px);
        pointer-events: none;

        .arrow {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          background: #fff;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          pointer-events: auto;

          &.nextarrow {
            right: -60px;
          }

          &.prevarrow {
            left: -60px;
          }
        }
      }
    }

    .slider1 {
      position: relative;

      .slick-track,
      .slick-list {
        display: flex;
      }

      .slick-dots {
        margin-top: 60px;
      }

      .arrow_servicediscover1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 78px);
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
    }
  }

  .infame {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default DiscoverWarpper;
