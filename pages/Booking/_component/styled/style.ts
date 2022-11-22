import styled from "styled-components";

const BookingWrapper=styled.div` .pageBody {
    margin-top: 100px;

    .col-md-3 {
        width: 26%;
    }

    .col-md-9 {
        width: calc(100% - 26%);
        padding: 0 30px;

        .search {
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;

            .--input {
                width: 44%;
                padding: 12px 16px;
                height: 44px;
                display: flex;
                background: #F5F5F5;
                border: 1px solid #DCDCDC;
                border-radius: 4px;

                input {
                    border: none;
                    outline: none;
                    flex: 1;
                    background: none;
                    height: 20px;
                    font-size: 14px;
                    line-height: 20px;
                }

                i {
                    font-size: 14px;
                    color: #6F7378
                }
            }

            .--select {
                &>span {
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 20px;
                    margin-right: 10px;
                    color: #343434;
                }

                .--item {
                    .ant-select-selector {
                        height: 36px;
                        border: 1px solid #DCDCDC;
                        border-radius: 4px;
                        padding-top: 4px;
                    }

                }
            }
        }

        .--top {

            h2 {
                font-family: 'Canela';
                font-style: normal;
                font-weight: 400;
                font-size: 40px;
                line-height: 58px;

            }

            .wrapper {
                width: 28%;
                height: 70px;
                position: relative;
                display: inherit;
                justify-content: center;
                align-items: center;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 6px;
                }

                button {
                    position: absolute;
                }

            }

        }

        .--list {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 24px;
            display: grid;
            margin-bottom: 60px
        }

    }


}

.map-modal {
    position: fixed;
    padding: 70px;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.535);
    display: flex;
    overflow: hidden;

    &>div {
        height: 100%;
        width: 100%;
    }
}

`;

export default BookingWrapper;