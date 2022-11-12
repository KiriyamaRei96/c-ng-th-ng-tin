import React, { useEffect, useRef, useState } from "react";
import logo from "../../pages/_asset/logo.png";
import langlogo from "../../pages/_asset/languagevn.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../ReduxStore/hooks";
import globalSelector, { changeLang } from "../../ReduxStore/globalSlice/slice";
import { v4 as uuid } from "uuid";
export interface AppHeaderProps {}

const AppHeader = (props: AppHeaderProps) => {
  const [change, setChange] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();
  const language = useAppSelector(globalSelector).language;
  const languageArr = useAppSelector(globalSelector).languageArr;

  const districtArr = useAppSelector(globalSelector).districtArr;

  const dispatch = useAppDispatch();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 100) {
        setChange(true);
      } else {
        setChange(false);
      }
    });
    window.addEventListener("click", (e) => {
      setSearchActive(false);
      setMenuActive(false);
    });

    if (languageArr.length === 0) {
      dispatch({ type: "GET_LANG" });
    }
    if (districtArr.length === 0) {
      dispatch({ type: "GET_DISTRICT" });
    }
    dispatch(changeLang(router.locale));
  }, [router.locale]);

  const languageMap = {
    vi: "Tiếng Việt",
    en: "Tiếng Anh",
    ja: "Tiếng Nhật",
  };
  return (
    <>
      {Object.keys(router.query).length === 2 ||
      router.asPath.includes("Utilities") ||
      router.pathname.includes("discoverDetail") ? (
        <header className="white">
          <div className="container-fluid">
            <div className="header d-flex justify-content-between align-items-center">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuActive(!menuActive);
                }}
                className={
                  menuActive ? "tab-menu d-none active" : "tab-menu d-none"
                }
              >
                <p></p>
                <p></p>
                <p></p>
              </div>
              <div className="logo">
                <Link href={"/"}>
                  <Image src={require("../../Asset/logo-2.png")} alt="" />
                </Link>
              </div>
              <div className="menu d-flex">
                <div
                  className={
                    router.asPath.length === 1
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/">
                    <a>Trang chủ</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("About")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/About">
                    <a>Giới thiệu</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Discover")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/Discover">
                    <a>Điểm du lịch</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Hotel")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/Hotel">
                    <a>Lưu trú</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Tour")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/Tour">
                    <a>Lữ hành</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Restaurant")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/Restaurant">
                    <a>Ẩm thực</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("News&Event")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/News&Event">
                    <a>Tin tức</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Contact")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/Contact">
                    <a>Liên hệ</a>
                  </Link>
                </div>
              </div>
              <div className="header_right d-flex align-items-center">
                <div className="search">
                  <input
                    onKeyDown={(e) => {
                      if (e.code === "Enter") {
                        dispatch({
                          type: "SEARCH",
                          payload: {
                            search,
                          },
                        });
                        router.push("/Search");
                      }
                    }}
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    type="text"
                    placeholder="Tìm kiếm"
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="language d-flex">
                  <img src={languageArr[language]?.icon} alt="" />
                  <div className="select">
                    <select
                      value={language}
                      onChange={(e) => {
                        router.replace(router.asPath, undefined, {
                          locale: e.target.value,
                        });
                        dispatch(changeLang(e.target.value));
                      }}
                      className="form-control"
                      name=""
                      id=""
                    >
                      {Object.keys(languageArr)?.map((key) => (
                        <option key={uuid()} value={key}>
                          {languageMap[key]}
                        </option>
                      ))}
                    </select>
                    <i className="fa-sfa-caret-down"></i>
                  </div>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchActive(true);
                }}
                className={
                  searchActive
                    ? "search mobi d-none active"
                    : "search mobi d-none"
                }
              >
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  type="text"
                />
                <i
                  onClick={(e) => {
                    if (searchActive) {
                      e.stopPropagation();
                      dispatch({
                        type: "SEARCH",
                        payload: {
                          search,
                        },
                      });
                      router.push("/Search");
                    }
                  }}
                  className="fa-solid fa-magnifying-glass"
                ></i>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={
                  menuActive ? "menu_mobi  d-none active" : "menu_mobi  d-none"
                }
              >
                <div className="language d-flex">
                  <img src={languageArr[language]?.icon} alt="" />
                  <div className="select">
                    <select
                      value={language}
                      onChange={(e) => {
                        router.replace(router.asPath, undefined, {
                          locale: e.target.value,
                        });
                        dispatch(changeLang(e.target.value));
                      }}
                      className="form-control"
                      name=""
                      id=""
                    >
                      {Object.keys(languageArr)?.map((key) => (
                        <option key={uuid()} value={key}>
                          {languageMap[key]}
                        </option>
                      ))}
                    </select>
                    <i className="fa-solid fa-caret-down"></i>
                  </div>
                </div>
                <div className="menu d-flex">
                  <div
                    className={
                      router.asPath.length === 1
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/">
                      <a>Trang chủ</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("About")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/About">
                      <a>Giới thiệu</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("Discover")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/Discover">
                      <a>Điểm du lịch</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("Hotel")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/Hotel">
                      <a>Lưu trú</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("Tour")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/Tour">
                      <a>Lữ hành</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("Restaurant")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/Restaurant">
                      <a>Ẩm thực</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("News&Event")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/News&Event">
                      <a>Tin tức</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("Contact")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/Contact">
                      <a>Liên hệ</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        false
      )}
      {Object.keys(router.query).length < 2 &&
      !router.asPath.includes("Utilities") &&
      !router.pathname.includes("discoverDetail") ? (
        <header className={change ? "change" : ""}>
          <div className="container-fluid">
            <div className="header d-flex justify-content-between align-items-center">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuActive(!menuActive);
                }}
                className={
                  menuActive ? "tab-menu d-none active" : "tab-menu d-none"
                }
              >
                <p></p>
                <p></p>
                <p></p>
              </div>
              <div className="logo">
                <Link href={"/"}>
                  <img src={logo.src} alt="" />
                </Link>
              </div>
              <div className="menu d-flex">
                <div
                  className={
                    router.asPath.length === 1
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/">
                    <a>Trang chủ</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("About")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/About">
                    <a>Giới thiệu</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Discover")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/Discover">
                    <a>Điểm du lịch</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Hotel")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/Hotel">
                    <a>Lưu trú</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Tour")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/Tour">
                    <a>Lữ hành</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Restaurant")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/Restaurant">
                    <a>Ẩm thực</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("News&Event")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/News&Event">
                    <a>Tin tức</a>
                  </Link>
                </div>
                <div
                  className={
                    router.asPath.includes("Contact")
                      ? "--item-menu active"
                      : "--item-menu"
                  }
                >
                  <Link href="/Contact">
                    <a>Liên hệ</a>
                  </Link>
                </div>
              </div>
              <div className="header_right d-flex align-items-center">
                <div className="search">
                  <input
                    onKeyDown={(e) => {
                      if (e.code === "Enter") {
                        dispatch({
                          type: "SEARCH",
                          payload: {
                            search,
                          },
                        });
                        router.push("/Search");
                      }
                    }}
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    type="text"
                    placeholder="Tìm kiếm"
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="language d-flex">
                  <img src={languageArr[language]?.icon} alt="" />
                  <div className="select">
                    <select
                      value={language}
                      onChange={(e) => {
                        router.replace(router.asPath, undefined, {
                          locale: e.target.value,
                        });
                        dispatch(changeLang(e.target.value));
                      }}
                      className="form-control"
                      name=""
                      id=""
                    >
                      {Object.keys(languageArr)?.map((key) => (
                        <option key={uuid()} value={key}>
                          {languageMap[key]}
                        </option>
                      ))}
                    </select>
                    <i className="fa-solid fa-caret-down"></i>
                  </div>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchActive(true);
                }}
                className={
                  searchActive
                    ? "search mobi d-none active"
                    : "search mobi d-none"
                }
              >
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  type="text"
                />
                <i
                  onClick={(e) => {
                    if (searchActive) {
                      e.stopPropagation();
                      dispatch({
                        type: "SEARCH",
                        payload: {
                          search,
                        },
                      });
                      router.push("/Search");
                    }
                  }}
                  className="fa-solid fa-magnifying-glass"
                ></i>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={
                  menuActive ? "menu_mobi  d-none active" : "menu_mobi  d-none"
                }
              >
                <div className="language d-flex">
                  <img src={languageArr[language]?.icon} alt="" />
                  <div className="select">
                    <select
                      value={language}
                      onChange={(e) => {
                        router.replace(router.asPath, undefined, {
                          locale: e.target.value,
                        });
                        dispatch(changeLang(e.target.value));
                      }}
                      className="form-control"
                      name=""
                      id=""
                    >
                      {Object.keys(languageArr)?.map((key) => (
                        <option key={uuid()} value={key}>
                          {languageMap[key]}
                        </option>
                      ))}
                    </select>
                    <i className="fa-solid fa-caret-down"></i>
                  </div>
                </div>
                <div className="menu d-flex">
                  <div
                    className={
                      router.asPath.length === 1
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/">
                      <a>Trang chủ</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("About")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/About">
                      <a>Giới thiệu</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("Discover")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/Discover">
                      <a>Điểm du lịch</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("Hotel")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/Hotel">
                      <a>Lưu trú</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("Tour")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/Tour">
                      <a>Lữ hành</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("Restaurant")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/Restaurant">
                      <a>Ẩm thực</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("News&Event")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/News&Event">
                      <a>Tin tức</a>
                    </Link>
                  </div>
                  <div
                    className={
                      router.asPath.includes("Contact")
                        ? "--item-menu active"
                        : "--item-menu"
                    }
                  >
                    <Link href="/Contact">
                      <a>Liên hệ</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        false
      )}
    </>
  );
};
export default AppHeader;
