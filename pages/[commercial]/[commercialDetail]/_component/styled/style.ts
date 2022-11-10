import styled from "styled-components";

const CommercialDetailWrapper=styled.div` .discoverBanner {
    position: relative;

    .--background {
        width: 100%;
        height: 100vh;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
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
            color: #FFF;
            width: 500px;

            span {
                text-transform: uppercase;
                font-size: 18px;
            }

            h1 {

                font-size: 80px;
                line-height: 90px;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -60px;
                    border-bottom: 6px solid #FFF;
                    width: 100px;
                }
            }
        }

        .--bot {
            width: 100%;
            bottom: 3rem;
            position: absolute;
            left: 0;
            color: #FFF;

            .--txt {
                width: 390px;
            }

            article {
                margin-bottom: 80px;
            }

            a {
                display: flex;
                color: #FFF;
                text-decoration: none;
                align-items: center;
                font-size: 18px;
                font-weight: 600;
                transition: all .15s ease;

                i {
                    width: 38px;
                    height: 38px;
                    display: flex;
                    transition: all .15s ease;
                    align-items: center;
                    border-radius: 50%;
                    border: 1px solid #FFF;
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

            .--number {
                font-size: 18px;
                font-weight: 600;

                .line {
                    width: 132px;
                    height: 2px;
                    background: #FFF;
                    margin: 0 10px;
                }
            }

            .arrow {
                display: flex;

                i {
                    width: 38px;
                    height: 38px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #FFF;
                    cursor: pointer;
                    border-radius: 50%;

                    &.nextarrow {
                        margin-left: 24px;
                    }
                }
            }
        }
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
                background: #FFF;
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
}

.list_discover {
    .col-md-4 {
        padding-right: calc(var(--bs-gutter-x) * .5);
        padding-left: calc(var(--bs-gutter-x) * .5);
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
            background: linear-gradient(0deg, rgba(28, 28, 28, 0.2), rgba(28, 28, 28, 0.2));
            content: '';
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
        color: #FFF;

        .--type {
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 6px;
        }

        h4 {
            font-family: var(--font-Canela);
            position: relative;

            &::after {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 0;
                border-bottom: 1px solid #FFF;
                width: 60px;
            }
        }

        .--location {
            opacity: 0;
            display: flex;
            max-height: 0;
            transition: all .3s ease;

            img {
                margin-right: 8px;
            }
        }

        span {
            font-size: 14px;
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

            &::after {
                content: '';
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

            .col-md-4 {
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
                border: 1px solid #DCDCDC;
                border-radius: 30px;
                padding-left: 46px;
            }

            i {
                position: absolute;
                top: 50%;
                left: 16px;
                color: #9B9B9B;
                transform: translate(0, -50%);
            }
        }

        .--tabtop {
            button {
                border: 1px dashed #DCDCDC;
                border-radius: 30px;
                background: none;
                height: 45px;
                display: flex;
                align-items: center;
                padding: 0 30px;
                margin-left: 1rem;

                img {
                    margin-right: 8px;
                }

                &.active {
                    background: var(--color-1);
                    border: 1px solid var(--color-1);
                    color: #FFF;

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

                img {
                    margin-right: 8px;
                }
            }
        }

        .--select {
            select {
                height: 30px;
                border: 1px solid #DCDCDC;
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
                    color: #D1D1D1;
                }

                &.active {
                    color: var(--color-1);
                    border-bottom: 1px solid var(--color-1);

                    span {
                        color: var(--color-1);
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

            &:nth-child(n+4) {
                margin-top: 2rem;
            }
        }
    }

    .--tab1 {
        .pagination {
            margin-top: 60px;

            li {
                margin: 0 2px;

                &.active {
                    background: var(--color-1);

                    a {
                        color: #FFF;
                    }
                }
            }

            a {
                border: none;
                background: none;
                padding: 0;
                width: 32px;
                box-shadow: none;
                color: #181818;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
            }
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
            background: #FFF;
            padding: 16px;
            margin-bottom: 20px;
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
}

.discoverVideo {
    position: relative;

    .--img {
        width: 100%;
        height: 550px;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(56, 56, 56, 0.4), rgba(56, 56, 56, 0.4));
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
            color: #FFF;
            margin-bottom: 2rem;
        }

        .play {
            position: relative;
        }
    }
}

#detaildiscover,
#detailservice {
    margin-top: 108px;
    background: #F6F8FB;

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
            color: #FFC122;
            margin-right: 32px;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                left: calc(100% + 16px);
                border-left: 1px solid #D1D1D1;
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
                color: #6F7378;
                font-size: 14px;
                margin-right: 32px;

                &:nth-child(1) {
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        left: calc(100% + 16px);
                        border-left: 1px solid #D1D1D1;
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

            &:nth-child(n+2) {
                margin-top: 12px;
                margin-right: 12px;
            }

            &:nth-child(4n+1) {
                margin-right: 0;
            }

            a {
                text-decoration: none;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 24px;
                font-family: var(--font-Canela);
                color: #FFF;
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
                border: 1px dashed #DCDCDC;
                border-radius: 3px;
                display: flex;
                cursor: pointer;
                align-items: center;

                &.active {
                    background: var(--color-1);
                    border: 1px solid var(--color-1);
                    color: #FFF;
                    position: relative;

                    &::after {
                        content: '';
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
                font-size: 14px;
                margin-bottom: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: 20px;
                -webkit-line-clamp: 5;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                transition: all .15s ease;

                &.active {
                    -webkit-line-clamp: unset;
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
            border: 1px dashed #DCDCDC;
            border-radius: 6px;
            padding: 40px 100px;
            margin-top: 40px;
            background: #FFF;
            display: flex;

            .--icon {
                margin-right: 40px;
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

                &:nth-child(n+2) {
                    width: calc(50% - 6px);
                }

                &:nth-child(2n+1) {
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
                background: #FFF;
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
            margin: 60px 0 0 0;
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
            padding-right: calc(var(--bs-gutter-x) * .5);
            padding-left: calc(var(--bs-gutter-x) * .5);
            margin-top: var(--bs-gutter-y);

            .restaurant {
                cursor: pointer;
                flex-direction: column;

                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);

                .img-wrapper {
                    position: relative;

                    img {
                        width: 100%;
                        object-fit: cover;
                        height: 167px;
                    }

                    .--ribbon {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        padding: 6px 10px;
                        gap: 6px;

                        position: absolute;
                        width: 139px;
                        height: 28px;
                        left: 10px;
                        top: 10px;

                        background: rgba(0, 0, 0, 0.2);
                        border-radius: 4px;

                        img {
                            width: 16px;
                            height: 16px;
                            object-fit: cover;
                        }

                        span {
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 16px;
                            color: #FFFFFF;
                        }


                    }

                    .--item {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        padding: 4px 5px;
                        gap: 12px;

                        position: absolute;
                        width: 32px;
                        height: 32px;
                        right: 17px;
                        top: 8px;

                        background: #FFFFFF;
                        border: 1px solid #EFEFEF;
                        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
                        border-radius: 100px;

                        i {
                            font-weight: 900;
                            font-size: 12px;
                            line-height: 16px;
                            color: #FB8500;
                        }
                    }


                }

                .--cotent {
                    padding: 24px;

                    h5 {
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 22px;
                        color: #1C1C1C;
                    }

                    .--andress {
                        i {
                            color: #6F7378;
                            font-size: 12px;
                            margin-right: 6px;
                        }

                        span {
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 16px;

                            color: #6F7378;
                        }

                        margin-bottom: 8px;
                    }
                }

            }

        }

        .slick-dots {
            margin-top: 16px;
         
        }

        .--item {
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
            background: #FFF;
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
                color: #FFF;
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
                    background: #FFF;
                    justify-content: center;
                    font-size: 14px;
                }
            }
        }

        h6 {
            font-weight: 600;
            margin-bottom: 10px;
            color: #1C1C1C;

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
            border: 1px solid #DCDCDC;
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
            border: 1px solid #DCDCDC;
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

        .--wrapper {
            padding: 12px;
        }

        .slick-dots {
            list-style: none;
            padding: 0;
            text-align: center;
            margin-top: 16px;

            margin-bottom: 0;

            li.slick-active {
                background: #FB8500;
            }



            li {


                width: 18.8px;
                height: 18.8px;
                background: #D9D9D9;
                border-radius: 50%;
                display: inline-block;
                margin: 0 9.5px;




                button {
                    border: none;
                    background: none;
                    color: transparent;
                }
            }


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
                background: #FFF;
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

.room-list {
    flex-direction: column;

    .--item {
        height: 226px;
        width: 100%;
    }
}
.detailhotel{
    .col-md-3{
        display: flex !important ;
        flex-flow: column;
    }
    .hotel{
        flex-flow: column;
        box-shadow: none;
        .--warpper{
            width: 100%;
            img{
                height: 230px;
            }
            .slick-slide{
                height: 230px;
            }
        }
        .--andress{
            margin-bottom: 12px;
        }
        .--item{
            width: 100%;
            box-shadow: none;
        }
      
    }
    .slick-dots{
        margin-top: 60px !important;
    }
    @media (max-width: 768px){
        padding-bottom: 3rem;
        .arrow{
            display: none;
        }
        .slick-slide{
            width: 80vw !important;
            margin-right: 12px;
        }
        .slick-list{
            padding: 0;
        }
        .col-md-3{
            padding: 0 !important;
        }
    }
}
`;


export default CommercialDetailWrapper