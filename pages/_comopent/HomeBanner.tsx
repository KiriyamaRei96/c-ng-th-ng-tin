import * as React from "react";

export function HomeBanner({ homeBanner }) {
  return (
    <div className="homeBanner">
      <div className="--background">
        <img src={homeBanner.image["path_1024px"]} alt="" />
      </div>
      <div className="--txt">
        <div className="--name">{homeBanner.subTitle}</div>
        <div className="--des">{homeBanner.title}</div>
        <span>{homeBanner.description}</span>
        <Link shallow href={homeBanner.link}>
          <a className="button_hover1">
            {settingMap.FindOutMore}
            <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </a>
        </Link>
      </div>
      <div className="container-fluid">
        <div className="filter justify-content-center">
          <div className="form-group">
            <div className="--icon">
              <img src={iconMap.src} alt="" />
            </div>
            <div className="--txtform">
              <label htmlFor="">{settingMap.Search}</label>
              <input
                value={search}
                type="text"
                onChange={(e) => {
                  dispatch(searchText(e.target.value));
                }}
                placeholder={settingMap.searchPlaceHolder2}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="--icon">
              <img src={signpost.default.src} alt="" />
            </div>
            <div className="--txtform">
              <label htmlFor="">Loại hình</label>
              <select
                onChange={(e) => {
                  dispatch(setType(e.target.value));
                }}
                name=""
                id=""
                value={type}
              >
                {Object.keys(types).map((key) => (
                  <option key={uuid()} value={types[key].value}>
                    {types[key].name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group justify-content-center">
            <button
              onClick={() => {
                const payload = {
                  page: 1,
                  search,
                  type,
                };
                dispatch({
                  type: "SEARCH",
                  payload,
                });
                router.push("/Search");
              }}
              className="button_1 button_hover1"
            >
              {settingMap.FindOut}
            </button>
          </div>
        </div>
      </div>
      <div className="social">
        <a className="arrow_hover" href="">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a className="arrow_hover" href="">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a className="arrow_hover" href="">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </div>
  );
}
