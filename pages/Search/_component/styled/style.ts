import styled from "styled-components";

const SearchWrapper=styled.div` .list_discover {
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
        height: 330px;
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

    .col-md-4 {
        &:nth-child(n+4) {
            margin-top: 24px;
        }
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        .--img {
            height: 280px !important;
        }
    }

    @media (max-width: 768px) {
        .col-md-4 {
            margin-top: 0 !important;
            margin-bottom: 1rem !important;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}

.searchContent {
    padding-top: 100px;

    .Title {
        margin-bottom: 40px;
    }

    .filter {
        margin-bottom: 40px;

        .search {
            width: 50%;
            position: relative;

            i {
                position: absolute;
                left: 12px;
                top: 50%;
                transform: translate(0, -50%);
                pointer-events: none;
            }

            input {
                width: 100%;
                padding-left: 40px;
                height: 45px;
                border-radius: 30px;
                border: 1px solid #DCDCDC;

                &:focus {
                    outline: none;
                }

                &:focus-visible {
                    outline: none;
                }
            }
        }

        .select {
            span {
                font-weight: 600;
                font-size: 14px;
                margin-right: 8px;
            }

            select {
                height: 36px;
                padding: 0 10px;
                border: 1px solid #DCDCDC;
                border-radius: 4px;
                min-width: 170px;
                font-size: 14px;
            }
        }
    }

    .--tab {
        margin-bottom: 40px;

        .--item-tab {
            margin-right: 24px;

            &:last-child {
                margin-right: 0;
            }

            &.active {
                color: var(--color-1);

                span {
                    color: var(--color-1);
                }
            }

            span {
                font-size: 14px;
                color: #D1D1D1;
            }
        }
    }

    @media (max-width: 768px) {
        padding-top: 3rem;

        .Title {
            margin-bottom: 1.5rem;
        }

        .filter {
            flex-flow: column;
            align-items: flex-start !important;
            margin-bottom: 1.5rem;

            .search {
                width: 80%;
                margin-bottom: 12px;

                input {
                    height: 40px;
                }
            }
        }

        .--tab {
            overflow-x: auto;
            padding-bottom: 1rem;
            margin-bottom: 1.5rem;

            .--item-tab {
                flex: 0 0 auto;
            }
        }

        . .list_discover {
            .col-md-4 {
                margin-bottom: 1.5rem;
                margin-top: 0 !important;
            }

            .--item {
                height: 250px;
            }

            .--location {
                opacity: 1;
                max-height: 200px;
                margin-top: 24px;
            }
        }
    }
}

.--pagination {
    margin-top: 60px;
}

.search-Card {
    h4 {
        color: white
    }
}

`;
export default SearchWrapper;